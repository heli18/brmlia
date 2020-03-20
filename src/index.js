import React from "react";
import ReactDOM from "react-dom";
import Scene from "./imagecanvas/Test.js"
import TestWrapper from "./imagecanvas/TestWrapper.js"
import TestFunctionWrapper from "./imagecanvas/TestFunctionWrapper.js"
import TestFunctionWrapperWrapper from "./imagecanvas/TestFunctionWrapperWrapper.js"
import TestReactWrapper from "./imagecanvas/TestReactWrapper.js"

function Application() {
  return (
    /*<Scene />*/ // doesn't work - because it's not wrapped in Canvas
    /*<TestWrapper />*/ // doesn't work - because it's not wrapped in Canvas
    /*<TestFunctionWrapper />*/ // works
    /*<TestFunctionWrapperWrapper />*/ // works
    <TestReactWrapper /> //works
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
