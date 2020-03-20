import create from 'zustand';
import * as THREE from 'three';
import Tiff from 'tiff.js';
import UTIF from 'utif';

export const createTexture = (image) => {
  return new THREE.TextureLoader().load(image);
}

export const createTextureFromTiff = (image) => {

  async function fetchImageBuffer(image) {
    const blob = new Blob([image]);
    return await blob.arrayBuffer();
  }
  fetchImageBuffer().then((blob) => {
    const byteLength = blob.byteLength;
    console.log(byteLength);
   //let tiff = Tiff({buffer: blob});
   //let canvas = tiff.toCanvas();
   //return canvas;
  })
  .catch((e) =>
    console.log(e)
  );
  const canv = fetchImageBuffer(image);

  return new THREE.TextureLoader().load(image);
}

const initState = {
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
  brightness: '0.0',
  name: '',
  type: ''
}

export const [useUniformStore, uniApi] = create ( set => ( {
  ...initState,
  update: (brightness, contrast, image) => set ( state => ({
    ...state,
    uniforms: {
      ...state.uniforms,
      brightness: {
        ...state.uniforms.brightness,
        value: brightness
      },
      contrast: {
        ...state.uniforms.contrast,
        value: contrast
      },
      image: {
        ...state.uniforms.image,
      },
    },
    texture: image,
    brightness: brightness
  })),
}))