"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function SignUp() {
  const [role, setRole] = useState("seeker");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    category: "",
    bio: "",
    experience: "",
    achievements: "",
    fee: "",
    duration: "60",
    session_type: "video",
    languages: [] as string[],
    available_days: [] as string[],
    linkedin_url: "",
  });

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleItem = (field: string, value: string) => {
    setForm(prev => {
      const arr = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter(i => i !== value) : [...arr, value]
      };
    });
  };

  const handleSeekerSubmit = async () => {
    if (!form.full_name || !form.phone) {
      setError("Please enter your name and phone number");
      return;
    }
    if (!otpSent) {
      setOtpSent(true);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.from("users").insert({
        full_name: form.full_name,
        email: form.email || null,
        phone: form.phone,
        role: "seeker",
      });
      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleConsultantSubmit = async () => {
    if (!form.full_name || !form.phone || !form.email || !form.category || !form.password) {
      setError("Please fill all required fields including password");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });
      if (authError) throw authError;

      const { data: userData, error: userError } = await supabase
        .from("users")
        .insert({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          role: "consultant",
        })
        .select()
        .single();
      if (userError) throw userError;

      const { error: consultantError } = await supabase
        .from("consultants")
        .insert({
          user_id: userData.id,
          category: form.category,
          bio: form.bio,
          experience: form.experience,
          achievements: form.achievements,
          fee: parseInt(form.fee) || 0,
          duration: parseInt(form.duration),
          session_type: form.session_type,
          languages: form.languages,
          available_days: form.available_days,
          linkedin_url: form.linkedin_url || null,
        });
      if (consultantError) throw consultantError;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main style={{minHeight:'100vh', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px'}}>
        <div style={{textAlign:'center', background:'white', borderRadius:'24px', padding:'48px 32px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', maxWidth:'400px', width:'100%'}}>
          <div style={{fontSize:'48px', marginBottom:'16px'}}>🎉</div>
          <h2 style={{fontSize:'24px', fontWeight:'800', color:'#111827', marginBottom:'8px'}}>
            {role === 'consultant' ? 'Application Submitted!' : 'Account Created!'}
          </h2>
          <p style={{fontSize:'14px', color:'#6b7280', lineHeight:'1.6', marginBottom:'24px'}}>
            {role === 'consultant'
              ? 'Our team will review your profile within 48 hours and get back to you.'
              : 'Welcome to MentorBridge! You can now find and book consultants.'}
          </p>
          <a href="/" style={{display:'block', padding:'14px', background:'#f97316', color:'white', borderRadius:'14px', fontWeight:'700', fontSize:'15px', textDecoration:'none'}}>
            Go to Homepage →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{minHeight:'100vh', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px'}}>
      <div style={{width:'100%', maxWidth: role === "consultant" ? '600px' : '460px'}}>

        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <a href="/" style={{fontSize:'28px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
          <p style={{color:'#6b7280', fontSize:'14px', marginTop:'8px'}}>Create your free account in seconds</p>
        </div>

        <div style={{background:'#ffffff', borderRadius:'24px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', padding:'32px', border:'1px solid #f3f4f6'}}>

          <p style={{fontSize:'13px', fontWeight:'700', color:'#374151', marginBottom:'12px'}}>I want to join as</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px'}}>
            <div onClick={() => { setRole("seeker"); setOtpSent(false); setError(""); }} style={{padding:'16px', borderRadius:'16px', border: role === "seeker" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "seeker" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🔍</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "seeker" ? '#f97316' : '#6b7280'}}>Find a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I need guidance</div>
            </div>
            <div onClick={() => { setRole("consultant"); setOtpSent(false); setError(""); }} style={{padding:'16px', borderRadius:'16px', border: role === "consultant" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "consultant" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🎓</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "consultant" ? '#f97316' : '#6b7280'}}>Be a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I want to guide others</div>
            </div>
          </div>

          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px'}}>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
            <span style={{fontSize:'12px', color:'#9ca3af'}}>{role === "consultant" ? "Consultant details" : "Quick signup — no password needed"}</span>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
          </div>

          {error && (
            <div style={{background:'#fef2f2', border:'1.5px solid #fecaca', borderRadius:'12px', padding:'12px 16px', marginBottom:'20px'}}>
              <p style={{fontSize:'13px', color:'#dc2626', margin:0}}>⚠️ {error}</p>
            </div>
          )}

          {/* SEEKER FORM */}
          {role === "seeker" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Full Name</label>
                <input type="text" placeholder="Enter your full name" value={form.full_name} onChange={e => update('full_name', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Email Address <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <input type="email" placeholder="yourname@gmail.com" value={form.email} onChange={e => update('email', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
                <div style={{display:'flex', gap:'10px'}}>
                  <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
                  <input type="tel" placeholder="10 digit mobile number" value={form.phone} onChange={e => update('phone', e.target.value)} style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}/>
                </div>
              </div>

              {otpSent && (
                <div style={{marginBottom:'24px'}}>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Enter 4-digit OTP</label>
                  <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'12px', padding:'12px 16px', marginBottom:'16px'}}>
                    <p style={{fontSize:'12px', color:'#16a34a', margin:0}}>✅ OTP sent to your phone number</p>
                  </div>
                  <div style={{display:'flex', gap:'12px', justifyContent:'center'}}>
                    {[1,2,3,4].map((i) => (
                      <input key={i} id={`otp-${i}`} type="text" maxLength={1} inputMode="numeric"
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          (e.target as HTMLInputElement).value = val;
                          if (val && i < 4) {
                            const next = document.getElementById(`otp-${i + 1}`);
                            if (next) (next as HTMLInputElement).focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !(e.target as HTMLInputElement).value && i > 1) {
                            const prev = document.getElementById(`otp-${i - 1}`);
                            if (prev) (prev as HTMLInputElement).focus();
                          }
                        }}
                        style={{width:'64px', height:'68px', textAlign:'center', borderRadius:'14px', border:'1.5px solid #e5e7eb', fontSize:'26px', fontWeight:'700', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}
                      />
                    ))}
                  </div>
                  <p style={{fontSize:'12px', color:'#9ca3af', textAlign:'center', marginTop:'14px'}}>
                    Didn't receive?{' '}
                    <span onClick={() => setOtpSent(false)} style={{color:'#f97316', cursor:'pointer', fontWeight:'600'}}>Resend OTP</span>
                  </p>
                </div>
              )}

              {!otpSent && (
                <div style={{background:'#eff6ff', border:'1.5px solid #bfdbfe', borderRadius:'12px', padding:'12px 16px', marginBottom:'20px', display:'flex', gap:'10px', alignItems:'center'}}>
                  <span style={{fontSize:'18px'}}>📱</span>
                  <p style={{fontSize:'12px', color:'#1d4ed8', margin:0, lineHeight:'1.5'}}>No password needed! We'll send a 4-digit OTP to verify your account.</p>
                </div>
              )}

              <button onClick={handleSeekerSubmit} disabled={loading} style={{width:'100%', padding:'16px', background: loading ? '#fed7aa' : '#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                {loading ? 'Creating account...' : otpSent ? 'Verify OTP & Create Account →' : 'Send OTP to My Phone →'}
              </button>
            </>
          )}

          {/* CONSULTANT FORM */}
          {role === "consultant" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Full Name</label>
                <input type="text" placeholder="Enter your full name" value={form.full_name} onChange={e => update('full_name', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Email Address</label>
                <input type="email" placeholder="yourname@gmail.com" value={form.email} onChange={e => update('email', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
                <div style={{display:'flex', gap:'10px'}}>
                  <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
                  <input type="tel" placeholder="10 digit mobile number" value={form.phone} onChange={e => update('phone', e.target.value)} style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}/>
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Password</label>
                <input type="password" placeholder="Create a strong password" value={form.password} onChange={e => update('password', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{background:'#fff7ed', borderRadius:'16px', padding:'16px', marginBottom:'20px'}}>
                <p style={{fontSize:'12px', fontWeight:'700', color:'#f97316', marginBottom:'4px'}}>📋 Consultant Profile Details</p>
                <p style={{fontSize:'11px', color:'#9ca3af', margin:0}}>These will be shown on your public profile</p>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Consultation Category</label>
                <select value={form.category} onChange={e => update('category', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', color:'#374151'}}>
                  <option value="">Select your category</option>
                  <option>⚖️ Legal Consultation</option>
                  <option>🎯 Career Guidance</option>
                  <option>📚 Academic & JEE/NEET</option>
                  <option>🚀 Startup & Business</option>
                  <option>💊 Medical Guidance</option>
                  <option>🧠 Mental Health</option>
                  <option>💰 Finance & Tax</option>
                  <option>🎥 Content & Creator</option>
                  <option>💻 Tech & Coding</option>
                  <option>🏥 Patient Advocacy</option>
                  <option>🎓 Study Abroad</option>
                  <option>🏗️ HR & Workplace</option>
                </select>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Short Bio / Tagline</label>
                <input type="text" placeholder="e.g. 10 years experience in property law" value={form.bio} onChange={e => update('bio', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Your Experience</label>
                <textarea placeholder="Tell seekers about your background..." rows={4} value={form.experience} onChange={e => update('experience', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', resize:'vertical'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Achievements <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <textarea placeholder="Awards, certifications, notable projects..." rows={3} value={form.achievements} onChange={e => update('achievements', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', resize:'vertical'}}/>
              </div>

              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'20px'}}>
                <div>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Fee per Session (₹)</label>
                  <input type="number" placeholder="e.g. 500" value={form.fee} onChange={e => update('fee', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
                </div>
                <div>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Session Duration</label>
                  <select value={form.duration} onChange={e => update('duration', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Languages You Speak</label>
                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                  {['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Other'].map((lang) => (
                    <div key={lang} onClick={() => toggleItem('languages', lang)} style={{padding:'8px 14px', borderRadius:'99px', border: form.languages.includes(lang) ? '1.5px solid #f97316' : '1.5px solid #e5e7eb', fontSize:'12px', cursor:'pointer', background: form.languages.includes(lang) ? '#fff7ed' : '#f9fafb', fontWeight:'500', color: form.languages.includes(lang) ? '#f97316' : '#374151', transition:'all 0.2s'}}>{lang}</div>
                  ))}
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Available Days</label>
                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} onClick={() => toggleItem('available_days', day)} style={{padding:'8px 14px', borderRadius:'99px', border: form.available_days.includes(day) ? '1.5px solid #f97316' : '1.5px solid #e5e7eb', fontSize:'12px', cursor:'pointer', background: form.available_days.includes(day) ? '#fff7ed' : '#f9fafb', fontWeight:'500', color: form.available_days.includes(day) ? '#f97316' : '#374151', transition:'all 0.2s'}}>{day}</div>
                  ))}
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>LinkedIn / Portfolio Link <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <input type="url" placeholder="https://linkedin.com/in/yourname" value={form.linkedin_url} onChange={e => update('linkedin_url', e.target.value)} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'12px', padding:'14px 16px', marginBottom:'24px'}}>
                <p style={{fontSize:'12px', color:'#166534', fontWeight:'600', marginBottom:'4px'}}>✅ Verification Process</p>
                <p style={{fontSize:'11px', color:'#16a34a', lineHeight:'1.6', margin:0}}>After submitting, our team will review your profile within 48 hours.</p>
              </div>

              <button onClick={handleConsultantSubmit} disabled={loading} style={{width:'100%', padding:'16px', background: loading ? '#fed7aa' : '#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                {loading ? 'Submitting...' : 'Submit Consultant Application →'}
              </button>
            </>
          )}

          <p style={{fontSize:'12px', color:'#9ca3af', textAlign:'center', marginTop:'20px', lineHeight:'1.6'}}>
            By signing up you agree to our{' '}
            <a href="#" style={{color:'#f97316', textDecoration:'none'}}>Terms of Service</a>{' '}
            and{' '}
            <a href="#" style={{color:'#f97316', textDecoration:'none'}}>Privacy Policy</a>
          </p>
        </div>

        <p style={{textAlign:'center', fontSize:'14px', color:'#6b7280', marginTop:'24px'}}>
          Already have an account?{' '}
          <a href="/login" style={{color:'#f97316', fontWeight:'700', textDecoration:'none'}}>Login here</a>
        </p>
      </div>
    </main>
  );
}