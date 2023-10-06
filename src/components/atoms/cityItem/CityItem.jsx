/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CityItem.scss";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link className="cityItem" to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <span className="emoji">{emoji}</span>
      <h3 className="name">{cityName}</h3>
      <time className="date">({formatDate(date)})</time>
        <button className="deleteBtn">&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
