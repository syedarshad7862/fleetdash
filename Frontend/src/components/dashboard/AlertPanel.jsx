import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import socket from "../../socket";

const AlertPanel = () => {

  const [alerts, setAlerts] = useState([]);


  // ==========================================
  // LOAD EXISTING ALERTS
  // ==========================================

  useEffect(() => {

    const loadAlerts = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/alerts"
        );

        const result =
          await response.json();

        console.log(
          "📥 Existing alerts:",
          result
        );


        if (result.success) {

          setAlerts(
            result.data
          );

        }

      } catch (error) {

        console.log(
          "❌ Failed to load alerts:",
          error
        );

      }

    };


    loadAlerts();

  }, []);


  // ==========================================
  // REAL-TIME ALERTS
  // ==========================================

  useEffect(() => {

    console.log(
      "🚨 AlertPanel listening for geofence alerts"
    );


    const handleGeofenceAlert = (
      alert
    ) => {

      console.log(
        "🚨 Frontend received alert:",
        alert
      );


      setAlerts((prev) => {

        const exists = prev.some(
          (item) =>
            item._id === alert._id
        );


        if (exists) {

          return prev;

        }


        return [
          alert,
          ...prev
        ];

      });

    };


    socket.on(
      "geofenceAlert",
      handleGeofenceAlert
    );


    return () => {

      socket.off(
        "geofenceAlert",
        handleGeofenceAlert
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

        <h2 className="text-white text-xl font-semibold">

          🚨 Recent Alerts

        </h2>


        <span
          style={{
            color: "#ef4444",
            fontWeight: "600"
          }}
        >

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

            No active alerts

          </p>

        ) : (

          alerts.map(
            (alert, index) => (

              <div
                key={
                  alert._id || index
                }

                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "15px",
                  marginBottom: "12px",
                  background: "#0f172a",
                  borderRadius: "12px",
                  border: "1px solid #374151"
                }}
              >

                <AlertTriangle
                  color="#ef4444"
                  size={25}
                />


                <div>

                  <h4
                    className="text-white"
                  >

                    {alert.type}

                  </h4>


                  <p
                    style={{
                      color: "#94a3b8",
                      marginTop: "5px"
                    }}
                  >

                    {alert.message}

                  </p>


                  <small
                    style={{
                      color: "#64748b"
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

            )
          )

        )}

      </div>

    </div>

  );

};

export default AlertPanel;