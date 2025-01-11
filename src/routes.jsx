import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Signup from "./pages/SignupPage.jsx";
import Login from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login />},
        { path: "dashboard", element: <Dashboard />},
      ],
    }
  ]);
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
