import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Stories() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '3rem 32px', background: '#FFF3E0', minHeight: '70vh' }}>
        <h1 className="section-title">Stories & Books</h1>
        <div className="section-line" />
        <p className="section-sub">Kids books and adventures featuring Pixel and Data — making AI and data science magical for every child</p>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #00BCA4, #0288D1)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 12 }}>📖</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
                A Data Science Tale — When <span style={{ color: '#B2EBF2' }}>Pixel</span> & <span style={{ color: '#FFE082' }}>Data</span> Met
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>The original storybook by Dr. Safia Malallah · D³ cube Lab</p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Once upon a time, in a tiny town where all the houses were painted the colors of the rainbow, there lived a curious little robot named Pixel. One sunny morning, Pixel found a shiny silver box — and out popped Data, a magical yellow robot who could change size and was super fast! Together they embark on an adventure to solve mysteries using the power of data science.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span className="tag tag-teal">Ages 4–8</span>
                <span className="tag tag-amber">Data science</span>
                <span className="tag tag-green">Available now</span>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <a href="https://youtu.be/UtEfecrke7c" target="_blank" rel="noopener noreferrer" className="btn-teal">Watch the movie</a>
                <button className="btn-outline">Download PDF — $5</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
