'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ position:'sticky', top:0, zIndex:1000, display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, padding:'14px 7%', background:'rgba(255,255,255,0.96)', backdropFilter:'blur(14px)', boxShadow:'0 8px 24px rgba(18,48,71,0.08)' }}>
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:12, fontFamily:"'Baloo 2',cursive", fontWeight:800, fontSize:'1.55rem', color:'#047C7C', whiteSpace:'nowrap' }}>
        <img src="/logo.png" alt="D3 Playground logo" style={{ width:52, height:52, objectFit:'contain', borderRadius:12 }} />
        DATA & PIXEL
      </Link>
      <div style={{ display:'flex', alignItems:'center', gap:20, fontSize:'0.95rem', fontWeight:700 }}>
        <Link href="/#characters" style={{ color:'#123047' }}>Characters</Link>
        <Link href="/#experiences" style={{ color:'#123047' }}>Experiences</Link>
        <Link href="/#movie" style={{ color:'#123047' }}>Movie</Link>
        <Link href="/#framework" style={{ color:'#123047' }}>Dataying™</Link>
        <Link href="/#shop-teacher" style={{ color:'#123047' }}>Materials</Link>
        <Link href="/#request" style={{ background:'#FFD447', color:'#123047', padding:'10px 16px', borderRadius:999, boxShadow:'0 6px 14px rgba(244,163,0,0.18)' }}>Request a Visit</Link>
      </div>
    </nav>
  )
}
