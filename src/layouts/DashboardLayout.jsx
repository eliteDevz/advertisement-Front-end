import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default DashboardLayout