import React, { useState, useEffect, useRef } from "react";

function Tableau({ url }) {
  const [taburl] = useState(url);
  const ref = useRef(null);

  const initViz = () => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    const height = ref.current ? ref.current.offsetHeight : 0;
    let containerDiv = document.getElementById("container");
    const options = {
      hideTabs: true,
      hideToolbar: true,
      width: width,
      height: height
    };
    new window.tableau.Viz(containerDiv, taburl, options);
  };

  useEffect(initViz, []);

  return (
    <div>
      <div style={setVizStyle} id="container" ref={ref} />
    </div>
  );
}

const setVizStyle = {
  width: "auto",
  height: "400px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default Tableau;
