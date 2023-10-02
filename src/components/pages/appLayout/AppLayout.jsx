import "./AppLayout.scss";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Map from "../../organisms/map/Map";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;