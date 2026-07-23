import StatsCard from "../components/dashboard/StatsCard";
import LiveStatus from "../components/dashboard/LiveStatus";
import VehicleTable from "../components/dashboard/VehicleTable";
import LiveMap from "../components/map/LiveMap";
import SpeedChart from "../components/charts/SpeedCharts";
import VehicleStatusChart from "../components/charts/VehicleStatusChart";

import {
  Truck,
  Bell,
  Gauge,
  Timer,
} from "lucide-react";

export default function Dashboard() {
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatsCard
          title="Active Vehicles"
          value="1,250"
          subtitle="Updated 2 sec ago"
          trend="+12%"
          color="bg-blue-600 text-white"
          icon={<Truck size={24} />}
        />

        <StatsCard
          title="Alerts"
          value="18"
          subtitle="3 Critical"
          trend="+5%"
          color="bg-red-500 text-white"
          icon={<Bell size={24} />}
        />

        <StatsCard
          title="Frame Rate"
          value="60"
          subtitle="Stable"
          trend="+2%"
          color="bg-green-500 text-white"
          icon={<Gauge size={24} />}
        />

        <StatsCard
          title="Latency"
          value="4 ms"
          subtitle="Excellent"
          trend="-1%"
          color="bg-yellow-500 text-white"
          icon={<Timer size={24} />}
        />

      </div>

      {/* Map + Live Status */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        <div className="xl:col-span-3">
          <LiveMap />
        </div>

        <LiveStatus />

      </div>

      {/* Alerts */}
      <VehicleTable />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <SpeedChart />

        <VehicleStatusChart />

      </div>

    </div>
  );
}