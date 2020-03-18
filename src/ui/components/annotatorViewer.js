import React from "react";

import { cardStyle, card } from '../style.js';
import "./../styles.css"
import "./../../utils/styles.css"
import {
  Button,
  UncontrolledCollapse,
  Card,
  CardTitle,
  CardBody,
  CardImg,
} from 'reactstrap';

class AnnotatorViewer extends React.Component {

  state = {
    channel1Selected: false,
    channel2Selected: false,
    channel3Selected: false,
    annot1Selected: false,
    annot2Selected: false,
    annot3Selected: false,
    annot4Selected: false,
  };

  render() {
    return (
      <div>
        <div className="annotations-class" style={cardStyle}>
          {console.log("Channels: " + this.state.channel1Selected
            + " " + this.state.channel2Selected + " " + this.state.channel3Selected
          )}
          {console.log("Annotations: " + this.state.annot1Selected
            + " " + this.state.annot2Selected + " " + this.state.annot3Selected + " " + this.state.annot4Selected
          )}
          <Card style={card}>
            <CardBody>
              <CardTitle> Annotated Class Selection </CardTitle>
            </CardBody>
            <Button outline color="primary" id="annot1Btn" onClick={() => {this.setState({ annot1Selected: !this.state.annot1Selected }); }} active={this.state.annot1Selected}>
              Annotation Class 1
            </Button>
            <Button outline color="primary" id="annot2Btn" onClick={() => {this.setState({ annot2Selected: !this.state.annot2Selected }); }} active={this.state.annot2Selected}>
              Annotation Class 2
            </Button>
            <Button outline color="primary" id="annot3Btn" onClick={() => {this.setState({ annot3Selected: !this.state.annot3Selected }); }} active={this.state.annot3Selected}>
              Annotation Class 3
            </Button>
            <Button outline color="primary" id="annot4Btn" onClick={() => {this.setState({ annot4Selected: !this.state.annot4Selected }); }} active={this.state.annot4Selected}>
              Annotation Class 4
            </Button>
          </Card>
        </div>

        <br></br>
        <div className="annotations-channel" style={cardStyle}>
          <Card style={card} >
            <CardBody>
              <CardTitle> Channel Selection </CardTitle>

              <Button className="channelBtn" outline color="primary" id="ch1Btn" onClick={() => {this.setState({ channel1Selected: !this.state.channel1Selected }); }} active={this.state.channel1Selected}>
                Channel 1
              </Button>
              <Button className="viewBtn" outline color="secondary" id="viewCh1">
                View
              </Button>
              <UncontrolledCollapse toggler="#viewCh1">
                <Card style={card} >
                  <CardImg className="annotChnlVeiw" src={this.props.imageSrc} alt="Ch1 Histogram"/>
                  <CardBody>
                    "Insert Look up table here"
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="brightness-slider-container">
                      <label htmlFor="brightness-slider"> Brightness </label>
                      <input type="range" className="slider" id="brightness-slider" />
                    </div>
                    <div className="contrast-slider-container">
                      <label htmlFor="contrast-slider"> Contrast </label>
                      <input type="range" className="slider" id="contrast-slider" />
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

              <Button className="channelBtn" outline color="primary" id="ch2Btn" onClick={() => {this.setState({ channel2Selected: !this.state.channel2Selected }); }} active={this.state.channel2Selected}>
                Channel 2
              </Button>
              <Button className="viewBtn" outline color="secondary" id="viewCh2">
                View
              </Button>
              <UncontrolledCollapse toggler="#viewCh2">
                <Card style={card}>
                  <CardImg className="annotChnlVeiw" src={this.props.imageSrc} alt="Ch2 Histogram" />
                  <CardBody>
                    "Insert Look up table here"
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="brightness-slider-container">
                      <label htmlFor="brightness-slider"> Brightness </label>
                      <input type="range" className="slider" id="brightness-slider" />
                    </div>
                    <div className="contrast-slider-container">
                      <label htmlFor="contrast-slider"> Contrast </label>
                      <input type="range" className="slider" id="contrast-slider" />
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

              <Button className="channelBtn" outline color="primary" id="ch3Btn" onClick={() => {this.setState({ channel3Selected: !this.state.channel3Selected }); }} active={this.state.channel3Selected}>
                Channel 3
              </Button>
              <Button className="viewBtn" outline color="secondary" id="viewCh3">
                View
              </Button>
              <UncontrolledCollapse toggler="#viewCh3">
                <Card style={card}>
                  <CardImg className="annotChnlVeiw" src={this.props.imageSrc} alt="Ch3 Histogram" />
                  <CardBody>
                    Channel 3 Expanded
                    "Insert Look up table here"
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="brightness-slider-container">
                      <label htmlFor="brightness-slider"> Brightness </label>
                      <input type="range" className="slider" id="brightness-slider" />
                    </div>
                    <div className="contrast-slider-container">
                      <label htmlFor="contrast-slider"> Contrast </label>
                      <input type="range" className="slider" id="contrast-slider" />
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
            </CardBody>
          </Card>
        </div>

      </div>
    );
  }
}

export default AnnotatorViewer;