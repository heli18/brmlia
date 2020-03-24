import React from "react";
import Image from "./TestImage.js";
import TestImageWrapper from "./TestImageWrapper.js";
import { Canvas } from 'react-three-fiber'
import Slider from "./../../components/slider.js"
import { withUniformStore } from '../../components/utils.js'

import * as THREE from 'three';
//import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import {RectAreaLight, RectAreaLightHelper, RectAreaLightUniformsLib} from "three";

class TestImageComponent extends React.Component {

  state = {
    slider: {
      brightness: '0.0',
      contrast: '0.0'
    }
  }

  api = this.props.api;

  updateBrightness() {
    if (this.api.getState().uniforms.brightness) {
      if (this.state.slider.brightness !== this.api.getState().uniforms.brightness.value){
        this.api.setState( prevState => ({
          uniforms: {
            ...prevState.uniforms,
            brightness: {
              value: this.state.slider.brightness
            }
          }
        }));
      }
      return true;
    }
    else {
      console.log("null state", this.api.getState())
    }
    return false;
  }

  updateContrast() {
    if (this.api.getState().uniforms.contrast) {
      if (this.state.slider.contrast !== this.api.getState().uniforms.contrast.value){
        this.api.setState( prevState => ({
          uniforms: {
            ...prevState.uniforms,
            contrast: {
              value: this.state.slider.contrast
            }
          }
        }));
      }
      return true;
    }
    else {
      console.log("null state", this.api.getState())
    }
    return false;
  }

  sliderValueBr(value) {
    this.setState( prevState => ({
      slider: {
        ...prevState.slider,
        brightness: value
      }
    }));

    this.updateBrightness()
    console.log("sliderValueBr() - ch br: " + this.state.slider.brightness + " ch ct: " + this.state.slider.contrast);
  }

  sliderValueCt(value) {
    this.setState( prevState => ({
      slider: {
        ...prevState.slider,
        contrast: value
      }
    }));
    this.updateContrast()
    console.log("sliderValueCt() - ch br: " + this.state.slider.brightness + " ch ct: " + this.state.slider.contrast);
  }

  render() {

    // Create the scene and a camera to view it
var catScene = new THREE.Scene();

/**
* Camera
**/

// Specify the portion of the scene visiable at any time (in degrees)
var fieldOfView = 75;

// Specify the camera's aspect ratio
var aspectRatio = window.innerWidth / window.innerHeight;

// Specify the near and far clipping planes. Only objects
// between those planes will be rendered in the scene
// (these values help control the number of items rendered
// at any given time)
var nearPlane = 0.1;
var farPlane = 1000;

// Use the values specified above to create a camera
var camera = new THREE.PerspectiveCamera(
  fieldOfView, aspectRatio, nearPlane, farPlane
);

// Finally, set the camera's position in the z-dimension
camera.position.z = 5;

////////////////////////////////////////////////////////////// LAYERS
camera.layers.enable( 0 ); // enabled by default
camera.layers.enable( 1 );
////////////////////////////////////////////////////////////// LAYERS

/**
* Renderer
**/

// Create the canvas with a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
//var renderer = new THREE.WebGLRenderer({alpha: true});
// Specify the size of the canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// From Stack overflow
//renderer.autoClear = false; // important!
renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );

// Add the canvas to the DOM
document.body.appendChild( renderer.domElement );

/**
* Image
**/

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var material = new THREE.MeshLambertMaterial({
  map: loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg')
});

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var geometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(geometry, material);

// set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,0)

// add the image to the scene
catScene.add(mesh);

/**
* Lights
**/

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, 1, 0 );

// Specify the light's position
light.position.set(1, 1, 100 );


////////////////////////////////////////////////////////////// LAYERS

light.layers.enable( 0 );
light.layers.enable( 1 );

var object = new THREE.Mesh( geometry, mesh );

////////////////////////////////////////////////////////////// LAYERS

// Add the light to the scene
catScene.add(light)


// RectAreaLightUniformsLib.init();
//
// var width = 10;
// var height = 10;
// var intensity = 1;
// var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
// rectLight.position.set( 5, 5, 0 );
// rectLight.lookAt( 0, 0, 0 );
// catScene.add( rectLight )
//
// rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
// rectLight.add( rectLightHelper );



// function animate() {
// requestAnimationFrame( animate );
//
//   renderer.render( catScene, camera );
//   //renderer2.render( sceneBox, camera );
//
// }
// animate();


// Texture
// const numberTexture = new THREE.CanvasTexture(
//     document.querySelector('#imageCanvas')
// );
//
// console.log(numberTexture);
//
// const spriteMaterial = new THREE.SpriteMaterial({
//     map: numberTexture,
//     alphaTest: 0.5,
//     transparent: true,
//     depthTest: false,
//     depthWrite: false
// });
//
// console.log(spriteMaterial);
//
// var sprite = new THREE.Sprite(spriteMaterial);
// sprite.position.set(250, 250, 250);
// sprite.scale.set(35, 35, 1);
//
// catScene.add(sprite);




// box
// var renderer2 = new THREE.WebGLRenderer();
// renderer2.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer2.domElement );

//var camera2 = new THREE.PerspectiveCamera( 45, 1, 1, 500 );
var camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
camera2.position.set( 0, 0, 100 );
camera2.lookAt( 0, 0, 0 );



var sceneBox = new THREE.Scene();
sceneBox.background = new THREE.Color( 0xff0000 );
var boxMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});

var points = [];
points.push( new THREE.Vector3(-10,0,0));
points.push( new THREE.Vector3(0,10,0));
points.push( new THREE.Vector3(10,0,0));
points.push( new THREE.Vector3(0,-10,0));
points.push( new THREE.Vector3(-10,0,0));

var geometry = new THREE.BufferGeometry().setFromPoints( points );
//var boxMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
var lineOnCat = new THREE.Line( geometry, boxMaterial );

//sceneBox.add( lineOnCat );
sceneBox.add( lineOnCat );

// Add a point light with #fff color, .7 intensity, and 0 distance
var light2 = new THREE.PointLight( 0xffffff, 1, 0 );

// Specify the light's position
light2.position.set(1, 1, 100 );

// Add the light to the scene
sceneBox.add(light2)
//sceneBox.add(light)

// requestAnimationFrame( animate );


//renderer.render( sceneBox, camera );



// Overlay
//renderer2.clearDepth(); // important! clear the depth buffer
// renderer.setViewport( 10, window.innerHeight - insetHeight - 10, insetWidth, insetHeight );
//renderer2.setViewport( 10, 0, window.innerWidth, window.innerHeight );
//renderer2.render( scene2, camera );

function animate() {
requestAnimationFrame( animate );
  renderer.render( catScene, camera );
  renderer.setClearColor(0xffffff, 0);
  renderer.clearDepth();
  renderer.render( sceneBox, camera2 );
}
animate();

// function animate2() {
// requestAnimationFrame( animate );
//   renderer2.render( scene2, camera );
// }
// animate2();


    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    //
    // var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    // camera.position.set( 0, 0, 100 );
    // camera.lookAt( 0, 0, 0 );
    //
    // var scene = new THREE.Scene();
    // var material = new THREE.LineBasicMaterial({color: 0x0000ff});
    // var points = [];
    // points.push( new THREE.Vector3(-10,0,0));
    // points.push( new THREE.Vector3(0,10,0));
    // points.push( new THREE.Vector3(10,0,0));
    // points.push( new THREE.Vector3(0,-10,0));
    // points.push( new THREE.Vector3(-10,0,0));
    // var geometry2 = new THREE.BufferGeometry().setFromPoints( points );
    // var line = new THREE.Line( geometry2, material );
    //
    // var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
    // var material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // var cube = new THREE.Mesh( geometry2, material2 );
    // scene.add( cube );
    //
    // scene.add( line );
    // renderer.render( scene, camera );




    var sliderValueBr = this.sliderValueBr;
    var sliderValueCt = this.sliderValueCt;
    return (
      <div>
        <TestImageWrapper />
        <Slider label="Brightness" width="40%" min="0" max="1" step="0.1" initial="0" multiplier="100" sliderValue={sliderValueBr.bind(this)} />
        <Slider label="Contrast" width="40%" min="0" max="10" step="1" initial="0" multiplier="10" sliderValue={sliderValueCt.bind(this)} />
      </div>
    )
  }
}
export default withUniformStore(TestImageComponent);
