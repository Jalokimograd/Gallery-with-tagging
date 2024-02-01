import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./../AuthProvider";

import axios from "./../API/axios";

import "./../css/fontello-1ccdccb9/css/fontello.css";
import "./login_page.css";

const LOGIN_URL = "/auth";

/* 
Tutaj zamiast wersji klasowej mamy wersję funkcyjną komponentu react
Trochę inaczej wygląda dobieranie się do zmiannych stanu.
Wersję klasową mamy w SearchBarContainer.jsx
*/
const LoginPageContainer = () => {
  const { setAuth } = useContext(AuthContext);

  // Refy
  const userRef = useRef();
  const errRef = useRef();
  /*
  Refy są używane do przechowywania referencji do elementów formularza, co pozwala na manipulację nimi bezpośrednio.
  */

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="login">
          <div className="grid">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive">
              {errMsg}
            </p>
            <form onSubmit={handleSubmit} className="form login">
              <div className="form__field">
                <label for="username">
                  <i className="icon-user"></i>
                  <span className="hidden">Username</span>
                </label>
                <input
                  autocomplete="username"
                  id="username"
                  ref={userRef}
                  type="text"
                  name="username"
                  className="form__input"
                  placeholder="Username"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </div>

              <div className="form__field">
                <label for="password">
                  <i className="icon-key"></i>
                  <span className="hidden">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form__input"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>
              <div className="form__field">
                <input type="submit" value="Sign In" />
              </div>
            </form>
            <p className="text--center">
              Not a member? <a href="#">Sign up now</a>{" "}
              <i className="icon-user"></i>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPageContainer;
