import BottomBanner from "../components/BottomBanner";
import { individualFeaturedData } from "../lib/featuresData";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GetStarted2 from "../components/GetStarted2";
import Header from "../components/Header";
import IndividualBanner from "../components/individualComponents/IndividualBanner";

const IndividualPage = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <IndividualBanner />
      </div>
      <div className="xl:flex xl:flex-col xl:items-center">
        <div className="mx-0 xl:w-[1256px]">
          <Features data={individualFeaturedData} />
          <GetStarted />
          <GetStarted2 />
          <BottomBanner />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default IndividualPage;
