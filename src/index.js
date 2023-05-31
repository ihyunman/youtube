import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, path: "/", element: <Videos /> },
        { path: "/videos", element: <Videos /> },
        { path: "/videos/:title", element: <Videos /> },
        { path: "/videos/watch/:id", element: <VideoDetail /> },
      ],
    },
  ],
  { basename: "/youtube" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
