import BottomBanner from "../components/BottomBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import BusinessBanner from "../components/businessComponents/BusinessBanner";
import { BusinnessFeaturedData } from "../lib/featuresData";
import Logo from "@/assets/images/logo.svg";

const BusinessPage = () => {
  return (
    <>
      <div className="flex justify-between h-20 px-3 lg:hidden fixed w-full top-0 bg-black z-50">
        <img src={Logo} alt="logo" className="cursor-pointer w-20" />
        <div className="flex gap-8 items-center">
          <NavBar />
        </div>
      </div>
      <div className="bg-black">
        <Header />
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
