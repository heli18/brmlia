import React from 'react';
import Image from "./TestImage.js";
import { Canvas } from 'react-three-fiber'



export function TestImageWrapper() {
  return (
    <Canvas id="imageCanvas" name="imageCanvas">
      <Image />
    </Canvas>

  )
}
export default TestImageWrapper;
