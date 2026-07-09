const Tracking = () => {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px",
      }}
    >
      <h1>🗺 Live Tracking</h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        Monitor all vehicles in real-time. This page will display the live
        tracking map with vehicle movement using Socket.io and Leaflet.
      </p>
    </div>
  );
};

export default Tracking;