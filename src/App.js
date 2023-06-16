import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
    const [activeTab, setActiveTab] = useState('/about');

    // define useNavigate to enable redirection
    const navigate = useNavigate();

    // useEffect hook to redirect to "/about" on initial render
    useEffect(() => {
        navigate("/about");
    }, [navigate]);

    return (
        <Router>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Routes>
                <Route path="/about" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;