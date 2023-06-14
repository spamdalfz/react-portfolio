import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
    const [activeTab, setActiveTab] = useState('/about');

    return (
        <Router>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Switch>
                <Route path="/about" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Redirect from="/" to="/about" />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;