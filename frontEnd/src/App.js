import React from "react";
import MyRequests from "./component/myRequests";
import SignUp from "./component/signUp";
import CreateRequests from "./component/requests";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./component/navbar";
import Login from "./component/login";
import Listing from "./component/listing";
import Home from "./component/home";

const App = ()=>{

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/users", element: <Listing /> },
        { path: "/login", element: <Login /> },
        {path: "/create-ticket", element: <CreateRequests />},
        {path: "/signup", element: <SignUp/>},
        {path: "/tickets", element: <MyRequests />}
      ],
    },
  ]);
  return (
    <>
    <div style={{display: "flex",width: "100%", height: "100%", border: "1px solid white"}}>
      <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;