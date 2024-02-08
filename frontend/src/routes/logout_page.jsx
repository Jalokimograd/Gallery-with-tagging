import { useRef, useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import axios from "../API/axios";

import "./../css/fontello-1ccdccb9/css/fontello.css";
import "./login_page.css";

const LOGIN_URL = "/auth";

/* 
Tutaj zamiast wersji klasowej mamy wersję funkcyjną komponentu react
Trochę inaczej wygląda dobieranie się do zmiannych stanu.
Wersję klasową mamy w SearchBarContainer.jsx
*/
const LogoutPageContainer = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <section className="login">
        <p className="text--center">
          You was correct logout <a href="/login"> Want login again?</a>{" "}
          <i className="icon-user"></i>
        </p>
      </section>
    </>
  );
};

export default LogoutPageContainer;
