import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import "./Work.css"

import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"
import work6 from "../assets/work6.png"

gsap.registerPlugin(ScrollTrigger)

const works = [
    { title: "Reels", img: work1 },
    { title: "Advertisements", img: work2 },
    { title: "Social Media", img: work3 },
    { title: "Color Grading", img: work4 },
    { title: "Theatre Ad", img: work5 },
    { title: "Short Film", img: work6 },
]

function Work() {

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(".work-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".work",
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            )

            gsap.fromTo(".work-card",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".work-grid",
                        start: "top 95%", // FIX: earlier trigger
                        toggleActions: "play none none none"
                    }
                }
            )

        })

        return () => ctx.revert()
    }, [])

    return (
        <section className="work">

            <div className="work-header">
                <h2>Selected Work</h2>
                <p>Crafting cinematic visuals for brands & stories</p>
            </div>

            <div className="work-grid">
                {works.map((item, index) => (
                    <motion.div
                        className="work-card"
                        key={index}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <img src={item.img} alt={item.title} />

                        <div className="overlay"></div>

                        <div className="work-info">
                            <h3>{item.title}</h3>
                            <span>VIEW PROJECT</span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default Work