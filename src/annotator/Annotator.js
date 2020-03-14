import React, { Component } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";

class Annotator extends Component {

    render() {

    return ( <ReactPictureAnnotation
        image="https://data.broadinstitute.org/bbbc/BBBC042/BBBC042_example2.png"
        onSelect={selectedId => console.log(selectedId)}
        onChange={data => console.log(data)}
        width={window.innerWidth}
        height={window.innerHeight}
      /> );
    }
};

export default Annotator;
