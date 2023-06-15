import React from "react";

function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="row my-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h2 section-heading">We've what you need!</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
             Immerse yourself in our all-encompassing and visually pleasing toolkit for Indian Sign Language (ISL). Experience a minimalist yet informative interface that caters to your needs. Explore a wide array of features encompassing various functionalities essential for working with ISL.
              Rest assured, we have everything you need right here! Discover our diverse services and kindly share your valuable feedback with us.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
