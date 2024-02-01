import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";

import NavigationBarContainer from "../NavigationBar/NavigationBarContainer";
import LeftMenuContainer from "../LeftPanel/LeftMenuContainer";

import "./root.css";

export default function Root() {
  return (
    <>
      <NavigationBarContainer />
      <div className="mainMiddleContainer">
        <LeftMenuContainer />
        <div className="rightMiddleContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
}
