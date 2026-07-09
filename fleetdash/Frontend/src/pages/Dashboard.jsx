import StatsCard from "../components/dashboard/StatsCard";
import AlertPanel from "../components/dashboard/AlertPanel";
import VehicleTable from "../components/dashboard/VehicleTable";
import LiveMap from "../components/map/LiveMap";

import {
  Truck,
  Activity,
  WifiOff,
  AlertTriangle
} from "lucide-react";


const Dashboard = () => {


  return (

    <div>


      <h1
        style={{
          marginBottom:"25px"
        }}
      >
        Fleet Overview 🚚
      </h1>


      {/* Stats */}

      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(4,1fr)",

          gap:"20px",

          marginBottom:"25px"

        }}

      >


        <StatsCard

          title="Total Vehicles"

          value="2500"

          icon={<Truck/>}

        />


        <StatsCard

          title="Active"

          value="2200"

          icon={<Activity/>}

        />


        <StatsCard

          title="Offline"

          value="300"

          icon={<WifiOff/>}

        />


        <StatsCard

          title="Alerts"

          value="15"

          icon={<AlertTriangle/>}

        />


      </div>




      {/* Map */}

      <LiveMap />




      <div

        style={{

          display:"grid",

          gridTemplateColumns:"2fr 1fr",

          gap:"20px",

          marginTop:"25px"

        }}

      >


        <VehicleTable />


        <AlertPanel />


      </div>



    </div>

  )
}


export default Dashboard;