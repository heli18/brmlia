import React from "react";
import ReactDOM from "react-dom";
import Scene from "./imagecanvas/Test.js"
import TestReactWrapper from "./imagecanvas/TestReactWrapper.js"
import TestFunctionWrapper from "./imagecanvas/TestFunctionWrapper.js"
import TestWrapper from "./imagecanvas/tests/TestWrapper.js"
import TestFunctionWrapperWrapper from "./imagecanvas/tests/TestFunctionWrapperWrapper.js"

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
