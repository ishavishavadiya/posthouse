import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import "./Hero.css"

function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    )
  }, [])

  return (
    <section className="hero">

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/src/assets/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        {/* TITLE */}
        <h1 ref={titleRef}>
          POST<span>HOUSE</span>
        </h1>

        {/* STUDIOS */}
        <motion.h2
          className="hero-studios"
          initial={{ opacity: 0, letterSpacing: "2px" }}
          animate={{ opacity: 1, letterSpacing: "10px" }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          STUDIOS
        </motion.h2>

        {/* TAGLINE */}
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          CREATING VISUAL STORIES THAT MOVE
        </motion.p>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <div></div>
      </div>

    </section>
  )
}

export default Hero