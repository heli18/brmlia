import React from 'react';
import ReactDOM from 'react-dom';
import Tiff from 'tiff.js';
import './index.css';

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
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div id="output" className="imgPreview">
        </div>
      </div>
    )
  }
}
ReactDOM.render(<ImageUpload/>, document.getElementById("root"));