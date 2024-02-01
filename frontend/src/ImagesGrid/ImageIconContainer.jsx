import React, { Component } from "react";
import "./ImageIconContainer.css";
import "../css/fontello-1ccdccb9/css/fontello.css";

class ImageIconContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.checkUncheckImage = this.checkUncheckImage.bind(this);
  }

  checkUncheckImage(imageIndex) {
    this.props.checkUncheckImage(imageIndex);
  }

  render() {
    let imageIndex = this.props.imagePath;

    return (
      <div
        key={imageIndex}
        className={`grid-item ${
          this.props.selectedImages.includes(imageIndex) ? "selected" : ""
        }`}
        onClick={() => this.checkUncheckImage(imageIndex)}>
        <img src={this.props.imagePath} alt={`Image ${this.props.imagePath}`} />
        <div className="overlay">
          <div className="overlay-titleText"> {this.props.imagePath} </div>
          <div className="overlay-checkIcon">
            <i className="icon-ok-squared"></i>
            <i className="icon-check-empty"></i>
          </div>
          <div className="overlay-resizeIcon">
            <i className="icon-resize-full-1"></i>
          </div>
          <div className="overlay-tagsText"> </div>
        </div>
      </div>
    );
  }
}

export default ImageIconContainer;
