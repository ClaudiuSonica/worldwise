import { NavLink } from "react-router-dom";
import Logo from "../../atoms/logo/Logo";
import "./PageNav.scss";

const PageNav = () => {
  return (
    <nav className="page__nav">
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="ctaLink">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
