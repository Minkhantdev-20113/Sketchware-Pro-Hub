-- Run in Supabase SQL Editor if Java upload reports a missing description column.
alter table public.java_codes
  add column if not exists description text;
