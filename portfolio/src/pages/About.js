import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <article className="row">
          <section className="col-lg-6" id="mainbio">
            <div className="jumbotron">
              <h1 className="display-4">Danny Steiger</h1>
              <img
                id="bio"
                src="./images/bio.jpg"
                className="rounded"
                alt="Danny"
              />
              <hr />
              <p className="lead">
                After several years in retail, I have decided to pursue a career
                that interests me. Full-Stack Developer{" "}
              </p>
              <hr className="my-4" />
              <p>
                I was born in St. Petersburg, Florida and have lived in several
                cities through out the state. I currently reside near Estero,
                Florida.
              </p>
              <hr />
              <h5>More About Me</h5>
              <div className="info">
                Github
                <a
                  className="btn-floating btn-git icon"
                  type="button"
                  role="button"
                  href="https://github.com/ddsteig"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
                Linkedin
                <a
                  className="btn-floating btn-git icon"
                  type="button"
                  role="button"
                  href="https://www.linkedin.com/in/daniel-steiger-bb900b1a9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  href="https://docs.google.com/document/d/1k7k_16nz7zxV3yP4v4LUnPwzsUi04_3NEll4DTOAXdM/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Resume
                </a>                
              </div>
              <br/>
              <div className="info">
                <p>Email: dannydsteiger@gmail.com</p>
              </div>
            </div>
          </section>
          {/* <!-- Rows & columns to create and side view text that drops down on mobile view --> */}
          <section className="col-lg-6 col-sm-12">
            <div className="row bio2">
              <div className="row bio2">
                <h2>Full-Stack</h2>
                <p>
                  <br />
                  Skills:
                  <ul>
                    <li>HTML5 / CSS3</li>
                    <li>Javascript</li>
                    <li>Node / Express</li>
                    <li>MySQL / Mongo</li>
                    <li>React</li>
                  </ul>
                </p>
              </div>
              <h2>Work History</h2>
              <p>
                Retail / Business Management
                <br />
                Posistions Held:
                <ul>
                  <li>Department Manager</li>
                  <li>Instock Supervisor</li>
                  <li>Customer Service Manager</li>
                  <li>Zone Manager Supervisor</li>
                  <li>Assistant Manager</li>
                </ul>
              </p>
            </div>
          </section>
        </article>
      </main>
    </React.Fragment>
  );
};

export default About;
