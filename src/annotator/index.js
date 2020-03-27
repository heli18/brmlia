import React from 'react';
import {ImageUpload} from "../fileuploader/index.js";
import {fileApi} from "../fileuploader/fileStore.js";
import {annotApi} from '../annotator/annotStore.js'
import {
  Button
} from 'reactstrap';

class Annotator extends React.Component {

  file_size = 0
  annotations = {}

  render() {
    fileApi.subscribe(state =>  {
      if (this.file_size !== state.size) {
        this.file_size = state.size

        console.log("files: ", state.file)
      }
    })
    annotApi.subscribe(state =>  {
      if (this.annotations !== state.annotations) {
        this.annotations = state.annotations

        console.log("annotations: ", state.annotations)
      }
    })
    return (
      <div>
        <Button outline color="primary" className="image-upload-btn"> <ImageUpload name="Import Image" />  </Button>
      </div>
    );
  }
}

export default Annotator;