import React from 'react';
import { Canvas } from 'react-three-fiber';
import Grid from '@material-ui/core/Grid';
import Mesh from './Mesh';
import { createTexture } from './imageStore.js'
import { withStore } from '../utils/index.js'
import { canvasStyle } from '../ui/style.js'

class ImageCanvas extends React.Component {

  updateForFile(state) {
    if (this.props.uApi.getState().name !== state.file[state.selected].name) {
      let texture = createTexture(state.file[state.selected].image);
      this.props.uApi.setState( prevState => ({
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
    this.props.fApi.subscribe(state =>  {
      this.updateForFile(state);
    })
    this.props.uApi.subscribe(state =>  {
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

export default withStore(ImageCanvas);
