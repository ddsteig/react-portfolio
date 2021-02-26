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
              <h1 className="bg-dark text-white name">Danny Steiger</h1>
              <img
                id="bio"
                src="./images/bio.jpg"
                className="rounded"
                alt="Danny"
              />
              <hr />
              <p className="lead">
                After several years working in the retail industry, I decided to
                pursue a career in coding & development which has always
                interested me. I am now a Full-Stack Web Developer!
              </p>
              <p className="lead">
                I was born in St. Petersburg, Florida, and lived in several
                cities throughout the state over the years. I currently reside
                near Estero, Florida.
              </p>
              <hr className="my-4" />
              <p>
                Enthusiastic Full-Stack Developer with a background in business
                management and customer service, and a Full Stack Certificate
                from the University of Central Florida. While working on my
                certificate, I worked with others on several projects advancing
                my knowledge on HTML, CSS, Javascript, Node.js, Express, React,
                MongoDB & MySQL.
              </p>
              <p>
                Several years of retail experience has built upon my work
                skills: communication, planning, execution, time management, and
                adaptability. My passion however, remains with technology and
                being in an environment of continuous learning. I enjoy problem
                solving, always striving to look for solutions rather than
                getting stuck on the problem. Experienced with leading, and
                working on teams, and striving to complete tasks before given
                timelines
              </p>
              <p>
                Excited to bring my experience and positive attitude to add
                value to an organization, and to continue learning and sharing
                with others in the field of web development.
              </p>
              <hr />
              <h5 className="bg-dark text-white">More About Me</h5>
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
              <br />
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
                    <li>WordPress</li>
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
