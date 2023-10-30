import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Routes/Root';
import Login from './Routes/Login';
import Home from './Routes/Home';

const router = createBrowserRouter([
  {path: '', 
  element: <Root />, 
  children: [
    {path: '', element: <Login />},
    {path: '/home', element: <Home />},

  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
