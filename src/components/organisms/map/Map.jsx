import { useSearchParams } from "react-router-dom";
import "./Map.scss";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className="mapContainer">
      <h1>
        Position: {lat}, {lng}
      </h1>

      <button onClick={
        () => {
          setSearchParams({ lat: 0, lng: 0 });
        }
      }>Change position</button>
    </div>
  );
};

export default Map;
