import React, { Component } from "react";
import { useAuth } from "../hooks/useAuth";

import "./NavigationBarContainer.css";

import SearchBarContainer from "./SearchBarContainer.jsx";

const NavigationBarContainer = () => {
  const { logout } = useAuth();

  const logoutButtonClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="navigationBar">
        <SearchBarContainer />

        <div className="logout">
          <button className="logoutButton" href="#" onClick={logoutButtonClick}>
            <i className="icon-logout"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBarContainer;
