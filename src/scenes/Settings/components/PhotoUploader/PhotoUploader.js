import React from 'react';
import { Button, Row, Col, FormGroup } from 'reactstrap';
import './PhotoUploader.css';
import defaultImage from './default.png';

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: defaultImage
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onClickUpload = this._onClickUpload.bind(this);
    this.inputElement = null;
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  _onClickUpload(e) {
    e.preventDefault();
    this.inputElement.click();
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className="image-preview" />;
    }

    return (
      <div className="photo-uploader">
        <FormGroup>
          {$imagePreview}
          <input
            className="image-input"
            ref={ref => {
              this.inputElement = ref;
            }}
            type="file"
            onChange={this._handleImageChange}
          />
        </FormGroup>
        <FormGroup>
          <Button className="text-center" onClick={this._onClickUpload}>
            Upload
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default PhotoUploader;
