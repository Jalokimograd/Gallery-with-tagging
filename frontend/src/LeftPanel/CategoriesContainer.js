import React, { Component } from "react";
import "./LeftMenuContainer.css";

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createCategoryElement = this.createCategoryElement.bind(this);
  }

  createCategoryElement(category) {
    return <li key={category.key}>{category.name}</li>;
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

export default CategoriesContainer;
