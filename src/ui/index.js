import React from "react";
import { mainStyle, rowStyle, container } from './style.js';
import MainViewer from "./components/mainViewer.js";
import AxesViewer from "./components/axesViewer.js";
import AnnotatorViewer from "./components/annotatorViewer.js";
import Menus from "./components/menus.js";

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class UI extends React.Component {

  state = {
    image1Src: require('./assets/images/brom.jpeg'),
    image1Zoom: 0
  };

  handleSliderChange = (e, key) => {
    e.persist();
  }

  render() {
    return (
      <div className="main" style={mainStyle}>
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
              <AxesViewer imageSrc={this.state.image1Src}/>
            </Col>

            <Col xs="6">
              <MainViewer imageSrc={this.state.image1Src}/>
            </Col>

            <Col xs="3">
              <AnnotatorViewer imageSrc={this.state.image1Src}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UI;
