'use client'
import Link from 'next/link'

export default function MovieCard() {
  return (
    <div style={{ borderRadius:28, overflow:'hidden', maxWidth:680, margin:'0 auto', boxShadow:'0 18px 45px rgba(18,48,71,0.2)' }}>
      <div style={{ position:'relative', width:'100%', aspectRatio:'16/8', overflow:'hidden' }}>
        <img src="/movie-poster.jpg" alt="A Data Science Tale movie poster"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', zIndex:3, padding:'1.5rem', textAlign:'center' }}>
          <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.7)', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:10 }}>D³ Cube Lab Presents</div>
          <div style={{ display:'flex', gap:10, marginBottom:12, justifyContent:'center' }}>
            <span style={{ background:'#00A6A6', color:'#fff', padding:'6px 14px', borderRadius:99, fontSize:13, fontWeight:700 }}>🤖 Pixel</span>
            <span style={{ background:'#FFD447', color:'#123047', padding:'6px 14px', borderRadius:99, fontSize:13, fontWeight:700 }}>🟨 Data</span>
          </div>
          <div style={{ fontFamily:"'Baloo 2',cursive", fontSize:22, fontWeight:800, color:'#fff', lineHeight:1.3, marginBottom:6, textShadow:'0 2px 10px rgba(0,0,0,0.5)' }}>
            A Data Science Tale!<br />When <span style={{ color:'#B2EBF2' }}>Pixel</span> & <span style={{ color:'#FFD447' }}>Data</span> Met
          </div>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.8)', marginBottom:18 }}>A story about curiosity, friendship & discovery</div>
          <a href="https://youtu.be/UtEfecrke7c" target="_blank" rel="noopener noreferrer"
            style={{ width:56, height:56, background:'#FF5252', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, color:'#fff', boxShadow:'0 4px 20px rgba(255,82,82,0.5)', textDecoration:'none' }}>▶</a>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.6)', marginTop:8 }}>Watch on YouTube — free</div>
        </div>
      </div>
      <div style={{ padding:'18px 22px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10, background:'#fff' }}>
        <div>
          <div style={{ fontFamily:"'Baloo 2',cursive", fontSize:16, fontWeight:700, color:'#123047' }}>When Pixel & Data Met</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:6 }}>
            {['Ages 4–12','Data science','Free to watch'].map((t,i) => (
              <span key={t} style={{ padding:'3px 10px', borderRadius:99, fontSize:11, fontWeight:600,
                background: i===0?'#E0FAF6':i===1?'#FEF3C7':'#D1FAE5',
                color: i===0?'#047C7C':i===1?'#92400E':'#065F46' }}>{t}</span>
            ))}
          </div>
        </div>
        <Link href="/movie-night" className="btn btn-primary" style={{ fontSize:13, padding:'10px 20px' }}>Book movie night</Link>
      </div>
    </div>
  )
}
