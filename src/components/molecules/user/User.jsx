import "./User.scss";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/FakeAuthContext";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="user">
      <img src={user.avatar} alt="user profile picture" />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
