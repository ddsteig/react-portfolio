import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import "./pages/style.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/react-portfolio/about" component={About} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
          <Route path="/" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 