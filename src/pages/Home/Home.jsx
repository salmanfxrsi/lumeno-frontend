import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import HomeSessionShowcase from "./HomeSessionShowcase/HomeSessionShowcase";
import HomeFAQ from "./FAQ/HomeFAQ";
import HomeTutorShowcase from "./Home Tutor Showcase/HomeTutorShowcase";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import SubscribeUs from "./SubscribeUs/SubscribeUs";
import FocusStudy from "./FocusStudy/FocusStudy";
import OurSponsor from "./OurSponsor/OurSponsor";

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
      <div className="w-10/12 lg:container mx-auto pt-24 pb-12">
        <OurSponsor></OurSponsor>
      </div>
      <div className="w-10/12 lg:container mx-auto py-24">
        <HomeSessionShowcase></HomeSessionShowcase>
      </div>
      <div className="w-10/12 lg:container mx-auto pb-24 pt-12">
        <HomeTutorShowcase></HomeTutorShowcase>
      </div>
      <div className="w-10/12 lg:container mx-auto pb-24 pt-12">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="w-10/12 lg:container mx-auto pb-24 pt-12">
        <SubscribeUs></SubscribeUs>
      </div>
      <div className="w-10/12 lg:container mx-auto pb-24 pt-12">
        <FocusStudy></FocusStudy>
      </div>
      <div className="w-11/12 lg:container mx-auto pb-24">
        <HomeFAQ></HomeFAQ>
      </div>
    </div>
  );
};

export default Home;
