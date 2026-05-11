import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <header style={{ position:'relative', overflow:'hidden', display:'grid', gridTemplateColumns:'1.02fr 0.98fr', gap:48, alignItems:'center', padding:'84px 7% 130px', background:'#12B8B8', color:'white' }} className="hero-grid">
        <div style={{ position:'absolute', left:'-5%', right:'-5%', bottom:-72, height:155, background:'#FFF8E8', borderRadius:'50% 50% 0 0 / 76% 76% 0 0', zIndex:1 }} />
        <div style={{ position:'relative', zIndex:2 }}>
          <div style={{ display:'inline-block', padding:'9px 18px', borderRadius:999, background:'rgba(255,255,255,0.18)', border:'1px solid rgba(255,255,255,0.32)', fontWeight:800, marginBottom:22 }}>Dataying™ • Data Science for Kids</div>
          <h1 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'clamp(3.4rem,7vw,6.9rem)', lineHeight:0.86, letterSpacing:-1, margin:'0 0 22px' }}>DATA & <span style={{ color:'#FFD447' }}>PIXEL</span></h1>
          <p style={{ fontSize:'1.13rem', maxWidth:610, margin:'0 0 30px', color:'rgba(255,255,255,0.96)' }}>A K–5 educational adventure where curiosity, creativity, data, and discovery come together through characters, stories, movie events, badges, and hands-on experiences.</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a className="btn btn-primary" href="https://www.eventbrite.com/e/1989218053747" target="_blank" rel="noopener noreferrer">Get Free Movie Tickets</a>
            <a className="btn btn-light" href="#request">Bring DATA & PIXEL to Your Community</a>
          </div>
        </div>
        <div style={{ position:'relative', zIndex:2 }}>
          <div style={{ position:'relative', padding:18, background:'rgba(255,255,255,0.26)', border:'4px solid rgba(255,255,255,0.42)', boxShadow:'0 30px 80px rgba(0,0,0,0.18)', borderRadius:'42% 58% 48% 52% / 44% 40% 60% 56%', overflow:'hidden', minHeight:520 }}>
            <img src="/hero-image.jpg" alt="Data and Pixel at a carnival" style={{ width:'100%', height:520, objectFit:'cover', borderRadius:'38% 62% 42% 58% / 44% 38% 62% 56%' }} />
            <div style={{ position:'absolute', top:'9%', left:'10%', background:'white', color:'#123047', padding:'10px 16px', borderRadius:18, fontWeight:800, boxShadow:'0 18px 45px rgba(18,48,71,0.16)', zIndex:5, animationName:'floatChipOne', animationDuration:'26s', animationTimingFunction:'ease-in-out', animationIterationCount:'infinite', animationDirection:'alternate', willChange:'transform' }}>🔎 Find Clues</div>
            <div style={{ position:'absolute', top:'18%', right:'9%', background:'white', color:'#123047', padding:'10px 16px', borderRadius:18, fontWeight:800, boxShadow:'0 18px 45px rgba(18,48,71,0.16)', zIndex:5, animationName:'floatChipTwo', animationDuration:'31s', animationTimingFunction:'ease-in-out', animationIterationCount:'infinite', animationDirection:'alternate', willChange:'transform' }}>📊 Patterns</div>
            <div style={{ position:'absolute', bottom:'12%', left:'15%', background:'white', color:'#123047', padding:'10px 16px', borderRadius:18, fontWeight:800, boxShadow:'0 18px 45px rgba(18,48,71,0.16)', zIndex:5, animationName:'floatChipThree', animationDuration:'29s', animationTimingFunction:'ease-in-out', animationIterationCount:'infinite', animationDirection:'alternate', willChange:'transform' }}>⭐ Badges</div>
          </div>
        </div>
      </header>

      {/* CHARACTERS */}
      <section style={{ padding:'84px 7%', background:'#FFF8E8' }} id="characters">
        <div className="section-title">
          <h2>Meet the Characters</h2>
          <div className="title-line" />
          <p>Data and Pixel are two curious robot characters who guide children through data science detective adventures.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:30 }} className="char-grid">
          {[
            { name:'DATA', img:'/data-character.png', bg:'#FFF4C7', desc:'DATA is curious, energetic, and always ready to look for clues. DATA helps children observe the world, ask questions, and begin thinking like data detectives.' },
            { name:'PIXEL', img:'/pixel-character.png', bg:'#E0FAF6', desc:'PIXEL helps students organize ideas, find patterns, and explain discoveries. Together, Data and Pixel make data science feel like an adventure.' },
          ].map(c => (
            <div key={c.name} style={{ display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:24, alignItems:'center', background:'white', borderRadius:38, padding:30, boxShadow:'0 10px 28px rgba(18,48,71,0.11)', border:'1px solid rgba(0,166,166,0.10)' }}>
              <div style={{ minHeight:270, borderRadius:32, background:c.bg, display:'grid', placeItems:'center', padding:18 }}>
                <img src={c.img} alt={c.name} style={{ maxHeight:250, objectFit:'contain' }} />
              </div>
              <div>
                <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'2.2rem', margin:'0 0 10px', color:'#047C7C' }}>{c.name}</h3>
                <p style={{ color:'#465766', margin:0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section style={{ padding:'84px 7%', background:'white' }} id="experiences">
        <div className="section-title">
          <h2>Experiences We Offer</h2>
          <div className="title-line" />
          <p>DATA & PIXEL can support schools, libraries, STEM nights, family programs, and movie events through playful data science experiences.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,minmax(0,1fr))', gap:18 }} className="exp-row">
          {[
            { img:'/icon-matters.png', title:'School Visits', desc:'Interactive K–5 sessions that bring data science, stories, and hands-on activities into classrooms.', bg:'#E0FAF6' },
            { img:'/icon-theme.png', title:'Library Programs', desc:'Family-friendly learning experiences for public libraries, reading programs, and community events.', bg:'#FFF4C7' },
            { img:'/icon-experiences.png', title:'STEM Nights', desc:'Short, engaging stations where children explore clues, patterns, badges, and data stories.', bg:'#FFE9D8' },
            { img:'/logo.png', title:'Mascot Sessions', desc:'Memorable character-led sessions with Data and Pixel for photos, activities, and guided learning.', bg:'#E5F4FF' },
            { img:'/logo.png', title:'Movie Events', desc:'Movie theater experiences that introduce data science through story, imagination, and discovery.', bg:'#EFE6FF' },
          ].map(c => (
            <div key={c.title} style={{ minHeight:285, borderRadius:30, padding:'24px 18px', textAlign:'center', boxShadow:'0 10px 28px rgba(18,48,71,0.11)', transition:'.25s ease', border:'1px solid rgba(18,48,71,0.06)', background:c.bg }}>
              <div style={{ width:110, height:110, margin:'0 auto 18px', display:'grid', placeItems:'center', borderRadius:28, background:'white', boxShadow:'0 8px 18px rgba(18,48,71,0.08)' }}>
                <img src={c.img} alt={c.title} style={{ width:82, height:82, objectFit:'contain' }} />
              </div>
              <h3 style={{ fontFamily:"'Baloo 2',cursive", color:'#047C7C', fontSize:'1.45rem', lineHeight:1.05, margin:'0 0 10px' }}>{c.title}</h3>
              <p style={{ margin:0, color:'#465766', fontSize:'0.92rem', lineHeight:1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOVIE */}
      <section style={{ padding:'84px 7%', background:'#FFFDE7' }} id="movie">
        <div className="section-title">
          <h2>Featured Movie Event</h2>
          <div className="title-line" />
          <p>A cinematic DATA & PIXEL experience for families and young learners.</p>
        </div>
        <div style={{ maxWidth:1050, margin:'0 auto', display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:42, alignItems:'center', background:'white', borderRadius:42, padding:34, boxShadow:'0 18px 45px rgba(18,48,71,0.16)' }} className="movie-grid">
          <div style={{ position:'relative', minHeight:460, borderRadius:34, background:'linear-gradient(180deg,#00A6A6,#123047)', overflow:'hidden', display:'grid', placeItems:'center', color:'white', textAlign:'center', padding:28 }}>
            <div style={{ position:'absolute', top:18, right:-42, transform:'rotate(35deg)', background:'#FFD447', color:'#123047', padding:'8px 50px', fontWeight:800 }}>Featured</div>
            <img src="/movie-poster.jpg" alt="DATA & PIXEL movie poster" style={{ width:'100%', height:'100%', minHeight:460, objectFit:'cover', borderRadius:28 }} />
          </div>
          <div>
            <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'2.35rem', lineHeight:1.05, color:'#047C7C', margin:'0 0 14px' }}>A Data Science Tale:<br />When Data and Pixel Met</h3>
            <p style={{ color:'#465766' }}>Join Data and Pixel in a family-friendly movie theater experience that introduces children to curiosity, discovery, and the beginning of their data science detective journey.</p>
            <div style={{ display:'grid', gap:12, margin:'22px 0 26px' }}>
              {[['📅','May 23, 2026'],['🕚','11:00 AM'],['📍','AMC Manhattan 13, 103 Manhattan Town Center, Manhattan, KS 66502'],['🎟️','Seats are limited — free registration required']].map(([icon,text]) => (
                <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:12, background:'#E0FAF6', padding:'13px 16px', borderRadius:16, fontWeight:600, color:'#123047' }}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
            <a className="btn btn-teal" href="https://www.eventbrite.com/e/1989218053747" target="_blank" rel="noopener noreferrer">Reserve Free Tickets</a>
          </div>
        </div>
      </section>

      {/* DATAYING FRAMEWORK */}
      <section style={{ padding:'84px 7%', background:'#F4FBFB' }} id="framework">
        <div className="section-title">
          <h2>Dataying™ Framework – Data Science for Kids</h2>
          <div className="title-line" />
          <p>Dataying™ is the way DATA & PIXEL teaches young children data science through curiosity, clues, patterns, and storytelling.</p>
        </div>
        <div style={{ maxWidth:1000, margin:'0 auto 34px', background:'white', borderRadius:34, padding:30, boxShadow:'0 10px 28px rgba(18,48,71,0.11)', borderLeft:'8px solid #FFD447' }}>
          <p style={{ margin:0, color:'#465766' }}>Instead of starting with technical language, children begin as data detectives. They investigate a simple problem, ask questions, collect clues, explore information, find patterns, and share what they discovered. This makes data science visible, playful, and age-appropriate for K–5 learners.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,minmax(0,1fr))', gap:16, margin:'0 auto 40px', maxWidth:1180 }} className="steps-row">
          {[['1','Ask Questions','Children begin with curiosity and decide what they want to investigate.'],['2','Collect Clues','Children gather information through counting, observing, sorting, and noticing details.'],['3','Explore Data','Children organize their clues and compare what they see.'],['4','Find Patterns','Children look for similarities, differences, trends, and surprises.'],['5','Share Discoveries','Children explain what they found using stories, drawings, charts, or presentations.']].map(([num,title,desc]) => (
            <div key={num} style={{ background:'white', borderRadius:28, padding:'22px 16px', textAlign:'center', boxShadow:'0 10px 28px rgba(18,48,71,0.11)', borderTop:'7px solid #00A6A6' }}>
              <div style={{ width:46, height:46, borderRadius:'50%', display:'grid', placeItems:'center', margin:'0 auto 14px', background:'#00A6A6', color:'white', fontWeight:800, fontSize:'1.2rem' }}>{num}</div>
              <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.35rem', margin:'0 0 8px', color:'#047C7C' }}>{title}</h3>
              <p style={{ fontSize:'0.9rem', color:'#465766', margin:0, lineHeight:1.55 }}>{desc}</p>
            </div>
          ))}
        </div>
        <h3 style={{ textAlign:'center', fontFamily:"'Baloo 2',cursive", fontSize:'2rem', color:'#047C7C', margin:'12px 0 24px' }}>Badges Children Can Earn</h3>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,minmax(0,1fr))', gap:18, maxWidth:1050, margin:'0 auto' }} className="badges-row">
          {[['📏','Measurement'],['🔢','Counting'],['🧺','Grouping'],['↕️','Sorting'],['⚖️','Comparing']].map(([icon,label]) => (
            <div key={label} style={{ background:'white', borderRadius:26, padding:'20px 12px', textAlign:'center', boxShadow:'0 10px 28px rgba(18,48,71,0.11)', border:'2px solid rgba(255,212,71,0.45)' }}>
              <div style={{ width:76, height:76, borderRadius:'50%', background:'linear-gradient(135deg,#FFD447,#F4A300)', margin:'0 auto 12px', display:'grid', placeItems:'center', fontSize:'2rem' }}>{icon}</div>
              <strong style={{ color:'#047C7C' }}>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP & TEACHER MATERIALS */}
      <section style={{ padding:'84px 7%', background:'white' }} id="shop-teacher">
        <div className="section-title">
          <h2>Shop & Learning Materials</h2>
          <div className="title-line" />
          <p>Teacher lessons, classroom resources, and DATA & PIXEL learning materials in one place.</p>
        </div>
        <div style={{ textAlign:'center', margin:'-22px auto 42px' }}>
          <Link href="/shop" className="btn btn-teal">Go to Shop & Materials</Link>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,minmax(0,1fr))', gap:22 }} className="res-row">
          {[
            { title:'Teacher Lessons', desc:'Ready-to-use lessons for observation, counting, grouping, sorting, comparing, patterns, and data storytelling.', link:'/learn' },
            { title:'Printables', desc:'Activity sheets, slides, badges, certificates, coloring pages, and challenge cards.', link:'/learn#printables' },
            { title:'Stickers & Badges', desc:'Data Detective stickers, badge sheets, reward stickers, and classroom badge sets.', link:'/shop' },
            { title:'Books, Shirts & Bags', desc:"Children's books, activity books, shirts, tote bags, and event learning items.", link:'/shop' },
          ].map(c => (
            <div key={c.title} style={{ background:'#FFF8E8', borderRadius:30, padding:26, boxShadow:'0 10px 28px rgba(18,48,71,0.11)', border:'1px solid rgba(18,48,71,0.06)', display:'flex', flexDirection:'column', minHeight:405 }}>
              <div style={{ height:150, borderRadius:24, background:'white', border:'3px dashed rgba(4,124,124,0.18)', display:'grid', placeItems:'center', marginBottom:20 }}>
                <div style={{ fontWeight:800, color:'#047C7C', fontSize:'0.9rem', textAlign:'center', padding:12 }}>Image coming soon</div>
              </div>
              <h3 style={{ fontFamily:"'Baloo 2',cursive", color:'#047C7C', fontSize:'1.5rem', margin:'0 0 10px' }}>{c.title}</h3>
              <p style={{ fontSize:'0.94rem', color:'#465766', margin:'0 0 16px' }}>{c.desc}</p>
              <Link href={c.link} className="btn btn-teal" style={{ marginTop:'auto' }}>Open Resources</Link>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding:'84px 7%', background:'#FFF7E6' }} id="gallery">
        <div className="section-title">
          <h2>Gallery</h2>
          <div className="title-line" />
          <p>A space for school activities, movie production, mascot development, classroom materials, and behind-the-scenes updates.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:24 }} className="gal-row">
          {[
            { title:'Movie Production', desc:'Behind-the-scenes updates from the DATA & PIXEL movie.', note:'In progress' },
            { title:'Mascot Development', desc:'Progress photos and materials for Data and Pixel character experiences.', note:'In progress' },
            { title:'School Activities', desc:'Photos from classroom visits, STEM nights, and hands-on sessions.', note:'Coming soon' },
            { title:'New Materials', desc:'Stickers, badges, books, bags, printables, and classroom kits in development.', note:'Coming soon' },
            { title:'Movie Event', desc:'Photos from theater events, family learning experiences, and DATA & PIXEL activities.', note:'Coming soon' },
            { title:'Classroom Materials', desc:'Lesson materials, badge sheets, activity kits, and printable classroom resources.', note:'Coming soon' },
          ].map(c => (
            <div key={c.title} style={{ minHeight:360, borderRadius:34, background:'white', boxShadow:'0 10px 28px rgba(18,48,71,0.11)', padding:18, display:'flex', flexDirection:'column', textAlign:'left', gap:14, border:'3px dashed rgba(4,124,124,0.16)' }}>
              <div style={{ height:230, borderRadius:26, background:'#F4FBFB', border:'3px dashed rgba(4,124,124,0.18)', display:'grid', placeItems:'center' }}>
                <div style={{ fontWeight:800, color:'#047C7C', fontSize:'0.9rem', textAlign:'center', padding:12 }}>Photo coming soon</div>
              </div>
              <strong style={{ color:'#047C7C', fontSize:'1.1rem' }}>{c.title}</strong>
              <p style={{ margin:0, color:'#465766', fontSize:'0.94rem' }}>{c.desc}</p>
              <span style={{ display:'inline-flex', alignSelf:'flex-start', background:'#FFF4C7', color:'#F4A300', borderRadius:999, padding:'6px 12px', fontWeight:800, fontSize:'0.78rem' }}>{c.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* REQUEST */}
      <section style={{ padding:'84px 7%', background:'#FFD447' }} id="request">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:36, alignItems:'start', background:'rgba(255,255,255,0.95)', borderRadius:42, padding:42, boxShadow:'0 18px 45px rgba(18,48,71,0.16)', maxWidth:1180, margin:'0 auto', border:'4px solid rgba(255,255,255,0.7)' }} className="req-grid">
          <div>
            <h2 style={{ fontFamily:"'Baloo 2',cursive", color:'#047C7C', fontSize:'clamp(2rem,3.4vw,3rem)', lineHeight:1.05, margin:'0 0 16px' }}>Interested in Bringing DATA & PIXEL to Your Community?</h2>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'#E7FAF8', color:'#047C7C', border:'2px solid rgba(0,166,166,0.22)', padding:'12px 16px', borderRadius:22, fontWeight:800, margin:'8px 0 18px' }}>
              <a href="https://people.cs.ksu.edu/~safia/D3.html" target="_blank" rel="noopener noreferrer" style={{ color:'#047C7C' }}>D³ Playground Research Lab</a>
            </div>
            <p style={{ color:'#465766' }}>DATA & PIXEL can support schools, libraries, STEM nights, summer camps, after-school programs, movie events, and family learning experiences.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, margin:'18px 0' }}>
              {['Schools','Libraries','STEM Nights','Movie Events','Summer Camps'].map(l => (
                <span key={l} style={{ background:'#FFD447', color:'#123047', borderRadius:999, padding:'8px 13px', fontWeight:800, boxShadow:'0 4px 10px rgba(244,163,0,0.16)' }}>{l}</span>
              ))}
            </div>
            <p style={{ color:'#465766' }}><strong>Email:</strong> safia@ksu.edu<br /><strong>Website:</strong> https://www.pixelanddata.com/</p>
            <p style={{ color:'#465766' }}>Coordinated by the D³ Playground Research Lab, Department of Computer Science, Kansas State University.</p>
          </div>
          <div style={{ background:'#EAFBFB', borderRadius:30, padding:28, border:'2px solid rgba(0,166,166,0.18)' }}>
            <h3 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.8rem', color:'#047C7C', margin:'0 0 18px' }}>Request Information</h3>
            {[['text','Name','Your name'],['text','Organization','School, library, or community group'],['email','Email','your@email.com']].map(([type,label,ph]) => (
              <div key={label} style={{ marginBottom:14 }}>
                <label style={{ display:'block', fontWeight:800, fontSize:'0.86rem', marginBottom:6, color:'#123047' }}>{label}</label>
                <input type={type} placeholder={ph} style={{ width:'100%', border:'1.5px solid rgba(18,48,71,0.18)', borderRadius:15, padding:'12px 14px', fontFamily:'Poppins,sans-serif', outline:'none', fontSize:'0.92rem' }} />
              </div>
            ))}
            <div style={{ marginBottom:14 }}>
              <label style={{ display:'block', fontWeight:800, fontSize:'0.86rem', marginBottom:6, color:'#123047' }}>Event Type</label>
              <select style={{ width:'100%', border:'1.5px solid rgba(18,48,71,0.18)', borderRadius:15, padding:'12px 14px', fontFamily:'Poppins,sans-serif', outline:'none', fontSize:'0.92rem' }}>
                {['School Visit','Library Program','STEM Night','Movie Event','Summer Camp','Other'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ marginBottom:14 }}>
              <label style={{ display:'block', fontWeight:800, fontSize:'0.86rem', marginBottom:6, color:'#123047' }}>Message</label>
              <textarea placeholder="Tell us what you are interested in..." style={{ width:'100%', border:'1.5px solid rgba(18,48,71,0.18)', borderRadius:15, padding:'12px 14px', fontFamily:'Poppins,sans-serif', outline:'none', fontSize:'0.92rem', minHeight:105, resize:'vertical' }} />
            </div>
            <button style={{ width:'100%', border:'none', borderRadius:999, background:'#00A6A6', color:'white', padding:14, fontFamily:'Poppins,sans-serif', fontWeight:800, cursor:'pointer', fontSize:'1rem' }}>Submit Request</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
