import { useState } from "react";
import VehicleInfoCard from "./VehicleInfoCard";
import { zones } from "../../data/zones";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

import { Truck } from "lucide-react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import greenIconUrl from "leaflet-color-markers/img/marker-icon-green.png";
import redIconUrl from "leaflet-color-markers/img/marker-icon-red.png";
import yellowIconUrl from "leaflet-color-markers/img/marker-icon-yellow.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const greenIcon = new L.Icon({
  iconUrl: greenIconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const redIcon = new L.Icon({
  iconUrl: redIconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const yellowIcon = new L.Icon({
  iconUrl: yellowIconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function LiveMap({ vehicles }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
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
  center={
    vehicles.length > 0
      ? [
          vehicles[0].location.latitude,
          vehicles[0].location.longitude,
        ]
      : [12.9716, 77.5946]
  }
  zoom={12}
  className="h-[450px] w-full"
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {/* Geographical Zones */}

  {zones.map((zone) => (
    <Polygon
      key={zone.id}
      positions={zone.coordinates}
      pathOptions={{
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.15,
      }}
    >
      <Popup>
        <strong>{zone.name}</strong>
      </Popup>
    </Polygon>
  ))}

  {/* Vehicles */}

  {vehicles.map((vehicle) => {
    
    const icon =
      vehicle.status === "Moving"
        ? greenIcon
        : vehicle.status === "Stopped"
        ? redIcon
        : yellowIcon;

    return (
      <Marker
        key={vehicle._id}
        icon={icon}
        position={[
          vehicle.location.latitude,
          vehicle.location.longitude,
        ]}
        eventHandlers={{
          click: () => setSelectedVehicle(vehicle),
        }}
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
              <strong>Zone:</strong> {vehicle.zone}
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
    );
  })}

</MapContainer>
      <VehicleInfoCard vehicle={selectedVehicle} />

    </div>
  );
}