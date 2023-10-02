/* eslint-disable react/prop-types */
import "./Message.scss";

const Message = ({ message }) => {
  return (
    <p className="message">
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;
