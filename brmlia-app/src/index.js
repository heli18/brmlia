import React from 'react';
import ReactDOM from 'react-dom';
import Tiff from 'tiff.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      imageCanvas: '',
      canvasHeight: '',
      canvasWidth: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      var buffer = reader.result;
      var tiff = new Tiff({buffer: buffer});
      var width = tiff.width();
      var height = tiff.height();
      let canvasImage = tiff.toCanvas();
      var div = document.getElementById("output");
      while(div.firstChild) {
        div.removeChild(div.firstChild);
        }
      document.getElementById("output").append(canvasImage);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        imageCanvas: canvasImage,
        canvasWidth: width,
        canvasHeight: height
      });
    }
    reader.readAsArrayBuffer(file);
  }

  render() {
    return (
      <div class="container">
      <br></br>
      <h1>Broad Multi-Layer Image Annotator</h1>
       <br></br>
       <br></br>
       <br></br>
      <div class="row">
    <div class="col-sm">
       <div class="form-group">
      <div className="custom-file">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input type="file" class="custom-file-input" id="customFile"
            onChange={(e)=>this._handleImageChange(e)} />
            <label class="custom-file-label" for="customFile">Choose file</label>
        </form>
        <br></br>
        <div id="output">
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
ReactDOM.render(<ImageUpload/>, document.getElementById("root"));