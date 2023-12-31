import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Errorpage from './components/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donationdetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('/categories.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () =>fetch ('/categories.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () =>fetch ('/categories.json')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
