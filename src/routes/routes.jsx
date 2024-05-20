import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Login";
import ReportLoss from "../component/ReportLoss";
import RunReport from "../component/RunReport";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/reportLoss",
        element:<ReportLoss />
      },
      {
        path:"/runReport",
        element:<RunReport />
      }
    ],
  },
]);
export default routes;
