import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
