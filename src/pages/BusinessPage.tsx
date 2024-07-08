import { useEffect } from "react";
import BottomBanner from "../components/BottomBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import BusinessBanner from "../components/businessComponents/BusinessBanner";
import { BusinnessFeaturedData } from "../lib/featuresData";

const BusinessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-black">
        <BusinessBanner />
      </div>
      <div className="mt-48 sm:mt-96 xl:flex xl:flex-col xl:items-center">
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
