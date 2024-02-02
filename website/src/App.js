import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import DayOne from "./Component/Events/DayOne/DayOne";
import DaySecond from "./Component/Events/DaySecond/DaySecond";
import DayThird from "./Component/Events/DayThird/DayThird";
import DayFour from "./Component/Events/DayFour/DayFour";
import Navbar from "./Component/Events/Component/Navbar";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const shouldShowNavbar = () => {
    return location.pathname !== "/";
  };



  return (
    <>
      {shouldShowNavbar() && <Navbar /> }

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dayone" element={<DayOne />} />
        <Route exact path="/daysecond" element={<DaySecond />} />
        <Route exact path="/daythird" element={<DayThird />} />
        <Route exact path="/dayfour" element={<DayFour />} />
      </Routes>
    </>
  );
}

export default App;
