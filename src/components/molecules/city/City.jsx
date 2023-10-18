import { useParams } from "react-router-dom";
import { useCities } from "../../../contexts/CitiesContext";
import { useEffect } from "react";

import "./City.scss";

import BackButton from "../../atoms/backButton/BackButton";
import Spinner from "../../atoms/spinner/Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className="city">
      <div className="row">
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="row">
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="row">
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className="row">
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default City;
