import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()} by WorldWise
      </p>
    </footer>
  );
};

export default Footer;