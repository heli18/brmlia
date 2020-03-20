import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Mesh } from '../imagecanvas/Mesh';
import Grid from '@material-ui/core/Grid';
import { createTexture, createTextureFromTiff } from './imageStore.js'
import { fApi, uApi } from '../utils/index.js'

class ImageCanvas extends React.Component {

  updateForFile(state) {
    if (uApi.getState().name !== state.file.name) {
      if(state.file.type === 'image/tiff'){
        console.log('tiff detected ==> converting to canvas');
        let texture = createTextureFromTiff(state.file.image);
        uApi.setState( {name: state.file.name, uniforms: {image: { value: texture}}} )
      }else{
        let texture = createTexture(state.file.image);
        uApi.setState( {name: state.file.name, uniforms: {image: { value: texture}}} )
      }
      this.forceUpdate();
    }
  }
  updateForControls(state) {
    this.forceUpdate();
  }

  render() {
    fApi.subscribe(state =>  {
      this.updateForFile(state);
    })
    uApi.subscribe(state =>  {
      this.updateForControls(state);
    })

    return (
      <Grid container={true}>
        <Canvas invalidateFrameloop className='image-canvas'>
            <Mesh />
        </Canvas>
      </Grid>
    );
  }
}

export default ImageCanvas;
