import React from "react";
import Header from "../components/Header";
import bioimg from '../images/bio.jpg'

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <article className="row">
          <section className="col-lg-6">
            <div className="jumbotron">
              <h1 className="display-4">Bio</h1>
              <img
                id="bio"
                src={bioimg}
                className="rounded"
                alt="Danny"
              />
              <hr />
              <p className="lead">
                After 17 consecutive years in retail, I have decided to pursue a
                career that interests me. Full-Stack Developer{" "}
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
              </div>
            </div>
          </section>
          {/* <!-- Rows & columns to create and side view text that drops down on mobile view --> */}
          <section className="col-lg-6 col-sm-12">
            <div className="row bio2">
              <h2>Work</h2>
              <p>
                In my 17 years of retail experience, 15 years of it has been in
                management and supervisor positions.
                <br></br>
                Some of my positions included:
                <ul>
                  <li>Department Manager</li>
                  <li>Instock Supervisor</li>
                  <li>Customer Service Manager</li>
                  <li>Zone Manager Supervisor</li>
                  <li>Assistant Manager</li>
                </ul>
              </p>
            </div>
            <div className="row bio2">
              <h2>Hobbies</h2>
              <p>
                I used to create web pages when I was younger and always enjoyed
                designing and being creative.
                <br></br>
                Some of my other hobbies include:
                <ul>
                  <li>Writing</li>
                  <li>Graphic Novels - Primarily Xmen Series</li>
                  <li>Sci-fi Series & Movies</li>
                  <li>Anime</li>
                  <li>Art</li>
                  <li>Gaming - Mostly RPGs</li>
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
