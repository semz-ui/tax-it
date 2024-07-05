export const Button = ({ title }: { title: string }) => {
    return (
        <button className="bg-gradient-to-r from-first to-second p-3 rounded-lg cursor-pointer hover:opacity-80">
            <p className="text-white">{title}</p>
        </button>
    );
};

export const BannerButton = ({ title }: { title: string }) => {
    return (
        <button className="bg-white py-2 w-40 rounded-lg cursor-pointer hover:opacity-80">
            <p className=" text-first ">{title}</p>
        </button>
    );
};
