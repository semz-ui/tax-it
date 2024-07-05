import img1 from "@/assets/images/Ellipse5.png"
import img2 from "@/assets/images/Ellipse4.png"
import img3 from "@/assets/images/Ellipse3.png"
import img4 from "@/assets/images/Ellipse1.png"
import { Button } from "./Button";

const IndividualBanner = () => {
    return <div className="flex flex-col md:flex-row h-[500px] md:h-[700px] ">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center xl:ml-48 md:ml-10">
            <h1 className="text-white text-center text-xl font-semibold lg:text-6xl md:text-4xl md:text-left w-4/5">Secure & seamless online transactions</h1>
            <p className="text-white text-center md:text-left md:text-2xl">Providing you with the best online payment experience</p>
            <div className="mt-10">
                <Button title="Create free account" />
            </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={img3} className="absolute w-40 sm:w-64 lg:w-96 mt-72 sm:mt-80 lg:mt-0 z-10 md:mt-0" />
            <img src={img1} className="absolute w-32 sm:w-40 lg:w-60 mt-[480px] md:mt-64 lg:ml-10 lg:mt-96 z-20" />
            <img src={img2} className="absolute w-24 sm:w-36 z-10 mr-44 sm:mr-60 mt-60 sm:mt-60 lg:mb-96 lg:mr-96 lg:w-56 md:mb-96" />
            <img src={img4} className="absolute w-16 sm:w-20 md:w-36 lg:w-40 mt-80 sm:mt-96 lg:mt-28 xl:mt-4 mr-44 sm:mr-60 lg:mr-96 md:mb-96" />
        </div>
    </div>;
};

export default IndividualBanner;
