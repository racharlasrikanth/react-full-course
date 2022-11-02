import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<NewProjects />} />
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
