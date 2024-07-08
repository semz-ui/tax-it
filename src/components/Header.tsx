import Logo from "@/assets/images/logo.svg";
import { Button } from "./Button";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import NavBar from "./NavBar";
import useUserStatus from "../hooks/useUserStatus";

const Header = () => {
  const { userType } = useContext(UserContext);
  const { changeUserToBusiness, changeUserToIndevidual } = useUserStatus();
  return (
    <>
      {/* large screen */}
      <div className="hidden lg:flex justify-between px-8 py-2 items-center fixed w-full bg-black z-50">
        <div className="flex gap-8 items-center">
          <img src={Logo} alt="logo" className="cursor-pointer w-24" />
          <p
            onClick={changeUserToIndevidual}
            className={`cursor-pointer ${
              userType === "individual" ? "border-b-2 border-green-500" : ""
            } px-2 text-white`}
          >
            For Individuals
          </p>
          <p
            onClick={changeUserToBusiness}
            className={`cursor-pointer ${
              userType === "business" ? "border-b-2 border-green-500" : ""
            } px-2 text-white`}
          >
            For Businesses
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="cursor-pointer text-white">About Us</p>
          <p className="cursor-pointer text-white">Contact</p>
          <div className="w-[1px] h-5 bg-white" />
          <p className="cursor-pointer text-white">Login</p>
          <Button title="Create free account" />
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex justify-between h-20 px-3 lg:hidden fixed w-full z-50 top-0 bg-black">
        <img src={Logo} alt="logo" className="cursor-pointer w-20" />
        <div className="flex gap-8 items-center">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
