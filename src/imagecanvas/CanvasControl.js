import React from 'react';
import { fApi, uApi } from '../utils/index.js'

export function updateBrightness(value) {
  if (uApi.getState().uniforms.brightness) {
    if (value !== uApi.getState().uniforms.brightness.value){
      uApi.setState( prevState => ({
        uniforms: {
          ...prevState.uniforms,
          brightness: {
            value: value
          }
        }
      }));
    }
    return true;
  }
  else {
    console.log("null state", uApi.getState())
  }
  return false;
}

export function updateContrast(value) {
  if (uApi.getState().uniforms.contrast) {
    if (value !== uApi.getState().uniforms.contrast.value){
      uApi.setState( prevState => ({
        uniforms: {
          ...prevState.uniforms,
          contrast: {
            value: value
          }
        }
      }));
    }
    return true;
  }
  else {
    console.log("null state", uApi.getState())
  }
  return false;
}
