import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
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