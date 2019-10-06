import React from "react";

import "../../App.css";

function Landing() {
  return (
    <div className="landingPage">
      <h1 className="font-weight-bold">Welcome to your Data Visualisation Portal</h1>
      <h3 className="font-weight-light">
        <mark>Log in</mark> on the top right to see your visualisations.
      </h3>
      <h4 className="py-5">
        In this portal you will find several embedded Tableau visualisations. <br /> You need an Okta account to be able
        to see the visualisations
      </h4>
      <h4 className="py-2">
        Want to know more about Tableau Embedded Analytics? Check out the Github link on the top right and get in touch!{" "}
        <br />
        If you want to see more JavaScript examples of Embedded Analytics check out{" "}
        <a href="https://react-tableau-jsapi.now.sh" target="_blank" rel="noopener noreferrer">
          <span className="link">this link</span>
        </a>
      </h4>
    </div>
  );
}

export default Landing;
