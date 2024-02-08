import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./routes/login_page";
import LogoutPageContainer from "./routes/logout_page";
import Root from "./routes/root";
import Gallery from "./routes/gallery";
import Directories from "./routes/directories";
import Categories from "./routes/categories";
import ErrorPage from "./routes/error-page";

import RequireAuth from "./requireAuth";

import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/login"
              element={<LoginPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/logout"
              element={<LogoutPageContainer />}
              errorElement={<ErrorPage />}
            />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
                <Route index element={<Gallery />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/directories" element={<Directories />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
