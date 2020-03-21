import React from 'react';
import { Canvas } from 'react-three-fiber';
import Grid from '@material-ui/core/Grid';
import Mesh from './Mesh';
import { canvasStyle } from '../ui/style.js'
import { createTexture, createTextureFromTiff } from './imageStore.js'
import { fApi, uApi } from '../utils/index.js'

class ImageCanvas extends React.Component {

  updateForFile(state) {
    if (uApi.getState().name !== state.file[state.selected].name) {
      let texture = createTexture(state.file[state.selected].image);
      if (state.file[state.selected].type === 'image/tiff') {
        console.log('tiff detected ==> converting to canvas');
        texture = createTextureFromTiff(state.file[state.selected].image);
      }

      uApi.setState( prevState => ({
        ...prevState,
        name: state.file[state.selected].name,
        uniforms: {
          ...prevState.uniforms,
          image: {
            value: texture
          }
        }
      }))

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
      <div class="image-canvas-container" style={canvasStyle}>
        <Canvas className='image-canvas'>
          <Mesh />
        </Canvas>
      </div>
    );
  }
}

export default ImageCanvas;
