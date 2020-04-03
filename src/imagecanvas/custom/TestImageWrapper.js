import React, { useState } from "react";
import Image from "./TestImage.js";
import { Canvas } from 'react-three-fiber'
import AnnotationLayer from './AnnotationLayer';
import ImageLayer from './ImageLayer';
import './TestImageWrapper.css';

export function TestImageWrapper() {
  return (
    <div id="canvasContainer">
      <ImageLayer />
      <AnnotationLayer />
    </div>
  )
}
export default TestImageWrapper;
