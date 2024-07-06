import BottomBanner from "../components/BottomBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import BusinessBanner from "../components/businessComponents/BusinessBanner";
import { BusinnessFeaturedData } from "../lib/featuresData";

const BusinessPage = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <BusinessBanner />
      </div>
      <div className="mt-96 xl:flex xl:flex-col xl:items-center">
        <div className="mx-0 xl:w-[1256px]">
          <Features data={BusinnessFeaturedData} />
          <GetStarted />
          <BottomBanner />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BusinessPage;
