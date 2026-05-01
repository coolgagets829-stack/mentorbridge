export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 sticky top-0 bg-white z-10 shadow-sm">
        <div className="text-2xl font-bold text-orange-500">MentorBridge</div>
        <div className="flex gap-8 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-orange-500">Find Consultants</a>
          <a href="#" className="hover:text-orange-500">Become a Consultant</a>
          <a href="#" className="hover:text-orange-500">How it Works</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-full hover:border-orange-400">Login</button>
          <button className="px-4 py-2 text-sm text-white bg-orange-500 rounded-full hover:bg-orange-600">Sign Up Free</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-6">
          ✅ 100% Verified Consultants — Trusted by thousands
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Expert Consultation<br />for Every Challenge
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Whether you are a student, professional, doctor, entrepreneur or facing a legal issue — connect with a verified expert consultant and get the right guidance in minutes.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600">
            Find a Consultant
          </button>
          <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-orange-400">
            Become a Consultant
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-6">Join 2,000+ people already getting expert guidance on MentorBridge</p>

        {/* TRUST BADGES */}
        <div className="flex justify-center gap-10 mt-14 flex-wrap">
          {[
            { num: "500+", label: "Verified Consultants" },
            { num: "2000+", label: "Sessions Completed" },
            { num: "4.8★", label: "Average Rating" },
            { num: "100%", label: "Secure Payments" },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="text-2xl font-extrabold text-orange-500">{b.num}</div>
              <div className="text-sm text-gray-500 mt-1">{b.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Consult an Expert in Any Field</h2>
          <p className="text-gray-500 text-lg">From career confusion to legal issues — we have a verified consultant for every situation</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            { emoji: "⚖️", title: "Legal Consultation", count: "42 consultants", desc: "Property, family, criminal, business law & more", hot: true },
            { emoji: "🎯", title: "Career Guidance", count: "48 consultants", desc: "Career switch, resume, interview prep" },
            { emoji: "📚", title: "Academic & JEE/NEET", count: "35 consultants", desc: "Exam strategy, college selection, study plans" },
            { emoji: "🚀", title: "Startup & Business", count: "28 consultants", desc: "Business plan, funding, market strategy" },
            { emoji: "💊", title: "Medical Guidance", count: "22 consultants", desc: "Second opinions, treatment options, health plans" },
            { emoji: "🧠", title: "Mental Health", count: "19 consultants", desc: "Stress, anxiety, counselling & therapy" },
            { emoji: "💰", title: "Finance & Tax", count: "31 consultants", desc: "Tax filing, investments, financial planning" },
            { emoji: "🎥", title: "Content & Creator", count: "25 consultants", desc: "YouTube, Instagram growth, brand deals" },
            { emoji: "💻", title: "Tech & Coding", count: "33 consultants", desc: "Web dev, app dev, tech career roadmap" },
            { emoji: "🏥", title: "Patient Advocacy", count: "14 consultants", desc: "Navigate hospitals, insurance, treatment options" },
            { emoji: "🎓", title: "Study Abroad", count: "17 consultants", desc: "Visa, university selection, SOP writing" },
            { emoji: "🏗️", title: "HR & Workplace", count: "16 consultants", desc: "Job disputes, workplace issues, salary negotiation" },
          ].map((cat) => (
            <div key={cat.title} className={`bg-white rounded-2xl p-5 border cursor-pointer transition hover:shadow-lg hover:border-orange-300 relative ${cat.hot ? 'border-orange-300 shadow-md' : 'border-gray-100'}`}>
              {cat.hot && (
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">Popular</div>
              )}
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <div className="font-bold text-gray-800 text-sm mb-1">{cat.title}</div>
              <div className="text-xs text-gray-400 mb-2">{cat.count}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEGAL SECTION — special highlight */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚖️</span>
            <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">New Category</div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Legal Consultation — Now Available</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl">Confused about a legal issue? Get private, affordable consultation from verified lawyers and legal advisors — without the complexity of traditional law firms.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {[
              { icon: "🏠", label: "Property & Land Disputes" },
              { icon: "👨‍👩‍👧", label: "Family & Marriage Law" },
              { icon: "🏢", label: "Business & Contract Law" },
              { icon: "🚨", label: "Criminal & FIR Matters" },
              { icon: "💼", label: "Labour & Employment" },
              { icon: "📄", label: "Documentation & Drafting" },
              { icon: "🏦", label: "Banking & Loan Issues" },
              { icon: "🛡️", label: "Consumer Rights" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer transition">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
          <button className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600">
            Talk to a Legal Consultant →
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How MentorBridge Works</h2>
          <p className="text-gray-500">Get expert guidance in 3 simple steps</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
          {[
            { step: "01", title: "Search & Filter", desc: "Browse verified consultants by field, language, price and rating. Read reviews from real users." },
            { step: "02", title: "Book & Pay Securely", desc: "Pick your time slot and pay via UPI or card. Your money is held safely in escrow until your session is complete." },
            { step: "03", title: "Get Expert Guidance", desc: "Join your video session, get personalised advice and rate your consultant. Payout only released after your review." },
          ].map((item) => (
            <div key={item.step} className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition">
              <div className="text-5xl font-extrabold text-orange-100 mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who is MentorBridge For?</h2>
          <p className="text-gray-500 text-lg">Anyone who needs expert guidance — at any stage of life</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {[
            { emoji: "🎓", who: "Students", need: "Confused about which stream, college or career path to choose" },
            { emoji: "👨‍💼", who: "Professionals", need: "Want to switch careers, negotiate salary or grow faster" },
            { emoji: "🏥", who: "Patients & Families", need: "Need a second medical opinion or help navigating treatment" },
            { emoji: "⚖️", who: "Anyone with Legal Issues", need: "Facing property disputes, FIRs, contract problems or family matters" },
            { emoji: "💡", who: "Entrepreneurs", need: "Need startup advice, funding guidance or legal structure help" },
            { emoji: "😟", who: "Anyone Confused", need: "Feeling lost in life decisions and need a trusted expert voice" },
          ].map((item) => (
            <div key={item.who} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-orange-200 transition">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <div className="font-bold text-gray-900 mb-2">{item.who}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.need}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-6 bg-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get the Right Guidance?</h2>
        <p className="text-orange-100 text-lg mb-8">Join thousands of people making better decisions with expert help</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-white text-orange-500 rounded-full text-lg font-semibold hover:bg-orange-50">
            Find a Consultant Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-orange-600">
            Apply as a Consultant
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-10 flex-wrap gap-8">
            <div>
              <div className="text-white text-2xl font-bold mb-2">MentorBridge</div>
              <div className="text-sm max-w-xs">Expert consultation for students, professionals, patients and anyone facing life's tough decisions.</div>
            </div>
            <div className="flex gap-16 flex-wrap">
              <div>
                <div className="text-white font-semibold mb-3 text-sm">Platform</div>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="#" className="hover:text-white">Find Consultants</a>
                  <a href="#" className="hover:text-white">Become a Consultant</a>
                  <a href="#" className="hover:text-white">How it Works</a>
                  <a href="#" className="hover:text-white">Pricing</a>
                </div>
              </div>
              <div>
                <div className="text-white font-semibold mb-3 text-sm">Categories</div>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="#" className="hover:text-white">Legal Consultation</a>
                  <a href="#" className="hover:text-white">Career Guidance</a>
                  <a href="#" className="hover:text-white">Medical Guidance</a>
                  <a href="#" className="hover:text-white">JEE / NEET</a>
                </div>
              </div>
              <div>
                <div className="text-white font-semibold mb-3 text-sm">Company</div>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="#" className="hover:text-white">About Us</a>
                  <a href="#" className="hover:text-white">Contact</a>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm">© 2026 MentorBridge. All rights reserved.</div>
            <div className="text-sm">Made with ❤️ in India</div>
          </div>
        </div>
      </footer>

    </main>
  )
}