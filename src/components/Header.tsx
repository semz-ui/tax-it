import Logo from "@/assets/images/logo.svg";
import { Button } from "./Button";

const Header = () => {
    return (
        <>
            {/* large screen */}
            <div className="hidden lg:flex justify-between px-8 items-center">
                <div className="flex gap-8 items-center">
                    <img src={Logo} className="cursor-pointer" />
                    <p className="cursor-pointer border-b-2 border-green-500 px-2 text-white">
                        For Individuals
                    </p>
                    <p className="cursor-pointer text-white">For Businesses</p>
                </div>
                <div className="flex gap-8 items-center">
                    <p className="cursor-pointer text-white">About Us</p>
                    <p className="cursor-pointer text-white">Contact</p>
                    <p className="cursor-pointer text-white">Login</p>
                    <Button title="Create free account" />
                </div>
            </div>
            {/* mobile screen */}
            <div className="flex justify-between h-20 px-3 lg:hidden">
                <img src={Logo} className="cursor-pointer w-20" />
                <div className="flex gap-8 items-center">
                    <p className="cursor-pointer text-white">Login</p>
                </div>
            </div>
        </>
    );
};

export default Header;
