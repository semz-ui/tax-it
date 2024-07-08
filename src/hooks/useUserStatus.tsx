import { useContext } from "react";
import UserContext from "../context/UserContext";

const useUserStatus = () => {
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

  return {
    userType,
    changeUserToBusiness,
    changeUserToIndevidual,
  };
};

export default useUserStatus;
