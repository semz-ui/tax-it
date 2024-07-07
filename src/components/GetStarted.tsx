import img from "@/assets/images/rightPanel.png";
import img2 from "@/assets/images/wallet.png";
import img3 from "@/assets/images/Ellipse12.png";
import img4 from "@/assets/images/Ellipse23.png";
import { getStartedData } from "../lib/GetStartedData";
import { SingleGetStartedData } from "../types/types";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const GetStarted = () => {
  const { userType } = useContext(UserContext);
  console.log(userType);
  return (
    <div className="mx-5 mt-20 flex flex-wrap items-center justify-center ">
      {userType === "individual" && (
        <>
          <div className="w-full md:w-1/2 flex">
            <div className="w-1 h-72 mr-4  bg-slate-400">
              <div className="bg-third h-14" />
            </div>
            <div>
              {getStartedData.slice(0, 4).map((data: SingleGetStartedData) => (
                <div key={data.id} className="flex flex-col gap-2 mb-6 mt-3">
                  <h1 className="font-bold">{data.title}</h1>
                  <p className="font-extralight text-sm text-gray-400">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
            <img src={img} className="" />
            <img src={img3} className="absolute right-0 -z-10 -mt-80" />
            <img
              src={img4}
              className="absolute right-0 -z-10 -mt-96 sm:-mt-[415px]"
            />
          </div>
        </>
      )}
      {userType === "business" && (
        <>
          <div className="w-full md:w-1/2 flex">
            <div className="w-1 h-96 mr-4 bg-third">
              <div className=" bg-slate-400 h-80" />
            </div>
            <div>
              {getStartedData.slice(4, 8).map((data: SingleGetStartedData) => (
                <div
                  key={data.id}
                  className="flex flex-col gap-2 mb-6 lg:mt-3 lg:w-2/3"
                >
                  <h1 className="font-extrabold">{data.title}</h1>
                  <p className="font-extralight text-sm text-gray-400">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
            <img src={img2} className="" />
            <img src={img3} className="absolute right-0 -z-10 -mt-80" />
            <img
              src={img4}
              className="absolute right-0 -z-10 -mt-96 sm:-mt-[415px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GetStarted;
