import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mphphxrkkihxmdttjiho.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1waHBoeHJra2loeG1kdHRqaWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MDAzNTksImV4cCI6MjA5NDQ3NjM1OX0.gQHuegcH-XuQ7qScsKTTUD3D4Lqdh1tYY2sNu_s3F8c'

export const supabase = createClient(supabaseUrl, supabaseKey)