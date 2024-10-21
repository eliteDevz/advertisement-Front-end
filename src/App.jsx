import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import LandingLayout from "./layouts/LandingLayout.jsx";
import LandingCategories from "./pages/landingPage/LandingCategories.jsx";
import Cars from "./pages/landingPage/Cars.jsx";

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
          path:"categories-cars",
          element: <Cars/>
        }
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
        // {
        //   path:"post_ad",
        //   element: <
        // }
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // <LandingPage/>
}

export default App;
