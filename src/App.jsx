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
import Fashion from "./pages/landingPage/Fashion.jsx";
import Furniture from "./pages/landingPage/Furniture.jsx";
import Events from "./pages/landingPage/Events.jsx";
import SpareParts from "./pages/landingPage/SpareParts.jsx";
import Property from "./pages/landingPage/Property.jsx";

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
        {
          path: "categories-fashion",
          element: <Fashion />,
        },
        {
          path: "categories-furniture",
          element: <Furniture />,
        },
        {
          path: "categories-events",
          element: <Events />,
        },
        {
          path: "categories-spare-parts",
          element: <SpareParts />,
        },
        {
          path: "categories-properties",
          element: <Property />,
        },
      ],
    },
    {
      path: "/login-registration",
      element: <SignUp />,
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
          path: "new-ad",
          element: <PostAdvert />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // <LandingPage/>
}

export default App;
