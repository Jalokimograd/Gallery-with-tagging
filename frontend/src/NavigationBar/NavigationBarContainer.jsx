import React, { Component } from "react";
import "./NavigationBarContainer.css";

import SearchBarContainer from "./SearchBarContainer.jsx";

class NavigationBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftMenuVisibility: false,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      leftMenuVisibility: !this.state.leftMenuVisibility,
    });
  }

  render() {
    return (
      <div className="navigationBar">
        <SearchBarContainer />
      </div>
    );
  }
}

export default NavigationBarContainer;
