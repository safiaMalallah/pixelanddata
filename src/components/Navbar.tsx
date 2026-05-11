'use client'
import Link from 'next/link'

export default function Navbar() {
  const links = [
    { label: 'About', href: '/#about' },
    { label: 'Characters', href: '/#characters' },
    { label: 'Movie', href: '/#movie' },
    { label: 'Badges', href: '/#badges' },
    { label: 'Teachers', href: '/learn' },
    { label: 'Shop', href: '/shop' },
    { label: 'Press', href: '/#press' },
    { label: 'Contact', href: '/#contact' },
  ]
  return (
    <>
      <div style={{ height: 7, background: 'linear-gradient(90deg,#FF5252,#FF9800,#FFD600,#4CAF50,#00BCA4,#2196F3,#9C27B0)', flexShrink: 0 }} />
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%', background: '#00A6A6', minHeight: 68, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="D3 cube Lab" style={{ height: 40, width: 40, borderRadius: 10, objectFit: 'cover', background: 'white', padding: 3 }} />
          <span style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: '1.25rem', color: 'white', lineHeight: 1 }}>DATA & PIXEL</span>
        </Link>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} style={{ padding: '22px 14px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', textDecoration: 'none', borderBottom: '3px solid transparent', transition: 'all 0.15s', display: 'block' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color='#fff'; (e.target as HTMLElement).style.borderBottomColor='#fff' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color='rgba(255,255,255,0.9)'; (e.target as HTMLElement).style.borderBottomColor='transparent' }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/movie-night" style={{ background: '#FFD447', color: '#123047', border: 'none', borderRadius: 999, padding: '9px 18px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}>Book Tickets</Link>
          <div style={{ width: 44, height: 44, borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.75)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.12)' }}>
            <img src="/logo.png" alt="D3" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: '50%' }} />
          </div>
        </div>
      </nav>
    </>
  )
}
