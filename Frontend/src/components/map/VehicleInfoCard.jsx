export default function VehicleInfoCard({ vehicle }) {
  if (!vehicle) return null;

  return (
    <div className="bg-[#151C2C] border border-gray-800 rounded-xl p-5 mt-4">
      <h2 className="text-white text-xl font-semibold mb-4">
        Selected Vehicle
      </h2>

      <div className="grid grid-cols-2 gap-4 text-gray-300">

        <div>
          <p className="text-gray-500">Vehicle ID</p>
          <p className="font-semibold">{vehicle.vehicleId}</p>
        </div>

        <div>
          <p className="text-gray-500">Driver</p>
          <p className="font-semibold">{vehicle.driverName}</p>
        </div>

        <div>
          <p className="text-gray-500">Speed</p>
          <p className="font-semibold">{vehicle.speed} km/h</p>
        </div>

        <div>
          <p className="text-gray-500">Fuel</p>
          <p className="font-semibold">{vehicle.fuelLevel}%</p>
        </div>

        <div>
          <p className="text-gray-500">Status</p>
          <p className="font-semibold text-green-400">
            {vehicle.status}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Type</p>
          <p className="font-semibold">{vehicle.type}</p>
        </div>

      </div>
    </div>
  );
}