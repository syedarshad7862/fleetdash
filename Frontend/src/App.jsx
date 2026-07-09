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

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >

      {/* Sidebar */}
      <Sidebar />


      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* Top Navbar */}
        <Navbar />


        {/* Pages */}
        <main
          style={{
            padding: "20px",
          }}
        >

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