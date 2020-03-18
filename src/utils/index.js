import React, { Component } from "react";
import "./styles.css";

class Slider extends Component {

  initSlider = {
    label: "Zoom",
    initial: 0,
    min: 50,
    max: 800,
    step: 10,
    value: 0
  };

  constructor(props) {
    super (props)
    this.state = {
      updated: false,
      slider: this.initSlider,
      setSlider: null,
      sync: true
    }
  }

  componentDidUpdate() {
    if (this.state.updated) {
      return true;
    }
    return false;
  }

  updateStatus(status) {
    let updated = true;
    this.setState({updated: updated});
  }

  notifyValue() {
    var sliderValue = this.props.sliderValue;
    sliderValue(this.state.slider.value, this.state.updated, this.state.sync);
  }

  handleSliderChange = (e) => {
    e.persist();

    let slider = this.state.slider;
    slider.value = e.target.value;
    this.setState({slider: slider});

    this.updateStatus(true);
    this.notifyValue();
  };

  render() {
    let slider = this.state.slider;

    return (
      <div className="slider-settings">
        <span>{slider.label}</span> <br></br>
        <span>{slider.min} </span>
        <input type="range" className="slider" value={slider.value || slider.initial} id="customRange1" initial={slider.initial} min={slider.min} max={slider.max} step={slider.step} onChange={e=>this.handleSliderChange(e)} />
        <span> {slider.max}</span>
        <span> {slider.value}%</span>
      </div>
    );
  }
}

export default Slider;