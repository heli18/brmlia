# README

## Files
* src/imagecanvas/Test.js contains the mesh.
* src/imagecanvas/TestWrapper.js wraps nothing around the mesh.
* src/imagecanvas/TestFunctionWrapper.js wraps canvas around the TestWrapper.
* src/imagecanvas/TestFunctionWrapperWrapper wraps around TestFunctionWrapper.
* src/index.js is the main React rendered DOM

What doesn't work:

* if you wrap canvas around the mesh in the first function ("Scene()") like this:

```javascript
function Scene() {
  const material = useRef()

  let t = 0
  useFrame(() => (material.current.uniforms.u_time.value = t = (t + 0.01) % 1))

  return (
    <Canvas>
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
    </Canvas>
  )
}

export default Scene;
```
