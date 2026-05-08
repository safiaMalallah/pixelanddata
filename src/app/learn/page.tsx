import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Learn() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '3rem 32px', background: '#F5F5F5', minHeight: '70vh' }}>
        <h1 className="section-title">Learning Hub</h1>
        <div className="section-line" />
        <p className="section-sub">Stories, songs, lessons and teacher resources — all made with love by D³ cube Lab</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {[
            { id: 'songs', title: 'Songs', desc: 'Original educational songs that teach CS & STEM ideas. Fun to sing along!', emoji: '🎵', bg: '#E8F5E9', status: 'Ready' },
            { id: 'teachers', title: 'Teacher Resources', desc: 'Lesson plans, activity sheets, and classroom materials for PreK–Grade 12.', emoji: '🏫', bg: '#E3F2FD', status: 'Ready' },
            { id: 'lessons', title: 'Lessons', desc: 'Step-by-step data science lessons for kids built around Pixel & Data.', emoji: '🔬', bg: '#FFF8E1', status: 'Current' },
            { id: 'games', title: 'Board Games', desc: 'Hands-on board games that teach data science & computational thinking.', emoji: '🎲', bg: '#FCE4EC', status: 'Current' },
            { id: 'digital', title: 'Digital Games', desc: 'Immersive learning games built in Roblox and VR environments.', emoji: '🎮', bg: '#EDE7F6', status: 'Current' },
          ].map(item => (
            <div key={item.id} id={item.id} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ background: item.bg, padding: '2rem', textAlign: 'center', fontSize: 56 }}>{item.emoji}</div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#1A1A2E' }}>{item.title}</div>
                  <span style={{
                    background: item.status === 'Ready' ? '#E0FAF6' : '#FEF3C7',
                    color: item.status === 'Ready' ? '#00877A' : '#92400E',
                    padding: '2px 10px', borderRadius: 99, fontSize: 11, fontWeight: 600
                  }}>{item.status}</span>
                </div>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7 }}>{item.desc}</p>
                <button className="btn-teal" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                  {item.status === 'Ready' ? 'Open →' : 'Coming soon'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
