import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#00A6A6', color: 'white', padding: '48px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 28, marginBottom: 28 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.75)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.12)' }}>
              <img src="/logo.png" alt="D3 cube Lab" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: '50%' }} />
            </div>
            <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: '1.5rem', color: 'white', margin: 0 }}>DATA & PIXEL</h3>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.8, fontSize: 13, marginBottom: 10 }}>Data Science Detective Adventure introduces young learners to Dataying™, data science, curiosity, patterns, and discovery.</p>
          <a href="https://people.cs.ksu.edu/~safia/D3.html" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, textDecoration: 'none' }}>D³ cube Lab · Data · Design · Discovery</a>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: '1.3rem', color: 'white', margin: '0 0 12px' }}>Quick Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[['/#about','What is DATA & PIXEL?'],['/#characters','Meet the Characters'],['/#movie','Movie Event'],['/#badges','Badges'],['/learn','Teacher Materials'],['/shop','Shop'],['/#press','Media & Press'],['/#contact','Request Information']].map(([href,label]) => (
              <Link key={label} href={href} style={{ color: 'rgba(255,255,255,0.88)', fontSize: 13, textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Baloo 2',cursive", fontSize: '1.3rem', color: 'white', margin: '0 0 12px' }}>Contact</h3>
          <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 2.1, fontSize: 13 }}>
            safia@ksu.edu<br />
            pixelanddata.com<br />
            Kansas State University<br />
            Dept. of Computer Science
          </p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 20, textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
        © 2025 DATA & PIXEL · D³ cube Lab · Kansas State University · All rights reserved
      </div>
    </footer>
  )
}
