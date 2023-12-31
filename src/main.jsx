import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Blog from './Components/Blog/Blog';
import GetStarted from './Components/GetStarted/GetStarted';
import JobDetails from './Components/JobDetails/JobDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/featuredJobs.json')
      },
      {
        path:'details/:detailsId',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch('/featuredJobs.json')
      },
    
      {
        path:'statistics',
        element:<Statistics></Statistics>,
      
      },
      {
        path:'appliedjob',
        element:<AppliedJob></AppliedJob>
      },{
        path:'blog',
        element:<Blog></Blog>
      },{
        path:'getstarted',
        element:<Home></Home>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
