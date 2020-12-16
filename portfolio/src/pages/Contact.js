import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <img
          id="space"
          src="./images/space5.jpg"
          className="img-fluid rounded mx-auto d-block"
          alt="Space"
        />
      </div>

      <main className="container">
        <form
          action="mailto:dannydsteiger@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div className="form-group">
            <label for="name">Name</label>
            <input
              name="Name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              name="Email"
              type="text"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="comment">Comments</label>
            <textarea
              name="Comments"
              type="text"
              className="form-control"
              id="comment"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Contact;
