import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Truck,
  Bell,
  BarChart3
} from "lucide-react";


const Sidebar = () => {

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20}/>,
      path: "/dashboard"
    },

    {
      name: "Live Tracking",
      icon: <Map size={20}/>,
      path: "/tracking"
    },

    {
      name: "Vehicles",
      icon: <Truck size={20}/>,
      path: "/vehicles"
    },

    {
      name: "Alerts",
      icon: <Bell size={20}/>,
      path: "/alerts"
    },

    {
      name: "Analytics",
      icon: <BarChart3 size={20}/>,
      path: "/analytics"
    }
  ];


  return (

    <div
      style={{
        width:"260px",
        background:"#020617",
        minHeight:"100vh",
        padding:"20px"
      }}
    >


      <h2
        style={{
          marginBottom:"40px",
          color:"#38bdf8"
        }}
      >
        🚚 FleetDash
      </h2>



      {
        menu.map((item,index)=>(

          <NavLink

            key={index}

            to={item.path}

            style={({isActive})=>({

              display:"flex",

              gap:"15px",

              alignItems:"center",

              padding:"14px",

              marginBottom:"10px",

              borderRadius:"12px",

              textDecoration:"none",

              color:"white",

              background:isActive
              ? "#2563eb"
              : "transparent"


            })}

          >

            {item.icon}

            {item.name}


          </NavLink>

        ))
      }


    </div>
  )
}


export default Sidebar;