import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        {/* <Info />
          <Skills />
          <Works />
          <About />
          <Contact /> */}
      </div>
    </>
  );
}

export default App;
