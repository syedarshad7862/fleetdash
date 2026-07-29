import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import Vehicles from "./pages/Vehicles";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div className="bg-[#0b1118] h-screen overflow-hidden text-white">

      {/* Navbar */}
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">

        {/* Sidebar */}
        <Sidebar />

        {/* Pages */}
        <main className="flex-1 p-6 overflow-auto">

          <Routes>

            <Route
              path="/"
              element={<Navigate to="/dashboard" />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/tracking"
              element={<Tracking />}
            />

            <Route
              path="/vehicles"
              element={<Vehicles />}
            />

            <Route
              path="/alerts"
              element={<Alerts />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}

export default App;