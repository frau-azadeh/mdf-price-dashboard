// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/ForeCast";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
}

export default App;
