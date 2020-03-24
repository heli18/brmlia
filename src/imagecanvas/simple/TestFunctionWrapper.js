
import React, {useEffect, useState} from 'react';
import Scene from "./Test.js";
import { Canvas } from 'react-three-fiber'

import { ReactPictureAnnotation } from "react-picture-annotation";


export function TestFunctionWrapper() {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = selectedId => console.log(selectedId);
  const onChange = data => console.log(data);
  const f = "https://lh3.googleusercontent.com/proxy/DQBuZRr7bxt4zFhk0YFj3AIWPx8RXIVZJnPNr2tvv-fQV6K5Zui01sZfNRSxbQ0oyQNfBaaGGXCl4w7uHsz8OvQz0tmBXnDvuDhNCmMYqpIANHiXMucCFWbz4PDJPVo";

  console.log("Inside");

  return (
    <Canvas>
      <Scene />
      <div className="App">
      <ReactPictureAnnotation
        image={f}
        onSelect={onSelect}
        onChange={onChange}
        width={256}
        height={256}
      />
      </div>
    </Canvas>

  )
}

export default TestFunctionWrapper;
