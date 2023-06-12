import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
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
