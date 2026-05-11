import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MovieCard from '@/components/MovieCard'

const sp = { padding: '75px 5%' } as React.CSSProperties
const card = { background: 'white', borderRadius: 24, padding: 26, boxShadow: '0 8px 24px rgba(18,48,71,0.09)', border: '1px solid rgba(0,166,166,0.1)' } as React.CSSProperties
const iconBox = { width: 54, height: 54, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#FFD447,#FF8A3D)', fontSize: '1.6rem', marginBottom: 16 } as React.CSSProperties
const g3 = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 22 } as React.CSSProperties
const secHead = (center = true) => ({ textAlign: center ? 'center' : 'left', maxWidth: 800, margin: center ? '0 auto 44px' : '0 0 44px' } as React.CSSProperties)
const h2c = { fontFamily: "'Baloo 2',cursive", fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', margin: '0 0 10px', color: '#047C7C' } as React.CSSProperties
const line = { width: 50, height: 3, background: '#00A6A6', borderRadius: 99, margin: '0 auto 12px' } as React.CSSProperties

export default function Home() {
  return (
    <main style={{ background: '#FFF8E8' }}>
      <Navbar />

      {/* HERO */}
      <header style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 620, padding: '75px 5% 55px', gap: 44, alignItems: 'center', background: '#11B5B5', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 22, left: 0, right: 0, textAlign: 'center', fontSize: '1.4rem', letterSpacing: 20, opacity: 0.1, pointerEvents: 'none' }}>⭐ 🤖 🔎 📊 ⭐ 🤖 🔎 📊 ⭐ 🤖 🔎 📊</div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)', fontWeight: 700, marginBottom: 22, fontSize: 14 }}>Dataying™ · Data Science for Kids</span>
          <h1 style={{ fontFamily: "'Baloo 2',cursive", fontSize: 'clamp(3.2rem,5.5vw,5rem)', lineHeight: 0.92, margin: '0 0 18px', letterSpacing: -1 }}>DATA &<br /><span style={{ color: '#FFD447' }}>PIXEL</span></h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.85, maxWidth: 480, marginBottom: 26, color: 'rgba(255,255,255,0.96)' }}><strong>Data Science Detective Adventure</strong> helps young learners explore the world through curiosity, clues, patterns, and discovery — for children, families, schools, libraries, and community events.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/#movie" style={{ background: '#FFD447', color: '#123047', borderRadius: 999, padding: '12px 24px', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Watch the Movie Event</Link>
            <Link href="/#contact" style={{ background: 'white', color: '#047C7C', borderRadius: 999, padding: '12px 24px', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Bring DATA & PIXEL to Your Community</Link>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', borderRadius: 34, background: '#7AD9D9', border: '5px solid rgba(255,255,255,0.45)', overflow: 'hidden', minHeight: 360 }}>
            <div style={{ position: 'absolute', top: 16, left: 18, background: 'white', color: '#123047', padding: '8px 14px', borderRadius: 16, fontWeight: 800, zIndex: 4, fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>🔎 Find Clues</div>
            <div style={{ position: 'absolute', top: 78, right: 16, background: 'white', color: '#123047', padding: '8px 14px', borderRadius: 16, fontWeight: 800, zIndex: 4, fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>📊 Patterns</div>
            <div style={{ position: 'absolute', bottom: 22, left: 22, background: 'white', color: '#123047', padding: '8px 14px', borderRadius: 16, fontWeight: 800, zIndex: 4, fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>⭐ Badges</div>
            <img src="/hero-image.jpg" alt="Pixel and Data at the carnival" style={{ width: '100%', height: '100%', minHeight: 340, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      </header>

      {/* ABOUT */}
      <section id="about" style={{ ...sp, background: 'white' }}>
        <div style={secHead()}>
          <h2 style={h2c}>What is DATA & PIXEL?</h2>
          <div style={line} />
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444' }}>DATA & PIXEL is a child-centered educational world that introduces data science concepts through Dataying™ — helping children observe, ask questions, collect clues, find patterns, and share discoveries.</p>
        </div>
        <div style={g3}>
          {[['🧠','Why It Matters','Children are surrounded by technology every day. DATA & PIXEL encourages them to become creators, thinkers, and problem solvers rather than only consumers.'],['🔎','Detective Theme','Students learn by investigating problems, looking for clues, comparing information, and sharing what they discover in age-appropriate ways.'],['🎬','Interactive Experiences','Cartoon animations, mascot-led sessions, hands-on activities, songs, badges, stickers, movie events, and teacher lessons.']].map(([icon,title,desc]) => (
            <div key={title as string} style={card}><div style={iconBox}>{icon}</div><h3 style={{ margin:'0 0 10px', fontFamily:"'Baloo 2',cursive", fontSize:'1.4rem', color:'#047C7C' }}>{title}</h3><p style={{ lineHeight:1.75, color:'#444', fontSize:14 }}>{desc}</p></div>
          ))}
        </div>
      </section>

      {/* CHARACTERS */}
      <section id="characters" style={{ ...sp, background: '#FFF7E6' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Meet the Characters</h2>
          <div style={line} />
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444' }}>Two curious robot characters who guide children through data science detective adventures.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 26 }}>
          {[{ name:'DATA', color:'#F4A300', bg:'#FFFBEB', img:'/data-character.png', desc:'DATA is curious, energetic, and always ready to look for clues. DATA helps children notice information, ask questions, and begin thinking like data detectives.' },
            { name:'PIXEL', color:'#047C7C', bg:'#E0FAF6', img:'/pixel-character.png', desc:'PIXEL helps students organize ideas, find patterns, and explain discoveries. Together, Data and Pixel make learning feel like an adventure.' }].map(c => (
            <div key={c.name} style={{ display:'grid', gridTemplateColumns:'0.8fr 1.2fr', gap:20, alignItems:'center', background:'white', borderRadius:30, padding:26, boxShadow:'0 8px 24px rgba(18,48,71,0.1)' }}>
              <div style={{ borderRadius:22, background:c.bg, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', minHeight:190, padding:10 }}>
                <img src={c.img} alt={c.name} style={{ maxHeight:180, maxWidth:'100%', objectFit:'contain' }} />
              </div>
              <div>
                <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.9rem', color:c.color, margin:'0 0 10px' }}>{c.name}</h3>
                <p style={{ lineHeight:1.75, color:'#444', fontSize:14 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOVIE */}
      <section id="movie" style={{ ...sp, background: '#FFFDE7' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Featured Movie Event</h2>
          <div style={line} />
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#444' }}>A cinematic DATA & PIXEL experience for families and young learners.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 36, alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
          <MovieCard />
          <div>
            <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.8rem', color:'#047C7C', margin:'0 0 12px' }}>A Data Science Tale:<br />When Data and Pixel Met</h3>
            <p style={{ lineHeight:1.8, color:'#444', fontSize:14, marginBottom:20 }}>Join Data and Pixel in a family-friendly movie theater experience that introduces children to curiosity, discovery, and the beginning of their data science detective journey.</p>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
              {[['📅','May 23, 2026'],['🕚','11:00 AM'],['📍','AMC Manhattan 13, 103 Manhattan Town Center, Manhattan, KS 66502'],['🎟️','Seats are limited — register free']].map(([icon,text]) => (
                <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:10, background:'#E0FAF6', padding:'10px 16px', borderRadius:14, fontSize:14, color:'#123047' }}><span>{icon}</span><span>{text}</span></div>
              ))}
            </div>
            <Link href="/movie-night" style={{ background:'#00A6A6', color:'white', borderRadius:999, padding:'12px 26px', fontWeight:700, textDecoration:'none', fontSize:14 }}>Reserve Your Seats</Link>
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section id="experiences" style={{ ...sp, background: 'white' }}>
        <div style={secHead()}>
          <h2 style={h2c}>What We Provide</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>DATA & PIXEL can support schools, libraries, STEM nights, summer camps, after-school programs, movie events, and community learning experiences.</p>
        </div>
        <div style={g3}>
          {[['🎞️','Media & Songs','Cartoon animations, songs, and storytelling experiences featuring Data and Pixel.'],['🤖','Mascot Sessions','Interactive mascot-led sessions that help children engage with the characters in memorable ways.'],['🧩','Hands-On Activities','Group activities, interactive assessments, detective challenges, and age-appropriate data science lessons.']].map(([icon,title,desc]) => (
            <div key={title as string} style={card}><div style={iconBox}>{icon}</div><h3 style={{ margin:'0 0 10px', fontFamily:"'Baloo 2',cursive", fontSize:'1.4rem', color:'#047C7C' }}>{title}</h3><p style={{ lineHeight:1.75, color:'#444', fontSize:14 }}>{desc}</p></div>
          ))}
        </div>
      </section>

      {/* BADGES */}
      <section id="badges" style={{ ...sp, background: '#F4FBFB' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Data Detective Badges</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>Children can practice foundational data skills through collectible badge themes.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16, marginBottom:28 }}>
          {[['📏','Measurement'],['🔢','Counting'],['🧺','Grouping'],['↕️','Sorting'],['⚖️','Comparing']].map(([icon,label]) => (
            <div key={label} style={{ background:'white', borderRadius:22, padding:'18px 10px', textAlign:'center', boxShadow:'0 6px 18px rgba(18,48,71,0.09)', border:'2px solid rgba(255,212,71,0.4)' }}>
              <div style={{ width:60, height:60, borderRadius:'50%', background:'linear-gradient(135deg,#FFD447,#F4A300)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px', fontSize:24 }}>{icon}</div>
              <div style={{ fontWeight:700, fontSize:13, color:'#047C7C' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
          {[['1','Understand the Problem'],['2','Ask Right Questions'],['3','Collect Smart Clues'],['4','Find Hidden Patterns'],['5','Share Results']].map(([num,label]) => (
            <div key={num} style={{ background:'white', borderRadius:20, padding:'18px 12px', textAlign:'center', boxShadow:'0 4px 12px rgba(18,48,71,0.08)', borderTop:'5px solid #00A6A6' }}>
              <div style={{ width:34, height:34, borderRadius:'50%', background:'#00A6A6', color:'white', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px', fontWeight:800, fontSize:16 }}>{num}</div>
              <div style={{ fontWeight:700, fontSize:12, color:'#123047', lineHeight:1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHERS */}
      <section id="teachers" style={{ ...sp, background: 'white' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Teacher Lessons & Materials</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>Resources for educators who want to introduce Dataying™, data science, and computational thinking through child-friendly activities.</p>
        </div>
        <div style={g3}>
          {[['📚','Lesson Plans','Ready-to-use lessons for introducing observation, counting, grouping, sorting, comparing, patterns, and data storytelling.'],['📝','Classroom Materials','Printable activity sheets, slides, badges, certificates, coloring pages, and challenge cards for classroom or community use.'],['🎯','Teacher Support','Guides and materials to help teachers run DATA & PIXEL activities with age-appropriate explanations and simple facilitation steps.']].map(([icon,title,desc]) => (
            <div key={title as string} style={card}><div style={iconBox}>{icon}</div><h3 style={{ margin:'0 0 10px', fontFamily:"'Baloo 2',cursive", fontSize:'1.4rem', color:'#047C7C' }}>{title}</h3><p style={{ lineHeight:1.75, color:'#444', fontSize:14 }}>{desc}</p></div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:32 }}>
          <Link href="/learn" style={{ background:'#00A6A6', color:'white', borderRadius:999, padding:'12px 28px', fontWeight:700, textDecoration:'none', fontSize:14 }}>Explore All Resources</Link>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" style={{ ...sp, background: '#F4FBFB' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Shop & Learning Materials</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>DATA & PIXEL items, classroom kits, and learning materials — shipped worldwide.</p>
        </div>
        <div style={g3}>
          {[['⭐','Stickers & Badges','Data Detective stickers, badge sheets, reward stickers, and printable classroom badge sets.','From $8','#FFFBEB'],['👕','Shirts & Bags','DATA & PIXEL shirts, tote bags, event items, and community learning merchandise.','From $22','#FFF7E6'],['📖','Books & Kits',"Children's books, activity books, detective notebooks, and Dataying learning kits.",'From $5','#E0FAF6']].map(([icon,title,desc,price,bg]) => (
            <div key={title as string} style={{ ...card, textAlign:'center' as const }}>
              <div style={{ fontSize:44, marginBottom:14, background:bg as string, borderRadius:16, padding:18 }}>{icon}</div>
              <h3 style={{ margin:'0 0 8px', fontFamily:"'Baloo 2',cursive", fontSize:'1.4rem', color:'#047C7C' }}>{title}</h3>
              <p style={{ fontSize:13, lineHeight:1.75, color:'#444', marginBottom:12 }}>{desc}</p>
              <div style={{ fontWeight:700, color:'#F4A300', marginBottom:14, fontSize:16 }}>{price}</div>
              <Link href="/shop" style={{ background:'#00A6A6', color:'white', borderRadius:999, padding:'10px 22px', fontWeight:700, textDecoration:'none', fontSize:13 }}>Shop now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section id="press" style={{ ...sp, background: 'white' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Media & Press</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>Information for schools, libraries, partners, and media who want to learn more about DATA & PIXEL.</p>
        </div>
        <div style={g3}>
          {[['🎬','Movie & Event Media','Posters, screening details, trailers, event photos, and approved promotional materials.'],['📰','Press Kit','Short descriptions, logos, character images, program summaries, and contact information.'],['🤝','Partners & Sponsors','A space to recognize schools, libraries, sponsors, and community partners supporting DATA & PIXEL.']].map(([icon,title,desc]) => (
            <div key={title as string} style={card}><div style={iconBox}>{icon}</div><h3 style={{ margin:'0 0 10px', fontFamily:"'Baloo 2',cursive", fontSize:'1.4rem', color:'#047C7C' }}>{title}</h3><p style={{ lineHeight:1.75, color:'#444', fontSize:14 }}>{desc}</p></div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ ...sp, background: '#FFF7E6' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Photo Gallery</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>Photos from movie screenings, school visits, activities, stickers, shirts, bags, and mascot events.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:18 }}>
          {[['🎬','Movie Theater Photos'],['🤖','Mascot Sessions'],['⭐','Sticker Sheets'],['🧩','Hands-On Activities']].map(([icon,label]) => (
            <div key={label} style={{ minHeight:180, borderRadius:24, background:'#E0FAF6', border:'3px dashed rgba(4,124,124,0.2)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', fontWeight:700, color:'#047C7C', padding:18, fontSize:14, gap:10 }}>
              <span style={{ fontSize:36 }}>{icon}</span>{label}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ ...sp, background: 'white' }}>
        <div style={secHead()}>
          <h2 style={h2c}>Testimonials</h2>
          <div style={line} />
          <p style={{ fontSize:'1rem', lineHeight:1.8, color:'#444' }}>Quotes from teachers, parents, librarians, students, and community partners.</p>
        </div>
        <div style={g3}>
          {['"Add teacher or librarian testimonial here."','"Add parent or community testimonial here."','"Add student-friendly reaction or event quote here."'].map((q,i) => (
            <div key={i} style={{ ...card, borderLeft:'4px solid #00A6A6', borderRadius:16 }}>
              <p style={{ fontStyle:'italic', lineHeight:1.8, color:'#444', fontSize:14 }}>{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT/REQUEST */}
      <section id="contact" style={{ ...sp, background: '#FFD447', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', left:'4%', right:'4%', top:24, textAlign:'center', fontSize:'1.5rem', letterSpacing:18, opacity:0.15, pointerEvents:'none' }}>⭐ 🔎 📊 🤖 💡 ⭐ 🔎 📊</div>
        <div style={{ position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:36, alignItems:'center', background:'rgba(255,255,255,0.95)', borderRadius:40, boxShadow:'0 16px 48px rgba(18,48,71,0.15)', padding:42, border:'4px solid rgba(255,255,255,0.7)' }}>
          <div>
            <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#047C7C', margin:'0 0 12px', lineHeight:1.1 }}>Interested in Bringing DATA & PIXEL to Your Community?</h2>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#E7FAF8', color:'#047C7C', border:'2px solid rgba(0,166,166,0.22)', padding:'10px 16px', borderRadius:20, fontWeight:800, margin:'8px 0 18px', fontSize:14 }}>🤖 Guided by the D³ Playground Research Lab</div>
            <p style={{ lineHeight:1.8, color:'#444', fontSize:14, marginBottom:14 }}>DATA & PIXEL's Data Science Detective Adventure can be adapted for schools, libraries, STEM nights, summer camps, after-school programs, movie events, and community programs.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:18 }}>
              {['Schools','Libraries','STEM Nights','Movie Events','Summer Camps'].map(l => (
                <span key={l} style={{ background:'#FFD447', color:'#123047', borderRadius:999, padding:'7px 14px', fontWeight:800, fontSize:13, boxShadow:'0 4px 10px rgba(244,163,0,0.2)' }}>{l}</span>
              ))}
            </div>
            <p style={{ fontSize:14, color:'#444', lineHeight:1.8 }}>The program is coordinated by the D³ Playground Research Lab, Department of Computer Science, Kansas State University.</p>
            <p style={{ marginTop:14, fontWeight:700, fontSize:14, color:'#047C7C' }}>📧 safia@ksu.edu</p>
          </div>
          <div style={{ background:'#EAFBFB', borderRadius:28, padding:28, border:'2px solid rgba(0,166,166,0.2)' }}>
            <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.7rem', color:'#047C7C', margin:'0 0 18px' }}>Request Information</h3>
            {[['text','Name','Your name'],['text','Organization','School, library, or community group'],['email','Email','your@email.com'],['tel','Phone','Optional']].map(([type,label,ph]) => (
              <div key={label} style={{ marginBottom:14 }}>
                <label style={{ display:'block', fontWeight:700, marginBottom:5, color:'#123047', fontSize:13 }}>{label}</label>
                <input type={type} placeholder={ph} style={{ width:'100%', padding:'11px 14px', borderRadius:14, border:'1.5px solid rgba(18,48,71,0.18)', fontFamily:'Poppins,sans-serif', fontSize:13, outline:'none' }} />
              </div>
            ))}
            <div style={{ marginBottom:14 }}>
              <label style={{ display:'block', fontWeight:700, marginBottom:5, color:'#123047', fontSize:13 }}>Event Type</label>
              <select style={{ width:'100%', padding:'11px 14px', borderRadius:14, border:'1.5px solid rgba(18,48,71,0.18)', fontFamily:'Poppins,sans-serif', fontSize:13, outline:'none' }}>
                {['School Visit','Library Program','STEM Night','Movie Screening','Summer Camp','Other'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={{ display:'block', fontWeight:700, marginBottom:5, color:'#123047', fontSize:13 }}>Message</label>
              <textarea placeholder="Tell us what you are interested in..." style={{ width:'100%', padding:'11px 14px', borderRadius:14, border:'1.5px solid rgba(18,48,71,0.18)', fontFamily:'Poppins,sans-serif', fontSize:13, outline:'none', minHeight:100, resize:'vertical' }} />
            </div>
            <button style={{ width:'100%', background:'#00A6A6', color:'white', border:'none', borderRadius:999, padding:13, fontWeight:700, cursor:'pointer', fontFamily:'Poppins,sans-serif', fontSize:15 }}>Submit Request</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
