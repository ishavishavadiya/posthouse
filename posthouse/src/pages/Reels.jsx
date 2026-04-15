import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Reels.css"

import reel1 from "../assets/r1.png"
import reel2 from "../assets/r2.jpg"
import reel3 from "../assets/r3.jpg"

gsap.registerPlugin(ScrollTrigger)

const reels = [
    {
        index: "01",
        label: "Jewelry",
        title: "Jewelry Reel",
        desc: "Highlighting craftsmanship, sparkle & premium aesthetics with cinematic close-ups.",
        img: reel1,
        featured: false
    },
    {
        index: "02",
        label: "Fashion",
        title: "Fashion Reel",
        desc: "Luxury fashion storytelling with smooth transitions & bold presence.",
        img: reel2,
        featured: false
    },
    {
        index: "03",
        label: "Brand",
        title: "Brand Reel",
        desc: "Elevating brand identity through cinematic visuals and emotional storytelling.",
        img: reel3,
        featured: true
    }
]

function Reels() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.utils.toArray(".reel-card").forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        delay: i * 0.08,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                        }
                    }
                )
            })

            gsap.utils.toArray(".reel-card-img img").forEach((img) => {
                gsap.to(img, {
                    y: -30,
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                })
            })

        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            <Navbar />

            {/* ── HERO ── */}
            <section className="reels-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Reels <span>Production</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.9 }}
                >
                    Cinematic storytelling crafted for modern brands
                </motion.p>
            </section>

            {/* ── GRID ── */}
            <div className="reels-container">

                <div className="reels-section-label">
                    <span>Selected Work</span>
                </div>

                <div className="reels-grid">
                    {reels.map((item, index) => (
                        <div
                            className={`reel-card${item.featured ? " reel-card--featured" : ""}`}
                            key={index}
                        >
                            {/* image */}
                            <div className="reel-card-img">
                                <img src={item.img} alt={item.title} />

                                {/* corner marks */}
                                <div className="reel-corner reel-corner--tl" />
                                <div className="reel-corner reel-corner--tr" />
                                <div className="reel-corner reel-corner--bl" />
                                <div className="reel-corner reel-corner--br" />

                                {/* sequence badge */}
                                <span className="reel-badge">{item.index}</span>
                            </div>

                            {/* text */}
                            <div className="reel-card-info">
                                <span className="reel-card-label">{item.label}</span>
                                <h2 className="reel-card-title">{item.title}</h2>
                                <p className="reel-card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Reels