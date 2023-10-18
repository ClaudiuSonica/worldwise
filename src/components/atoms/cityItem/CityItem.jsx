/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CityItem.scss";
import { useCities } from "../../../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`cityItem ${
          id === currentCity.id ? "cityItem--active" : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className="emoji">{emoji}</span>
        <h3 className="name">{cityName}</h3>
        <time className="date">({formatDate(date)})</time>
        <button className="deleteBtn">&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
