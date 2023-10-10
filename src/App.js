import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <div className="main">
          {" "}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/info" element={<Info />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
