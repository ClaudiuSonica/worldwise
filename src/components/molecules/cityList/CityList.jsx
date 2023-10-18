/* eslint-disable react/prop-types */
import Spinner from "../../atoms/spinner/Spinner";
import CityItem from "../cityItem/CityItem";
import Message from "../../atoms/message/Message";
import "./CityList.scss";

import { useCities } from "../../../contexts/CitiesContext";

const CityList = () => {

  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className="cityList">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;