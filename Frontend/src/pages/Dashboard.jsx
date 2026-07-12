import StatsCard from "../components/dashboard/StatsCard";
import LiveStatus from "../components/dashboard/LiveStatus";
import VehicleTable from "../components/dashboard/VehicleTable";
import LiveMap from "../components/map/LiveMap";

export default function Dashboard() {

    return (

        <div>

            <div className="grid grid-cols-4 gap-5">

                <StatsCard
                    title="Objects"
                    value="1250"
                    subtitle="+12%"
                    color="text-blue-300"
                />

                <StatsCard
                    title="Alerts"
                    value="18"
                    subtitle="Critical"
                    color="text-red-500"
                />

                <StatsCard
                    title="Frame Rate"
                    value="60"
                    subtitle="FPS"
                    color="text-green-400"
                />

                <StatsCard
                    title="Latency"
                    value="4"
                    subtitle="ms"
                    color="text-white"
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