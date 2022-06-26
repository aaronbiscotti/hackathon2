import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Temperature from "./pages/Temperature";
import Energy from "./pages/Energy";
import Ecosystem from "./pages/Ecosystem";
import People from "./pages/People";
import Footer from "./components/Footer";
import Atmosphere from "./pages/subpages/Atmosphere";
import Ocean from "./pages/subpages/Ocean";
import Land from "./pages/subpages/Land";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route
          path="/temperature"
          element={<Navigate replace to="/temperature/atmosphere" />}
        />
        <Route path="/home" exact element={<Home />} />
        <Route path="/temperature" element={<Temperature />}>
          <Route path="/temperature/atmosphere" element={<Atmosphere />} />
          <Route path="/temperature/ocean" element={<Ocean />} />
          <Route path="/temperature/land" element={<Land />} />
        </Route>
        <Route path="/energy" exact element={<Energy />} />
        <Route path="/ecosystem" exact element={<Ecosystem />} />
        <Route path="/people" exact element={<People />} />
        <Route path="/solutions" exact element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
