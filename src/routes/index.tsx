import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "./pages/Home";
import Loading from "@/components/Loading/Loading";
import NotFoundResult from "./pages/405";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import MyPage from "./pages/MyPage";
import Order from "./pages/Order";
import Search from "./pages/Search";
import Shopping from "./pages/Shopping";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundResult />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "myPage",
        element: <MyPage />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "shopping",
        element: <Shopping />,
      },
      /** 해당 부분은 loading테스트라 추후에 지워야 함 */
      {
        path: "loading",
        element: <Loading />,
      },
    ],
  },
]);
