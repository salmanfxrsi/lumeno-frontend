import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* Dynamic Title using Helmet */}
      <Helmet>
        <title>Home | Lumeno</title>
      </Helmet>
      {/* Banner Section */}
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
