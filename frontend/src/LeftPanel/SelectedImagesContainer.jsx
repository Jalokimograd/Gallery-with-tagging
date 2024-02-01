import React, { Component } from "react";
import "./LeftMenuContainer.css";

class SelectedImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 1,
    };
  }

  render() {
    var visibility = "hide";
    if (this.props.panelVisibility) {
      visibility = "show";
    }

    return <div id="leftPanelContent" className={visibility}></div>;
  }
}

export default SelectedImagesContainer;
