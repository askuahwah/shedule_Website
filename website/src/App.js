import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Component/Home/Home';
import Events from './Component/Events/Events';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/events' element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
