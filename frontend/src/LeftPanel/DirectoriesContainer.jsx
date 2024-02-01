import React, { Component } from "react";
import "./LeftMenuContainer.css";

class DirectoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createCategoryElement = this.createCategoryElement.bind(this);
  }

  createCategoryElement(directory) {
    return <li key={directory.key}>{directory.path}</li>;
  }

  render() {
    var visibility = "hide";
    if (this.props.panelVisibility) {
      visibility = "show";
    }

    var elements = this.props.elements.map(this.createCategoryElement);

    return (
      <div id="leftPanelContent">
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default DirectoriesContainer;
