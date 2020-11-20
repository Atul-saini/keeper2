import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  const mystyle = {
    height: "250px",
    width: "250px"
  };
  return (
    <div>
      <Header />
      <div className="row-md-3">
        <img
          className="rounded-circle float-right"
          style={mystyle}
          src="https://i.ytimg.com/vi/RqoFDKu0RtQ/hqdefault.jpg"
          alt="imagenotfound"
        />
        <h1>Save and Surf your Notes</h1>
      </div>
      <div>
        <h3>
          {" "}
          Sort your day..
          <br /> Keep smiling and move forward💩.
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default About;
