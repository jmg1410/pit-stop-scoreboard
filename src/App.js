import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRacers from "./pages/AddRacers";
import RaceInput from "./pages/RaceInput";
import { RacerProvider } from "./context/RacerContext";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<AddRacers />} />
        <Route path="/race" element={<RaceInput/>} />
      </Routes>
    </Router>
  )
}

export default App;