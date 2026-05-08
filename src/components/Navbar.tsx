'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="rainbow-bar" />
      <nav style={{ background: '#00BCA4', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 72, flexWrap: 'wrap', gap: 8 }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
          Pixel <span style={{ color: '#FFF59D' }}>&</span> Data
        </Link>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Learn', href: '/learn' },
            { label: 'Stories', href: '/stories' },
            { label: 'Shop', href: '/shop' },
            { label: 'Movie Night', href: '/movie-night' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              padding: '24px 16px', fontSize: 14, fontWeight: 600,
              color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
              borderBottom: '3px solid transparent', transition: 'all 0.15s',
              display: 'block',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = '#fff'
              ;(e.target as HTMLElement).style.borderBottomColor = '#fff'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
              ;(e.target as HTMLElement).style.borderBottomColor = 'transparent'
            }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/signin" style={{
            background: '#fff', color: '#00BCA4', border: 'none',
            padding: '8px 20px', borderRadius: 6, fontSize: 13,
            fontWeight: 700, cursor: 'pointer', textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
          }}>Sign in</Link>
          <div style={{
            width: 50, height: 50, borderRadius: '50%',
            border: '2.5px solid rgba(255,255,255,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff',
          }}>D³</div>
        </div>
      </nav>
    </>
  )
}
