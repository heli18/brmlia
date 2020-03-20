
import React from "react";
import Scene from "./Test.js";
import { Canvas } from 'react-three-fiber'


export function TestFunctionWrapper() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default TestFunctionWrapper;
