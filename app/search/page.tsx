"use client";
import { useState } from "react";

const consultants = [
  { id:1, name:"Rajesh Kumar Singh", category:"⚖️ Legal Consultation", bio:"10+ years in property law, family disputes & criminal matters.", rating:4.9, reviews:127, sessions:230, fee:800, duration:60, languages:["Hindi","English"], verified:true },
  { id:2, name:"Priya Sharma", category:"🎯 Career Guidance", bio:"Ex-Google HR. Helped 500+ professionals switch careers and land dream jobs.", rating:4.8, reviews:98, sessions:180, fee:600, duration:45, languages:["Hindi","English"], verified:true },
  { id:3, name:"Dr. Amit Verma", category:"💊 Medical Guidance", bio:"MBBS, MD. 15 years experience. Second opinions and treatment guidance.", rating:4.9, reviews:210, sessions:420, fee:1200, duration:30, languages:["Hindi","English"], verified:true },
  { id:4, name:"Sandeep Mehta", category:"🚀 Startup & Business", bio:"Serial entrepreneur. 3 successful exits. Mentor at IIM Ahmedabad.", rating:4.7, reviews:64, sessions:95, fee:2000, duration:60, languages:["English"], verified:true },
  { id:5, name:"Neha Gupta", category:"🧠 Mental Health", bio:"Licensed psychologist. 8 years experience in stress, anxiety & counselling.", rating:5.0, reviews:143, sessions:310, fee:700, duration:60, languages:["Hindi","English"], verified:true },
  { id:6, name:"Vikram Joshi", category:"💰 Finance & Tax", bio:"CA with 12 years experience. Tax filing, investments and financial planning.", rating:4.6, reviews:87, sessions:160, fee:500, duration:45, languages:["Hindi","English","Gujarati"], verified:true },
  { id:7, name:"Ananya Roy", category:"🎥 Content & Creator", bio:"1M+ YouTube subscribers. Expert in content strategy and brand deals.", rating:4.8, reviews:72, sessions:130, fee:900, duration:60, languages:["Hindi","English","Bengali"], verified:true },
  { id:8, name:"Rohit Pandey", category:"📚 Academic & JEE/NEET", bio:"IIT Delhi alumnus. Helped 200+ students crack JEE and NEET.", rating:4.9, reviews:189, sessions:350, fee:400, duration:60, languages:["Hindi","English"], verified:true },
  { id:9, name:"Adv. Sunita Krishnan", category:"⚖️ Legal Consultation", bio:"Family law specialist. 15 years experience in divorce and custody cases.", rating:4.7, reviews:93, sessions:175, fee:1000, duration:60, languages:["Hindi","English","Tamil"], verified:true },
  { id:10, name:"Karan Malhotra", category:"💻 Tech & Coding", bio:"Full stack developer. Ex-Amazon. Career guidance for tech professionals.", rating:4.8, reviews:56, sessions:88, fee:800, duration:60, languages:["Hindi","English"], verified:true },
  { id:11, name:"Dr. Fatima Sheikh", category:"🏥 Patient Advocacy", bio:"Helps patients navigate hospitals, insurance claims and treatment options.", rating:4.9, reviews:67, sessions:120, fee:600, duration:45, languages:["Hindi","English","Urdu"], verified:true },
  { id:12, name:"Suresh Nair", category:"🎓 Study Abroad", bio:"Placed 300+ students in top universities. Visa, SOP and scholarship expert.", rating:4.7, reviews:112, sessions:200, fee:700, duration:60, languages:["Hindi","English","Malayalam"], verified:true },
];

const categories = ["All", "⚖️ Legal Consultation", "🎯 Career Guidance", "💊 Medical Guidance", "🚀 Startup & Business", "🧠 Mental Health", "💰 Finance & Tax", "🎥 Content & Creator", "📚 Academic & JEE/NEET", "💻 Tech & Coding", "🏥 Patient Advocacy", "🎓 Study Abroad"];

export default function Search() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("rating");
  const [maxFee, setMaxFee] = useState(2000);

  const filtered = consultants
    .filter(c => category === "All" || c.category === category)
    .filter(c => c.fee <= maxFee)
    .filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.bio.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "fee_low") return a.fee - b.fee;
      if (sort === "fee_high") return b.fee - a.fee;
      if (sort === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <main style={{minHeight:'100vh', background:'#f9fafb'}}>

      {/* NAVBAR */}
      <nav style={{background:'#ffffff', borderBottom:'1px solid #f3f4f6', padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10, boxShadow:'0 1px 4px rgba(0,0,0,0.04)'}}>
        <a href="/" style={{fontSize:'22px', fontWeight:'800', color:'#f97316', textDecoration:'none'}}>MentorBridge</a>
        <div style={{display:'flex', gap:'10px'}}>
          <a href="/login" style={{padding:'9px 18px', borderRadius:'99px', border:'1.5px solid #e5e7eb', fontSize:'13px', fontWeight:'600', color:'#374151', textDecoration:'none'}}>Login</a>
          <a href="/signup" style={{padding:'9px 18px', borderRadius:'99px', background:'#f97316', fontSize:'13px', fontWeight:'600', color:'white', textDecoration:'none'}}>Sign Up</a>
        </div>
      </nav>

      {/* SEARCH HERO */}
      <div style={{background:'linear-gradient(135deg, #fff7ed, #ffedd5)', padding:'32px 20px', borderBottom:'1px solid #fed7aa'}}>
        <div style={{maxWidth:'700px', margin:'0 auto', textAlign:'center'}}>
          <h1 style={{fontSize:'28px', fontWeight:'800', color:'#111827', marginBottom:'8px'}}>Find Your Perfect Consultant</h1>
          <p style={{fontSize:'14px', color:'#6b7280', marginBottom:'20px'}}>Browse 500+ verified experts across 12 categories</p>

          {/* SEARCH BOX */}
          {/* SEARCH BOX */}
{/* SEARCH BOX */}
<div style={{background:'white', borderRadius:'16px', border:'1.5px solid #fed7aa', boxShadow:'0 4px 12px rgba(249,115,22,0.1)', padding:'8px', display:'flex', flexWrap:'wrap', gap:'8px', alignItems:'center'}}>
  <span style={{fontSize:'18px', padding:'0 8px'}}>🔍</span>
  <input
    type="text"
    placeholder="Search by name, category or topic..."
    value={search}
    onChange={e => setSearch(e.target.value)}
    style={{flex:1, minWidth:'200px', border:'none', outline:'none', fontSize:'14px', background:'transparent', color:'#111827', padding:'10px 0'}}
  />
  <button style={{padding:'12px 24px', background:'#f97316', color:'white', borderRadius:'12px', border:'none', fontWeight:'700', fontSize:'14px', cursor:'pointer', whiteSpace:'nowrap'}}>
    Search
  </button>
</div>
        </div>
      </div>

      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'24px 16px'}}>

        {/* CATEGORY PILLS */}
        <div style={{display:'flex', gap:'8px', overflowX:'auto', paddingBottom:'12px', marginBottom:'20px', scrollbarWidth:'none'}}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{padding:'8px 16px', borderRadius:'99px', border:'1.5px solid', borderColor: category === cat ? '#f97316' : '#e5e7eb', background: category === cat ? '#fff7ed' : 'white', color: category === cat ? '#f97316' : '#6b7280', fontSize:'12px', fontWeight:'600', cursor:'pointer', whiteSpace:'nowrap', transition:'all 0.2s'}}>
              {cat}
            </button>
          ))}
        </div>

        {/* FILTERS ROW */}
        <div style={{display:'flex', gap:'12px', alignItems:'center', marginBottom:'20px', flexWrap:'wrap'}}>
          <div style={{fontSize:'13px', color:'#6b7280', fontWeight:'500'}}>
            <span style={{color:'#f97316', fontWeight:'700'}}>{filtered.length}</span> consultants found
          </div>
          <div style={{flex:1}}></div>

          {/* MAX FEE */}
          <div style={{display:'flex', alignItems:'center', gap:'8px', background:'white', padding:'10px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb'}}>
            <span style={{fontSize:'12px', color:'#6b7280', whiteSpace:'nowrap'}}>Max fee: <strong style={{color:'#f97316'}}>₹{maxFee}</strong></span>
            <input type="range" min="300" max="2000" step="100" value={maxFee} onChange={e => setMaxFee(+e.target.value)} style={{width:'80px', accentColor:'#f97316'}}/>
          </div>

          {/* SORT */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{padding:'10px 16px', borderRadius:'12px', border:'1.5px solid #e5e7eb', fontSize:'13px', fontWeight:'600', color:'#374151', background:'white', outline:'none', cursor:'pointer'}}>
            <option value="rating">Top Rated</option>
            <option value="fee_low">Price: Low to High</option>
            <option value="fee_high">Price: High to Low</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>

        {/* CONSULTANT CARDS */}
        {filtered.length === 0 ? (
          <div style={{textAlign:'center', padding:'60px 20px'}}>
            <div style={{fontSize:'48px', marginBottom:'16px'}}>🔍</div>
            <h3 style={{fontSize:'18px', fontWeight:'700', color:'#111827', marginBottom:'8px'}}>No consultants found</h3>
            <p style={{fontSize:'14px', color:'#6b7280'}}>Try adjusting your filters or search term</p>
          </div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap:'16px'}}>
            {filtered.map(c => (
              
                <a key={c.id} href={`/consultant/${c.id}`} style={{textDecoration:'none'}}>
              
                <div style={{background:'white', borderRadius:'20px', padding:'20px', border:'1px solid #f3f4f6', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', cursor:'pointer', transition:'all 0.2s', display:'flex', flexDirection:'column', gap:'12px'}}>

                  {/* TOP ROW */}
                  <div style={{display:'flex', gap:'14px', alignItems:'flex-start'}}>
                    <div style={{width:'56px', height:'56px', borderRadius:'50%', background:'linear-gradient(135deg, #f97316, #fb923c)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', flexShrink:0}}>
                      👤
                    </div>
                    <div style={{flex:1}}>
                      <div style={{display:'flex', alignItems:'center', gap:'6px', marginBottom:'4px', flexWrap:'wrap'}}>
                        <span style={{fontSize:'15px', fontWeight:'700', color:'#111827'}}>{c.name}</span>
                        {c.verified && <span style={{fontSize:'10px', background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:'99px', padding:'2px 8px', color:'#16a34a', fontWeight:'600'}}>✅ Verified</span>}
                      </div>
                      <div style={{fontSize:'11px', background:'#fff7ed', border:'1px solid #fed7aa', borderRadius:'99px', padding:'2px 10px', color:'#f97316', fontWeight:'600', display:'inline-block', marginBottom:'6px'}}>
                        {c.category}
                      </div>
                      <p style={{fontSize:'12px', color:'#6b7280', margin:0, lineHeight:'1.5'}}>{c.bio}</p>
                    </div>
                  </div>

                  {/* STATS ROW */}
                  <div style={{display:'flex', gap:'16px', padding:'10px 0', borderTop:'1px solid #f9fafb', borderBottom:'1px solid #f9fafb'}}>
                    <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                      <span>⭐</span>
                      <span style={{fontSize:'13px', fontWeight:'700', color:'#111827'}}>{c.rating}</span>
                      <span style={{fontSize:'11px', color:'#9ca3af'}}>({c.reviews})</span>
                    </div>
                    <div style={{fontSize:'12px', color:'#6b7280'}}>📅 {c.sessions} sessions</div>
                    <div style={{fontSize:'12px', color:'#6b7280'}}>⏱ {c.duration} min</div>
                  </div>

                  {/* BOTTOM ROW */}
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>
                      <span style={{fontSize:'20px', fontWeight:'800', color:'#f97316'}}>₹{c.fee}</span>
                      <span style={{fontSize:'11px', color:'#9ca3af'}}> / session</span>
                    </div>
                    <button style={{padding:'10px 20px', background:'#f97316', color:'white', borderRadius:'12px', border:'none', fontWeight:'700', fontSize:'13px', cursor:'pointer', boxShadow:'0 2px 8px rgba(249,115,22,0.25)'}}>
                      View Profile →
                    </button>
                  </div>

                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}