import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/assets/logo.png" alt="WorldWise logo" className="logo" />
    </Link>
  );
}

export default Logo;