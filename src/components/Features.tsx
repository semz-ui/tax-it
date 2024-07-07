import { SingleFeaturedData, FeaturedData } from "../types/types";

interface FeaturesProps {
  data: FeaturedData;
}

const Features = ({ data }: FeaturesProps) => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center mx-2 sm:mx-0">
        <h1 className="font-semibold text-gray-700 text-3xl text-center">
          Payments tools designed for you
        </h1>
        <p className="font-extralight text-lg text-gray-400 text-center">
          Explore payment features that provides you with every possible
          solution
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-6 items-center justify-center">
        {data.map((data: SingleFeaturedData) => (
          <div
            key={data.id}
            className="w-[300px] lg:w-[400px] h-72 lg:h-96 border rounded-xl flex flex-col justify-center px-6 sm:px-10 gap-4"
          >
            <img src={data.icon} className="w-16" />
            <h1 className="font-bold">{data.title}</h1>
            <p className="font-extralight text-sm sm:text-base text-gray-400">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
