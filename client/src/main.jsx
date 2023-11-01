import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Routes/Root';
import Home from './Routes/Home';
import LoginPage from './Routes/LoginPage';
import NewClient from './Components/NewClient';

const router = createBrowserRouter([
  {path: '', 
  element: <Root />, 
  children: [
    {path: 'login', element: <LoginPage />},
    {path: 'home', element: <Home />},
    {path: 'new-client', element: <NewClient />},

  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
