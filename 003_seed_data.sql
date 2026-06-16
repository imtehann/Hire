-- =============================================
-- HIRE Platform - Seed Data
-- Migration: 003_seed_data.sql
-- =============================================
-- Run AFTER 002_rls_policies.sql

-- =============================================
-- CATEGORIES
-- =============================================

INSERT INTO categories (id, name, slug, description, icon, color, sort_order) VALUES
  ('cat-01-0000-0000-0000-000000000001', 'Web Development', 'web-development', 'Frontend, backend, and full-stack web development', 'Globe', '#2563EB', 1),
  ('cat-02-0000-0000-0000-000000000002', 'Mobile Development', 'mobile-development', 'iOS, Android, and cross-platform mobile apps', 'Smartphone', '#7C3AED', 2),
  ('cat-03-0000-0000-0000-000000000003', 'Graphic Design', 'graphic-design', 'Logos, branding, UI/UX design', 'Palette', '#DB2777', 3),
  ('cat-04-0000-0000-0000-000000000004', 'Digital Marketing', 'digital-marketing', 'SEO, social media, content marketing', 'TrendingUp', '#059669', 4),
  ('cat-05-0000-0000-0000-000000000005', 'Content Writing', 'content-writing', 'Blogs, articles, copywriting, translation', 'FileText', '#D97706', 5),
  ('cat-06-0000-0000-0000-000000000006', 'Video & Animation', 'video-animation', 'Video editing, animation, motion graphics', 'Video', '#DC2626', 6),
  ('cat-07-0000-0000-0000-000000000007', 'Data Science & AI', 'data-science-ai', 'Machine learning, data analysis, AI development', 'Brain', '#0EA5E9', 7),
  ('cat-08-0000-0000-0000-000000000008', 'UI/UX Design', 'ui-ux-design', 'User interface and user experience design', 'Layout', '#8B5CF6', 8),
  ('cat-09-0000-0000-0000-000000000009', 'Tuition & Teaching', 'tuition-teaching', 'Online and offline tutoring, coaching', 'GraduationCap', '#16A34A', 9),
  ('cat-10-0000-0000-0000-000000000010', 'Data Entry', 'data-entry', 'Data entry, research, and administrative tasks', 'Database', '#64748B', 10),
  ('cat-11-0000-0000-0000-000000000011', 'Virtual Assistant', 'virtual-assistant', 'Remote administrative and personal assistance', 'Headphones', '#F59E0B', 11),
  ('cat-12-0000-0000-0000-000000000012', 'Accounting & Finance', 'accounting-finance', 'Bookkeeping, tax preparation, financial analysis', 'Calculator', '#0F766E', 12),
  ('cat-13-0000-0000-0000-000000000013', 'Photography', 'photography', 'Product, portrait, event photography', 'Camera', '#6366F1', 13),
  ('cat-14-0000-0000-0000-000000000014', 'Voice & Audio', 'voice-audio', 'Voiceover, podcast editing, music production', 'Music', '#EC4899', 14),
  ('cat-15-0000-0000-0000-000000000015', 'Cybersecurity', 'cybersecurity', 'Penetration testing, security audits', 'Shield', '#EF4444', 15),
  ('cat-16-0000-0000-0000-000000000016', 'E-commerce', 'e-commerce', 'Shop setup, product listings, Shopify, WooCommerce', 'ShoppingBag', '#F97316', 16)
ON CONFLICT DO NOTHING;

-- =============================================
-- SKILLS
-- =============================================

INSERT INTO skills (name, slug, category_id, is_trending) VALUES
  -- Web Development
  ('React.js', 'reactjs', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('Next.js', 'nextjs', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('Vue.js', 'vuejs', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('Node.js', 'nodejs', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('PHP / Laravel', 'php-laravel', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('Python / Django', 'python-django', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('WordPress', 'wordpress', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('Tailwind CSS', 'tailwindcss', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('TypeScript', 'typescript', 'cat-01-0000-0000-0000-000000000001', TRUE),
  ('PostgreSQL', 'postgresql', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('MongoDB', 'mongodb', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('REST API', 'rest-api', 'cat-01-0000-0000-0000-000000000001', FALSE),
  ('GraphQL', 'graphql', 'cat-01-0000-0000-0000-000000000001', FALSE),

  -- Mobile Development
  ('React Native', 'react-native', 'cat-02-0000-0000-0000-000000000002', TRUE),
  ('Flutter', 'flutter', 'cat-02-0000-0000-0000-000000000002', TRUE),
  ('Android (Kotlin)', 'android-kotlin', 'cat-02-0000-0000-0000-000000000002', FALSE),
  ('iOS (Swift)', 'ios-swift', 'cat-02-0000-0000-0000-000000000002', FALSE),

  -- Graphic Design
  ('Adobe Photoshop', 'adobe-photoshop', 'cat-03-0000-0000-0000-000000000003', FALSE),
  ('Adobe Illustrator', 'adobe-illustrator', 'cat-03-0000-0000-0000-000000000003', FALSE),
  ('Figma', 'figma', 'cat-03-0000-0000-0000-000000000003', TRUE),
  ('Logo Design', 'logo-design', 'cat-03-0000-0000-0000-000000000003', FALSE),
  ('Brand Identity', 'brand-identity', 'cat-03-0000-0000-0000-000000000003', FALSE),
  ('Canva', 'canva', 'cat-03-0000-0000-0000-000000000003', TRUE),

  -- Digital Marketing
  ('SEO', 'seo', 'cat-04-0000-0000-0000-000000000004', TRUE),
  ('Facebook Ads', 'facebook-ads', 'cat-04-0000-0000-0000-000000000004', TRUE),
  ('Google Ads', 'google-ads', 'cat-04-0000-0000-0000-000000000004', FALSE),
  ('Social Media Marketing', 'social-media-marketing', 'cat-04-0000-0000-0000-000000000004', TRUE),
  ('Email Marketing', 'email-marketing', 'cat-04-0000-0000-0000-000000000004', FALSE),
  ('Content Marketing', 'content-marketing', 'cat-04-0000-0000-0000-000000000004', FALSE),

  -- Content Writing
  ('Blog Writing', 'blog-writing', 'cat-05-0000-0000-0000-000000000005', FALSE),
  ('Copywriting', 'copywriting', 'cat-05-0000-0000-0000-000000000005', TRUE),
  ('Bengali Translation', 'bengali-translation', 'cat-05-0000-0000-0000-000000000005', TRUE),
  ('English to Bengali', 'english-to-bengali', 'cat-05-0000-0000-0000-000000000005', FALSE),
  ('Technical Writing', 'technical-writing', 'cat-05-0000-0000-0000-000000000005', FALSE),

  -- Data Science & AI
  ('Python', 'python', 'cat-07-0000-0000-0000-000000000007', TRUE),
  ('Machine Learning', 'machine-learning', 'cat-07-0000-0000-0000-000000000007', TRUE),
  ('Data Analysis', 'data-analysis', 'cat-07-0000-0000-0000-000000000007', TRUE),
  ('TensorFlow', 'tensorflow', 'cat-07-0000-0000-0000-000000000007', FALSE),
  ('ChatGPT / AI Prompting', 'ai-prompting', 'cat-07-0000-0000-0000-000000000007', TRUE),
  ('Power BI', 'power-bi', 'cat-07-0000-0000-0000-000000000007', FALSE),

  -- UI/UX Design
  ('UI Design', 'ui-design', 'cat-08-0000-0000-0000-000000000008', TRUE),
  ('UX Research', 'ux-research', 'cat-08-0000-0000-0000-000000000008', FALSE),
  ('Wireframing', 'wireframing', 'cat-08-0000-0000-0000-000000000008', FALSE),
  ('Prototyping', 'prototyping', 'cat-08-0000-0000-0000-000000000008', FALSE),

  -- Tuition
  ('Math Tutoring', 'math-tutoring', 'cat-09-0000-0000-0000-000000000009', FALSE),
  ('Science Tutoring', 'science-tutoring', 'cat-09-0000-0000-0000-000000000009', FALSE),
  ('English Language', 'english-language', 'cat-09-0000-0000-0000-000000000009', TRUE),
  ('HSC Preparation', 'hsc-preparation', 'cat-09-0000-0000-0000-000000000009', TRUE),
  ('SSC Preparation', 'ssc-preparation', 'cat-09-0000-0000-0000-000000000009', FALSE),
  ('University Admission', 'university-admission', 'cat-09-0000-0000-0000-000000000009', TRUE),

  -- Data Entry
  ('MS Excel', 'ms-excel', 'cat-10-0000-0000-0000-000000000010', FALSE),
  ('MS Word', 'ms-word', 'cat-10-0000-0000-0000-000000000010', FALSE),
  ('Google Sheets', 'google-sheets', 'cat-10-0000-0000-0000-000000000010', FALSE),
  ('Web Research', 'web-research', 'cat-10-0000-0000-0000-000000000010', FALSE)
ON CONFLICT DO NOTHING;

-- =============================================
-- STORAGE BUCKETS SETUP
-- Run these in Supabase Dashboard > Storage
-- OR use the Supabase client with service role
-- =============================================

-- NOTE: Run the following in Supabase SQL Editor:
-- These create storage bucket policies after creating buckets in dashboard

-- After creating buckets manually in Supabase Storage dashboard:
-- 1. 'avatars' - Profile photos (public)
-- 2. 'portfolios' - Portfolio images (public)
-- 3. 'resumes' - Resume files (private - user only)
-- 4. 'job-attachments' - Job-related files (private)

-- Storage policies (run after creating buckets in dashboard)
/*
-- Avatar bucket: public read, authenticated write own
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', TRUE)
ON CONFLICT DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolios', 'portfolios', TRUE)
ON CONFLICT DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', FALSE)
ON CONFLICT DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('job-attachments', 'job-attachments', FALSE)
ON CONFLICT DO NOTHING;
*/
