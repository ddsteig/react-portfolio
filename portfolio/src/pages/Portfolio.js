import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Projects from "../projects/projects.json";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h3>Click an Image to visit.</h3>
        <br/>
        <div className="card-grid">
          <div className="row row-cols-1 row-cols-md-2">
            {Projects.map((project) => (
              <Project {...project} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
