import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './Test/Test';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/test",
        element: <Test />
    }
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


// HTTPS=true npm start
