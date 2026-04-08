import "./ShortVideos.css"
import { motion } from "framer-motion"

import img1 from "../assets/v1.png"
import img2 from "../assets/v2.png"
import img3 from "../assets/v3.png"
import img4 from "../assets/v4.png"
import img5 from "../assets/v5.png"
import img6 from "../assets/v6.png"

const videos = [img1, img2, img3, img4, img5, img6]

function ShortVideos() {
  return (
    <section className="shorts">

      <div className="shorts-header">
        <p>Selected Frames</p>
        <h2>Short Form Stories</h2>
      </div>

      <div className="shorts-grid">
        {videos.map((img, index) => (
          <motion.div
            key={index}
            className={`short-card item${index + 1}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <img src={img} alt="video" />

            {/* cinematic overlay */}
            <div className="overlay">
              <span>Play</span>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default ShortVideos