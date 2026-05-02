export default function SignUp() {
  return (
    <main style={{minHeight:'100vh', background:'#fff7ed', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px'}}>
      <div style={{width:'100%', maxWidth:'460px'}}>

        {/* LOGO */}
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <a href="/" style={{fontSize:'28px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
          <p style={{color:'#6b7280', fontSize:'14px', marginTop:'8px'}}>Create your free account in seconds</p>
        </div>

        {/* CARD */}
        <div style={{background:'#ffffff', borderRadius:'24px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)', padding:'32px', border:'1px solid #f3f4f6'}}>

          {/* WHO ARE YOU */}
          <p style={{fontSize:'13px', fontWeight:'700', color:'#374151', marginBottom:'12px'}}>I want to join as</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px'}}>
            <div style={{padding:'16px', borderRadius:'16px', border:'2px solid #f97316', background:'#fff7ed', textAlign:'center', cursor:'pointer'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🔍</div>
              <div style={{fontSize:'13px', fontWeight:'700', color:'#f97316'}}>Find a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I need guidance</div>
            </div>
            <div style={{padding:'16px', borderRadius:'16px', border:'2px solid #e5e7eb', background:'#f9fafb', textAlign:'center', cursor:'pointer'}}>
              <div style={{fontSize:'24px', marginBottom:'6px'}}>🎓</div>
              <div style={{fontSize:'13px', fontWeight:'700', color:'#6b7280'}}>Be a Consultant</div>
              <div style={{fontSize:'11px', color:'#9ca3af', marginTop:'4px'}}>I want to guide others</div>
            </div>
          </div>

          {/* DIVIDER */}
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px'}}>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
            <span style={{fontSize:'12px', color:'#9ca3af'}}>Fill your details below</span>
            <div style={{flex:1, height:'1px', background:'#f3f4f6'}}></div>
          </div>

          {/* FULL NAME */}
          <div style={{marginBottom:'20px'}}>
            <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}
            />
          </div>

          {/* EMAIL */}
          <div style={{marginBottom:'20px'}}>
            <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Email Address</label>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}
            />
          </div>

          {/* PHONE */}
          <div style={{marginBottom:'20px'}}>
            <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Phone Number</label>
            <div style={{display:'flex', gap:'10px'}}>
              <div style={{padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f3f4f6', fontWeight:'700', color:'#374151'}}>+91</div>
              <input
                type="tel"
                placeholder="10 digit mobile number"
                style={{flex:1, padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none'}}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div style={{marginBottom:'28px'}}>
            <label style={{fontSize:'12px', fontWeight:'600', color:'#374151', display:'block', marginBottom:'8px'}}>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              style={{width:'100%', padding:'14px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'14px', background:'#f9fafb', outline:'none', boxSizing:'border-box'}}
            />
          </div>

          {/* BUTTON */}
          <button style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
            Create My Account →
          </button>

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