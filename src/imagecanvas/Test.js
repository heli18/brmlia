import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'

const vertexShader = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;
uniform float u_time;
void main() {
  gl_FragColor = vec4(u_time, u_time, u_time, 1.0);
}
`

const uniforms = { u_time: { type: 'f', value: 0 } }

function Scene() {
  const material = useRef()

  let t = 0
  useFrame(() => (material.current.uniforms.u_time.value = t = (t + 0.01) % 1))

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[4, 4]} />
      <shaderMaterial
        attach="material"
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default Scene;