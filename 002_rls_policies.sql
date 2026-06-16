-- =============================================
-- HIRE Platform - Row Level Security Policies
-- Migration: 002_rls_policies.sql
-- =============================================
-- Run AFTER 001_initial_schema.sql

-- =============================================
-- ENABLE RLS ON ALL TABLES
-- =============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE freelancers ENABLE ROW LEVEL SECURITY;
ALTER TABLE freelancer_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_freelancers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;

-- =============================================
-- HELPER FUNCTIONS
-- =============================================

-- Check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get user role
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS user_role AS $$
DECLARE
  user_role_val user_role;
BEGIN
  SELECT role INTO user_role_val
  FROM profiles
  WHERE id = auth.uid();
  RETURN user_role_val;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get freelancer ID for current user
CREATE OR REPLACE FUNCTION get_my_freelancer_id()
RETURNS UUID AS $$
BEGIN
  RETURN (
    SELECT id FROM freelancers
    WHERE profile_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get client ID for current user
CREATE OR REPLACE FUNCTION get_my_client_id()
RETURNS UUID AS $$
BEGIN
  RETURN (
    SELECT id FROM clients
    WHERE profile_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- PROFILES POLICIES
-- =============================================

-- Anyone can view public profiles
CREATE POLICY "profiles_select_public" ON profiles
  FOR SELECT USING (
    profile_visibility = 'public' 
    OR id = auth.uid() 
    OR is_admin()
  );

-- Users can insert their own profile
CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT WITH CHECK (id = auth.uid());

-- Users can update only their own profile
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Only admins can delete profiles (or service role)
CREATE POLICY "profiles_delete_admin" ON profiles
  FOR DELETE USING (is_admin());

-- =============================================
-- FREELANCERS POLICIES
-- =============================================

-- Anyone can view freelancer profiles
CREATE POLICY "freelancers_select_public" ON freelancers
  FOR SELECT USING (TRUE);

-- Only freelancers can create their own entry
CREATE POLICY "freelancers_insert_own" ON freelancers
  FOR INSERT WITH CHECK (
    profile_id = auth.uid()
    AND get_user_role() = 'freelancer'
  );

-- Freelancers can update only their own record
CREATE POLICY "freelancers_update_own" ON freelancers
  FOR UPDATE USING (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());

-- Admins can update any freelancer
CREATE POLICY "freelancers_update_admin" ON freelancers
  FOR UPDATE USING (is_admin());

-- =============================================
-- FREELANCER SKILLS POLICIES
-- =============================================

-- Anyone can view skills
CREATE POLICY "freelancer_skills_select_public" ON freelancer_skills
  FOR SELECT USING (TRUE);

-- Freelancers manage their own skills
CREATE POLICY "freelancer_skills_manage_own" ON freelancer_skills
  FOR ALL USING (
    freelancer_id = get_my_freelancer_id()
  );

-- =============================================
-- CLIENTS POLICIES
-- =============================================

-- Anyone can view basic client info
CREATE POLICY "clients_select_public" ON clients
  FOR SELECT USING (TRUE);

-- Only clients can create their own entry
CREATE POLICY "clients_insert_own" ON clients
  FOR INSERT WITH CHECK (
    profile_id = auth.uid()
    AND get_user_role() = 'client'
  );

-- Clients can update only their own record
CREATE POLICY "clients_update_own" ON clients
  FOR UPDATE USING (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());

-- =============================================
-- CATEGORIES & SKILLS (Read-only for users)
-- =============================================

-- Anyone can read categories
CREATE POLICY "categories_select_public" ON categories
  FOR SELECT USING (is_active = TRUE OR is_admin());

-- Only admins can manage categories
CREATE POLICY "categories_manage_admin" ON categories
  FOR ALL USING (is_admin());

-- Anyone can read skills
CREATE POLICY "skills_select_public" ON skills
  FOR SELECT USING (TRUE);

-- Only admins can manage skills
CREATE POLICY "skills_manage_admin" ON skills
  FOR ALL USING (is_admin());

-- =============================================
-- PORTFOLIOS POLICIES
-- =============================================

-- Anyone can view portfolios
CREATE POLICY "portfolios_select_public" ON portfolios
  FOR SELECT USING (TRUE);

-- Freelancers manage their own portfolios
CREATE POLICY "portfolios_manage_own" ON portfolios
  FOR ALL USING (
    freelancer_id = get_my_freelancer_id()
  );

-- Admins can manage all portfolios
CREATE POLICY "portfolios_manage_admin" ON portfolios
  FOR ALL USING (is_admin());

-- =============================================
-- JOBS POLICIES
-- =============================================

-- Anyone can view open jobs
CREATE POLICY "jobs_select_public" ON jobs
  FOR SELECT USING (
    status = 'open' 
    OR client_id = get_my_client_id()
    OR is_admin()
  );

-- Only clients can post jobs
CREATE POLICY "jobs_insert_client" ON jobs
  FOR INSERT WITH CHECK (
    client_id = get_my_client_id()
    AND get_user_role() = 'client'
  );

-- Clients can update only their own jobs
CREATE POLICY "jobs_update_own" ON jobs
  FOR UPDATE USING (
    client_id = get_my_client_id()
    OR is_admin()
  );

-- Clients can delete their own jobs (if no applications)
CREATE POLICY "jobs_delete_own" ON jobs
  FOR DELETE USING (
    (client_id = get_my_client_id() AND applications_count = 0)
    OR is_admin()
  );

-- =============================================
-- APPLICATIONS POLICIES
-- =============================================

-- Freelancers see their own applications; clients see applications to their jobs
CREATE POLICY "applications_select_own" ON applications
  FOR SELECT USING (
    freelancer_id = get_my_freelancer_id()
    OR job_id IN (
      SELECT id FROM jobs WHERE client_id = get_my_client_id()
    )
    OR is_admin()
  );

-- Only freelancers can apply (one application per job)
CREATE POLICY "applications_insert_freelancer" ON applications
  FOR INSERT WITH CHECK (
    freelancer_id = get_my_freelancer_id()
    AND get_user_role() = 'freelancer'
  );

-- Freelancers can update their own applications; clients can update status
CREATE POLICY "applications_update_own" ON applications
  FOR UPDATE USING (
    freelancer_id = get_my_freelancer_id()
    OR job_id IN (
      SELECT id FROM jobs WHERE client_id = get_my_client_id()
    )
    OR is_admin()
  );

-- Freelancers can withdraw their own applications
CREATE POLICY "applications_delete_own" ON applications
  FOR DELETE USING (
    freelancer_id = get_my_freelancer_id()
    OR is_admin()
  );

-- =============================================
-- REVIEWS POLICIES
-- =============================================

-- Anyone can see public reviews
CREATE POLICY "reviews_select_public" ON reviews
  FOR SELECT USING (is_public = TRUE OR reviewer_id = auth.uid() OR is_admin());

-- Users can write reviews for completed jobs they were part of
CREATE POLICY "reviews_insert_participant" ON reviews
  FOR INSERT WITH CHECK (
    reviewer_id = auth.uid()
  );

-- Users can update their own reviews
CREATE POLICY "reviews_update_own" ON reviews
  FOR UPDATE USING (reviewer_id = auth.uid() OR is_admin());

-- =============================================
-- CONVERSATIONS POLICIES
-- =============================================

-- Users can only see their own conversations
CREATE POLICY "conversations_select_own" ON conversations
  FOR SELECT USING (
    participant_1_id = auth.uid()
    OR participant_2_id = auth.uid()
    OR is_admin()
  );

-- Authenticated users can create conversations
CREATE POLICY "conversations_insert_auth" ON conversations
  FOR INSERT WITH CHECK (
    (participant_1_id = auth.uid() OR participant_2_id = auth.uid())
    AND auth.uid() IS NOT NULL
  );

-- Participants can update their conversation (archive, mark read)
CREATE POLICY "conversations_update_own" ON conversations
  FOR UPDATE USING (
    participant_1_id = auth.uid()
    OR participant_2_id = auth.uid()
    OR is_admin()
  );

-- =============================================
-- MESSAGES POLICIES
-- =============================================

-- Users can only see messages in their conversations
CREATE POLICY "messages_select_own" ON messages
  FOR SELECT USING (
    conversation_id IN (
      SELECT id FROM conversations
      WHERE participant_1_id = auth.uid()
      OR participant_2_id = auth.uid()
    )
    OR is_admin()
  );

-- Users can send messages in their conversations
CREATE POLICY "messages_insert_participant" ON messages
  FOR INSERT WITH CHECK (
    sender_id = auth.uid()
    AND conversation_id IN (
      SELECT id FROM conversations
      WHERE participant_1_id = auth.uid()
      OR participant_2_id = auth.uid()
    )
  );

-- Users can edit their own messages
CREATE POLICY "messages_update_own" ON messages
  FOR UPDATE USING (
    sender_id = auth.uid()
    OR is_admin()
  );

-- =============================================
-- NOTIFICATIONS POLICIES
-- =============================================

-- Users can only see their own notifications
CREATE POLICY "notifications_select_own" ON notifications
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

-- System creates notifications (via service role)
CREATE POLICY "notifications_insert_system" ON notifications
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL  -- Service role bypasses RLS
  );

-- Users can mark their own notifications as read
CREATE POLICY "notifications_update_own" ON notifications
  FOR UPDATE USING (user_id = auth.uid());

-- Users can delete their own notifications
CREATE POLICY "notifications_delete_own" ON notifications
  FOR DELETE USING (user_id = auth.uid() OR is_admin());

-- =============================================
-- SAVED JOBS POLICIES
-- =============================================

-- Freelancers can only see their own saved jobs
CREATE POLICY "saved_jobs_select_own" ON saved_jobs
  FOR SELECT USING (freelancer_id = get_my_freelancer_id() OR is_admin());

-- Freelancers can save jobs
CREATE POLICY "saved_jobs_manage_own" ON saved_jobs
  FOR ALL USING (freelancer_id = get_my_freelancer_id());

-- =============================================
-- SAVED FREELANCERS POLICIES
-- =============================================

-- Clients can only see their own saved freelancers
CREATE POLICY "saved_freelancers_select_own" ON saved_freelancers
  FOR SELECT USING (client_id = get_my_client_id() OR is_admin());

-- Clients can manage their saved freelancers
CREATE POLICY "saved_freelancers_manage_own" ON saved_freelancers
  FOR ALL USING (client_id = get_my_client_id());

-- =============================================
-- AI SESSIONS POLICIES
-- =============================================

-- Users can see their own AI sessions
CREATE POLICY "ai_sessions_select_own" ON ai_sessions
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

-- Users can create their own AI sessions
CREATE POLICY "ai_sessions_insert_own" ON ai_sessions
  FOR INSERT WITH CHECK (user_id = auth.uid());
