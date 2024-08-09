import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import GlobalProvider from "../contexts/GlobalProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
      <Toaster />
    </GlobalProvider>
  </React.StrictMode>,
);
