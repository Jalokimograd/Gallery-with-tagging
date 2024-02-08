import React, { Component } from "react";
import "./LeftMenuContainer.css";
import "./../css/fontello-1ccdccb9/css/fontello.css";

import { useAuth } from "../hooks/useAuth";

class LeftMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 1,
      categoriesList: [],
      directoriesList: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.logoutButtonClick = this.logoutButtonClick.bind(this);
    const { logout } = useAuth();
  }

  fetchData = async (link) => {
    try {
      const response = await fetch(link);
      const result = await response.json();
      //console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  logoutButtonClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }

    var arrow_button = (
      <div
        onClick={(e) => {
          if (
            !e.target.parentElement.parentNode.parentNode.parentNode.parentNode.classList.contains(
              "close"
            )
          ) {
            e.target.parentElement.parentNode.parentNode.classList.toggle(
              "show-submenu"
            );
          }
        }}>
        <i className="icon-down-open"></i>
      </div>
    );

    return (
      <div className="leftMenu">
        <div className="sidebar">
          <ul className="nav-links">
            <li key={0}>
              <div
                className="iocn-link"
                onClick={(e) => {
                  e.target.parentElement.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle(
                    "close"
                  );
                }}>
                <a href="#">
                  <i className="icon-menu"></i>
                </a>
              </div>
            </li>
            <li key={1}>
              <div className="iocn-link">
                <a href="#">
                  <i className="icon-picture"></i>
                  <span className="link_name">Selected Images</span>
                </a>
                {arrow_button}
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Selected Images</a>
                </li>
                <li>
                  <a>Pierwszy obrazek</a>
                </li>
                <li>
                  <a>drugi</a>
                </li>
                <li>
                  <a>trzeci</a>
                </li>
              </ul>
            </li>
            <li key={2}>
              <div className="iocn-link">
                <a href="#">
                  <i className="icon-folder-open"></i>
                  <span className="link_name">Directories</span>
                </a>
                {arrow_button}
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Directories</a>
                </li>
                <li>
                  <a>a</a>
                </li>
                <li>
                  <a>b</a>
                </li>
                <li>
                  <a>c</a>
                </li>
              </ul>
            </li>
            <li key={3}>
              <div className="iocn-link">
                <a href="#">
                  <i className="icon-hashtag"></i>
                  <span className="link_name">Categories</span>
                </a>
                {arrow_button}
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Categories</a>
                </li>
                <li>
                  <a>architecture</a>
                </li>
                <li>
                  <a>arachno</a>
                </li>
                <li>
                  <a>ancient</a>
                </li>
                <li>
                  <a>machine</a>
                </li>
                <li>
                  <a>fantasy</a>
                </li>
              </ul>
            </li>
            <li key={4}>
              <div className="iocn-link">
                <a href="#" onClick={this.logoutButtonClick}>
                  <i className="icon-logout"></i>
                  <span className="link_name">Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftMenuContainer;
