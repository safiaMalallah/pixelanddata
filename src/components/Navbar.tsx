'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Stories', href: '/stories' },
    { label: 'Shop', href: '/shop' },
    { label: 'Movie Night', href: '/movie-night' },
  ]

  return (
    <>
      <div className="rainbow-bar" />
      <nav style={{ background: '#00BCA4', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 72, flexWrap: 'wrap', gap: 8 }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
          Pixel <span style={{ color: '#FFF59D' }}>&</span> Data
        </Link>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {links.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link key={label} href={href} style={{
                padding: '24px 16px',
                fontSize: 14,
                fontWeight: 600,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                borderBottom: isActive ? '3px solid #fff' : '3px solid transparent',
                transition: 'all 0.15s',
                display: 'block',
              }}>
                {label}
              </Link>
            )
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/signin" style={{ background: '#fff', color: '#00BCA4', padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Sign in
          </Link>
          <a href="https://people.cs.ksu.edu/~safia/D3.html" target="_blank" rel="noopener noreferrer" style={{ width: 50, height: 50, borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
            D³
          </a>
        </div>
      </nav>
    </>
  )
}
