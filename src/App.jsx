import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import LandingLayout from "./layouts/LandingLayout.jsx";
import LandingCategories from "./pages/landingPage/LandingCategories.jsx";
import Cars from "./pages/landingPage/Cars.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import LogoutPopup from "./components/Logout.jsx";
import AdvertisePopup from "./components/AdvertiseButton.jsx";
import PostAdvert from "./components/postAdvert.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      
      children: [
        {
          index: true,
          element: <LandingCategories />,
        },
        {
          path: "categories-cars",
          element: <Cars />,
        },
        
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "sign_up",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <LogoutPopup />,
        },

        {
          path: "advert",
          element: <AdvertisePopup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // <LandingPage/>
}

export default App;
