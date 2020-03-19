import React from 'react';

import { card, cardBody } from '../style.js';
import {
  Button,
  UncontrolledCollapse,
  Card,
  CardBody,
} from 'reactstrap';

import ImageCanvas from '../../imagecanvas/ImageCanvas.js'
import { withUniformStore } from '../../utils/index.js'
import Slider from "./slider.js"

class Channel extends React.Component {

  state = {
    sel: false,
    slider: {
      brightness: '0.0',
      contrast: '0.0',
    }
  }

  api = this.props.api;
  update() {
    if (this.state.slider.brightness !== this.api.getState().uniforms.brightness.value){
      this.api.setState( {uniforms: {brightness: {value: this.state.slider.brightness}} })
    }
  }


  updateSelection = () => {
    this.setState(prevState => ({
      sel: !this.state.sel
    }));
  }

  sliderValueBr(value) {
    // const texture = new THREE.TextureLoader().load(this.props.imageSrc);
    const texture = this.props.imageSrc;
    this.setState( prevState => ({
      slider: {
        ...prevState.slider,
        brightness: value
      }
    }));


    this.update()
    // this.props.store.update(this.state.slider.brightness, this.state.slider.contrast, texture);
    console.log("sliderValueBr() - ch br: " + this.state.slider.brightness + " ch ct: " + this.state.slider.contrast);
  }

  sliderValueCt(value) {
  //   const texture = this.props.imageSrc;
  //   this.setState( prevState => ({
  //     slider: {
  //       ...prevState.slider,
  //       contrast: value
  //     }
  //   }));
  //   this.props.store.update(this.state.slider.brightness, this.state.slider.contrast, texture);
    console.log("sliderValueCt() - ch br: " + this.state.slider.brightness + " ch ct: " + this.state.slider.contrast);
  }

  render() {
    console.log("Channel " + this.props.ch + " : " + this.state.sel);
    var sliderValueBr = this.sliderValueBr;
    var sliderValueCt = this.sliderValueCt;

    return (
      <div>
        <Button className="channelBtn" outline color="primary" id="channel-btn" onClick={() => { this.updateSelection() }} active={this.state.sel}>
          Channel {`${this.props.ch}`}
        </Button>
        <Button className="viewBtn" outline color="secondary" id={`view${this.props.ch}`}>
          View
        </Button>
        <UncontrolledCollapse toggler={`#view${this.props.ch}`}>
          <Card style={card} >
            <CardBody style={cardBody} >
              <ImageCanvas className="annot-view" brightness={this.state.slider.brightness} contrast='0.0' image={this.props.imageSrc} alt="Ch1 Histogram"/>
              "Insert Look up table here"
              <br>
              </br>
              <br>
              </br>
              <div className="brightness-slider-container">
                <Slider label="Brightness" width="40%" min="0" max="1" step="0.1" initial="0" multiplier="100" sliderValue={sliderValueBr.bind(this)} />
              </div>
              <div className="contrast-slider-container">
                <Slider label="Contrast" width="40%" min="0" max="10" step="1" initial="0" multiplier="10" sliderValue={sliderValueCt.bind(this)} />
              </div>
              <div className="blackpoint-slider-container">
                <label htmlFor="blackpoint-slider"> Black Point </label>
                <input type="range" className="slider" id="blackpoint-slider" />
              </div>
              <div className="whitepoint-slider-container">
                <label htmlFor="whitepoint-slider"> White Point </label>
                <input type="range" className="slider" id="whitepoint-slider" />
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default withUniformStore(Channel);
