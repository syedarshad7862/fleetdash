import {
  AlertTriangle
} from "lucide-react";


const AlertPanel = () => {


  const alerts = [

    {
      vehicle:"TN59 AB 1234",
      message:"Exited Bangalore Zone",
      time:"10:30 AM"
    },

    {
      vehicle:"KA05 MN 9090",
      message:"Speed limit exceeded",
      time:"11:15 AM"
    },

    {
      vehicle:"TN01 XY 5678",
      message:"Vehicle stopped too long",
      time:"12:00 PM"
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
        🚨 Alerts
      </h2>



      <div
        style={{
          marginTop:"20px"
        }}
      >


        {

          alerts.map((alert,index)=>(


            <div

              key={index}

              style={{

                display:"flex",

                gap:"15px",

                padding:"15px",

                marginBottom:"12px",

                background:"#0f172a",

                borderRadius:"12px"

              }}

            >


              <AlertTriangle color="#ef4444"/>


              <div>


                <h4>
                  {alert.vehicle}
                </h4>


                <p
                  style={{
                    color:"#94a3b8"
                  }}
                >

                  {alert.message}

                </p>



                <small>

                  {alert.time}

                </small>


              </div>



            </div>


          ))

        }


      </div>


    </div>

  )
}


export default AlertPanel;