import "./App.css";
import IndividualPage from "./pages/IndividualPage";
import BusinessPage from "./pages/BusinessPage";
import { useContext } from "react";
import UserContext from "./context/UserContext";

function App() {
  const { userType } = useContext(UserContext);

  return (
    <>{userType === "individual" ? <IndividualPage /> : <BusinessPage />}</>
  );
}

export default App;
