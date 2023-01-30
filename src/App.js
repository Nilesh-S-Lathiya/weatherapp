import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#github">
          Download Source Code
        </a>
        | Developed by
        <a target="_blank" href="#">
          Nilesh
        </a>
        | Powered by
        <a target="_blank" href="">
          ReactJS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
