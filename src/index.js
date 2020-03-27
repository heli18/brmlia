import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
import Annotator from "./annotator/index.js"


function Application() {
  return (
    <>
      <Annotator />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
