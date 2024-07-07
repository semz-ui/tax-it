import Logo from "@/assets/images/logo.svg";
import { Button } from "./Button";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const { userType, setUserType } = useContext(UserContext);
  const changeUser = () => {
    setUserType(userType === "individual" ? "business" : "individual");
  };
  return (
    <>
      {/* large screen */}
      <div className="hidden lg:flex justify-between px-8 items-center">
        <div className="flex gap-8 items-center">
          <img src={Logo} alt="logo" className="cursor-pointer" />
          <p
            onClick={changeUser}
            className={`cursor-pointer ${
              userType === "individual" ? "border-b-2 border-green-500" : ""
            } px-2 text-white`}
          >
            For Individuals
          </p>
          <p
            onClick={changeUser}
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
    </>
  );
};

export default Header;
