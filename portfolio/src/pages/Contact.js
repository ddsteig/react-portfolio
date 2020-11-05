import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Contact</h1>
      </header>

      <div>
        <img
          id="space"
          src="/images/space5.jpg"
          class="img-fluid rounded mx-auto d-block"
          alt="Space Picture5"
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
            <a href="contact.html"></a>Submit
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Contact;
