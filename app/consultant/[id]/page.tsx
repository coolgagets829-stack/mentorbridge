export default function ConsultantProfile() {
  return (
    <main style={{minHeight:'100vh', background:'#f9fafb'}}>

      {/* NAVBAR */}
      <nav style={{background:'#ffffff', borderBottom:'1px solid #f3f4f6', padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <a href="/" style={{fontSize:'22px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
        <div style={{display:'flex', gap:'12px'}}>
          <a href="/login" style={{padding:'10px 20px', borderRadius:'99px', border:'1.5px solid #e5e7eb', fontSize:'13px', fontWeight:'600', color:'#374151', textDecoration:'none'}}>Login</a>
          <a href="/signup" style={{padding:'10px 20px', borderRadius:'99px', background:'#f97316', fontSize:'13px', fontWeight:'600', color:'white', textDecoration:'none'}}>Sign Up</a>
        </div>
      </nav>

      <div style={{maxWidth:'900px', margin:'0 auto', padding:'32px 16px'}}>

        {/* BACK */}
        <a href="/" style={{fontSize:'13px', color:'#6b7280', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'6px', marginBottom:'24px'}}>← Back to search</a>

        {/* TOP CARD */}
        <div style={{background:'#ffffff', borderRadius:'24px', padding:'32px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.06)', marginBottom:'20px'}}>
          <div style={{display:'flex', gap:'24px', flexWrap:'wrap'}}>

            {/* PHOTO */}
            <div style={{width:'100px', height:'100px', borderRadius:'50%', background:'linear-gradient(135deg, #f97316, #fb923c)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'36px', flexShrink:0}}>
              👨‍💼
            </div>

            {/* INFO */}
            <div style={{flex:1, minWidth:'200px'}}>
              <div style={{display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap', marginBottom:'8px'}}>
                <h1 style={{fontSize:'24px', fontWeight:'800', color:'#111827', margin:0}}>Rajesh Kumar Singh</h1>
                <div style={{background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:'99px', padding:'4px 12px', fontSize:'11px', fontWeight:'700', color:'#16a34a'}}>✅ Verified</div>
              </div>

              <div style={{display:'inline-block', background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'99px', padding:'4px 14px', fontSize:'12px', fontWeight:'600', color:'#f97316', marginBottom:'12px'}}>
                ⚖️ Legal Consultation
              </div>

              <p style={{fontSize:'14px', color:'#6b7280', margin:'0 0 12px', lineHeight:'1.6'}}>
                10+ years experience in property law, family disputes & criminal matters. High Court advocate based in Delhi.
              </p>

              {/* STATS */}
              <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                  <span style={{fontSize:'16px'}}>⭐</span>
                  <span style={{fontSize:'14px', fontWeight:'700', color:'#111827'}}>4.9</span>
                  <span style={{fontSize:'13px', color:'#9ca3af'}}>(127 reviews)</span>
                </div>
                <div style={{fontSize:'13px', color:'#6b7280'}}>📅 230 sessions done</div>
                <div style={{fontSize:'13px', color:'#6b7280'}}>🗣️ Hindi, English</div>
              </div>
            </div>

            {/* BOOK BOX */}
            <div style={{background:'#fff7ed', border:'1.5px solid #fed7aa', borderRadius:'20px', padding:'24px', minWidth:'200px', textAlign:'center'}}>
              <div style={{fontSize:'12px', color:'#9ca3af', marginBottom:'4px'}}>Session fee</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#f97316', marginBottom:'4px'}}>₹800</div>
              <div style={{fontSize:'12px', color:'#6b7280', marginBottom:'16px'}}>per 60 min session</div>
              <button style={{width:'100%', padding:'14px', background:'#f97316', color:'white', borderRadius:'14px', fontWeight:'700', fontSize:'14px', border:'none', cursor:'pointer', boxShadow:'0 4px 12px rgba(249,115,22,0.3)', marginBottom:'10px'}}>
                Book a Session
              </button>
              <button style={{width:'100%', padding:'12px', background:'white', color:'#f97316', borderRadius:'14px', fontWeight:'600', fontSize:'13px', border:'1.5px solid #fed7aa', cursor:'pointer'}}>
                💬 Send Message
              </button>
            </div>

          </div>
        </div>

        {/* TWO COLUMN */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 340px', gap:'20px', alignItems:'start'}}>

          {/* LEFT */}
          <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>

            {/* EXPERIENCE */}
            <div style={{background:'#ffffff', borderRadius:'20px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <h2 style={{fontSize:'16px', fontWeight:'700', color:'#111827', marginBottom:'14px'}}>📖 Experience</h2>
              <p style={{fontSize:'14px', color:'#6b7280', lineHeight:'1.8', margin:0}}>
                I have been practicing law for over 10 years, specialising in property disputes, family law, and criminal defence. I have represented clients in Delhi High Court, district courts, and consumer forums. My approach is to explain legal matters in simple language so clients can make informed decisions without feeling overwhelmed.
              </p>
            </div>

            {/* ACHIEVEMENTS */}
            <div style={{background:'#ffffff', borderRadius:'20px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <h2 style={{fontSize:'16px', fontWeight:'700', color:'#111827', marginBottom:'14px'}}>🏆 Achievements</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                {[
                  'Bar Council of Delhi — Registered Advocate since 2014',
                  'Won 200+ property dispute cases in Delhi NCR',
                  'Featured in Legal India Magazine 2022',
                  'LLB from Delhi University, LLM from Symbiosis Law School',
                ].map((a) => (
                  <div key={a} style={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                    <span style={{color:'#f97316', marginTop:'2px'}}>✦</span>
                    <span style={{fontSize:'14px', color:'#6b7280', lineHeight:'1.6'}}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS */}
            <div style={{background:'#ffffff', borderRadius:'20px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
                <h2 style={{fontSize:'16px', fontWeight:'700', color:'#111827', margin:0}}>⭐ Reviews</h2>
                <div style={{background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'99px', padding:'4px 14px', fontSize:'13px', fontWeight:'700', color:'#f97316'}}>4.9 / 5</div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                {[
                  { name:'Amit Sharma', rating:'⭐⭐⭐⭐⭐', text:'Rajesh sir explained everything about my property case very clearly. Got a resolution within 2 months. Highly recommended!', time:'2 weeks ago' },
                  { name:'Priya Verma', rating:'⭐⭐⭐⭐⭐', text:'Very professional and knowledgeable. He helped us with our family dispute and was very patient throughout the process.', time:'1 month ago' },
                  { name:'Suresh Gupta', rating:'⭐⭐⭐⭐', text:'Good consultation. Gave very practical advice for my FIR case. Will consult again if needed.', time:'2 months ago' },
                ].map((r) => (
                  <div key={r.name} style={{borderBottom:'1px solid #f3f4f6', paddingBottom:'16px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'6px'}}>
                      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                        <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:'700', color:'#6b7280'}}>
                          {r.name[0]}
                        </div>
                        <div>
                          <div style={{fontSize:'13px', fontWeight:'600', color:'#111827'}}>{r.name}</div>
                          <div style={{fontSize:'11px', color:'#9ca3af'}}>{r.time}</div>
                        </div>
                      </div>
                      <div style={{fontSize:'12px'}}>{r.rating}</div>
                    </div>
                    <p style={{fontSize:'13px', color:'#6b7280', lineHeight:'1.6', margin:0}}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>

            {/* SESSION DETAILS */}
            <div style={{background:'#ffffff', borderRadius:'20px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <h2 style={{fontSize:'16px', fontWeight:'700', color:'#111827', marginBottom:'16px'}}>📋 Session Details</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                {[
                  { label:'Duration', value:'60 minutes' },
                  { label:'Session type', value:'📹 Video Call' },
                  { label:'Languages', value:'Hindi, English' },
                  { label:'Response time', value:'Within 2 hours' },
                ].map((item) => (
                  <div key={item.label} style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:'12px', borderBottom:'1px solid #f9fafb'}}>
                    <span style={{fontSize:'13px', color:'#9ca3af'}}>{item.label}</span>
                    <span style={{fontSize:'13px', fontWeight:'600', color:'#374151'}}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div style={{background:'#ffffff', borderRadius:'20px', padding:'24px', border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <h2 style={{fontSize:'16px', fontWeight:'700', color:'#111827', marginBottom:'16px'}}>📅 Availability</h2>
              <div style={{display:'flex', flexWrap:'wrap', gap:'8px'}}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} style={{padding:'6px 14px', borderRadius:'99px', background:'#f0fdf4', border:'1px solid #bbf7d0', fontSize:'12px', fontWeight:'600', color:'#16a34a'}}>{day}</div>
                ))}
                <div style={{padding:'6px 14px', borderRadius:'99px', background:'#f9fafb', border:'1px solid #e5e7eb', fontSize:'12px', fontWeight:'600', color:'#9ca3af'}}>Sun</div>
              </div>
              <div style={{marginTop:'14px', background:'#fff7ed', borderRadius:'12px', padding:'12px 14px'}}>
                <p style={{fontSize:'12px', color:'#f97316', fontWeight:'600', margin:'0 0 2px'}}>Next available slot</p>
                <p style={{fontSize:'13px', color:'#374151', margin:0, fontWeight:'500'}}>Today, 4:00 PM — 5:00 PM</p>
              </div>
            </div>

            {/* SAFE PAYMENT */}
            <div style={{background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:'20px', padding:'20px'}}>
              <p style={{fontSize:'13px', fontWeight:'700', color:'#166534', marginBottom:'8px'}}>🔒 Safe & Secure Booking</p>
              <p style={{fontSize:'12px', color:'#16a34a', lineHeight:'1.6', margin:0}}>Your payment is held securely until your session is complete. Full refund if consultant doesn't show up.</p>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}