import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import About from "./components/About";
import Sectors from "./components/Sectors-page";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;