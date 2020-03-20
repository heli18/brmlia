import React from "react";
import ReactDOM from "react-dom";
import {Scene} from "./imagecanvas/Test.js"
import TestWrapper from "./imagecanvas/TestWrapper.js"
import TestFunctionWrapper from "./imagecanvas/TestFunctionWrapper.js"
import TestFunctionWrapperWrapper from "./imagecanvas/TestFunctionWrapperWrapper.js"
import TestReactWrapper from "./imagecanvas/TestReactWrapper.js"

function Application() {
  return (
    /*<TestFunctionWrapperWrapper />*/
    <TestReactWrapper />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
