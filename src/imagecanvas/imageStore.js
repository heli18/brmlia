import create from 'zustand';
import * as THREE from 'three';

export const createTexture = (image) => {
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
      value: createTexture(require('../ui/assets/images/brom.jpeg'))
    }
  },
  texture: null,
  brightness: '0.0',
  name: ""
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