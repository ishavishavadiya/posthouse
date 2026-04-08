import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="PostHouse Studios logo" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar