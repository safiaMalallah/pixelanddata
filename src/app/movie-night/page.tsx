import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MovieNight() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '3rem 32px', background: '#F5F5F5', minHeight: '70vh' }}>
        <h1 className="section-title">Movie Night 🎬</h1>
        <div className="section-line" />
        <p className="section-sub">Reserve your free seats for the screening of "A Data Science Tale — When Pixel & Data Met"</p>
        <div style={{ maxWidth: 600, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <p style={{ color: '#777', fontSize: 14, textAlign: 'center' }}>Booking form coming soon — sign in to reserve your seats!</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a href="/signin" className="btn-teal">Sign in to book</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
