export default function VehicleTable({ vehicles }) {

  return (

    <div className="bg-[#171b22] border border-gray-700 rounded-lg mt-6">

      <div className="flex justify-between items-center p-5 border-b border-gray-700">

        <h2 className="text-2xl font-semibold text-white">
          Vehicles
        </h2>

        <span className="text-gray-400">
          Total: {vehicles.length}
        </span>

      </div>

      <table className="w-full">

        <thead className="text-gray-400 border-b border-gray-700">

          <tr>

            <th className="p-4 text-left">Vehicle ID</th>

            <th className="text-left">Driver</th>

            <th className="text-left">Type</th>

            <th className="text-left">Speed</th>

            <th className="text-left">Fuel</th>

            <th className="text-left">Status</th>

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

  );

}