import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import Reels from "./pages/Reels"
import About from "./pages/About"
import Services from "./pages/Service"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>

      {/* FIX: must be inside router */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App