"use client";
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("seeker");
  const [otpSent, setOtpSent] = useState(false);

  return (
    <main style={{minHeight:'100vh', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px'}}>
      <div style={{width:'100%', maxWidth:'460px'}}>

        {/* LOGO */}
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <a href="/" style={{fontSize:'28px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
          <p style={{color:'#6b7280', fontSize:'14px', marginTop:'8px'}}>Welcome back 👋</p>
        </div>

        {/* CARD */}
        <div style={{background:'#ffffff', borderRadius:'24px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', padding:'32px', border:'1px solid #f3f4f6'}}>

          {/* ROLE SELECTOR */}
          <p style={{fontSize:'13px', fontWeight:'700', color:'#374151', marginBottom:'12px'}}>Login as</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px'}}>
            <div onClick={() => { setRole("seeker"); setOtpSent(false); }} style={{padding:'16px', borderRadius:'16px', border: role === "seeker" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "seeker" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🔍</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "seeker" ? '#f97316' : '#6b7280'}}>Seeker</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>Login with OTP</div>
            </div>
            <div onClick={() => { setRole("consultant"); setOtpSent(false); }} style={{padding:'16px', borderRadius:'16px', border: role === "consultant" ? '2px solid #f97316' : '2px solid #e5e7eb', background: role === "consultant" ? '#fff7ed' : '#f9fafb', textAlign:'center', cursor:'pointer', transition:'all 0.2s'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🎓</div>
              <div style={{fontSize:'13px', fontWeight:'700', color: role === "consultant" ? '#f97316' : '#6b7280'}}>Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>Login with password</div>
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px'}}>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
            <span style={{fontSize:'12px', color:'#9ca3af'}}>{role === "seeker" ? "OTP login" : "Email & password"}</span>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
          </div>

          {/* ======= SEEKER LOGIN ======= */}
          {role === "seeker" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
                <div style={{display:'flex', gap:'10px'}}>
                  <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
                  <input type="tel" placeholder="10 digit mobile number" style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}/>
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
                    <span onClick={() => setOtpSent(false)} style={{color:'#f97316', cursor:'pointer', fontWeight:'600'}}>Resend OTP</span>
                  </p>
                </div>
              )}

              {!otpSent && (
                <div style={{background:'#eff6ff', border:'1.5px solid #bfdbfe', borderRadius:'12px', padding:'12px 16px', marginBottom:'20px', display:'flex', gap:'10px', alignItems:'center'}}>
                  <span style={{fontSize:'18px'}}>📱</span>
                  <p style={{fontSize:'12px', color:'#1d4ed8', margin:0, lineHeight:'1.5'}}>We'll send a 4-digit OTP to verify it's you. No password needed!</p>
                </div>
              )}

              <button
                onClick={() => setOtpSent(true)}
                style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                {otpSent ? "Verify OTP & Login →" : "Send OTP →"}
              </button>
            </>
          )}

          {/* ======= CONSULTANT LOGIN ======= */}
          {role === "consultant" && (
            <>
              <div style={{marginBottom:'20px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Email Address</label>
                <input type="email" placeholder="yourname@gmail.com" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{marginBottom:'8px'}}>
                <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Password</label>
                <input type="password" placeholder="Enter your password" style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}/>
              </div>

              <div style={{textAlign:'right', marginBottom:'24px'}}>
                <a href="#" style={{fontSize:'12px', color:'#f97316', textDecoration:'none', fontWeight:'600'}}>Forgot password?</a>
              </div>

              <button style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
                Login to Dashboard →
              </button>
            </>
          )}

          <p style={{fontSize:'12px', color:'#9ca3af', textAlign:'center', marginTop:'20px', lineHeight:'1.6'}}>
            By logging in you agree to our{' '}
            <a href="#" style={{color:'#f97316', textDecoration:'none'}}>Terms of Service</a>
          </p>

        </div>

        <p style={{textAlign:'center', fontSize:'14px', color:'#6b7280', marginTop:'24px'}}>
          Don't have an account?{' '}
          <a href="/signup" style={{color:'#f97316', fontWeight:'700', textDecoration:'none'}}>Sign up free</a>
        </p>

      </div>
    </main>
  )
}