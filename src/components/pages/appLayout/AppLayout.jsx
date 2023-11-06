import "./AppLayout.scss";

import Sidebar from "../../organisms/sidebar/Sidebar";
import Map from "../../organisms/map/Map";
import User from "../../molecules/user/User";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;