import "./Form.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/button/Button";
import BackButton from "../../atoms/backButton/BackButton"

import convertToEmoji from "../../../../convertToEmoji";
import { useUrlPosition } from "../../../hooks/useUrlPosition";
import { useCities } from "../../../contexts/CitiesContext";
import Message from "../../atoms/message/Message";
import Spinner from "../../atoms/spinner/Spinner";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const navigate = useNavigate();

  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(() => {
    if (!lat || !lng) return;

    const fetchCityData = async () => {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const response = await fetch(
          `${BASE_URL}?latitude=${lat}&longitude${lng}`
        );
        const data = await response.json();

        if (!data.countryCode) {
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😊"
          );
        }

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position: {
        lat,
        lng,
      },
    };

    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`form ${isLoading ? "loading" : ""}`}
      onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className="flag">{emoji}</span>
      </div>

      <div className="row">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="row">
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="buttons">
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
};

export default Form;
