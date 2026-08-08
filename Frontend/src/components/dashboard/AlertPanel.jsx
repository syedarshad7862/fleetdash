import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import socket from "../../socket";

const AlertPanel = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    console.log(
      "🚨 AlertPanel mounted"
    );

    // Existing alerts from MongoDB
    const handleActiveAlerts = (activeAlerts) => {
      console.log(
        "📢 Active alerts received:",
        activeAlerts
      );

      setAlerts(activeAlerts);
    };

    // New alert
    const handleGeofenceAlert = (alert) => {
      console.log(
        "🚨 NEW GEOFENCE ALERT:",
        alert
      );

      setAlerts((prev) => {
        const exists = prev.some(
          (item) =>
            String(item._id) ===
            String(alert._id)
        );

        if (exists) {
          return prev;
        }

        return [
          alert,
          ...prev,
        ].slice(0, 10);
      });
    };

    // Alert resolved
    const handleGeofenceResolved = (data) => {
      console.log(
        "✅ GEOFENCE RESOLVED:",
        data
      );

      setAlerts((prev) =>
        prev.filter(
          (alert) =>
            String(alert.vehicleId) !==
            String(data.vehicleId)
        )
      );
    };

    socket.on(
      "activeAlerts",
      handleActiveAlerts
    );

    socket.on(
      "geofenceAlert",
      handleGeofenceAlert
    );

    socket.on(
      "geofenceResolved",
      handleGeofenceResolved
    );

    return () => {
      socket.off(
        "activeAlerts",
        handleActiveAlerts
      );

      socket.off(
        "geofenceAlert",
        handleGeofenceAlert
      );

      socket.off(
        "geofenceResolved",
        handleGeofenceResolved
      );
    };
  }, []);

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
          }}
        >
          🚨 Recent Alerts
        </h2>

        <span
          style={{
            color: "#ef4444",
            fontWeight: "bold",
          }}
        >
          {alerts.length} Alerts
        </span>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {alerts.length === 0 ? (
          <p
            style={{
              color: "#94a3b8",
            }}
          >
            No active alerts
          </p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert._id}
              style={{
                display: "flex",
                gap: "15px",
                padding: "15px",
                marginBottom: "10px",
                background: "#0f172a",
                borderRadius: "10px",
                border:
                  "1px solid #334155",
              }}
            >
              <AlertTriangle
                size={22}
                color="#ef4444"
              />

              <div>
                <div
                  style={{
                    color: "#ef4444",
                    fontWeight: "bold",
                  }}
                >
                  {alert.type}
                </div>

                <div
                  style={{
                    color: "#e2e8f0",
                    marginTop: "5px",
                  }}
                >
                  {alert.message}
                </div>

                <small
                  style={{
                    color: "#64748b",
                    display: "block",
                    marginTop: "5px",
                  }}
                >
                  {alert.createdAt
                    ? new Date(
                        alert.createdAt
                      ).toLocaleTimeString()
                    : "Just now"}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlertPanel;