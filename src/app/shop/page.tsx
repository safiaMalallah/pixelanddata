import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const products = [
  { name: 'Pixel & Data Character Tee', price: 'From $22', emoji: '👕', bg: '#FFFBEB', desc: 'Soft cotton tee featuring Pixel and Data. Available in kids & adult sizes.' },
  { name: 'Character Sticker Pack', price: '$8', emoji: '🏷️', bg: '#EFF6FF', desc: '12 stickers featuring Pixel, Data and their friends. Waterproof & durable.' },
  { name: 'Story Book PDF', price: '$5', emoji: '📖', bg: '#ECFDF5', desc: 'Downloadable illustrated PDF of "A Data Science Tale". Print at home!' },
  { name: 'Kids Hoodie', price: 'From $35', emoji: '🎒', bg: '#F5F3FF', desc: 'Cozy hoodie with Pixel & Data print. Perfect for little data scientists.' },
  { name: 'Pixel Robot Plushie', price: '$28', emoji: '🤖', bg: '#E0FAF6', desc: 'Soft plushie of Pixel the robot. A perfect learning companion.' },
  { name: 'Data Robot Plushie', price: '$28', emoji: '🟨', bg: '#FEF3C7', desc: 'Soft plushie of Data the yellow robot. Cuddly and educational!' },
]

export default function Shop() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '3rem 32px', background: '#FFFDE7', minHeight: '70vh' }}>
        <h1 className="section-title" style={{ color: '#00BCA4' }}>Pixel & Data Shop</h1>
        <div className="section-line" />
        <p className="section-sub">Shirts, stickers, books and more — shipped worldwide via Printful & Gumroad</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {products.map(item => (
            <div key={item.name} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ background: item.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>{item.emoji}</div>
              <div style={{ padding: '14px 16px 18px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A2E', marginBottom: 4 }}>{item.name}</div>
                <div style={{ fontSize: 12, color: '#777', marginBottom: 8, lineHeight: 1.5 }}>{item.desc}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#00BCA4', marginBottom: 10 }}>{item.price}</div>
                <button className="btn-teal" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: 9 }}>
                  {item.name.includes('PDF') ? 'Download now' : 'Add to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
