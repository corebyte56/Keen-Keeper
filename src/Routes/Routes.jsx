import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../Layout/mainLayout";
import TimeLine from "../Pages/TimeLine/TimeLine";
import States from "../Pages/States/States";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/FriendDetails/:Id",
        element: <FriendDetails />,
        loader: async () => {
          const res = await fetch("/friendData.json");
          return res.json();
        },
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/States",
        element: <States />,
      },
    ],
  },
]);
