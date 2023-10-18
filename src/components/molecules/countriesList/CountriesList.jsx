/* eslint-disable react/prop-types */
import Spinner from "../../atoms/spinner/Spinner";
import CountryItem from "../../atoms/countryItem/CountryItem";
import Message from "../../atoms/message/Message";
import "./CountriesList.scss";

import { useCities } from "../../../contexts/CitiesContext";

const CountriesList = () => {

  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="countryList">
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
};

export default CountriesList;
