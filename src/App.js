import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CurrWeather from './components/CurrWeather';
import Navbar from './components/Navbar';
import NextWeatherForecast from './components/NextWeatherForecast';
import MoreDetail from "./pages/MoreDetail";
import About from "./pages/About";

function App() {
  return (
      <Router>
        <>
          <Navbar title="Desi Weather"/>
          <Routes>
            <Route path="/" element={
              <>
                <CurrWeather />
                {/* <NextWeatherForecast /> */}
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/moredetail" element={<MoreDetail />} />
          </Routes>
        </>
      </Router>
  );
}

export default App;
