import img from "@/assets/images/leftPanel.png";
import appleStoreImage from "@/assets/images/Group.png";
import gooplePlayImage from "@/assets/images/googleplay.png";
import { Button } from "./Button";

const GetStarted2 = () => {
    return (
        <div className="mt-20 flex flex-wrap items-center gap-0 sm:gap-8">
            <div className="w-full sm:w-1/2">
                <img src={img} />
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/3 mt-5 sm:mt-0 px-2 sm:px-0">
                <h1 className="text-base lg:text-3xl md:text-2xl">Transact on the go</h1>
                <p className="text-sm md:text-base text-gray-400 mt-2 mb-8">Stay on top of your business with our easy-to-use app</p>
                <Button title="Get Started" />
                <div className="mt-5 flex flex-wrap gap-2 ">
                    <img src={appleStoreImage} className="w-24" />
                    <img src={gooplePlayImage} className="w-24" />
                </div>
            </div>
        </div>
    );
};

export default GetStarted2;
