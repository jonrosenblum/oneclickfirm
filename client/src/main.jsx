import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import LoginPage from "./Routes/LoginPage";
import NewClient from "./Routes/NewClient";
import GenerateDocuments from "./Routes/GenerateDocuments";
import AllClients from "./Routes/AllClients";
import { store } from "./services/store";
import { Provider } from "react-redux";
import EditClient from "./Routes/EditClient";
import "./axios";
import SignupPage from "./Routes/SignupPage";
import Mail from "./Routes/Mail";
import Calendar from "./Routes/Calendar";

const router = createHashRouter([
  {
    path: "",
    element: <Root />,
    errorElement: (
      <div>
        Not Found <a href="/home">Return Home</a>
      </div>
    ),
    children: [
      { path: "", element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "new-client", element: <NewClient /> },
      { path: "generate-documents", element: <GenerateDocuments /> },
      { path: "clients", element: <AllClients /> },
      { path: "clients/:id?", element: <EditClient /> },
      { path: "mail", element: <Mail /> },
      { path: "calendar", element: <Calendar /> },
    ],
  },
  // keep login out of root so side nav doesn't show up
  { path: "signup", element: <SignupPage /> },
  { path: "login", element: <LoginPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
