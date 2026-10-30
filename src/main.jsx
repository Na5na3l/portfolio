import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Layers3,
  Smartphone,
  Braces,
  Sparkles,
  Phone
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Restaurant Menu",
    category: "FRONTEND DEVELOPMENT",
    description: "A polished digital menu with category navigation, responsive layouts, and subtle motion for a better browsing experience.",
    tags: ["React", "CSS", "Responsive UI"],
    visual: "menu",
    link: "#contact",
    linkLabel: "Project details"
  },
  {
    number: "02",
    title: "Real Estate Platform",
    category: "FULL-STACK PRACTICE",
    description: "A real-estate application concept exploring property listings, account flows, and reusable interface components.",
    tags: ["React", "Express", "MongoDB"],
    visual: "estate",
    link: "#contact",
    linkLabel: "Project details"
  },
  {
    number: "03",
    title: "Tutor Booking Concept",
    category: "PRODUCT UI CONCEPT",
    description: "A learning platform concept designed to help families discover tutors, review availability, and request lessons.",
    tags: ["React", "Product thinking", "UI design"],
    visual: "tutor",
    link: "#contact",
    linkLabel: "Project details"
  }
];

const skills = [
  { icon: Code2, title: "Frontend", items: "HTML · CSS · JavaScript · React" },
  { icon: Layers3, title: "UI development", items: "Responsive layouts · Components · CSS animation" },
  { icon: Braces, title: "Learning next", items: "APIs · Node.js · Express · Databases" },
  { icon: Smartphone, title: "Approach", items: "Accessible · Mobile-first · Detail-focused" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Natnael home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NATNAEL A.</span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow">FRONTEND DEVELOPER · ADDIS ABABA, ETHIOPIA</p>
            <h1>I build digital<br />experiences that<br /><span>feel right.</span></h1>
            <p className="hero-description">
              I'm Natnael, a developing frontend engineer who enjoys turning ideas into
              clean, responsive, and useful web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-footnote"><span>01 / 03</span><span>CURIOUS BY NATURE. BUILT WITH INTENTION.</span></div>
          </div>

          <div className="hero-art" aria-label="Abstract code-inspired artwork">
            <div className="art-grid"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="art-core"><span>&lt;</span><i>/</i><span>&gt;</span></div>
            <div className="floating-card card-code"><span className="mini-dot"></span> const ideas = <b>"build"</b>;</div>
            <div className="floating-card card-react"><span className="react-symbol">✳</span> React · CSS</div>
            <div className="art-caption"><Sparkles size={14} /> DESIGN MINDED. CODE DRIVEN.</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <p>GOOD DESIGN GETS ATTENTION.</p>
            <span className="strip-star">✳</span>
            <p>GOOD CODE MAKES IT WORK.</p>
            <span className="strip-star">✳</span>
            <p>THE DETAILS MAKE IT LAST.</p>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow"><span>01</span> / A LITTLE ABOUT ME</p>
            <h2>Curiosity is where<br />good work <span>begins.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-note reveal">
              <div className="note-icon"><Code2 size={23} /></div>
              <p className="large-note">I like making the web feel a little more human.</p>
              <p className="muted">My focus is building interfaces that are clear, practical, and enjoyable to use—one thoughtful detail at a time.</p>
            </div>
            <div className="about-text reveal">
              <p>
                I'm a computer science student building my skills in frontend development.
                I enjoy the process of taking a rough idea, breaking it into smaller pieces,
                and bringing it to life with code.
              </p>
              <p>
                I'm currently strengthening my JavaScript and React fundamentals while
                exploring how frontend applications connect to real backend services.
                I value learning by building, asking better questions, and improving with every project.
              </p>
              <div className="about-facts">
                <div><span className="fact-number">01</span><span>Learn by building</span></div>
                <div><span className="fact-number">02</span><span>Keep it accessible</span></div>
                <div><span className="fact-number">03</span><span>Improve every iteration</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-wrap">
            <div className="work-heading reveal">
              <div>
                <p className="eyebrow"><span>02</span> / SELECTED WORK</p>
                <h2>Things I've been<br /><span>building.</span></h2>
              </div>
              <p className="work-intro">A selection of practice projects and product concepts. I'm always working on making them better.</p>
            </div>
            <div className="project-list">
              {projects.map(project => (
                <article className={`project-card reveal ${project.visual}`} key={project.number}>
                  <div className="project-visual">
                    <div className="visual-top"><span>PROJECT / {project.number}</span><span className="visual-live">● CONCEPT</span></div>
                    {project.visual === "menu" && (
                      <div className="mock-menu">
                        <div className="mock-menu-title">good food<span>.</span></div>
                        <div className="mock-menu-sub">A MENU MADE SIMPLE</div>
                        <div className="mock-food-row"><span>01</span><b>Breakfast</b><i>↗</i></div>
                        <div className="mock-food-row"><span>02</span><b>Main dishes</b><i>↗</i></div>
                        <div className="mock-food-row"><span>03</span><b>Drinks</b><i>↗</i></div>
                      </div>
                    )}
                    {project.visual === "estate" && (
                      <div className="mock-estate">
                        <div className="estate-window"><div className="estate-sun"></div><div className="estate-building"></div></div>
                        <div className="estate-label">FIND YOUR SPACE</div>
                        <div className="estate-line"></div><div className="estate-line short"></div>
                        <div className="estate-pill">Explore listings ↗</div>
                      </div>
                    )}
                    {project.visual === "tutor" && (
                      <div className="mock-tutor">
                        <div className="tutor-top"><span>learnwell</span><span>☰</span></div>
                        <div className="tutor-greeting">Find the right<br /><b>guide for you.</b></div>
                        <div className="tutor-search">⌕ &nbsp; Subject or tutor <span>→</span></div>
                        <div className="tutor-tags"><span>Mathematics</span><span>Physics</span></div>
                      </div>
                    )}
                  </div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a href={project.link} className="project-link">{project.linkLabel} <ArrowUpRight size={16} /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="project-disclaimer">Portfolio note: these are project summaries/concepts. Replace each with your actual screenshots, live demo, and repository links before presenting them as completed work.</p>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-heading reveal">
            <p className="eyebrow"><span>03</span> / MY TOOLKIT</p>
            <h2>What I'm working<br />with <span>right now.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return <div className="skill-card reveal" key={skill.title}>
                <div className="skill-card-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.6} /></div>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </div>;
            })}
          </div>
          <div className="learning-banner reveal">
            <div><span className="learning-icon"><Sparkles size={20} /></span><div><h3>Always learning. Always shipping.</h3><p>I'm open to feedback, collaboration, internships, and beginner-friendly freelance projects.</p></div></div>
            <a href="#contact" aria-label="Contact me"><ArrowUpRight size={22} /></a>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-main reveal">
              <p className="eyebrow"><span>04</span> / HAVE SOMETHING IN MIND?</p>
              <h2>Let's make<br />something <span>useful.</span></h2>
              <p className="contact-copy">Have a project idea, an opportunity, or just want to connect? My inbox is open.</p>
              <a className="button button-primary" href="mailto:natnaelarega9@gmail.com">Send me an email <ArrowUpRight size={18} /></a>
            </div>
            ```jsx
<div className="contact-side reveal">
  <div className="contact-detail">
    <span>EMAIL</span>
    <a href="mailto:natnaelarega9@gmail.com">
      natnaelarega9@gmail.com <ArrowUpRight size={15} />
    </a>
  </div>

  <div className="contact-detail">
    <span>PHONE</span>
    <a href="tel:+251943790597">
      <Phone size={15} /> +251 943790597
    </a>
  </div>

  <div className="contact-detail">
    <span>LOCATION</span>
    <p>Addis Ababa, Ethiopia</p>
  </div>

  <div className="contact-detail">
    <span>ELSEWHERE</span>
    <div className="social-links">
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <Github size={17} /> GitHub <ArrowUpRight size={13} />
      </a>

      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
      </a>
    </div>
  </div>

  <p className="contact-tip">
    Replace the social links with your personal profiles before publishing.
  </p>
</div>
```
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NATNAEL A.</span></a>
          <p>Designed with curiosity. Built with React.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
          <span className="copyright">© {new Date().getFullYear()} NATNAEL AREGA</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
