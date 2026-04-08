import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

// Pages (create these files)
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App