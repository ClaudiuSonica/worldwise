/* eslint-disable react/prop-types */
import "./CountryItem.scss";

const CountryItem = ({ country }) => {
  return (
    <li className="countryItem">
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;