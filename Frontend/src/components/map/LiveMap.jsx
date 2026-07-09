import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";


const LiveMap = () => {


  const vehicles = [

    {
      id:"TN59 AB 1234",
      lat:12.9716,
      lng:77.5946,
      status:"Moving"
    },


    {
      id:"TN01 XY 5678",
      lat:12.9352,
      lng:77.6245,
      status:"Stopped"
    }

  ];


  return (

    <div

      style={{

        background:"#1e293b",

        padding:"20px",

        borderRadius:"18px"

      }}

    >


      <h2
        style={{
          marginBottom:"15px"
        }}
      >
        🗺 Live Vehicle Tracking
      </h2>



      <MapContainer

        center={[12.9716,77.5946]}

        zoom={12}

        style={{

          height:"400px",

          width:"100%",

          borderRadius:"15px"

        }}

      >


        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />



        {

          vehicles.map((vehicle)=>(


            <Marker

              key={vehicle.id}

              position={[vehicle.lat, vehicle.lng]}

            >


              <Popup>

                🚚 {vehicle.id}

                <br/>

                Status: {vehicle.status}


              </Popup>


            </Marker>


          ))

        }



      </MapContainer>


    </div>

  )
}


export default LiveMap;