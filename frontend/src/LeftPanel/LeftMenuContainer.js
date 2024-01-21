import React, { Component } from "react";
import "./LeftMenuContainer.css";
import "./../css/fontello-1ccdccb9/css/fontello.css";
import SelectedImagesContainer from "./SelectedImagesContainer";
import DirectoriesContainer from "./DirectoriesContainer";
import CategoriesContainer from "./CategoriesContainer";

class LeftMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 1,
      categoriesList: [],
      directoriesList: [],
    };

    this.Menus = {
      1: {
        title: "Selected Images",
        onClick: () => {
          this.setState({ activeMenu: 1 });
        },
        content: SelectedImagesContainer,
        icon_class: "icon-picture",
        data: () => ({
          elements: [],
        }),
      },
      2: {
        title: "Directories",
        onClick: () => {
          this.fetchData(`http://localhost:9000/api/getDirectories`).then(
            (data) => {
              this.setState({
                activeMenu: 2,
                directoriesList: data["directories"],
              });
            }
          );
        },
        content: DirectoriesContainer,
        icon_class: "icon-folder-open",
        data: () => ({
          elements: this.state.directoriesList,
        }),
      },
      3: {
        title: "Categories",
        onClick: () => {
          this.fetchData(`http://localhost:9000/api/getCategories`).then(
            (data) => {
              this.setState({
                activeMenu: 3,
                categoriesList: data["categories"],
              });
            }
          );
        },
        content: CategoriesContainer,
        icon_class: "icon-hashtag",
        data: () => ({
          elements: this.state.categoriesList,
        }),
      },
    };

    this.fetchData = this.fetchData.bind(this);
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

  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }

    var options = Object.entries(this.Menus).map(([key, value]) => (
      <li key={key}>
        <div className="iocn-link">
          <a href="#">
            <i className={value["icon_class"]}></i>
            <span className="link_name">{value["title"]}</span>
          </a>
          <i className="icon-down-open"></i>
        </div>
      </li>
    ));

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

    const ActiveContent = this.Menus[this.state.activeMenu].content;
    const contentProps = this.Menus[this.state.activeMenu].data();

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
          </ul>
        </div>
        <div className="leftMenuContent">
          <ActiveContent {...contentProps} />
        </div>
      </div>
    );
  }
}

export default LeftMenuContainer;
