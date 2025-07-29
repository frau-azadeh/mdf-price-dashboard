// src/App.tsx
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Forecast from "./pages/ForeCast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}  />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
}

export default App;

