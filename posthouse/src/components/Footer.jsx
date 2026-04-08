import { useState } from "react"
import "./Footer.css"
import logo from "../assets/logo.png"
import map from "../assets/map.png"
import wp from "../assets/wp.png"
import insta from "../assets/insta.png"

function Footer() {
    const [copied, setCopied] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const phone = "+91 9904100862"

    const handleCopy = () => {
        navigator.clipboard.writeText(phone)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSubmit = () => {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 1500)
    }

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <img src={logo} alt="logo" className="footer-logo" />

                    <p className="footer-address">
                        807, Sun Central Place, Opp. Iscon Platinum,
                        Nr. Bopal cross road, Bopal,
                        Ahmedabad, 380058
                    </p>

                    <p className="footer-phone" onClick={handleCopy}>
                        {phone}
                        <span className={`copy-status ${copied ? "show" : ""}`}>
                            Copied
                        </span>
                    </p>
                </div>

                {/* CENTER */}
                <div className="footer-map">
                    <a
                        href="https://www.google.com/maps?q=Sun+Central+Place+Ambli+Ahmedabad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={map} alt="map location" />
                    </a>
                </div>

                {/* RIGHT */}
                <div className="footer-right">
                    <p className="footer-title">Stay Connected</p>

                    <p className="footer-subtext">
                        Reach out for collaborations, bookings or just say hello.
                    </p>

                    <div className="footer-socials">

                        <a
                            href="https://wa.me/919904100862"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-item"
                        >
                            <img src={wp} alt="whatsapp" />
                            <span>Chat on WhatsApp</span>
                        </a>

                        <a
                            href="https://instagram.com/posthouse.studios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-item"
                        >
                            <img src={insta} alt="instagram" />
                            <span>See our work</span>
                        </a>

                    </div>

                    {/* INPUT */}
                    <div className={`footer-input ${submitted ? "submitted" : ""}`}>
                        <input type="email" placeholder="Enter your email" />

                        {/* BUTTON (required for CSS selector to work) */}
                        <button onClick={handleSubmit}>→</button>

                        <span className="line"></span>
                    </div>
                </div>

            </div>

            <div className="footer-line"></div>

        </footer>
    )
}

export default Footer