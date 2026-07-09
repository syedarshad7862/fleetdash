const VehicleTable = () => {


  const vehicles = [

    {
      id:"TN59 AB 1234",
      driver:"Kannan",
      location:"Bangalore",
      speed:"65 km/h",
      status:"Active"
    },

    {
      id:"TN01 XY 5678",
      driver:"Arun",
      location:"Chennai",
      speed:"0 km/h",
      status:"Stopped"
    },

    {
      id:"KA05 MN 9090",
      driver:"Rahul",
      location:"Electronic City",
      speed:"45 km/h",
      status:"Active"
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


      <h2>
        🚚 Vehicle Status
      </h2>


      <table

        style={{

          width:"100%",

          marginTop:"20px",

          borderCollapse:"collapse"

        }}

      >

        <thead>

          <tr>

            <th>Vehicle</th>

            <th>Driver</th>

            <th>Location</th>

            <th>Speed</th>

            <th>Status</th>

          </tr>

        </thead>



        <tbody>


          {

            vehicles.map((v)=>(


              <tr key={v.id}>


                <td>{v.id}</td>


                <td>{v.driver}</td>


                <td>{v.location}</td>


                <td>{v.speed}</td>



                <td

                  style={{

                    color:
                    v.status==="Active"
                    ? "#22c55e"
                    : "#ef4444"

                  }}

                >

                  {v.status}

                </td>



              </tr>


            ))

          }


        </tbody>


      </table>


    </div>

  )
}


export default VehicleTable;