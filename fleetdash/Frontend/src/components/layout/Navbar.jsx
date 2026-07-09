import {
  Bell,
  Search,
  UserCircle
} from "lucide-react";


const Navbar = () => {


  return (

    <div
      style={{

        height:"70px",

        background:"#020617",

        display:"flex",

        alignItems:"center",

        justifyContent:"space-between",

        padding:"0 25px",

        borderBottom:"1px solid #1e293b"

      }}
    >


      {/* Search */}

      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          background:"#0f172a",
          padding:"10px 15px",
          borderRadius:"12px",
          width:"300px"
        }}
      >

        <Search size={18}/>

        <input

          placeholder="Search vehicles..."

          style={{

            background:"transparent",

            border:"none",

            outline:"none",

            color:"white",

            width:"100%"

          }}

        />


      </div>




      {/* Right */}

      <div

        style={{

          display:"flex",

          alignItems:"center",

          gap:"20px"

        }}

      >


        <Bell
          size={22}
          color="#38bdf8"
        />


        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px"
          }}
        >

          <UserCircle size={32}/>

          <span>
            Admin
          </span>


        </div>


      </div>



    </div>

  )
}


export default Navbar;