import { useEffect, useState } from "react";

import StatsCard from "../components/dashboard/StatsCard";
import LiveStatus from "../components/dashboard/LiveStatus";
import VehicleTable from "../components/dashboard/VehicleTable";
import LiveMap from "../components/map/LiveMap";
import SpeedChart from "../components/charts/SpeedCharts";
import VehicleStatusChart from "../components/charts/VehicleStatusChart";
import socket from "../socket";

import {
  Truck,
  Bell,
  Gauge,
  Timer,
} from "lucide-react";

import { getVehicles } from "../services/vehicleService";

export default function Dashboard() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    loadVehicles();

    const interval = setInterval(() => {
      loadVehicles();
    }, 5000);

    return () => clearInterval(interval);

  }, []);
  useEffect(() => {
  socket.on("vehicleUpdated", (updatedVehicle) => {
    setVehicles((prev) =>
      prev.map((vehicle) =>
        vehicle._id === updatedVehicle._id
          ? updatedVehicle
          : vehicle
      )
    );
  });

  return () => {
    socket.off("vehicleUpdated");
  };
}, []);

  const loadVehicles = async () => {

    try {

      const data = await getVehicles();
      setVehicles(data);

    } catch (error) {

      console.log(error);

    }

  };

  // Dynamic Dashboard Stats

  const movingVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "Moving"
  ).length;

  const stoppedVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "Stopped"
  ).length;

  const avgSpeed =
    vehicles.length > 0
      ? Math.round(
          vehicles.reduce(
            (sum, vehicle) => sum + vehicle.speed,
            0
          ) / vehicles.length
        )
      : 0;

  return (

    <div className="space-y-6">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Fleet Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Real-time monitoring of vehicles, alerts and analytics.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatsCard
          title="Total Vehicles"
          value={vehicles.length}
          subtitle="Connected to MongoDB"
          trend="+100%"
          color="bg-blue-600 text-white"
          icon={<Truck size={24} />}
        />

        <StatsCard
          title="Moving"
          value={movingVehicles}
          subtitle="Currently Moving"
          trend="+5%"
          color="bg-green-600 text-white"
          icon={<Gauge size={24} />}
        />

        <StatsCard
          title="Stopped"
          value={stoppedVehicles}
          subtitle="Currently Stopped"
          trend="-2%"
          color="bg-red-600 text-white"
          icon={<Bell size={24} />}
        />

        <StatsCard
          title="Average Speed"
          value={`${avgSpeed} km/h`}
          subtitle="Across all Vehicles"
          trend="+3%"
          color="bg-yellow-500 text-white"
          icon={<Timer size={24} />}
        />

      </div>

      {/* Map */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        <div className="xl:col-span-3">

          <LiveMap vehicles={vehicles} />

        </div>

        <LiveStatus />

      </div>

      {/* Vehicle Table */}

      <VehicleTable vehicles={vehicles} />

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <SpeedChart vehicles={vehicles} />

        <VehicleStatusChart vehicles={vehicles} />

      </div>

    </div>

  );

}