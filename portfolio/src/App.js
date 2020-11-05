import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import './pages/style.css'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Wrapper>
          <Route path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
