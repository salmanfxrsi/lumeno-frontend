import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import HomeSessionShowcase from "./HomeSessionShowcase/HomeSessionShowcase";
import HomeFAQ from "./FAQ/HomeFAQ";
import HomeTutorShowcase from "./Home Tutor Showcase/HomeTutorShowcase";

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
      <div className="w-10/12 lg:container mx-auto py-24">
        <HomeSessionShowcase></HomeSessionShowcase>
      </div>
      <div className="w-10/12 lg:container mx-auto pb-24 pt-12">
        <HomeTutorShowcase></HomeTutorShowcase>
      </div>
      <div className="w-11/12 lg:container mx-auto pb-24">
        <HomeFAQ></HomeFAQ>
      </div>
    </div>
  );
};

export default Home;
