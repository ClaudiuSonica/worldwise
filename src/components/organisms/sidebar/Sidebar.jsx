import "./Sidebar.scss";
import Logo from "../atoms/logo/Logo";
import AppNav from "../molecules/appNav/AppNav";
import Footer from "../atoms/footer/Footer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <AppNav />

      <p>List of cities</p>

      <Footer />
    </div>
  );
};

export default Sidebar;
