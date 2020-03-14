import React from 'react';
import Dropzone from 'react-dropzone';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
 
      }
    }
    
    render() {
        const maxSize = 10485760;
        return (
          <div>
            <Dropzone
              onDrop={this.onDrop}
              accept="image/png, image/tiff"
              minSize={0}
              maxSize={maxSize}
            >
              {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
                const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                return (
                  <div {...getRootProps()}>
                    <input  {...getInputProps()}
                    />
                    {!isDragActive && "Upload"}
                    {isDragActive && !isDragReject && "Upload"}
                    {isDragReject && "File type not accepted, sorry!"}
                    {isFileTooLarge && (
                      <div className="text-danger mt-2">
                        File is too large.
                      </div>
                    )}
                  </div>
                )}
              }
            </Dropzone>
          </div>
        );
      }
    }
  export default ImageUpload;