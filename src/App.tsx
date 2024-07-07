import { Suspense, lazy, useContext } from "react";
import "./App.css";
import "@fontsource/poppins";
const IndividualPage = lazy(() => import("./pages/IndividualPage"));
const BusinessPage = lazy(() => import("./pages/BusinessPage"));
import UserContext from "./context/UserContext";
import Loader from "./components/Loader";

function App() {
  const { userType } = useContext(UserContext);

  return (
    <Suspense fallback={<Loader />}>
      {userType === "individual" ? <IndividualPage /> : <BusinessPage />}
    </Suspense>
  );
}

export default App;
