import { useState } from "react"
import "./Footer.css"
import logo from "../assets/logo.png"
import map from "../assets/map.png"
import wp from "../assets/wp.png"
import insta from "../assets/insta.png"

function Footer() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const phone = "+91 9904100862"

  const handleCopy = () => {
    navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = () => {
    if (!email) return
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 2500)
  }

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit()
  }

  return (
    <footer className="footer">

      {/* ── TOP BAND ── */}
      <div className="footer-top-band">
        <span className="footer-band-text" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>POSTHOUSE STUDIOS&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          ))}
        </span>
      </div>

      <div className="footer-container">

        {/* ── LEFT ── */}
        <div className="footer-left">
          <img src={logo} alt="Posthouse Studios logo" className="footer-logo" />

          <p className="footer-tagline">
            From raw footage to cinematic visuals — full spectrum video solutions.
          </p>

          <address className="footer-address">
            807, Sun Central Place, Opp. Iscon Platinum,<br />
            Nr. Bopal cross road, Bopal,<br />
            Ahmedabad, 380058
          </address>

          <button className="footer-phone" onClick={handleCopy} aria-label="Copy phone number">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {phone}
            <span className={`footer-copy-pill ${copied ? "footer-copy-pill--show" : ""}`}>
              Copied ✓
            </span>
          </button>
        </div>

        {/* ── CENTER MAP ── */}
        <div className="footer-map-col">
          <span className="footer-col-head">Find Us</span>
          <a
            href="https://www.google.com/maps?q=Sun+Central+Place+Ambli+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
            aria-label="Open in Google Maps"
          >
            <img src={map} alt="Studio location map" className="footer-map-img" />
            <div className="footer-map-overlay">
              <span className="footer-map-cta">
                Open Maps ↗
              </span>
            </div>
          </a>
        </div>

        {/* ── RIGHT ── */}
        <div className="footer-right">
          <span className="footer-col-head">Stay Connected</span>

          <p className="footer-subtext">
            Reach out for collaborations, bookings,<br />
            or just say hello.
          </p>

          {/* SOCIALS */}
          <div className="footer-socials">
            <a
              href="https://wa.me/919904100862"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="WhatsApp"
            >
              <span className="footer-social-icon">
                <img src={wp} alt="WhatsApp" />
              </span>
              <span className="footer-social-label">Chat on WhatsApp</span>
              <span className="footer-social-arrow">↗</span>
            </a>

            <a
              href="https://instagram.com/posthouse.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="Instagram"
            >
              <span className="footer-social-icon">
                <img src={insta} alt="Instagram" />
              </span>
              <span className="footer-social-label">See our work</span>
              <span className="footer-social-arrow">↗</span>
            </a>
          </div>

          {/* EMAIL INPUT */}
          <div className={`footer-email-wrap ${submitted ? "footer-email-wrap--done" : ""}`}>
            <span className="footer-col-head" style={{ marginBottom: "12px", display: "block" }}>
              Newsletter
            </span>
            {submitted ? (
              <p className="footer-email-thanks">You're in. ✓</p>
            ) : (
              <div className="footer-email-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKey}
                  aria-label="Email address"
                />
                <button onClick={handleSubmit} aria-label="Subscribe">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="footer-email-line" />
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ── BOTTOM ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-divider" />
        <div className="footer-bottom-row">
          <span className="footer-copy">© {new Date().getFullYear()} Posthouse Studios. All rights reserved.</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            {["Home", "Services", "About", "Contact"].map((l) => (
              <a href={`/${l.toLowerCase()}`} key={l} className="footer-nav-link">{l}</a>
            ))}
          </nav>
          <span className="footer-craft">Crafted with intent.</span>
        </div>
      </div>

      {/* background wordmark */}
      <div className="footer-wordmark" aria-hidden="true">POSTHOUSE</div>

    </footer>
  )
}

export default Footer