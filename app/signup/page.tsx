"use client";
import { useState } from "react";

export default function SignUp() {
  const [role, setRole] = useState("seeker");
  const [otpSent, setOtpSent] = useState(false);

  return (
    <main style={{minHeight:'100vh', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px'}}>
      <div style={{width:'100%', maxWidth: role === "consultant" ? '600px' : '460px'}}>

        {/* LOGO */}
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <a href="/" style={{fontSize:'28px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
          <p style={{color:'#6b7280', fontSize:'14px', marginTop:'8px'}}>Create your free account in seconds</p>
        </div>

        <div style={{background:'#ffffff', borderRadius:'24px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', padding:'32px', border:'1px solid #f3f4f6'}}>

          {/* ROLE SELECTOR */}
          <p style={{fontSize:'13px', fontWeight:'700', color:'#374151', marginBottom:'12px'}}>I want to join as</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px'}}>
            <div onClick={() => { setRole("seeker"); setOtpSent(false); }} style={{padding:'16px', borderRadius:'16px', border: role === "seeker" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "seeker" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🔍</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "seeker" ? '#f97316' : '#6b7280'}}>Find a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I need guidance</div>
            </div>
            <div onClick={() => { setRole("consultant"); setOtpSent(false); }} style={{padding:'16px', borderRadius:'16px', border: role === "consultant" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "consultant" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🎓</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "consultant" ? '#f97316' : '#6b7280'}}>Be a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I want to guide others</div>
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px'}}>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
            <span style={{fontSize:'12px', color:'#9ca3af'}}>{role === "consultant" ? "Consultant details" : "Quick signup — no password needed"}</span>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
          </div>

          {/* ======= SEEKER FORM ======= */}
          {role === "seeker" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Full Name</label>
                <input type="text" placeholder="Enter your full name" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>
                  Email Address <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span>
                </label>
                <input type="email" placeholder="yourname@gmail.com" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
                <div style={{display:'flex', gap:'10px'}}>
                  <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
                  <input type="tel" placeholder="10 digit mobile number" style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}/>
                </div>
              </div>

              {/* OTP BOX */}
              {otpSent && (
                <div style={{marginBottom:'24px'}}>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Enter 4-digit OTP</label>
                  <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'12px', padding:'12px 16px', marginBottom:'16px'}}>
                    <p style={{fontSize:'12px', color:'#16a34a', margin:0}}>✅ OTP sent to your phone number</p>
                  </div>
                  <div style={{display:'flex', gap:'12px', justifyContent:'center'}}>
                    {[1,2,3,4].map((i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="text"
                        maxLength={1}
                        inputMode="numeric"
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
                        style={{width:'64px', height:'68px', textAlign:'center', borderRadius:'14px', border:'1.5px solid #e5e7eb', fontSize:'26px', fontWeight:'700', background:'#f9fafb', outline:'none', transition:'border 0.2s', boxSizing:'border-box'}}
                      />
                    ))}
                  </div>
                  <p style={{fontSize:'12px', color:'#9ca3af', textAlign:'center', marginTop:'14px'}}>
                    Didn't receive?{' '}
                    <span onClick={() => {}} style={{color:'#f97316', cursor:'pointer', fontWeight:'600'}}>Resend OTP</span>
                  </p>
                </div>
              )}

              {!otpSent && (
                <div style={{background:'#eff6ff', border:'1.5px solid #bfdbfe', borderRadius:'12px', padding:'12px 16px', marginBottom:'20px', display:'flex', gap:'10px', alignItems:'center'}}>
                  <span style={{fontSize:'18px'}}>📱</span>
                  <p style={{fontSize:'12px', color:'#1d4ed8', margin:0, lineHeight:'1.5'}}>No password needed! We'll send a 4-digit OTP to your phone to verify your account.</p>
                </div>
              )}

              <button
                onClick={() => setOtpSent(true)}
                style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                {otpSent ? "Verify OTP & Create Account →" : "Send OTP to My Phone →"}
              </button>
            </>
          )}

          {/* ======= CONSULTANT FORM ======= */}
          {role === "consultant" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Full Name</label>
                <input type="text" placeholder="Enter your full name" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Email Address</label>
                <input type="email" placeholder="yourname@gmail.com" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
                <div style={{display:'flex', gap:'10px'}}>
                  <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
                  <input type="tel" placeholder="10 digit mobile number" style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}/>
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Password</label>
                <input type="password" placeholder="Create a strong password" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{background:'#fff7ed', borderRadius:'16px', padding:'16px', marginBottom:'20px'}}>
                <p style={{fontSize:'12px', fontWeight:'700', color:'#f97316', marginBottom:'4px'}}>📋 Consultant Profile Details</p>
                <p style={{fontSize:'11px', color:'#9ca3af', margin:0}}>These will be shown on your public profile</p>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Consultation Category</label>
                <select style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', color:'#374151'}}>
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
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Short Bio / Tagline <span style={{color:'#9ca3af', fontWeight:'400'}}>(shown on profile card)</span></label>
                <input type="text" placeholder="e.g. 10 years experience in property law" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Your Experience <span style={{color:'#9ca3af', fontWeight:'400'}}>(in your own words)</span></label>
                <textarea placeholder="Tell seekers about your background, work experience, and what you can help with..." rows={4} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', resize:'vertical'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Achievements <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <textarea placeholder="Awards, certifications, notable projects, publications..." rows={3} style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box', resize:'vertical'}}/>
              </div>

              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'20px'}}>
                <div>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Fee per Session (₹)</label>
                  <input type="number" placeholder="e.g. 500" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
                </div>
                <div>
                  <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Session Duration</label>
                  <select style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Session Type</label>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
                  {['📹 Video Call', '💬 Chat Only', '📹💬 Both'].map((type) => (
                    <div key={type} style={{padding:'12px 8px', borderRadius:'12px', border:'1.5px solid #e5e7eb', textAlign:'center', fontSize:'12px', cursor:'pointer', background:'#f9fafb', fontWeight:'500'}}>{type}</div>
                  ))}
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Languages You Speak</label>
                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                  {['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Other'].map((lang) => (
                    <div key={lang} style={{padding:'8px 14px', borderRadius:'99px', border:'1.5px solid #e5e7eb', fontSize:'12px', cursor:'pointer', background:'#f9fafb', fontWeight:'500'}}>{lang}</div>
                  ))}
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Available Days</label>
                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} style={{padding:'8px 14px', borderRadius:'99px', border:'1.5px solid #e5e7eb', fontSize:'12px', cursor:'pointer', background:'#f9fafb', fontWeight:'500'}}>{day}</div>
                  ))}
                </div>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>LinkedIn / Portfolio Link <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <input type="url" placeholder="https://linkedin.com/in/yourname" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Profile Photo <span style={{color:'#9ca3af', fontWeight:'400'}}>(optional)</span></label>
                <div style={{border:'2px dashed #e5e7eb', borderRadius:'12px', padding:'24px', textAlign:'center', background:'#f9fafb', cursor:'pointer'}}>
                  <div style={{fontSize:'28px', marginBottom:'8px'}}>📷</div>
                  <div style={{fontSize:'13px', color:'#6b7280', fontWeight:'500'}}>Click to upload your photo</div>
                  <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>JPG or PNG, max 2MB</div>
                </div>
              </div>

              <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'12px', padding:'14px 16px', marginBottom:'24px'}}>
                <p style={{fontSize:'12px', color:'#166534', fontWeight:'600', marginBottom:'4px'}}>✅ Verification Process</p>
                <p style={{fontSize:'11px', color:'#16a34a', lineHeight:'1.6', margin:0}}>After submitting, our team will review your profile within 48 hours. You'll receive a confirmation on your phone and email once verified.</p>
              </div>

              <button style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                Submit Consultant Application →
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
  )
}