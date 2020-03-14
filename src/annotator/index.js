// Annotator
import React, { useState, useEffect } from "react";
// import Annotator from annotator;
// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import {TwoDimensionalImage, TwoDimensionalVideo} from "react-annotation-tool"

// Annotator
import { ReactPictureAnnotation } from "react-picture-annotation";


// Marker


// ========================================
//export class Annotator extends React.Component {

const [pageSize, setPageSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight
});
const onResize = () => {
  setPageSize({ width: window.innerWidth, height: window.innerHeight });
};


//App
//export Annotator = () => {
class Annotator extends Component {


  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = selectedId => console.log(selectedId);
  const onChange = data => console.log(data);

  return (
    <div className="App">
      <ReactPictureAnnotation

        image="https://data.broadinstitute.org/bbbc/BBBC042/BBBC042_example2.png"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
      />
    </div>
  );
};

export default Annotator;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
//}
