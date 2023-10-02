/* eslint-disable react/prop-types */
import "./CityItem.scss";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;

  return (
    <li className="cityItem">
      <span className="emoji">{emoji}</span>
      <h3 className="name">{cityName}</h3>
      <time className="date">({formatDate(date)})</time>
      <button className="deleteBtn">&times;</button>
    </li>
  );
};

export default CityItem;
