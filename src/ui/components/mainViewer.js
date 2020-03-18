import React from "react";

import { cardStyle, card, mainImg } from '../style.js';
import Viewer from "../../viewer/index.js";
import {
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';

class mainViewer extends React.Component {

  render() {
    return (
      <div className="main-view" style={cardStyle}>
        <Card style={card}>
          <CardBody>
            <CardTitle> Image View </CardTitle>
          </CardBody>
          <Viewer imageSrc={this.props.imageSrc} imageWidth={mainImg.width}/>
          <br>
          </br>
        </Card>
      </div>
    );
  }
}

export default mainViewer;