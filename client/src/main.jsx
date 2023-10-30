import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Routes/Root';
import SignupPage from './Routes/SignupPage';
import Home from './Routes/Home';
import LoginPage from './Routes/LoginPage';

const router = createBrowserRouter([
  {path: '', 
  element: <Root />, 
  children: [
    {path: 'sign-up', element: <SignupPage />},
    {path: 'login', element: <LoginPage />},
    {path: 'home', element: <Home />},

  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
