-- ============================================================
-- HIRE - Bangladesh's AI-Powered Freelance Marketplace
-- Complete Database Schema Migration
-- Version: 1.0.0
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE user_role AS ENUM ('freelancer', 'client', 'admin');
CREATE TYPE job_status AS ENUM ('open', 'in_progress', 'completed', 'cancelled', 'draft');
CREATE TYPE application_status AS ENUM ('pending', 'shortlisted', 'hired', 'rejected', 'withdrawn');
CREATE TYPE contract_status AS ENUM ('active', 'completed', 'cancelled', 'disputed');
CREATE TYPE payment_status AS ENUM ('pending', 'processing', 'completed', 'failed', 'refunded');
CREATE TYPE notification_type AS ENUM ('job_applied', 'application_accepted', 'message_received', 'review_received', 'job_posted', 'payment_received', 'profile_viewed', 'system');
CREATE TYPE experience_level AS ENUM ('beginner', 'intermediate', 'expert');
CREATE TYPE budget_type AS ENUM ('fixed', 'hourly');

-- ============================================================
-- PROFILES TABLE
-- ============================================================

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  phone TEXT,
  location TEXT DEFAULT 'Bangladesh',
  city TEXT,
  bio TEXT,
  role user_role DEFAULT 'freelancer',
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  last_seen TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- FREELANCERS TABLE
-- ============================================================

CREATE TABLE freelancers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT '',
  tagline TEXT,
  hourly_rate DECIMAL(10,2),
  min_project_rate DECIMAL(10,2),
  experience_level experience_level DEFAULT 'intermediate',
  availability TEXT DEFAULT 'available',
  available_hours INTEGER DEFAULT 40,
  total_earnings DECIMAL(12,2) DEFAULT 0,
  jobs_completed INTEGER DEFAULT 0,
  success_rate DECIMAL(5,2) DEFAULT 100,
  response_time TEXT DEFAULT '< 1 hour',
  languages TEXT[] DEFAULT ARRAY['Bengali', 'English'],
  education TEXT,
  certifications JSONB DEFAULT '[]',
  profile_completion INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  is_top_rated BOOLEAN DEFAULT FALSE,
  member_since TEXT,
  total_reviews INTEGER DEFAULT 0,
  avg_rating DECIMAL(3,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- CLIENTS TABLE
-- ============================================================

CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  company_name TEXT,
  company_size TEXT,
  industry TEXT,
  website TEXT,
  total_spent DECIMAL(12,2) DEFAULT 0,
  jobs_posted INTEGER DEFAULT 0,
  hires_made INTEGER DEFAULT 0,
  payment_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- CATEGORIES TABLE
-- ============================================================

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  description TEXT,
  job_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SKILLS TABLE
-- ============================================================

CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id),
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- FREELANCER_SKILLS TABLE
-- ============================================================

CREATE TABLE freelancer_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  freelancer_id UUID NOT NULL REFERENCES freelancers(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id),
  skill_name TEXT NOT NULL,
  proficiency_level INTEGER DEFAULT 3,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(freelancer_id, skill_name)
);

-- ============================================================
-- PORTFOLIOS TABLE
-- ============================================================

CREATE TABLE portfolios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  freelancer_id UUID NOT NULL REFERENCES freelancers(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  project_url TEXT,
  technologies TEXT[],
  category TEXT,
  client_name TEXT,
  completion_date DATE,
  is_featured BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- JOBS TABLE
-- ============================================================

CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  category_name TEXT,
  required_skills TEXT[],
  experience_level experience_level DEFAULT 'intermediate',
  budget_type budget_type DEFAULT 'fixed',
  budget_min DECIMAL(10,2),
  budget_max DECIMAL(10,2),
  hourly_rate_min DECIMAL(10,2),
  hourly_rate_max DECIMAL(10,2),
  duration TEXT,
  location TEXT DEFAULT 'Remote',
  is_remote BOOLEAN DEFAULT TRUE,
  status job_status DEFAULT 'open',
  is_featured BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  applications_count INTEGER DEFAULT 0,
  hired_freelancer_id UUID REFERENCES freelancers(id),
  deadline DATE,
  attachments TEXT[],
  is_student_job BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- APPLICATIONS TABLE
-- ============================================================

CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  freelancer_id UUID NOT NULL REFERENCES freelancers(id) ON DELETE CASCADE,
  cover_letter TEXT NOT NULL,
  proposed_rate DECIMAL(10,2),
  estimated_duration TEXT,
  status application_status DEFAULT 'pending',
  client_note TEXT,
  attachments TEXT[],
  is_viewed BOOLEAN DEFAULT FALSE,
  applied_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(job_id, freelancer_id)
);

-- ============================================================
-- REVIEWS TABLE
-- ============================================================

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID NOT NULL REFERENCES jobs(id),
  reviewer_id UUID NOT NULL REFERENCES profiles(id),
  reviewee_id UUID NOT NULL REFERENCES profiles(id),
  rating DECIMAL(3,2) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  communication_rating DECIMAL(3,2),
  quality_rating DECIMAL(3,2),
  timeliness_rating DECIMAL(3,2),
  expertise_rating DECIMAL(3,2),
  comment TEXT,
  is_public BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(job_id, reviewer_id)
);

-- ============================================================
-- MESSAGES TABLE
-- ============================================================

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID NOT NULL,
  sender_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  receiver_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  message_type TEXT DEFAULT 'text',
  attachment_url TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- CONVERSATIONS TABLE
-- ============================================================

CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  participant_1 UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  participant_2 UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  last_message TEXT,
  last_message_at TIMESTAMPTZ,
  unread_count_1 INTEGER DEFAULT 0,
  unread_count_2 INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(participant_1, participant_2)
);

-- ============================================================
-- NOTIFICATIONS TABLE
-- ============================================================

CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type notification_type NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  link TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SAVED_JOBS TABLE
-- ============================================================

CREATE TABLE saved_jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  saved_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

-- ============================================================
-- SAVED_FREELANCERS TABLE
-- ============================================================

CREATE TABLE saved_freelancers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  freelancer_id UUID NOT NULL REFERENCES freelancers(id) ON DELETE CASCADE,
  saved_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(client_id, freelancer_id)
);

-- ============================================================
-- PAYMENT_METHODS TABLE (Architecture - no real processing)
-- ============================================================

CREATE TABLE payment_methods (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  details JSONB NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_freelancers_profile_id ON freelancers(profile_id);
CREATE INDEX idx_freelancers_avg_rating ON freelancers(avg_rating DESC);
CREATE INDEX idx_freelancers_hourly_rate ON freelancers(hourly_rate);
CREATE INDEX idx_clients_profile_id ON clients(profile_id);
CREATE INDEX idx_jobs_client_id ON jobs(client_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_category ON jobs(category_id);
CREATE INDEX idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX idx_jobs_is_featured ON jobs(is_featured);
CREATE INDEX idx_applications_job_id ON applications(job_id);
CREATE INDEX idx_applications_freelancer_id ON applications(freelancer_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_portfolios_freelancer_id ON portfolios(freelancer_id);
CREATE INDEX idx_reviews_reviewee_id ON reviews(reviewee_id);
CREATE INDEX idx_saved_jobs_user_id ON saved_jobs(user_id);
CREATE INDEX idx_saved_freelancers_client_id ON saved_freelancers(client_id);

-- ============================================================
-- FULL TEXT SEARCH INDEXES
-- ============================================================

CREATE INDEX idx_jobs_search ON jobs USING GIN(to_tsvector('english', title || ' ' || description));
CREATE INDEX idx_freelancers_search ON freelancers USING GIN(to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(tagline, '')));

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE freelancers ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_freelancers ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE freelancer_skills ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PROFILES POLICIES
-- ============================================================

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- ============================================================
-- FREELANCERS POLICIES
-- ============================================================

CREATE POLICY "Freelancer profiles are viewable by everyone"
  ON freelancers FOR SELECT USING (true);

CREATE POLICY "Freelancers can update own profile"
  ON freelancers FOR UPDATE 
  USING (profile_id = auth.uid());

CREATE POLICY "Freelancers can insert own profile"
  ON freelancers FOR INSERT 
  WITH CHECK (profile_id = auth.uid());

-- ============================================================
-- CLIENTS POLICIES
-- ============================================================

CREATE POLICY "Client profiles are viewable by everyone"
  ON clients FOR SELECT USING (true);

CREATE POLICY "Clients can update own profile"
  ON clients FOR UPDATE 
  USING (profile_id = auth.uid());

CREATE POLICY "Clients can insert own profile"
  ON clients FOR INSERT 
  WITH CHECK (profile_id = auth.uid());

-- ============================================================
-- JOBS POLICIES
-- ============================================================

CREATE POLICY "Open jobs are viewable by everyone"
  ON jobs FOR SELECT USING (status != 'draft' OR client_id IN (
    SELECT id FROM clients WHERE profile_id = auth.uid()
  ));

CREATE POLICY "Clients can insert own jobs"
  ON jobs FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM clients WHERE profile_id = auth.uid())
  );

CREATE POLICY "Clients can update own jobs"
  ON jobs FOR UPDATE USING (
    client_id IN (SELECT id FROM clients WHERE profile_id = auth.uid())
  );

CREATE POLICY "Clients can delete own jobs"
  ON jobs FOR DELETE USING (
    client_id IN (SELECT id FROM clients WHERE profile_id = auth.uid())
  );

-- ============================================================
-- APPLICATIONS POLICIES
-- ============================================================

CREATE POLICY "Freelancers can view own applications"
  ON applications FOR SELECT USING (
    freelancer_id IN (SELECT id FROM freelancers WHERE profile_id = auth.uid())
    OR
    job_id IN (SELECT id FROM jobs WHERE client_id IN (SELECT id FROM clients WHERE profile_id = auth.uid()))
  );

CREATE POLICY "Freelancers can apply to jobs"
  ON applications FOR INSERT WITH CHECK (
    freelancer_id IN (SELECT id FROM freelancers WHERE profile_id = auth.uid())
  );

CREATE POLICY "Freelancers can update own applications"
  ON applications FOR UPDATE USING (
    freelancer_id IN (SELECT id FROM freelancers WHERE profile_id = auth.uid())
  );

-- ============================================================
-- REVIEWS POLICIES
-- ============================================================

CREATE POLICY "Public reviews are viewable by everyone"
  ON reviews FOR SELECT USING (is_public = true);

CREATE POLICY "Users can write reviews"
  ON reviews FOR INSERT WITH CHECK (reviewer_id = auth.uid());

-- ============================================================
-- MESSAGES POLICIES
-- ============================================================

CREATE POLICY "Users can view own messages"
  ON messages FOR SELECT USING (
    sender_id = auth.uid() OR receiver_id = auth.uid()
  );

CREATE POLICY "Users can send messages"
  ON messages FOR INSERT WITH CHECK (sender_id = auth.uid());

CREATE POLICY "Users can update own messages"
  ON messages FOR UPDATE USING (
    sender_id = auth.uid() OR receiver_id = auth.uid()
  );

-- ============================================================
-- CONVERSATIONS POLICIES
-- ============================================================

CREATE POLICY "Users can view own conversations"
  ON conversations FOR SELECT USING (
    participant_1 = auth.uid() OR participant_2 = auth.uid()
  );

CREATE POLICY "Users can create conversations"
  ON conversations FOR INSERT WITH CHECK (
    participant_1 = auth.uid() OR participant_2 = auth.uid()
  );

CREATE POLICY "Users can update own conversations"
  ON conversations FOR UPDATE USING (
    participant_1 = auth.uid() OR participant_2 = auth.uid()
  );

-- ============================================================
-- NOTIFICATIONS POLICIES
-- ============================================================

CREATE POLICY "Users can view own notifications"
  ON notifications FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update own notifications"
  ON notifications FOR UPDATE USING (user_id = auth.uid());

-- ============================================================
-- SAVED_JOBS POLICIES
-- ============================================================

CREATE POLICY "Users can view own saved jobs"
  ON saved_jobs FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can save jobs"
  ON saved_jobs FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can unsave jobs"
  ON saved_jobs FOR DELETE USING (user_id = auth.uid());

-- ============================================================
-- SAVED_FREELANCERS POLICIES
-- ============================================================

CREATE POLICY "Clients can view own saved freelancers"
  ON saved_freelancers FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Clients can save freelancers"
  ON saved_freelancers FOR INSERT WITH CHECK (client_id = auth.uid());

CREATE POLICY "Clients can unsave freelancers"
  ON saved_freelancers FOR DELETE USING (client_id = auth.uid());

-- ============================================================
-- PORTFOLIOS POLICIES
-- ============================================================

CREATE POLICY "Portfolios are viewable by everyone"
  ON portfolios FOR SELECT USING (true);

CREATE POLICY "Freelancers can manage own portfolio"
  ON portfolios FOR ALL USING (
    freelancer_id IN (SELECT id FROM freelancers WHERE profile_id = auth.uid())
  );

-- ============================================================
-- PAYMENT_METHODS POLICIES
-- ============================================================

CREATE POLICY "Users can view own payment methods"
  ON payment_methods FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can manage own payment methods"
  ON payment_methods FOR ALL USING (user_id = auth.uid());

-- ============================================================
-- FREELANCER_SKILLS POLICIES
-- ============================================================

CREATE POLICY "Skills are viewable by everyone"
  ON freelancer_skills FOR SELECT USING (true);

CREATE POLICY "Freelancers can manage own skills"
  ON freelancer_skills FOR ALL USING (
    freelancer_id IN (SELECT id FROM freelancers WHERE profile_id = auth.uid())
  );

-- ============================================================
-- TRIGGERS
-- ============================================================

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_freelancers_updated_at BEFORE UPDATE ON freelancers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_portfolios_updated_at BEFORE UPDATE ON portfolios FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'freelancer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================================
-- SEED DATA - Categories
-- ============================================================

INSERT INTO categories (name, slug, icon, description, sort_order) VALUES
  ('Web Development', 'web-development', 'Code2', 'Full-stack, frontend, backend development', 1),
  ('Graphic Design', 'graphic-design', 'Palette', 'Logo, branding, print, digital design', 2),
  ('Digital Marketing', 'digital-marketing', 'TrendingUp', 'SEO, social media, email marketing', 3),
  ('Content Writing', 'content-writing', 'PenLine', 'Blog posts, articles, copywriting', 4),
  ('Video & Animation', 'video-animation', 'Video', 'Video editing, motion graphics, animation', 5),
  ('Mobile Development', 'mobile-development', 'Smartphone', 'iOS, Android, React Native, Flutter', 6),
  ('Data Entry', 'data-entry', 'Database', 'Data processing, Excel, database work', 7),
  ('Translation', 'translation', 'Languages', 'Bengali-English, document translation', 8),
  ('UI/UX Design', 'ui-ux-design', 'Layers', 'User interface and experience design', 9),
  ('Teaching & Tutoring', 'teaching-tutoring', 'GraduationCap', 'Academic tutoring, skill training', 10),
  ('Accounting & Finance', 'accounting-finance', 'Calculator', 'Bookkeeping, financial analysis', 11),
  ('Photography', 'photography', 'Camera', 'Product, portrait, event photography', 12);
