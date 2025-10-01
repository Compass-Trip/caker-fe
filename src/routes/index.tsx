import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "./pages/Home";
import Loading from "@/assets/layouts/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
    ],
  },
]);
