import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const NavBar = () => {
  const { userType, setUserType } = useContext(UserContext);
  const changeUserToBusiness = () => {
    if (userType === "business") {
      return;
    }
    setUserType("business");
  };
  const changeUserToIndevidual = () => {
    if (userType === "individual") {
      return;
    }
    setUserType("individual");
  };
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <GiHamburgerMenu cursor={"pointer"} color="white" size={20} />
      </SheetTrigger>
      <SheetContent side={"top"} className="h-96">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center gap-10">
              <p
                className={`cursor-pointer ${
                  userType === "individual" ? "border-b-2 border-green-500" : ""
                } px-2 text-xl`}
                onClick={changeUserToIndevidual}
              >
                Individual
              </p>
              <p
                className={`cursor-pointer ${
                  userType === "business" ? "border-b-2 border-green-500" : ""
                } px-2 text-xl`}
                onClick={changeUserToBusiness}
              >
                For Businesses
              </p>
              <p className="text-xl px-2">About Us</p>
              <p className="text-xl px-2">Contact</p>
              <p className="text-xl px-2">Login</p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavBar;
