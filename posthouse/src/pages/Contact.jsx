import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Contact.css"
import Footer from "../components/Footer"
import bgImg from "../assets/dbg.jpg"

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Email",
    value: "work.posthouse@gmail.com",
    href: "mailto:work.posthouse@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 9904100862",
    href: "tel:+919904100862",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Studio",
    value: "807, Sun Central Place, Bopal, Ahmedabad 380058",
    href: "https://www.google.com/maps?q=Sun+Central+Place+Ambli+Ahmedabad",
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", number: "", message: "" })
  const [focused, setFocused] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: "", email: "", number: "", message: "" })
      setTimeout(() => setSubmitted(false), 4000)
    }, 1400)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* BG parallax */
      gsap.to(".contact-bg", {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      /* Hero text */
      gsap.fromTo(".contact-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: "power3.out" }
      )
      gsap.fromTo(".contact-title",
        { y: 110, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.4, ease: "power4.out" }
      )
      gsap.fromTo(".contact-desc",
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.35, ease: "power3.out" }
      )

      /* Info cards */
      gsap.fromTo(".contact-info-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-info", start: "top 82%" },
        }
      )

      /* Form */
      gsap.fromTo(".contact-form-wrap",
        { x: 80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: ".contact-body", start: "top 78%" },
        }
      )
      gsap.fromTo(".contact-left-col",
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: ".contact-body", start: "top 78%" },
        }
      )

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="contact" ref={containerRef}>
      <div className="contact-bg" style={{ backgroundImage: `url(${bgImg})` }} />

      {/* ── HERO ── */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Get In Touch</p>
        <div className="contact-title-wrap">
          <h1 className="contact-title">
            LET'S<br />
            <span className="contact-title-gold">CREATE.</span>
          </h1>
        </div>
        <p className="contact-desc">
          We're committed to understanding your vision and bringing it to life.<br />
          Tell us about your project — every frame begins with a conversation.
        </p>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="contact-info">
        {contactInfo.map((c) => (
          <a
            href={c.href}
            key={c.label}
            className="contact-info-card"
            target={c.label === "Studio" ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <span className="contact-info-icon">{c.icon}</span>
            <span className="contact-info-label">{c.label}</span>
            <span className="contact-info-value">{c.value}</span>
            <span className="contact-info-arrow">↗</span>
          </a>
        ))}
      </section>

      {/* ── BODY: left col + form ── */}
      <section className="contact-body">

        {/* LEFT */}
        <div className="contact-left-col">
          <span className="contact-body-label">What We Offer</span>
          <h2 className="contact-body-title">
            Every Project,<br /><em>Personal.</em>
          </h2>
          <p className="contact-body-text">
            From brand commercials to short films — our process starts with listening.
            Share your idea and we'll tell you how we can make it extraordinary.
          </p>

          <ul className="contact-services-list">
            {["Commercial Ads & TVCs", "Corporate Films", "Social Media Content", "Short Film Editing", "Colour Grading", "Motion Graphics"].map((s) => (
              <li key={s} className="contact-service-item">
                <span className="contact-service-dot" />
                {s}
              </li>
            ))}
          </ul>

          {/* decorative film strip */}
          <div className="contact-film-strip" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, i) => (
              <div className="contact-film-frame" key={i} />
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Message Sent.</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-header">
                <span className="contact-form-eyebrow">Send a Message</span>
              </div>

              {/* NAME */}
              <div className={`contact-field ${focused === "name" || form.name ? "contact-field--active" : ""}`}>
                <label htmlFor="name">Name <span>*</span></label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  autoComplete="off"
                />
                <div className="contact-field-line" />
              </div>

              {/* EMAIL */}
              <div className={`contact-field ${focused === "email" || form.email ? "contact-field--active" : ""}`}>
                <label htmlFor="email">Email <span>*</span></label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  autoComplete="off"
                />
                <div className="contact-field-line" />
              </div>

              {/* NUMBER */}
              <div className={`contact-field ${focused === "number" || form.number ? "contact-field--active" : ""}`}>
                <label htmlFor="number">Phone Number</label>
                <input
                  id="number" name="number" type="tel"
                  value={form.number}
                  onChange={handleChange}
                  onFocus={() => setFocused("number")}
                  onBlur={() => setFocused("")}
                  autoComplete="off"
                />
                <div className="contact-field-line" />
              </div>

              {/* MESSAGE */}
              <div className={`contact-field contact-field--textarea ${focused === "message" || form.message ? "contact-field--active" : ""}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="4"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                />
                <div className="contact-field-line" />
              </div>

              <button type="submit" className={`contact-submit ${loading ? "contact-submit--loading" : ""}`}>
                {loading ? (
                  <span className="contact-submit-spinner" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </section>

      <Footer />
    </div>
  )
}