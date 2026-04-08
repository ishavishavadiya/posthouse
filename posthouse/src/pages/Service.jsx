import { useEffect, useRef } from "react";
import "./Service.css";
import commercialAds from "../assets/commercial-ads.png";
import corporateFilms from "../assets/corporate-films.png";
import socialMedia from "../assets/social-media.png";
import theatreCommercials from "../assets/theatre-commercials.png";
import shortFilm from "../assets/short-film-editing.png";
import colourGrading from "../assets/colour-grading.png";
import motionGraphics from "../assets/motion-graphics.png";
import documentaries from "../assets/documentaries.png";
import postProduction from "../assets/post-production.png";
import adani from "../assets/adani.png";
import vadilal from "../assets/vadilal.png";
import grew from "../assets/grew.png";
import aqura from "../assets/aqura.png";
import saanidiya from "../assets/saanidiiya.png";
import sc from "../assets/sc.png";
import dubai from "../assets/dubai.png";
import hz from "../assets/hz.png";
import Footer from "../components/Footer"

/* ─── SERVICE CARDS DATA ─── */
const services = [
  {
    id: "01",
    slug: "commercial-ads",
    title: "Commercial Ads & TVCs",
    tag: "Brand Films",
    desc: "High-impact brand films crafted with cinematic visuals and powerful storytelling that converts audiences into loyal customers.",
    img: commercialAds,
  },
  {
    id: "02",
    slug: "corporate-films",
    title: "Corporate Films",
    tag: "Corporate",
    desc: "Clean, structured company videos that communicate your process, culture, and vision with precision and elegance.",
    img: corporateFilms,
  },
  {
    id: "03",
    slug: "social-media",
    title: "Social Media Content",
    tag: "Digital",
    desc: "Scroll-stopping short videos and reels optimised for Instagram, YouTube & Facebook — built to go viral.",
    img: socialMedia,
  },
  {
    id: "04",
    slug: "theatre-commercials",
    title: "Theatre Commercials",
    tag: "Cinema",
    desc: "Big-screen visuals with crisp storytelling and high-end colour grading engineered for the silver screen.",
    img: theatreCommercials,
  },
  {
    id: "05",
    slug: "short-film",
    title: "Short Film Editing",
    tag: "Narrative",
    desc: "Emotion-driven narrative edits with cinematic pacing and premium finishing that honour every frame.",
    img: shortFilm,
  },
  {
    id: "06",
    slug: "colour-grading",
    title: "Professional Colour Grading",
    tag: "Post-Production",
    desc: "Create mood, depth, and consistency with high-end industry grading tools trusted by award-winning filmmakers.",
    img: colourGrading,
  },
  {
    id: "07",
    slug: "motion-graphics",
    title: "Motion Graphics",
    tag: "VFX / Motion",
    desc: "Clean title animations, seamless transitions, and branded visual identity that make your content unforgettable.",
    img: motionGraphics,
  },
  {
    id: "08",
    slug: "documentaries",
    title: "Documentaries",
    tag: "Storytelling",
    desc: "Human-focused storytelling with narrative clarity and immersive visuals that leave lasting impressions.",
    img: documentaries,
  },
  {
    id: "09",
    slug: "post-production",
    title: "Editing & Post Production",
    tag: "Full Pipeline",
    desc: "Full post-production workflow including edit, sound, VFX cleanup & final delivery — start to finish, flawlessly.",
    img: postProduction,
  },
];

/* ─── BRANDS DATA ─── */
const brands = [
  { name: "Adani", img: adani },
  { name: "Vadilal", img: vadilal },
  { name: "Grew Solar", img: grew },
  { name: "Aqura", img: aqura },
  { name: "Saanidiya", img: saanidiya },
  { name: "Brand 6", img: sc },
  { name: "Brand 7", img: dubai },
  { name: "Brand 8", img: hz },
];

/* ─── STATS ─── */
const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "9", label: "Service Verticals" },
  { value: "40+", label: "Brand Partners" },
  { value: "5★", label: "Client Rating" },
];

export default function Services() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const brandsRef = useRef(null);
  const noiseRef = useRef(null);

  /* ─── GSAP + Framer-like scroll reveal via IntersectionObserver ─── */
  useEffect(() => {
    // Staggered hero text reveal
    const heroChildren = heroRef.current?.querySelectorAll(".anim-hero");
    heroChildren?.forEach((el, i) => {
      el.style.animationDelay = `${0.1 + i * 0.15}s`;
      el.style.animationPlayState = "running";
    });

    // Scroll-triggered card reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Parallax on hero bg
    const handleScroll = () => {
      const y = window.scrollY;
      const heroBg = document.querySelector(".svc-hero-bg");
      if (heroBg) heroBg.style.transform = `scale(1.12) translateY(${y * 0.18}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ─── Card magnetic hover ─── */
  const handleCardMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.setProperty("--mx", `${x * 0.04}deg`);
    card.style.setProperty("--my", `${-y * 0.04}deg`);
  };
  const handleCardLeave = (card) => {
    card.style.setProperty("--mx", "0deg");
    card.style.setProperty("--my", "0deg");
  };

  return (
    <div className="svc">
      {/* NOISE GRAIN */}
      <div className="svc-grain" ref={noiseRef} />

      {/* ─── HERO ─── */}
      <section className="svc-hero" ref={heroRef}>
        <div className="svc-hero-bg" />
        <div className="svc-hero-overlay" />

        <div className="svc-hero-content">
          <p className="svc-eyebrow anim-hero">What We Do</p>

          <h1 className="svc-hero-title anim-hero">
            <span className="svc-title-line">Frame</span>
            <span className="svc-title-line svc-title-gold">Every</span>
            <span className="svc-title-line">Vision.</span>
          </h1>

          <p className="svc-hero-desc anim-hero">
            From a single reel to a full cinematic pipeline — Posthouse Studios
            delivers every service your story demands.
          </p>

          <a href="#services-grid" className="svc-cta anim-hero">
            <span>Explore Services</span>
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* floating stats */}
        <div className="svc-hero-stats anim-hero">
          {stats.map((s) => (
            <div className="svc-stat" key={s.label}>
              <span className="svc-stat-val">{s.value}</span>
              <span className="svc-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* scroll indicator */}
        <div className="svc-scroll-hint">
          <div className="svc-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="svc-divider">
        <svg viewBox="0 0 1440 2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="1440" y2="1" stroke="url(#dg)" strokeWidth="1" />
          <defs>
            <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#c8a96e" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#c8a96e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section className="svc-grid-section" id="services-grid">
        <div className="svc-section-header reveal">
          <span className="svc-label">Our Craft</span>
          <h2 className="svc-section-title">
            Nine Disciplines.<br />
            <em>One Standard.</em>
          </h2>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`svc-card reveal ${i === 0 ? "svc-card--featured" : ""}`}
              style={{ "--delay": `${(i % 3) * 0.1}s` }}
              onMouseMove={(e) => handleCardMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="svc-card-img-wrap">
                <img src={s.img} alt={s.title} className="svc-card-img" loading="lazy" />
                <div className="svc-card-img-overlay" />
                <span className="svc-card-tag">{s.tag}</span>
                <span className="svc-card-id">{s.id}</span>
              </div>

              <div className="svc-card-body">
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-desc">{s.desc}</p>
                <div className="svc-card-cta">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* gold corner accent */}
              <div className="svc-card-corner" />
            </article>
          ))}
        </div>
      </section>

      {/* ─── PROCESS STRIP ─── */}
      <section className="svc-process reveal">
        <div className="svc-process-inner">
          <span className="svc-label">How We Work</span>
          <div className="svc-process-steps">
            {["Concept", "Pre-Production", "Production", "Post", "Delivery"].map((step, i) => (
              <div className="svc-step" key={step}>
                <div className="svc-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="svc-step-name">{step}</div>
                {i < 4 && <div className="svc-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="svc-brands" ref={brandsRef}>
        <div className="svc-brands-header reveal">
          <span className="svc-label">Trusted By</span>
          <h2 className="svc-section-title">
            Brands I've <em>Worked With</em>
          </h2>
          <p className="svc-brands-sub">
            Partnered with companies across industries to deliver world-class video production.
          </p>
        </div>

        <div className="svc-brands-track-wrap">
          <div className="svc-brands-track">
            {[...brands, ...brands].map((b, i) => (
              <div className="svc-brand-logo" key={`${b.name}-${i}`}>
                <img src={b.img} alt={b.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="svc-cta-band reveal">
        <div className="svc-cta-band-inner">
          <p className="svc-cta-band-eyebrow">Ready to create?</p>
          <h2 className="svc-cta-band-title">
            Let's Build Something<br /><em>Extraordinary.</em>
          </h2>
          <a href="/contact" className="svc-cta svc-cta--dark">
            <span>Start a Project</span>
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="svc-cta-band-bg" />
      </section>

        <Footer />
    </div>
  );
}