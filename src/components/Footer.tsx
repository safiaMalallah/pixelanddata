import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#00BCA4', padding: '1.5rem 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>
        © 2025 Pixel & Data · pixelanddata.com · All rights reserved
      </div>
      <a href="https://people.cs.ksu.edu/~safia/D3.html" target="_blank" rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: '#fff',
        }}>D³</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>D³ cube Lab</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Data · Design · Discovery</div>
        </div>
      </a>
    </footer>
  )
}
