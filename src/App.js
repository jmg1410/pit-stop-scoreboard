import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRacers from "./pages/AddRacers";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AddRacers />} />
      </Routes>
    </Router>
  )
}

export default App;