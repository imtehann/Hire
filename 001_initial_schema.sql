-- =============================================
-- HIRE Platform - Database Schema
-- Migration: 001_initial_schema.sql
-- =============================================
-- Run this in your Supabase SQL editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";  -- For full-text search

-- =============================================
-- ENUMS
-- =============================================

CREATE TYPE user_role AS ENUM ('freelancer', 'client', 'admin');
CREATE TYPE job_status AS ENUM ('open', 'in_progress', 'completed', 'cancelled', 'paused');
CREATE TYPE application_status AS ENUM ('pending', 'reviewing', 'shortlisted', 'rejected', 'hired', 'withdrawn');
CREATE TYPE job_type AS ENUM ('fixed', 'hourly', 'contest');
CREATE TYPE experience_level AS ENUM ('beginner', 'intermediate', 'expert');
CREATE TYPE availability_status AS ENUM ('available', 'busy', 'unavailable');
CREATE TYPE message_status AS ENUM ('sent', 'delivered', 'read');
CREATE TYPE notification_type AS ENUM (
  'application_received', 
  'application_status_changed',
  'message_received', 
  'job_posted',
  'review_received',
  'payment_received',
  'job_completed',
  'profile_viewed',
  'system_alert'
);
CREATE TYPE payment_method AS ENUM ('bkash', 'nagad', 'rocket', 'bank_transfer', 'card');

-- =============================================
-- TABLE: profiles
-- Central user table linked to Supabase Auth
-- =============================================

CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  phone TEXT,
  location TEXT,
  district TEXT,
  division TEXT,
  country TEXT DEFAULT 'Bangladesh',
  website TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  role user_role NOT NULL DEFAULT 'freelancer',
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  profile_visibility TEXT DEFAULT 'public', -- 'public', 'private', 'connections'
  last_seen_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for profiles
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_location ON profiles(location);

-- =============================================
-- TABLE: categories
-- Job/skill categories
-- =============================================

CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,               -- Lucide icon name
  color TEXT,              -- Hex color for category
  parent_id UUID REFERENCES categories(id),
  is_active BOOLEAN DEFAULT TRUE,
  job_count INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_parent ON categories(parent_id);

-- =============================================
-- TABLE: skills
-- Platform-wide skill tags
-- =============================================

CREATE TABLE skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES categories(id),
  description TEXT,
  is_trending BOOLEAN DEFAULT FALSE,
  usage_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_skills_category ON skills(category_id);
CREATE INDEX idx_skills_trending ON skills(is_trending);
-- Full-text search index on skills
CREATE INDEX idx_skills_search ON skills USING gin(to_tsvector('english', name));

-- =============================================
-- TABLE: freelancers
-- Extended profile for freelancers
-- =============================================

CREATE TABLE freelancers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
  title TEXT,                          -- Professional title
  headline TEXT,                       -- Short bio headline
  hourly_rate DECIMAL(10,2),
  min_project_budget DECIMAL(10,2),
  max_project_budget DECIMAL(10,2),
  experience_level experience_level DEFAULT 'intermediate',
  years_of_experience INTEGER DEFAULT 0,
  availability availability_status DEFAULT 'available',
  weekly_hours_available INTEGER DEFAULT 40,
  total_earnings DECIMAL(10,2) DEFAULT 0,
  total_jobs_completed INTEGER DEFAULT 0,
  success_rate DECIMAL(5,2) DEFAULT 0,  -- Percentage
  response_time TEXT,                   -- e.g., "Within 1 hour"
  languages TEXT[] DEFAULT ARRAY['Bengali', 'English'],
  education JSONB DEFAULT '[]'::jsonb,  -- Array of education objects
  certifications JSONB DEFAULT '[]'::jsonb,
  is_top_rated BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_pro BOOLEAN DEFAULT FALSE,
  profile_completion INTEGER DEFAULT 0,  -- 0-100 percentage
  profile_views INTEGER DEFAULT 0,
  search_rank DECIMAL DEFAULT 0,
  rating_average DECIMAL(3,2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_freelancers_profile ON freelancers(profile_id);
CREATE INDEX idx_freelancers_rating ON freelancers(rating_average DESC);
CREATE INDEX idx_freelancers_hourly_rate ON freelancers(hourly_rate);
CREATE INDEX idx_freelancers_availability ON freelancers(availability);
CREATE INDEX idx_freelancers_featured ON freelancers(is_featured);
CREATE INDEX idx_freelancers_experience ON freelancers(experience_level);

-- =============================================
-- TABLE: freelancer_skills
-- Many-to-many: freelancers and skills
-- =============================================

CREATE TABLE freelancer_skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  freelancer_id UUID REFERENCES freelancers(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  proficiency_level INTEGER DEFAULT 3,  -- 1-5
  years_experience INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(freelancer_id, skill_id)
);

CREATE INDEX idx_freelancer_skills_freelancer ON freelancer_skills(freelancer_id);
CREATE INDEX idx_freelancer_skills_skill ON freelancer_skills(skill_id);

-- =============================================
-- TABLE: clients
-- Extended profile for clients
-- =============================================

CREATE TABLE clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
  company_name TEXT,
  company_size TEXT,                -- 'solo', '2-10', '11-50', '51-200', '200+'
  industry TEXT,
  company_website TEXT,
  total_spent DECIMAL(10,2) DEFAULT 0,
  total_jobs_posted INTEGER DEFAULT 0,
  total_hires INTEGER DEFAULT 0,
  payment_verified BOOLEAN DEFAULT FALSE,
  preferred_payment_method payment_method,
  rating_average DECIMAL(3,2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_clients_profile ON clients(profile_id);
CREATE INDEX idx_clients_company ON clients(company_name);

-- =============================================
-- TABLE: portfolios
-- Freelancer portfolio projects
-- =============================================

CREATE TABLE portfolios (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  freelancer_id UUID REFERENCES freelancers(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  project_url TEXT,
  github_url TEXT,
  thumbnail_url TEXT,
  images JSONB DEFAULT '[]'::jsonb,    -- Array of image URLs
  technologies TEXT[],
  category_id UUID REFERENCES categories(id),
  project_date DATE,
  client_name TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_portfolios_freelancer ON portfolios(freelancer_id);
CREATE INDEX idx_portfolios_featured ON portfolios(is_featured);
CREATE INDEX idx_portfolios_category ON portfolios(category_id);

-- =============================================
-- TABLE: jobs
-- Job postings by clients
-- =============================================

CREATE TABLE jobs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT NOT NULL,
  requirements TEXT,
  deliverables TEXT,
  job_type job_type DEFAULT 'fixed',
  status job_status DEFAULT 'open',
  experience_level experience_level DEFAULT 'intermediate',
  
  -- Budget fields
  budget_min DECIMAL(10,2),
  budget_max DECIMAL(10,2),
  budget_fixed DECIMAL(10,2),
  hourly_rate_min DECIMAL(10,2),
  hourly_rate_max DECIMAL(10,2),
  
  -- Timeline
  duration TEXT,                    -- e.g., "1-3 months"
  deadline DATE,
  
  -- Location & Remote
  is_remote BOOLEAN DEFAULT TRUE,
  location TEXT,
  
  -- Tags and skills
  skills_required TEXT[],
  tags TEXT[],
  
  -- Student/Entry-level specific
  is_student_friendly BOOLEAN DEFAULT FALSE,
  is_entry_level BOOLEAN DEFAULT FALSE,
  
  -- Metadata
  views_count INTEGER DEFAULT 0,
  applications_count INTEGER DEFAULT 0,
  shortlisted_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  is_urgent BOOLEAN DEFAULT FALSE,
  
  -- Hired freelancer (after hiring)
  hired_freelancer_id UUID REFERENCES freelancers(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX idx_jobs_client ON jobs(client_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_category ON jobs(category_id);
CREATE INDEX idx_jobs_created ON jobs(created_at DESC);
CREATE INDEX idx_jobs_budget ON jobs(budget_min, budget_max);
CREATE INDEX idx_jobs_student ON jobs(is_student_friendly);
CREATE INDEX idx_jobs_featured ON jobs(is_featured);
-- Full-text search on jobs
CREATE INDEX idx_jobs_search ON jobs USING gin(
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
);

-- =============================================
-- TABLE: applications
-- Freelancer applications to jobs
-- =============================================

CREATE TABLE applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  freelancer_id UUID REFERENCES freelancers(id) ON DELETE CASCADE,
  status application_status DEFAULT 'pending',
  cover_letter TEXT NOT NULL,
  proposed_rate DECIMAL(10,2),
  proposed_timeline TEXT,
  proposed_milestones JSONB DEFAULT '[]'::jsonb,
  portfolio_items UUID[],            -- Portfolio IDs to showcase
  attachments JSONB DEFAULT '[]'::jsonb,
  
  -- Client actions
  client_notes TEXT,
  is_shortlisted BOOLEAN DEFAULT FALSE,
  viewed_at TIMESTAMPTZ,
  
  -- AI scoring
  ai_match_score INTEGER,            -- 0-100
  ai_match_reason TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(job_id, freelancer_id)
);

CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_freelancer ON applications(freelancer_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_created ON applications(created_at DESC);

-- =============================================
-- TABLE: reviews
-- Bidirectional reviews (client ↔ freelancer)
-- =============================================

CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES profiles(id),
  reviewee_id UUID REFERENCES profiles(id),
  application_id UUID REFERENCES applications(id),
  
  -- Ratings (1-5)
  overall_rating INTEGER NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
  quality_rating INTEGER CHECK (quality_rating >= 1 AND quality_rating <= 5),
  communication_rating INTEGER CHECK (communication_rating >= 1 AND communication_rating <= 5),
  timeliness_rating INTEGER CHECK (timeliness_rating >= 1 AND timeliness_rating <= 5),
  expertise_rating INTEGER CHECK (expertise_rating >= 1 AND expertise_rating <= 5),
  
  title TEXT,
  comment TEXT NOT NULL,
  is_public BOOLEAN DEFAULT TRUE,
  
  -- Response to review
  response TEXT,
  response_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(job_id, reviewer_id)
);

CREATE INDEX idx_reviews_reviewee ON reviews(reviewee_id);
CREATE INDEX idx_reviews_reviewer ON reviews(reviewer_id);
CREATE INDEX idx_reviews_job ON reviews(job_id);
CREATE INDEX idx_reviews_rating ON reviews(overall_rating DESC);

-- =============================================
-- TABLE: conversations
-- Message threads between users
-- =============================================

CREATE TABLE conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  participant_1_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  participant_2_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  job_id UUID REFERENCES jobs(id),       -- Optional: tied to a job
  last_message_at TIMESTAMPTZ DEFAULT NOW(),
  last_message_preview TEXT,
  unread_count_1 INTEGER DEFAULT 0,      -- Unread for participant_1
  unread_count_2 INTEGER DEFAULT 0,      -- Unread for participant_2
  is_archived_1 BOOLEAN DEFAULT FALSE,
  is_archived_2 BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(participant_1_id, participant_2_id, job_id)
);

CREATE INDEX idx_conversations_participant1 ON conversations(participant_1_id);
CREATE INDEX idx_conversations_participant2 ON conversations(participant_2_id);
CREATE INDEX idx_conversations_last_message ON conversations(last_message_at DESC);

-- =============================================
-- TABLE: messages
-- Individual messages in conversations
-- =============================================

CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  message_type TEXT DEFAULT 'text',   -- 'text', 'file', 'image', 'offer', 'system'
  attachments JSONB DEFAULT '[]'::jsonb,
  status message_status DEFAULT 'sent',
  is_edited BOOLEAN DEFAULT FALSE,
  edited_at TIMESTAMPTZ,
  reply_to_id UUID REFERENCES messages(id),
  metadata JSONB DEFAULT '{}'::jsonb,  -- Extra data for special message types
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at ASC);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_created ON messages(created_at DESC);

-- =============================================
-- TABLE: notifications
-- In-app notifications
-- =============================================

CREATE TABLE notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type notification_type NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  action_url TEXT,
  related_id UUID,           -- ID of related entity (job, application, etc.)
  related_type TEXT,         -- Type of related entity
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications(user_id, created_at DESC);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read) WHERE is_read = FALSE;

-- =============================================
-- TABLE: saved_jobs
-- Jobs saved by freelancers
-- =============================================

CREATE TABLE saved_jobs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  freelancer_id UUID REFERENCES freelancers(id) ON DELETE CASCADE,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(freelancer_id, job_id)
);

CREATE INDEX idx_saved_jobs_freelancer ON saved_jobs(freelancer_id);
CREATE INDEX idx_saved_jobs_job ON saved_jobs(job_id);

-- =============================================
-- TABLE: saved_freelancers
-- Freelancers saved by clients
-- =============================================

CREATE TABLE saved_freelancers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  freelancer_id UUID REFERENCES freelancers(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(client_id, freelancer_id)
);

CREATE INDEX idx_saved_freelancers_client ON saved_freelancers(client_id);
CREATE INDEX idx_saved_freelancers_freelancer ON saved_freelancers(freelancer_id);

-- =============================================
-- TABLE: ai_sessions
-- Track AI tool usage per user
-- =============================================

CREATE TABLE ai_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  tool_type TEXT NOT NULL,           -- 'job_matcher', 'cv_analyzer', 'proposal_gen', etc.
  input_data JSONB,
  output_data JSONB,
  tokens_used INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_sessions_user ON ai_sessions(user_id);
CREATE INDEX idx_ai_sessions_tool ON ai_sessions(tool_type);

-- =============================================
-- FUNCTIONS
-- =============================================

-- Auto-update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Auto-generate job slug
CREATE OR REPLACE FUNCTION generate_job_slug()
RETURNS TRIGGER AS $$
DECLARE
  base_slug TEXT;
  final_slug TEXT;
  counter INTEGER := 0;
BEGIN
  base_slug := LOWER(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s]', '', 'g'));
  base_slug := REGEXP_REPLACE(base_slug, '\s+', '-', 'g');
  base_slug := SUBSTR(base_slug, 1, 60);
  
  final_slug := base_slug || '-' || SUBSTR(NEW.id::TEXT, 1, 8);
  NEW.slug := final_slug;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Update freelancer rating after new review
CREATE OR REPLACE FUNCTION update_freelancer_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE freelancers
  SET 
    rating_average = (
      SELECT AVG(overall_rating::DECIMAL)
      FROM reviews
      WHERE reviewee_id = NEW.reviewee_id
    ),
    rating_count = (
      SELECT COUNT(*)
      FROM reviews
      WHERE reviewee_id = NEW.reviewee_id
    )
  WHERE profile_id = NEW.reviewee_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Update job application count
CREATE OR REPLACE FUNCTION update_job_application_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE jobs
  SET applications_count = (
    SELECT COUNT(*) FROM applications WHERE job_id = NEW.job_id
  )
  WHERE id = NEW.job_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- TRIGGERS
-- =============================================

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_freelancers_updated_at
  BEFORE UPDATE ON freelancers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portfolios_updated_at
  BEFORE UPDATE ON portfolios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER generate_job_slug_trigger
  BEFORE INSERT ON jobs
  FOR EACH ROW EXECUTE FUNCTION generate_job_slug();

CREATE TRIGGER update_freelancer_rating_trigger
  AFTER INSERT OR UPDATE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_freelancer_rating();

CREATE TRIGGER update_job_application_count_trigger
  AFTER INSERT OR DELETE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_job_application_count();
