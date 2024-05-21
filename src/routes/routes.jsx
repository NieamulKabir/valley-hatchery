import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Login";
import ReportLoss from "../component/ReportLoss";
import RunReport from "../component/RunReport";
import ManageProducts from "../component/ManageProducts";
import Menu from "../layout/Menu";
import Home from "../component/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/menu",
    element: <Menu />,
    children: [
      {
        path: "/menu/reportLoss",
        element: <ReportLoss />,
      },
      {
        path: "/menu/runReport",
        element: <RunReport />,
      },
      {
        path: "/menu/manageProduct",
        element: <ManageProducts />,
      },
    ],
  },
]);
export default routes;
