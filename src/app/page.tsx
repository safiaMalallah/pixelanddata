import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MovieCard from '@/components/MovieCard'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ background: '#fff', padding: '3.5rem 32px', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', borderBottom: '1px solid #EBEBEB' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ display: 'inline-block', background: '#E0FAF6', color: '#00877A', fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: 20, marginBottom: 18 }}>
            A D³ cube Lab Adventure
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, color: '#1A1A2E', marginBottom: 16 }}>
            Meet <span style={{ color: '#00BCA4' }}>Pixel</span><br />
            & <span style={{ color: '#F59E0B' }}>Data</span> —<br />
            your robot<br />friends!
          </h1>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: 420 }}>
            Two curious robots exploring data science, solving mysteries, and showing kids that learning is the greatest adventure — for ages 4 to 12!
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/stories" className="btn-teal">Read the story</Link>
            <a href="https://youtu.be/UtEfecrke7c" target="_blank" rel="noopener noreferrer" className="btn-outline">Watch the movie</a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-end' }}>
          <div style={{ background: '#fff', borderRadius: 18, padding: '22px 18px 16px', textAlign: 'center', border: '2px solid #EBEBEB', minWidth: 115, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
            <span style={{ fontSize: 54, display: 'block', marginBottom: 10 }}>🤖</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#00BCA4' }}>Pixel</div>
            <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 3, fontWeight: 500 }}>Curious & precise</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 18, padding: '22px 18px 16px', textAlign: 'center', border: '2px solid #FCD34D', minWidth: 115, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
            <span style={{ fontSize: 54, display: 'block', marginBottom: 10 }}>🟨</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#F59E0B' }}>Data</div>
            <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 3, fontWeight: 500 }}>Playful & magical</div>
          </div>
        </div>
      </section>

      {/* MOVIE */}
      <section style={{ padding: '3rem 32px', background: '#F5F5F5' }}>
        <h2 className="section-title">A Data Science Tale</h2>
        <div className="section-line" />
        <p className="section-sub">Watch how Pixel and Data first met in a colorful rainbow town — a free original movie by D³ cube Lab</p>
        <MovieCard />
      </section>

      {/* LEARN */}
      <section style={{ padding: '3rem 32px', background: '#fff' }}>
        <h2 className="section-title">Explore & Learn!</h2>
        <div className="section-line" />
        <p className="section-sub">Stories, songs, lessons and teacher resources — all made with love by D³ cube Lab</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))', gap: 16 }}>
          {[
            { title: 'Stories', sub: 'Kids books & adventures', emoji: '📚', bg: '#FFF3E0', href: '/stories', status: 'Ready', sc: '#E0FAF6', st: '#00877A' },
            { title: 'Songs', sub: 'Fun learning songs', emoji: '🎵', bg: '#E8F5E9', href: '/learn#songs', status: 'Ready', sc: '#E0FAF6', st: '#00877A' },
            { title: 'For teachers', sub: 'Lessons & resources', emoji: '🏫', bg: '#E3F2FD', href: '/learn#teachers', status: 'Ready', sc: '#E0FAF6', st: '#00877A' },
            { title: 'Lessons', sub: 'Data science for kids', emoji: '🔬', bg: '#FFF8E1', href: '/learn#lessons', status: 'Current', sc: '#FEF3C7', st: '#92400E' },
            { title: 'Board games', sub: 'Play & learn', emoji: '🎲', bg: '#FCE4EC', href: '/learn#games', status: 'Current', sc: '#FEF3C7', st: '#92400E' },
            { title: 'Digital games', sub: 'Roblox & VR', emoji: '🎮', bg: '#EDE7F6', href: '/learn#digital', status: 'Current', sc: '#FEF3C7', st: '#92400E' },
          ].map(item => (
            <Link key={item.title} href={item.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ background: item.bg, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>
                  {item.emoji}
                </div>
                <div style={{ padding: '12px 14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginBottom: 6 }}>{item.sub}</div>
                  <span style={{ background: item.sc, color: item.st, padding: '2px 8px', borderRadius: 99, fontSize: 10, fontWeight: 600 }}>{item.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section style={{ padding: '3rem 32px', background: '#FFFDE7' }}>
        <h2 className="section-title" style={{ color: '#00BCA4' }}>Pixel & Data Merch</h2>
        <div className="section-line" />
        <p className="section-sub">Shirts, stickers, books and tools — shipped worldwide from our print-on-demand store</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: 16 }}>
          {[
            { name: 'Character tee', price: 'From $22', emoji: '👕', bg: '#FFFBEB' },
            { name: 'Sticker pack', price: '$8', emoji: '🏷️', bg: '#EFF6FF' },
            { name: 'Story book PDF', price: '$5', emoji: '📖', bg: '#ECFDF5' },
            { name: 'Kids hoodie', price: 'From $35', emoji: '🎒', bg: '#F0F9FF' },
          ].map(item => (
            <div key={item.name} className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ background: item.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>{item.emoji}</div>
              <div style={{ padding: '12px 14px 16px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>{item.name}</div>
                <div style={{ fontSize: 12, color: '#777', marginTop: 3 }}>{item.price}</div>
                <button className="btn-teal" style={{ display: 'block', width: '100%', marginTop: 10, padding: 9, fontSize: 12, textAlign: 'center', justifyContent: 'center' }}>
                  {item.name.includes('PDF') ? 'Download' : 'Add to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOVIE NIGHT BANNER */}
      <section style={{ padding: '3rem 32px', background: '#fff' }}>
        <div style={{ background: 'linear-gradient(135deg, #00BCA4, #0288D1)', borderRadius: 16, padding: '2.25rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', boxShadow: '0 4px 20px rgba(0,188,164,0.25)' }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Movie Night — Free Screening!</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              101 seats · Free admission · All ages welcome<br />
              Seats assigned at the door — starting from the back row
            </p>
          </div>
          <Link href="/movie-night" style={{ background: '#fff', color: '#00BCA4', border: 'none', padding: '13px 30px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            Reserve Your Seats
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
