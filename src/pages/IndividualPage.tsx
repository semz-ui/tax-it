import BottomBanner from "../components/BottomBanner";
import { individualFeaturedData } from "../lib/featuresData";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GetStarted2 from "../components/GetStarted2";
import Header from "../components/Header";
import IndividualBanner from "../components/individualComponents/IndividualBanner";
import NavBar from "../components/NavBar";
import Logo from "@/assets/images/logo.svg";

const IndividualPage = () => {
  return (
    <>
      <div className="flex justify-between h-20 px-3 lg:hidden fixed w-full z-50 top-0 bg-black">
        <img src={Logo} alt="logo" className="cursor-pointer w-20" />
        <div className="flex gap-8 items-center">
          <NavBar />
        </div>
      </div>
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
