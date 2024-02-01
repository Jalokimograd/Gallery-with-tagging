import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./routes/login_page";
import Root from "./routes/root";
import Gallery from "./routes/gallery";
import Directories from "./routes/directories";
import Categories from "./routes/categories";

import AuthContext, { AuthProvider } from "./AuthProvider";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Gallery /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "directories",
        element: <Directories />,
      },
    ],
  },
]);

const App = () => {
  const { auth } = useContext(AuthContext);

  console.log(auth);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
