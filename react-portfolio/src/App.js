import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  const [activeTab, setActiveTab] = useState('/about');

  return (
    <Router>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;