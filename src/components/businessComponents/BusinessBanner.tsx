import bannerImg from "@/assets/images/Rectangle2.png";
import { Button } from "../Button";

const BusinessBanner = () => {
  return (
    <>
      <div className="h-[500px] md:h-[650px] flex flex-col items-center justify-center gap-8">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold md:w-1/3 mx-2 sm:mx-0 text-center">
          Manage payroll, compliance & HR in real time
        </h1>
        <p className="text-base text-gray-300 sm:w-3/4 md:w-1/4 text-center">
          Make income tax remittances to the state internal revenue service for
          your employees.
        </p>
        <Button title="Create free account" />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[550px] md:translate-y-[650px] lg:translate-y-[600px]">
        <img src={bannerImg} />
      </div>
    </>
  );
};

export default BusinessBanner;
