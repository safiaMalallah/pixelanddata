import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background:'#082A3A', color:'white', padding:'48px 7%', textAlign:'center' }}>
      <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'2.2rem', margin:'0 0 10px' }}>DATA & PIXEL</h2>
      <p style={{ margin:'8px 0', color:'rgba(255,255,255,0.84)' }}>Guided by the D³ Playground Research Lab at Kansas State University</p>
      <p style={{ margin:'8px 0', color:'rgba(255,255,255,0.84)' }}>
        <a href="https://www.pixelanddata.com" style={{ color:'#FFD447' }}>pixelanddata.com</a>
        {' · '}
        <a href="https://people.cs.ksu.edu/~safia/D3.html" target="_blank" rel="noopener noreferrer" style={{ color:'rgba(255,255,255,0.6)' }}>D³ cube Lab</a>
      </p>
    </footer>
  )
}
