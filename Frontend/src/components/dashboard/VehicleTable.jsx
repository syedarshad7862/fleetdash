import { useEffect, useState } from "react";
import socket from "../../socket";

export default function VehicleTable({ vehicles }) {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    const handleGeofenceAlert = (alert) => {

      console.log("🚨 Geofence Alert:", alert);

      setAlerts((prev) => [
        alert,
        ...prev,
      ]);

    };

    socket.on("geofenceAlert", handleGeofenceAlert);

    return () => {
      socket.off("geofenceAlert", handleGeofenceAlert);
    };

  }, []);


  return (

    <div className="space-y-6">

      {/* ================= VEHICLES ================= */}

      <div className="bg-[#171b22] border border-gray-700 rounded-lg">

        <div className="flex justify-between items-center p-5 border-b border-gray-700">

          <h2 className="text-2xl font-semibold text-white">
            Vehicles
          </h2>

          <span className="text-gray-400">
            Total: {vehicles.length}
          </span>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="text-gray-400 border-b border-gray-700">

              <tr>

                <th className="p-4 text-left">
                  Vehicle ID
                </th>

                <th className="text-left">
                  Driver
                </th>

                <th className="text-left">
                  Type
                </th>

                <th className="text-left">
                  Speed
                </th>

                <th className="text-left">
                  Fuel
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {vehicles.map((vehicle) => (

                <tr
                  key={vehicle._id}
                  className="border-t border-gray-800 hover:bg-[#1e242d]"
                >

                  <td className="p-4 font-medium text-white">
                    {vehicle.vehicleId}
                  </td>

                  <td>
                    {vehicle.driverName}
                  </td>

                  <td>
                    {vehicle.type}
                  </td>

                  <td>
                    {vehicle.speed} km/h
                  </td>

                  <td>
                    {vehicle.fuelLevel}%
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded text-sm

                      ${
                        vehicle.status === "Moving"
                          ? "bg-green-900 text-green-400"

                          : vehicle.status === "Stopped"
                          ? "bg-red-900 text-red-400"

                          : "bg-yellow-900 text-yellow-300"
                      }`}
                    >

                      {vehicle.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= ALERTS ================= */}

      <div className="bg-[#171b22] border border-gray-700 rounded-lg">

        <div className="flex justify-between items-center p-5 border-b border-gray-700">

          <h2 className="text-2xl font-semibold text-white">
            Recent Alerts
          </h2>

          <span className="text-red-400">
            {alerts.length} Alerts
          </span>

        </div>


        {alerts.length === 0 ? (

          <div className="p-6 text-gray-500 text-center">
            No alerts yet
          </div>

        ) : (

          <table className="w-full">

            <thead className="text-gray-400">

              <tr>

                <th className="p-4 text-left">
                  Time
                </th>

                <th className="text-left">
                  Type
                </th>

                <th className="text-left">
                  Message
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {alerts.map((alert, index) => (

                <tr
                  key={alert._id || index}
                  className="border-t border-gray-800 hover:bg-[#1e242d]"
                >

                  <td className="p-4 text-gray-400">

                    {alert.createdAt
                      ? new Date(alert.createdAt).toLocaleTimeString()
                      : "Now"
                    }

                  </td>


                  <td>

                    <span className="px-3 py-1 rounded bg-red-900 text-red-400 text-sm">

                      {alert.type}

                    </span>

                  </td>


                  <td className="text-white">

                    {alert.message}

                  </td>


                  <td>

                    <span className="px-3 py-1 rounded bg-red-900 text-red-400 text-sm">

                      {alert.resolved ? "Resolved" : "ACTIVE"}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>

  );

}