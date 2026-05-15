import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import CRMUserDashboard from "../Pages/Dashboard";

const AppRouter = createBrowserRouter([


    {
    path: "/",
    Component: Signup,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: CRMUserDashboard,
  }
])
export default AppRouter;