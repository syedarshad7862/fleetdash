import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import socket from "../../socket";

const AlertPanel = () => {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    // ==============================
    // NEW GEOFENCE ALERT
    // ==============================

    const handleNewAlert = (alert) => {

      console.log("🚨 New alert received:", alert);

      setAlerts((prev) => {

        // Prevent duplicate alert
        const alreadyExists = prev.some(
          (item) => item._id === alert._id
        );

        if (alreadyExists) {
          return prev;
        }

        return [alert, ...prev];
      });

    };


    // ==============================
    // GEOFENCE ALERT RESOLVED
    // ==============================

    const handleResolvedAlert = (alert) => {

      console.log("✅ Alert resolved:", alert);

      setAlerts((prev) =>
        prev.map((item) =>
          item._id === alert._id
            ? {
                ...item,
                resolved: true
              }
            : item
        )
      );

    };


    // Listen for alerts
    socket.on(
      "geofenceAlert",
      handleNewAlert
    );


    // Listen for resolved alerts
    socket.on(
      "geofenceResolved",
      handleResolvedAlert
    );


    // Cleanup
    return () => {

      socket.off(
        "geofenceAlert",
        handleNewAlert
      );

      socket.off(
        "geofenceResolved",
        handleResolvedAlert
      );

    };

  }, []);


  return (

    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "18px"
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h2>
          🚨 Alerts
        </h2>

        <span>
          {alerts.length} Alerts
        </span>

      </div>


      <div
        style={{
          marginTop: "20px"
        }}
      >

        {alerts.length === 0 ? (

          <p
            style={{
              color: "#94a3b8"
            }}
          >
            No alerts yet
          </p>

        ) : (

          alerts.map((alert) => (

            <div
              key={alert._id}
              style={{
                display: "flex",
                gap: "15px",
                padding: "15px",
                marginBottom: "12px",
                background: "#0f172a",
                borderRadius: "12px"
              }}
            >

              <AlertTriangle
                color={
                  alert.resolved
                    ? "#22c55e"
                    : "#ef4444"
                }
              />


              <div>

                <h4>
                  {alert.type}
                </h4>


                <p
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  {alert.message}
                </p>


                <small>
                  {new Date(
                    alert.createdAt
                  ).toLocaleTimeString()}
                </small>


                <div
                  style={{
                    marginTop: "5px",
                    color: alert.resolved
                      ? "#22c55e"
                      : "#ef4444"
                  }}
                >
                  {alert.resolved
                    ? "RESOLVED"
                    : "ACTIVE"}
                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

};

export default AlertPanel;