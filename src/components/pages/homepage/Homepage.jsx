import "./Homepage.scss";
import PageNav from "../../molecules/pageNav/PageNav";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <PageNav />
      <h1>Homepage</h1>

      <Link to="/app">Go to App</Link>
    </div>
  )
}

export default Homepage;