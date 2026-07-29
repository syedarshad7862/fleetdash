import mongoose from "mongoose";


const vehicleSchema = new mongoose.Schema(
  {

    vehicleNumber:{
      type:String,
      required:true,
      unique:true
    },


    driverName:{
      type:String
    },


    status:{
      type:String,
      enum:[
        "ACTIVE",
        "OFFLINE"
      ],

      default:"ACTIVE"

    },


    currentLocation:{

      lat:Number,

      lng:Number

    }

  },


  {
    timestamps:true
  }

);


export default mongoose.model(
  "Vehicle",
  vehicleSchema
);