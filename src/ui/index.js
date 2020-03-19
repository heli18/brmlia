import React from "react";
import { mainStyle, rowStyle, container } from './style.js';
import MainViewer from "./components/mainViewer.js";
import AxesViewer from "./components/axesViewer.js";
import AnnotatorViewer from "./components/annotatorViewer.js";
import Menus from "./components/menus.js";
import create from 'zustand';
import {withFileStore} from "../utils/index.js";

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class UI extends React.Component {

  state = {
    image1Src: require('./assets/images/brom.jpeg'),
    image1Zoom: 0,
    image1Name: "",
    image1Style: {}
  };

  update(state) {
    if (this.state.image1Name !== state.file.name) {
      this.state.image1Name = state.file.name
      this.state.image1Src = state.file.image
      this.state.image1Style = state.file.style
      this.forceUpdate();
    }
  }

  render() {

    const sub = this.props.api.subscribe(state =>  {
      this.update(state);
    })

    return (

      <div className="main" style={mainStyle}>
      {console.log("main store")}
        <Menus />
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

        <Container style={container}>
          <Row style={rowStyle}>
            <Col xs="3">
              <AxesViewer imageSrc={this.state.image1Src} imageStyle={this.state.image1Style}/>
            </Col>

            <Col xs="6">
              <MainViewer imageSrc={this.state.image1Src} imageStyle={this.state.image1Style}/>
            </Col>

            <Col xs="3">
              <AnnotatorViewer imageSrc={this.state.image1Src} imageStyle={this.state.image1Style}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withFileStore(UI);
