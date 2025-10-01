import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "./pages/Home";
import Loading from "@/components/Loading/Loading";
import NotFoundResult from "./pages/405";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      /** 해당 부분은 loading테스트라 추후에 지워야 함 */
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "error",
        element: <NotFoundResult />,
      },
    ],
  },
]);
