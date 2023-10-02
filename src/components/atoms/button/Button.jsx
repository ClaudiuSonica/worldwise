/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {children}
    </button>
  );
};

export default Button;
