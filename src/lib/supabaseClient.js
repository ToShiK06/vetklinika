import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rxhgqowubyjonecjodrm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aGdxb3d1Ynlqb25lY2pvZHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NDIxMzksImV4cCI6MjA2MTUxODEzOX0.LBOKcl2ipYa9nBPQrzcamdLCkTIxVEfz5kmdCjiXjAo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)