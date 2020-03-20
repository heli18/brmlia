import React from "react";
import Image from "./TestImage.js";
import TestImageWrapper from "./TestImageWrapper.js";
import { Canvas } from 'react-three-fiber'
import Slider from "./../../components/slider.js"
import { withUniformStore } from '../../components/utils.js'

class TestImageComponent extends React.Component {

  state = {
    slider: {
      brightness: '0.0',
    }
  }

  api = this.props.api;
  update() {
    if (this.api.getState().uniforms.brightness) {
      if (this.state.slider.brightness !== this.api.getState().uniforms.brightness.value){
        this.api.setState( prevState => ({
          uniforms: {
            ...prevState.uniforms,
            brightness: {
              value: this.state.slider.brightness
            }
          }
        }));
      }
      this.forceUpdate();
    }
    else {
      console.log("null state", this.api.getState())
    }
  }


  sliderValueBr(value) {
    const texture = this.props.imageSrc;
    this.setState( prevState => ({
      slider: {
        ...prevState.slider,
        brightness: value
      }
    }));

    this.update();
    // this.props.store.update(this.state.slider.brightness, this.state.slider.contrast, texture);
    console.log("sliderValueBr() - ch br: " + this.state.slider.brightness);
  }

  render() {
    var sliderValueBr = this.sliderValueBr;
    return (
      <div>
        <TestImageWrapper />
        <Slider label="Brightness" width="40%" min="0" max="1" step="0.1" initial="0" multiplier="100" sliderValue={sliderValueBr.bind(this)} />
      </div>
    )
  }
}
export default withUniformStore(TestImageComponent);
