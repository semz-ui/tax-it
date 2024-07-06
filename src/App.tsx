import "./App.css";
import "@fontsource/poppins";
import IndividualPage from "./pages/IndividualPage";
import BusinessPage from "./pages/BusinessPage";
import { useContext } from "react";
import UserContext from "./context/UserContext";

function App() {
  const { userType } = useContext(UserContext);

  return (
    <div className="">
      {userType === "individual" ? <IndividualPage /> : <BusinessPage />}
    </div>
  );
}

export default App;
