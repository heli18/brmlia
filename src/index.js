import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
import UI from "./ui";
import FileUpload from '../src/fileuploader';

function Application() {
  return (
    <>
    <FileUpload></FileUpload>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
