const StatsCard = ({ title, value, icon }) => {


  return (

    <div

      style={{

        background:"#1e293b",

        padding:"25px",

        borderRadius:"18px",

        display:"flex",

        justifyContent:"space-between",

        alignItems:"center",

        boxShadow:
        "0px 10px 25px rgba(0,0,0,0.3)"

      }}

    >


      <div>

        <p

          style={{

            color:"#94a3b8",

            marginBottom:"10px"

          }}

        >

          {title}

        </p>



        <h2

          style={{

            fontSize:"32px"

          }}

        >

          {value}

        </h2>


      </div>




      <div

        style={{

          background:"#2563eb",

          padding:"15px",

          borderRadius:"50%",

          display:"flex",

          color:"white"

        }}

      >

        {icon}


      </div>



    </div>

  )
}


export default StatsCard;