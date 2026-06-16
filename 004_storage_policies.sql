-- =============================================
-- HIRE Platform - Storage Policies
-- Migration: 004_storage_policies.sql
-- =============================================
-- Run AFTER creating buckets in Supabase Dashboard

-- =============================================
-- AVATARS BUCKET - Public read, own write
-- =============================================

CREATE POLICY "avatars_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "avatars_auth_upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'avatars'
    AND auth.uid() IS NOT NULL
    AND (storage.foldername(name))[1] = auth.uid()::TEXT
  );

CREATE POLICY "avatars_own_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'avatars'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

CREATE POLICY "avatars_own_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'avatars'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

-- =============================================
-- PORTFOLIOS BUCKET - Public read, own write
-- =============================================

CREATE POLICY "portfolios_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'portfolios');

CREATE POLICY "portfolios_auth_upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'portfolios'
    AND auth.uid() IS NOT NULL
    AND (storage.foldername(name))[1] = auth.uid()::TEXT
  );

CREATE POLICY "portfolios_own_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'portfolios'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

CREATE POLICY "portfolios_own_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'portfolios'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

-- =============================================
-- RESUMES BUCKET - Private, own access only
-- =============================================

CREATE POLICY "resumes_own_read" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'resumes'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

CREATE POLICY "resumes_own_upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'resumes'
    AND auth.uid() IS NOT NULL
    AND (storage.foldername(name))[1] = auth.uid()::TEXT
  );

CREATE POLICY "resumes_own_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'resumes'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

CREATE POLICY "resumes_own_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'resumes'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );

-- =============================================
-- JOB ATTACHMENTS - Auth users read, own write
-- =============================================

CREATE POLICY "job_attachments_auth_read" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'job-attachments'
    AND auth.uid() IS NOT NULL
  );

CREATE POLICY "job_attachments_own_upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'job-attachments'
    AND auth.uid() IS NOT NULL
    AND (storage.foldername(name))[1] = auth.uid()::TEXT
  );

CREATE POLICY "job_attachments_own_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'job-attachments'
    AND auth.uid()::TEXT = (storage.foldername(name))[1]
  );
