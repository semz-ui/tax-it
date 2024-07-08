import "./App.css";
import IndividualPage from "./pages/IndividualPage";
import BusinessPage from "./pages/BusinessPage";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import Header from "./components/Header";

function App() {
  const { userType } = useContext(UserContext);

  return (
    <>
      <Header />
      {userType === "individual" ? <IndividualPage /> : <BusinessPage />}
    </>
  );
}

export default App;
