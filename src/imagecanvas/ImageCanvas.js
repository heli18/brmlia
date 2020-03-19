import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Mesh } from '../imagecanvas/Mesh';
import Grid from '@material-ui/core/Grid';

class ImageCanvas extends React.Component {

  render() {
    return (
      <Grid container={true}>
        <Canvas invalidateFrameloop className='image-canvas'>
            <Mesh brightness = {this.props.brightness} contrast={this.props.contrast} image ={this.props.image} />
        </Canvas>
      </Grid>
    );
  }
}

export default ImageCanvas;