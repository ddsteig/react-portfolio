import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import spaceimg from '../images/space5.jpg'

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <img
          id="space"
          src={spaceimg}
          class="img-fluid rounded mx-auto d-block"
          alt="Space"
        />
      </div>

      <main class="container">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email Address</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Comments</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            <Link to="/contact"></Link>Submit
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Contact;
