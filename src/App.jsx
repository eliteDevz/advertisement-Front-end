import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from './pages/dashboard/Overview.jsx'
import Settings from './pages/dashboard/Settings.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path:"/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          index:true,
          element: <Overview/>
        },
        {
          path:"settings",
          element:<Settings/>
        },
        // {
        //   path:"post_ad",
        //   element: <
        // }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

  // <LandingPage/>
}

export default App;
