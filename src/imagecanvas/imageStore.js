import create from 'zustand';
import * as THREE from 'three';
//import Tiff from 'tiff.js';
import UTIF from 'utif';
import UPNG from 'upng';
import { Image } from 'image-js';

// Loading an image is asynchronous and will return a Promise.
export const createTextureFromTiff = (image) => {
  Image.load(image).then(function (image) {
    console.log('Width', image.width);
    console.log('Height', image.height);
    console.log('colorModel', image.colorModel);
    console.log('components', image.components);
    console.log('alpha', image.alpha);
    console.log('channels', image.channels);
    console.log('bitDepth', image.bitDepth);
    let canvas = image.getCanvas();
    //test to show tiff as canvas in UI
    let ele = document.getElementById('testDiv');
    ele.appendChild(canvas);
    //does not show canvas as fas as I can tell
    return new THREE.CanvasTexture(canvas);
    //return new THREE.TextureLoader().load(new THREE.CanvasTexture(canvas));
});
}

export const createTexture = (image) => {
  return new THREE.TextureLoader().load(image);
}

const initState = {
  // todo: individual uniforms for separate channels
  channels:
    [
      {
        uniforms: {
          brightness: {
            value: '0.0'
          },
          contrast: {
            value: '0.0'
          },
          image: {
            value: ''
          }
        },
        texture: null,
        name: '',
        type: ''
      },
      {

        uniforms: {
          brightness: {
            value: '0.0'
          },
          contrast: {
            value: '0.0'
          },
          image: {
            value: ''
          }
        },
        texture: null,
        name: '',
        type: ''
      },
      {

        uniforms: {
          brightness: {
            value: '0.0'
          },
          contrast: {
            value: '0.0'
          },
          image: {
            value: ''
          }
        },
        texture: null,
        name: '',
        type: ''
      }
    ]
}

export const [useUniformStore, uniApi] = create ( set => ( {
  ...initState,
}))