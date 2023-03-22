import { createBrowserRouter } from "react-router-dom";
import LearnerLogin from "../Authentication/Learner/LearnerLogin";
import RiderLogin from "../Authentication/Rider/RiderLogin";

import Home from "../Home/Home";
import Main from "../Main/Main";
import Packages from "../pages/Packages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rider-login",
        element: <RiderLogin />,
      },
      {
        path: "/learner-login",
        element: <LearnerLogin />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
    ],
  },
]);

export default routes;
