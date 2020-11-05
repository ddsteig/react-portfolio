import React from "react";
import Project from "../components/Project";
import Projects from "../projects/projects.json";

const Portfolio = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Portfolio</h1>
      </header>
      <div className="container">
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
