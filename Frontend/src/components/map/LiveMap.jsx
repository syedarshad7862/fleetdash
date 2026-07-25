import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Truck } from "lucide-react";
import "leaflet/dist/leaflet.css";

export default function LiveMap({ vehicles }) {
  return (
    <div className="bg-[#151C2C] rounded-2xl border border-gray-800 overflow-hidden shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Live Vehicle Tracking
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Real-time vehicle locations
          </p>
        </div>

        <div className="flex items-center gap-2 text-green-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Live
        </div>

      </div>

      {/* Map */}
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={12}
        className="h-[450px] w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle._id}
            position={[
              vehicle.location.latitude,
              vehicle.location.longitude,
            ]}
          >
            <Popup>

              <div className="space-y-2">

                <div className="flex items-center gap-2">
                  <Truck size={18} />
                  <strong>{vehicle.vehicleId}</strong>
                </div>

                <p>
                  <strong>Driver:</strong> {vehicle.driverName}
                </p>

                <p>
                  <strong>Type:</strong> {vehicle.type}
                </p>

                <p>
                  <strong>Status:</strong> {vehicle.status}
                </p>

                <p>
                  <strong>Speed:</strong> {vehicle.speed} km/h
                </p>

                <p>
                  <strong>Fuel:</strong> {vehicle.fuelLevel}%
                </p>

              </div>

            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
}