import React, { Component } from "react";
 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
 
class Example extends Component {
  render() {
    return (
      <TransformWrapper>
        <TransformComponent>
          <img src="image.jpg" alt="test" />
        </TransformComponent>
      </TransformWrapper>
    );
  }
}