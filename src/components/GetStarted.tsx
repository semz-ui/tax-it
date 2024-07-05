import img from "@/assets/images/rightPanel.png";
import { getStartedData } from "../lib/GetStartedData";
import { SingleGetStartedData } from "../types/types";

const GetStarted = () => {
    return (
        <div className="mx-5 mt-20 flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 flex">
                <div className="w-1 h-72 mr-4  bg-slate-400" >
                    <div className="bg-third h-14" />
                </div>
                <div>
                    {
                        getStartedData.slice(0, 4).map((data: SingleGetStartedData) => (
                            <div key={data.id} className="flex flex-col gap-2 mb-6 mt-3">
                                <h1 className='font-extrabold'>{data.title}</h1>
                                <p className='font-extralight text-sm text-gray-400'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
                <img src={img} className="" />
            </div>
        </div>
    );
};

export default GetStarted;
