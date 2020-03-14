import React, { useMemo, useRef } from 'react';
import 'react-three-fiber';
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
export const Mesh = ({ brightness, contrast, image }) => {
    const texture = useMemo(() => {
        return new THREE.TextureLoader().load(image.toDataURL());
    }, [image]);
    const ref = useRef();
    const uniforms = {
        brightness: {
            value: brightness
        },
        contrast: {
            value: contrast
        },
        image: {
            value: texture
        }
    };
    return
    (
        <mesh ref={ref} scale={[1.0, 1.0, 1.0]}>
            <planeBufferGeometry attach="geometry" args={[5.0, 5.0]} />
            <shaderMaterial
                attach="material"
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                vertexShader={vertexShader}
            />
        </mesh>
    );
}
//export { Mesh } from './Mesh';