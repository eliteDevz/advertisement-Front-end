import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import LandingLayout from "./layouts/LandingLayout.jsx";
import LandingCategories from "./pages/landingPage/LandingCategories.jsx";
import Cars from "./pages/landingPage/Cars.jsx";
import Login from "./pages/login/index.jsx";
// import LogoutPopup from "./components/Logout.jsx";
import PostAdvert from "./components/postAdvert.jsx";
import Fashion from "./pages/landingPage/Fashion.jsx";
import Furniture from "./pages/landingPage/Furniture.jsx";
import SpareParts from "./pages/landingPage/SpareParts.jsx";
import Property from "./pages/landingPage/Property.jsx";
import SignUp from "./pages/signUp/index.jsx";
import MoreDetails from "./components/MoreDetails.jsx";
import EditAdvert from "./components/EditAdvert.jsx";
import LogIn from "./pages/login/index.jsx";
import MyAds from "./pages/dashboard/MyAds.jsx";
import AllAds from "./pages/landingPage/AllAds.jsx";
import DashboardLayout2 from "./layouts/DashboardLayout2.jsx";
import MyAds2 from "./pages/dashboard/MyAds2.jsx";

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
          path: "categories-all-ads",
          element: <AllAds />,
        },
        {
          path: "categories-spare-parts",
          element: <SpareParts />,
        },
        {
          path: "categories-properties",
          element: <Property />,
        },
        {
          path: "ad-details/:id",
          element: <MoreDetails />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
            index: true,
            element: <MyAds />
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "ad-details/:id",
          element: <MoreDetails />,
        },
        {
          path: "new-ad",
          element: <PostAdvert />,
        },
        {
          path: "edit-ad/:id",
          element: <EditAdvert />,
        },
      ],
    },
    {
      path: "/dash-board",
      element: <DashboardLayout2/>,
      children: [
        {
         index: true,
          element: <MyAds2 />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

  // <LandingPage/>
}

export default App;
