import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

const supabaseUrl = 'https://gugwbfwknkponvvnencn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z3diZndrbmtwb252dm5lbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzOTg3NTcsImV4cCI6MjAzNDk3NDc1N30.pI1tB7FiEakj_QynIFfhxln7qcEFIMUhlM5Ukvo6CGA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
