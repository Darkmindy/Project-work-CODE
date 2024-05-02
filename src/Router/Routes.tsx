import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import CartInside from "../Components/CartInside/CartInside";
import AdminPage from "../Pages/AdminPage/AdminPage";
import AboutUs from "../Pages/AboutUs/AboutUs";

const Routes = () => {
  return (
    <ReactRoutes>
      {/* Rotte pubbliche */}
      <Route path="/" element={<MainPage />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/cart-inside" element={<CartInside />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/about-us" element={<AboutUs />} />

      {/* Aggiungi altre rotte pubbliche se necessario */}

      {/* Rotte protette (ad esempio, richiedono autenticazione) */}
      {/* <PrivateRoute path="/protected-route" element={<ProtectedComponent />} /> */}
    </ReactRoutes>
  );
};

export default Routes;
