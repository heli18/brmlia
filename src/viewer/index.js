import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Slider from "../utils/index.js"
import "../styles.css"


class Viewer extends Component {

  constructor (props) {
    super(props);
    this.sliderValue.bind(this);
    this.updateZoomValue.bind(this);
  }

  state = {
    zpp: {
      type: true,
      limitToBounds: true,
      panningEnabled: true,
      transformEnabled: true,
      pinchEnabled: false,
      limitToWrapper: false,
      disabled: false,
      dbClickEnabled: true,
      lockAxisX: false,
      lockAxisY: false,
      velocityEqualToMove: true,
      enableWheel: true,
      enableTouchPadPinch: false,
      enableVelocity: true,
      limitsOnWheel: false,
      minScale: 0.5,
      maxScale: 8,
      step: 10,
      updated: false
    },
    slider: {
      sync: false,
      updated: false
    },
    zoomPct: 1,
    prevPct: 0
  };

  sliderValue(value, isUpdated, isSynced) {
    this.setState({zoomPct: value/100});
    this.setState({slider: {updated: isUpdated}});
    this.setState({slider: {sync: isSynced}});
  }

  updateZoomValue(value) {
    if (this.state.zoomPct !== this.state.prevPct) {
      this.state.prevPct = this.state.zoomPct;
      this.state.zoomPct = value/100;
    }
  }

  render() {
    const {
      limitToBounds,
      panningEnabled,
      transformEnabled,
      pinchEnabled,
      limitToWrapper,
      disabled,
      dbClickEnabled,
      lockAxisX,
      lockAxisY,
      velocityEqualToMove,
      enableWheel,
      enableTouchPadPinch,
      enableVelocity,
      limitsOnWheel,
      minScale,
      maxScale,
      step
    } = this.state.zpp;
    const { imageSrc, imageWidth }  = this.props;
    var sliderValue = this.sliderValue;
    return (
      <div className="viewer-wrapper">
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={0}
          defaultPositionY={0}
          scale={this.state.zoomPct}
          options={{
            limitToBounds,
            transformEnabled,
            disabled,
            limitToWrapper,
            minScale,
            maxScale
          }}
          pan={{
            disabled: !panningEnabled,
            lockAxisX,
            lockAxisY,
            velocityEqualToMove,
            velocity: enableVelocity,
          }}
          pinch={{ disabled: !pinchEnabled }}
          doubleClick={{ disabled: !dbClickEnabled }}
          wheel={{
            wheelEnabled: enableWheel,
            touchPadEnabled: enableTouchPadPinch,
            limitsOnWheel,
            step: step
          }}
        >
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          setDefaultState,
          positionX,
          positionY,
          scale,
          previousScale,
          options: { limitToBounds, transformEnabled, disabled },
          ...rest
        }) => (
        <div>
          {this.updateZoomValue(scale)}
          <React.Fragment>
            <TransformComponent>
              <img src={imageSrc} alt="viewer" width={imageWidth}/>
            </TransformComponent>
            <span className="badge badge-primary">
              x : {Number(positionX).toFixed(0)}px
            </span>
            <span className="badge badge-primary">
              y : {Number(positionY).toFixed(0)}px
            </span>
            <span className="badge badge-primary">
              Scale : {Number(scale*100).toFixed(0)}%
            </span>
          </React.Fragment>
          </div>
          )
        }
        </TransformWrapper>
        <Slider width="40%" sliderValue={sliderValue.bind(this)} newValue={this.state.zoomPct} sync={this.state.slider.sync} />
      </div>
    );
  }
}

export default Viewer;