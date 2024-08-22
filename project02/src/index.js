import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/ContactUs';
import User from './components/User';
import GitHubUserInfo from './components/Github'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },

      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    //   {
    //   path:"user/:userid",
    //   element:<User/>
    //  },
     {
      path:"Github",
      element:<GitHubUserInfo username="mrinalchauhan"/>
     },
    ]
  }
])
// // Another way 
  
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" elements={<Layout/>}>
//       <Route path="home" elements={<Home/>} />
//     </Route>

//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* RouteProvider is a self closing component and works only by taking props. we need this for routing */}
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);

