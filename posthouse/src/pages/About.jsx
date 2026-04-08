import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./About.css"
import Footer from "../components/Footer"
import cameraImg from "../assets/cam.jpg"
import founderImg from "../assets/founder.png"
import bgImg from "../assets/dbg.jpg"
import cinemaImg from "../assets/cinema.png"

gsap.registerPlugin(ScrollTrigger)

/* ─── WHY CARDS DATA ─── */
const whyCards = [
  {
    id: "01",
    title: "Story First",
    desc: "We focus on storytelling before effects — ensuring every video has emotion, clarity, and purpose that resonates.",
    side: "left",
  },
  {
    id: "02",
    title: "Cinematic Quality",
    desc: "Every frame is treated like a film scene — professional colour grading, smooth transitions, and visual depth.",
    side: "left",
  },
  {
    id: "03",
    title: "Fast Turnaround",
    desc: "We value your time. Our workflow is optimised to deliver high-quality results without unnecessary delays.",
    side: "right",
  },
  {
    id: "04",
    title: "Creative Direction",
    desc: "We don't just follow instructions — we guide you with creative ideas that elevate your content.",
    side: "right",
  },
]

/* ─── STATS ─── */
const stats = [
  { value: "150+", label: "Projects" },
  { value: "5★",   label: "Rating" },
  { value: "40+",  label: "Brands" },
  { value: "4yr",  label: "Experience" },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── PARALLAX BG ── */
      gsap.to(".about-bg", {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      /* ── HERO TITLE — char split reveal ── */
      gsap.fromTo(
        ".about-title",
        { y: 120, opacity: 0, skewY: 4 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.4,
          ease: "power4.out",
        }
      )

      gsap.fromTo(
        ".about-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power3.out" }
      )

      gsap.fromTo(
        ".about-sub",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      )

      gsap.fromTo(
        ".about-hero-stats",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.6, ease: "power3.out" }
      )

      /* hero image */
      gsap.fromTo(
        ".about-image",
        { scale: 1.18, opacity: 0, x: 60 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.5,
          delay: 0.15,
          ease: "power3.out",
        }
      )

      /* gold glow pulse on hero image */
      gsap.to(".about-right-glow", {
        scale: 1.15,
        opacity: 0.8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      })

      /* ── STORY ── */
      gsap.fromTo(
        ".story-label",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story", start: "top 82%" },
        }
      )

      gsap.fromTo(
        ".story h2",
        { y: 70, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".story", start: "top 80%" },
        }
      )

      gsap.fromTo(
        ".story-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story", start: "top 78%" },
        }
      )

      /* story line draw */
      gsap.fromTo(
        ".story-line",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".story", start: "top 75%" },
        }
      )

      /* ── FOUNDER ── */
      gsap.fromTo(
        ".founder-img",
        { x: -100, opacity: 0, rotate: -2 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".founder", start: "top 80%" },
        }
      )

      gsap.fromTo(
        ".founder-text > *",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".founder", start: "top 78%" },
        }
      )

      /* founder border line draw */
      gsap.fromTo(
        ".founder-img::before",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ".founder", start: "top 80%" },
        }
      )

      /* ── WHY HEADER ── */
      gsap.fromTo(
        ".why-title",
        { y: 80, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".why-header", start: "top 82%" },
        }
      )

      gsap.fromTo(
        ".why-desc",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-header", start: "top 80%" },
        }
      )

      /* ── CINEMA IMG ── */
      gsap.fromTo(
        ".cinema-img",
        { scale: 0.78, opacity: 0, rotate: 6 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: { trigger: ".why-body", start: "top 82%" },
        }
      )

      /* cinema float loop */
      gsap.to(".cinema-img", {
        y: -14,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.5,
      })

      /* ── WHY CARDS — left & right stagger ── */
      gsap.fromTo(
        ".why-card--left",
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-body", start: "top 82%" },
        }
      )

      gsap.fromTo(
        ".why-card--right",
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-body", start: "top 82%" },
        }
      )

      /* ── BOTTOM CARD ── */
      gsap.fromTo(
        ".why-card--bottom",
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-bottom", start: "top 88%" },
        }
      )

      /* ── ARC SVG draw ── */
      const arcPath = document.querySelector(".arc-path")
      if (arcPath) {
        const length = arcPath.getTotalLength?.() || 800
        gsap.set(arcPath, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(arcPath, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".arc-wrapper", start: "top 88%" },
        })
      }

      /* ── CARD NUMBER parallax ── */
      gsap.utils.toArray(".why-card-num").forEach((num) => {
        gsap.to(num, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: num.closest(".why-card"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="about" ref={containerRef}>

      {/* ── PARALLAX BACKGROUND ── */}
      <div className="about-bg" style={{ backgroundImage: `url(${bgImg})` }} />

      {/* ══════════ HERO ══════════ */}
      <section className="about-hero">
        <div className="about-left">
          <p className="about-eyebrow">Who We Are</p>

          <div className="about-title-wrap">
            <h1 className="about-title">
              ABOUT<br />
              <span className="about-title-gold">POSTHOUSE</span>
            </h1>
          </div>

          <p className="about-sub">
            We craft cinematic stories through powerful visuals — where
            every frame is a deliberate creative choice, and every edit
            tells a story worth remembering.
          </p>

          <div className="about-hero-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat-val">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-right-glow" />
          <img src={cameraImg} alt="Cinema projector" className="about-image" />
          {/* floating tag */}
          <div className="about-img-tag">
            <span className="about-img-tag-dot" />
            Posthouse Studios
          </div>
        </div>
      </section>

      {/* ══════════ STORY ══════════ */}
      <section className="story">
        <p className="story-label">Our Story</p>

        <div className="story-line" />

        <h2>OUR STORY</h2>

        <p className="story-text">
          Posthouse is a creative video post-production studio founded by Meet,
          focused on transforming raw footage into compelling visual narratives.
          We work with brands, creators, and businesses to create impactful
          visual experiences that connect with audiences on a deeper level.
          Every project starts with intent and ends with impact.
        </p>
      </section>

      {/* ══════════ FOUNDER ══════════ */}
      <section className="founder">
        <div className="founder-img">
          <img src={founderImg} alt="Meet — Founder of Posthouse" />
          {/* role badge */}
          <div className="founder-badge">
            <span>Founder</span>
          </div>
        </div>

        <div className="founder-text">
          <span className="founder-label">The Visionary</span>
          <h2>MEET</h2>
          <span className="founder-role">Founder · Editor · Producer</span>
          <p>
            With a passion for cinematic storytelling and a precision-first
            approach, Meet built Posthouse to bridge the gap between raw
            footage and unforgettable visual narratives. Every project is
            personal — every cut, intentional. Every frame, earned.
          </p>
          <a href="/contact" className="founder-cta">
            Work With Us
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ══════════ WHY POSTHOUSE ══════════ */}
      <section className="why">

        <div className="why-header">
          <h2 className="why-title">
            WHY<br />
            <span className="why-title-gold">POSTHOUSE?</span>
          </h2>
          <p className="why-desc">
            We don't just edit videos — we engineer experiences. Premium craft,
            creative direction, and a relentless eye for detail help brands
            connect, engage, and grow beyond expectation.
          </p>
        </div>

        {/* Dashed arc divider */}
        <div className="arc-wrapper">
          <svg className="arc-svg" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path
              className="arc-path"
              d="M0,40 Q600,80 1200,40"
              fill="none"
              stroke="rgba(200,169,110,0.35)"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* 3-column: left | cinema | right */}
        <div className="why-body">
          <div className="why-col">
            {whyCards.filter(c => c.side === "left").map((card) => (
              <div className="why-card why-card--left" key={card.id}>
                <span className="why-card-num">{card.id}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="why-center">
            <img src={cinemaImg} alt="Cinema clapboard and film reel" className="cinema-img" />
          </div>

          <div className="why-col why-col--right">
            {whyCards.filter(c => c.side === "right").map((card) => (
              <div className="why-card why-card--right" key={card.id}>
                <span className="why-card-num">{card.id}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom centered card */}
        <div className="why-bottom">
          <div className="why-card why-card--bottom">
            <span className="why-card-num">05</span>
            <h3>Detail Driven Process</h3>
            <p>
              From frame cuts to sound design, we obsess over the small details
              that make a big difference in the final result.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}