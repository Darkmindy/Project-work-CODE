import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainPage from "./Pages/MainPage/MainPage";
import CartInside from "./Components/CartInside/CartInside";
import { AddToCartProvider } from "./Provider/AddToCartContext";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AboutUs from "./Pages/AboutUs/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main-page",
    element: <MainPage />,
  },
  {
    path:"/cart-inside",
    element: <CartInside/>
  }
  , 
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path:"/about-us",
    element: <AboutUs/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AddToCartProvider>
    <RouterProvider router={router} />
    </AddToCartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
