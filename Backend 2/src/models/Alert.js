import mongoose from "mongoose";


const alertSchema = new mongoose.Schema(
  {


    vehicleId:{

      type:mongoose.Schema.Types.ObjectId,

      ref:"Vehicle"

    },


    type:String,


    message:String,


    resolved:{

      type:Boolean,

      default:false

    }


  },


  {
    timestamps:true
  }

);


export default mongoose.model(
  "Alert",
  alertSchema
);