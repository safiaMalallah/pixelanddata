import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SignIn() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '3rem 32px', background: '#F5F5F5', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem', maxWidth: 400, width: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1A1A2E', marginBottom: 6, textAlign: 'center' }}>Welcome back!</h1>
          <p style={{ fontSize: 13, color: '#777', textAlign: 'center', marginBottom: '1.5rem' }}>Sign in to book tickets, access resources and manage your account</p>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Email</label>
            <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: 14, fontFamily: 'Poppins, sans-serif', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: 14, fontFamily: 'Poppins, sans-serif', outline: 'none' }} />
          </div>
          <button className="btn-teal" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: 12 }}>Sign in</button>
          <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 16 }}>
            Don&apos;t have an account? <a href="/signup" style={{ color: '#00BCA4', fontWeight: 600 }}>Sign up free</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
