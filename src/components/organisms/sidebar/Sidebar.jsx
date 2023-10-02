import "./Sidebar.scss";
import Logo from "../../atoms/logo/Logo";
import AppNav from "../../molecules/appNav/AppNav";
import Footer from "../../atoms/footer/Footer";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Sidebar;
