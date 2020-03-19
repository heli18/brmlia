import React, { useRef } from 'react';
import create from 'zustand';
import * as THREE from 'three';

const fragmentShader = `
  uniform sampler2D image;

  uniform float brightness;
  uniform float contrast;
  varying vec2 vUv;
  void main() {
    gl_FragColor = texture2D(image, vUv);
    gl_FragColor.rgb += brightness;

    if (contrast > 0.0) {
      gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;
    } else {
      gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;
    }
  }
`;

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

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
}

export const [useStore, api] = create ( set => ( {
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

function Image() {

  const ref = useRef()
  const {uniforms, texture, brightness} = useStore(state => state)

  console.log("uniforms"); console.log(uniforms)
  // console.log("texture"); console.log(texture)
  console.log("brightness"); console.log(brightness)

  // todo: set uniforms.image.value to state.texture
  // todo: force update render

  return (
    <mesh ref={ref} scale={[1.0, 1.0, 1.0]}>
      <planeBufferGeometry attach="geometry" args={[5.0, 5.0]} />
      <shaderMaterial
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      >
      </shaderMaterial>
    </mesh>
  )
}

export const Mesh = ({ brightness, contrast, image }) => {
    return (
      <Image />
    );
}

export const withStore = (Component: any) => {
  return (props: any) => {
    const store = useStore();
    return <Component store={store} {...props}/>;
  };
};
