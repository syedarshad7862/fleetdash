import StatsCard from "../components/dashboard/StatsCard";
import LiveStatus from "../components/dashboard/LiveStatus";
import VehicleTable from "../components/dashboard/VehicleTable";
import LiveMap from "../components/map/LiveMap";
import {
    Truck,
    Bell,
    Gauge,
    Timer,
} from "lucide-react";

export default function Dashboard() {

    return (

        <div>

            <div className="grid grid-cols-4 gap-5">

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

            <div className="grid grid-cols-4 gap-6 mt-6">

                <div className="col-span-3">

                    <LiveMap />

                </div>

                <LiveStatus />

            </div>

            <VehicleTable />

        </div>

    );

}