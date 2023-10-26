import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Routes/Root';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';

const router = createBrowserRouter([
  {path: '/', 
  element: <Root />, 
  children: [
    {path: '/login', element: <Login />},
    {path: '/sign-up', element: <SignUp />},
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
