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
        title: "Jewelry Reel",
        desc: "Highlighting craftsmanship, sparkle & premium aesthetics with cinematic close-ups.",
        img: reel1
    },
    {
        title: "Fashion Reel",
        desc: "Luxury fashion storytelling with smooth transitions & bold presence.",
        img: reel2
    },
    {
        title: "Brand Reel",
        desc: "Elevating brand identity through cinematic visuals and emotional storytelling.",
        img: reel3
    }
]

function Reels() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.utils.toArray(".reel-section").forEach((section) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 120 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        }
                    }
                )
            })

            // subtle parallax for images (cinematic feel)
            gsap.utils.toArray(".reel-image img").forEach((img) => {
                gsap.to(img, {
                    y: -40,
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

            <section className="reels-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Reels Production
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Cinematic storytelling crafted for modern brands
                </motion.p>
            </section>

            <div className="reels-container">
                {reels.map((item, index) => (
                    <section className="reel-section" key={index}>

                        <motion.div
                            className="reel-image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={item.img} alt={item.title} />
                        </motion.div>

                        <div className="reel-content">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>

                    </section>
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Reels