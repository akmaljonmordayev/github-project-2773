import { useEffect, useState } from 'react'
import './main.css'

const skills = [
  { title: 'HTML', text: 'Semantik va toza sahifa tuzilmasini yozish.' },
  { title: 'CSS', text: 'Flexbox, Grid, animatsiyalar va responsive dizayn.' },
  { title: 'JavaScript', text: 'DOM bilan ishlash, React hooklar va state.' },
  { title: 'Git', text: 'Javob commits va jamoa bilan ishlash tajribasi.' },
]

const projects = [
  { title: 'Portfolio', text: 'Shu sayt — faqat HTML va CSS bilan.', tag: 'HTML/CSS' },
  { title: 'Kalkulyator', text: 'Kichik amaliy loyiha, JavaScript bilan.', tag: 'JS' },
  { title: 'To-do list', text: 'Vazifalarni saqlash, localStorage bilan.', tag: 'React' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <div className="page">
      <header className={`header${scrolled ? ' header--small' : ''}`}>
        <div className="header__inner">
          <h1 className="header__logo">Dilshod</h1>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>

          <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
            <a href="#home" onClick={close}>Bosh sahifa</a>
            <a href="#skills" onClick={close}>Ko'nikmalar</a>
            <a href="#projects" onClick={close}>Loyihalar</a>
            <a href="#contact" onClick={close}>Aloqa</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <h2>Salom, men Dilshodman</h2>
          <p>
            Veb-saytlar yaratishni yoqtiraman. Har kuni yangi narsalarni
            o'rganib boraman va natijani shu yerda ko'rsataman.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#projects">Loyihalarni ko'rish</a>
            <a className="btn btn--ghost" href="#contact">Aloqa</a>
          </div>
        </section>

        <section className="section">
          <h3 className="section__title">Ko'nikmalar</h3>
          <div className="cards">
            {skills.map((s) => (
              <div className="card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h3 className="section__title">Loyihalar</h3>
          <div className="cards">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <span className="card__tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <h3 className="section__title">Aloqa</h3>
          <p className="contact__text">
            Savol bo'lsa yozing:{' '}
            <a href="mailto:dilshod@example.com">dilshod@example.com</a>
          </p>
          <a className="btn" href="mailto:dilshod@example.com">Xabar yuborish</a>
        </section>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Dilshod. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  )
}

export default App
