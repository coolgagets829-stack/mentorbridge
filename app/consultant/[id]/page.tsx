export default function ConsultantProfile() {
  return (
    <main style={{minHeight:'100vh', background:'#f9fafb'}}>

      {/* NAVBAR */}
      <nav style={{background:'#ffffff', borderBottom:'1px solid #f3f4f6', padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <a href="/" style={{fontSize:'22px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
        <div style={{display:'flex', gap:'10px'}}>
          <a href="/login" style={{padding:'9px 18px', borderRadius:'99px', border:'1.5px solid #e5e7eb', fontSize:'13px', fontWeight:'600', color:'#374151', textDecoration:'none'}}>Login</a>
          <a href="/signup" style={{padding:'9px 18px', borderRadius:'99px', background:'#f97316', fontSize:'13px', fontWeight:'600', color:'white', textDecoration:'none'}}>Sign Up</a>
        </div>
      </nav>

      <div style={{maxWidth:'680px', margin:'0 auto', padding:'20px 16px 40px'}}>

        {/* BACK */}
        <a href="/" style={{fontSize:'13px', color:'#6b7280', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'6px', marginBottom:'20px'}}>← Back to search</a>

        {/* PROFILE CARD */}
        <div style={{background:'#ffffff', borderRadius:'24px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.06)', marginBottom:'16px'}}>

          {/* PHOTO + NAME */}
          <div style={{display:'flex', gap:'16px', alignItems:'flex-start', marginBottom:'16px'}}>
            <div style={{width:'80px', height:'80px', borderRadius:'50%', background:'linear-gradient(135deg, #f97316, #fb923c)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', flexShrink:0}}>
              👨‍💼
            </div>
            <div style={{flex:1}}>
              <div style={{display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'6px'}}>
                <h1 style={{fontSize:'20px', fontWeight:'800', color:'#111827', margin:0}}>Rajesh Kumar Singh</h1>
                <div style={{background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:'99px', padding:'3px 10px', fontSize:'11px', fontWeight:'700', color:'#16a34a'}}>✅ Verified</div>
              </div>
              <div style={{display:'inline-block', background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'99px', padding:'3px 12px', fontSize:'11px', fontWeight:'600', color:'#f97316', marginBottom:'10px'}}>
                ⚖️ Legal Consultation
              </div>
              <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                  <span>⭐</span>
                  <span style={{fontSize:'14px', fontWeight:'700', color:'#111827'}}>4.9</span>
                  <span style={{fontSize:'12px', color:'#9ca3af'}}>(127)</span>
                </div>
                <div style={{fontSize:'12px', color:'#6b7280'}}>📅 230 sessions</div>
                <div style={{fontSize:'12px', color:'#6b7280'}}>🗣️ Hindi, English</div>
              </div>
            </div>
          </div>

          <p style={{fontSize:'14px', color:'#6b7280', margin:'0 0 20px', lineHeight:'1.7'}}>
            10+ years experience in property law, family disputes & criminal matters. High Court advocate based in Delhi.
          </p>

          {/* FEE + BUTTONS */}
          <div style={{background:'#fff7ed', border:'1.5px solid #fed7aa', borderRadius:'18px', padding:'20px', textAlign:'center'}}>
            <div style={{fontSize:'12px', color:'#9ca3af', marginBottom:'4px'}}>Session fee</div>
            <div style={{fontSize:'36px', fontWeight:'800', color:'#f97316', marginBottom:'4px'}}>₹800</div>
            <div style={{fontSize:'12px', color:'#6b7280', marginBottom:'16px'}}>per 60 min session</div>
            <button style={{width:'100%', padding:'15px', background:'#f97316', color:'white', borderRadius:'14px', fontWeight:'700', fontSize:'15px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)', marginBottom:'10px'}}>
              📅 Book a Session
            </button>
            <button style={{width:'100%', padding:'13px', background:'white', color:'#f97316', borderRadius:'14px', fontWeight:'600', fontSize:'14px', border:'1.5px solid #fed7aa', cursor:'pointer'}}>
              💬 Send Message
            </button>
          </div>
        </div>

        {/* SESSION DETAILS */}
        <div style={{background:'#ffffff', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:'16px'}}>
          <h2 style={{fontSize:'15px', fontWeight:'700', color:'#111827', marginBottom:'14px'}}>📋 Session Details</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
            {[
              { label:'⏱ Duration', value:'60 minutes' },
              { label:'📹 Session type', value:'Video Call' },
              { label:'🗣️ Languages', value:'Hindi, English' },
              { label:'⚡ Response time', value:'Within 2 hours' },
            ].map((item) => (
              <div key={item.label} style={{background:'#f9fafb', borderRadius:'12px', padding:'12px'}}>
                <div style={{fontSize:'11px', color:'#9ca3af', marginBottom:'4px'}}>{item.label}</div>
                <div style={{fontSize:'13px', fontWeight:'600', color:'#374151'}}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AVAILABILITY */}
        <div style={{background:'#ffffff', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:'16px'}}>
          <h2 style={{fontSize:'15px', fontWeight:'700', color:'#111827', marginBottom:'14px'}}>📅 Availability</h2>
          <div style={{display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'14px'}}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} style={{padding:'6px 14px', borderRadius:'99px', background:'#f0fdf4', border:'1px solid #bbf7d0', fontSize:'12px', fontWeight:'600', color:'#16a34a'}}>{day}</div>
            ))}
            <div style={{padding:'6px 14px', borderRadius:'99px', background:'#f9fafb', border:'1px solid #e5e7eb', fontSize:'12px', fontWeight:'600', color:'#9ca3af'}}>Sun</div>
          </div>
          <div style={{background:'#fff7ed', borderRadius:'12px', padding:'12px 14px'}}>
            <p style={{fontSize:'12px', color:'#f97316', fontWeight:'600', margin:'0 0 2px'}}>Next available slot</p>
            <p style={{fontSize:'13px', color:'#374151', margin:0, fontWeight:'500'}}>Today, 4:00 PM — 5:00 PM</p>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div style={{background:'#ffffff', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:'16px'}}>
          <h2 style={{fontSize:'15px', fontWeight:'700', color:'#111827', marginBottom:'12px'}}>📖 Experience</h2>
          <p style={{fontSize:'14px', color:'#6b7280', lineHeight:'1.8', margin:0}}>
            I have been practicing law for over 10 years, specialising in property disputes, family law, and criminal defence. I have represented clients in Delhi High Court, district courts, and consumer forums. My approach is to explain legal matters in simple language so clients can make informed decisions without feeling overwhelmed.
          </p>
        </div>

        {/* ACHIEVEMENTS */}
        <div style={{background:'#ffffff', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:'16px'}}>
          <h2 style={{fontSize:'15px', fontWeight:'700', color:'#111827', marginBottom:'14px'}}>🏆 Achievements</h2>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            {[
              'Bar Council of Delhi — Registered Advocate since 2014',
              'Won 200+ property dispute cases in Delhi NCR',
              'Featured in Legal India Magazine 2022',
              'LLB from Delhi University, LLM from Symbiosis Law School',
            ].map((a) => (
              <div key={a} style={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                <span style={{color:'#f97316', marginTop:'2px', flexShrink:0}}>✦</span>
                <span style={{fontSize:'14px', color:'#6b7280', lineHeight:'1.6'}}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS */}
        <div style={{background:'#ffffff', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:'16px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'18px'}}>
            <h2 style={{fontSize:'15px', fontWeight:'700', color:'#111827', margin:0}}>⭐ Reviews</h2>
            <div style={{background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'99px', padding:'4px 12px', fontSize:'13px', fontWeight:'700', color:'#f97316'}}>4.9 / 5</div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            {[
              { name:'Amit Sharma', rating:'⭐⭐⭐⭐⭐', text:'Rajesh sir explained everything about my property case very clearly. Got a resolution within 2 months. Highly recommended!', time:'2 weeks ago' },
              { name:'Priya Verma', rating:'⭐⭐⭐⭐⭐', text:'Very professional and knowledgeable. He helped us with our family dispute and was very patient throughout the process.', time:'1 month ago' },
              { name:'Suresh Gupta', rating:'⭐⭐⭐⭐', text:'Good consultation. Gave very practical advice for my FIR case. Will consult again if needed.', time:'2 months ago' },
            ].map((r) => (
              <div key={r.name} style={{borderBottom:'1px solid #f3f4f6', paddingBottom:'16px'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <div style={{width:'34px', height:'34px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:'700', color:'#6b7280', flexShrink:0}}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{fontSize:'13px', fontWeight:'600', color:'#111827'}}>{r.name}</div>
                      <div style={{fontSize:'11px', color:'#9ca3af'}}>{r.time}</div>
                    </div>
                  </div>
                  <div style={{fontSize:'11px'}}>{r.rating}</div>
                </div>
                <p style={{fontSize:'13px', color:'#6b7280', lineHeight:'1.6', margin:0}}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SAFE PAYMENT */}
        <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'20px', padding:'18px 20px', marginBottom:'16px'}}>
          <p style={{fontSize:'13px', fontWeight:'700', color:'#166534', marginBottom:'6px'}}>🔒 Safe & Secure Booking</p>
          <p style={{fontSize:'12px', color:'#16a34a', lineHeight:'1.6', margin:0}}>Your payment is held securely until your session is complete. Full refund if consultant doesn't show up.</p>
        </div>

        {/* BOTTOM SPACE FOR STICKY BUTTON ON MOBILE */}
        <div className="mobile-only" style={{height:'80px'}}></div>

      </div>

      {/* STICKY BOOK BUTTON — MOBILE ONLY */}
      <div className="mobile-only" style={{position:'fixed', bottom:0, left:0, right:0, background:'white', borderTop:'1px solid #f3f4f6', padding:'16px', zIndex:20}}>
        <button style={{width:'100%', padding:'16px', background:'#f97316', color:'white', borderRadius:'16px', fontWeight:'700', fontSize:'16px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)'}}>
          📅 Book a Session — ₹800
        </button>
      </div>

    </main>
  )
}