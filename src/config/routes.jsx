import { Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import Navbar from "../components/Landingpage/Navbar";
import Footer from "../components/molecule/Footer";
import AdminDashboard from "../components/adminDashboard/AdminDashboard";
import InfomationSystem from "../components/informationpage/InfomationSystem";
// import teachers from '../components/informationpage/Teachers';
// import adminpage from '../components/informationpage/AdminPage';
import Schedules from "../components/schedulespage/Schedules";
import SMS from "../components/schedulespage/SMS";
import Graduation from "../components/adminDashboard/Graduation";
import TeachersProfile from "./components/admin/informationpage/TeachersProfile";
//  import SuperAdminLayout from '../layouts/superadmin/SuperAdminLayout';
//  import Home from '../pages/superadmin/Home';
// import Footer from '../components/Landingpage/Footer';

function PageRoutes() {
  return (
    <div>
      <Navbar /> Ensure Navbar is always visible
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/infomation-system" element={<InfomationSystem />} />
        <Route path="/administrations" element={<Administrations />} />
        <Route path="/teachersprofile" element={<TeachersProfile />} />
        {/* <Route path="/teachers" element={<Teachers />} />   */}
        {/* <Route path="/admin/infomation-system/admin" element={<AdminPage />} />   */}
        <Route path="/SMS" element={<SMS />} />
        <Route path="/Schedules" element={<Schedules />} />
        <Route path="/Graduation" element={<Graduation />} />
      </Routes>
      <Footer /> {/* Ensure Footer is always visible */}
    </div>
  );
}

export default PageRoutes;
