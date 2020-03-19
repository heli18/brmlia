import React, { useRef } from 'react';
import { fApi, uApi } from '../utils/index.js'

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

function Image() {

  const ref = useRef()

  return (
    <mesh ref={ref} scale={[1.0, 1.0, 1.0]}>
      <planeBufferGeometry attach="geometry" args={[5.0, 5.0]} />
      <shaderMaterial
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uApi.getState().uniforms}
      >
      </shaderMaterial>
    </mesh>
  )
}

export const Mesh = () => {
    return (
      <Image />
    );
}
