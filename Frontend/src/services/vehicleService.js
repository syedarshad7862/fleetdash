import api from "./api";

// Get all vehicles
export const getVehicles = async () => {
  const response = await api.get("/vehicles");
  return response.data.data;
};

// Add vehicle
export const createVehicle = async (vehicle) => {
  const response = await api.post("/vehicles", vehicle);
  return response.data.data;
};

// Update vehicle
export const updateVehicle = async (id, vehicle) => {
  const response = await api.put(`/vehicles/${id}`, vehicle);
  return response.data.data;
};

// Delete vehicle
export const deleteVehicle = async (id) => {
  await api.delete(`/vehicles/${id}`);
};