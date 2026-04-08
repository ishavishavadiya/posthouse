import "./ShortVideos.css"

import img1 from "../assets/v1.png"
import img2 from "../assets/v2.png"
import img3 from "../assets/v3.png"
import img4 from "../assets/v4.png"
import img5 from "../assets/v5.png"
import img6 from "../assets/v6.png"

function ShortVideos() {
  return (
    <section className="shorts">

      <div className="shorts-header">
        <p>some of our fresh videos</p>
        <h2>Our Latest Short Videos</h2>
      </div>

      <div className="shorts-grid">
        <img src={img1} className="item item1" />
        <img src={img2} className="item item2" />
        <img src={img3} className="item item3" />
        <img src={img4} className="item item4" />
        <img src={img5} className="item item5" />
        <img src={img6} className="item item6" />
      </div>

    </section>
  )
}

export default ShortVideos