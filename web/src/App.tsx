import { Routes, Route } from "react-router-dom";
import { HydrometerReading } from "./pages/HydrometerReading";
import { Home } from "./pages/Home";

function App() {
  return (    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hydrometer" element={<HydrometerReading />} />
    </Routes>
  )
}

export default App
