import mongoose from "mongoose";


const telemetrySchema = new mongoose.Schema(
  {

    vehicleId:{

      type:mongoose.Schema.Types.ObjectId,

      ref:"Vehicle"

    },


    hourBucket:String,


    points:[

      {

        lat:Number,

        lng:Number,

        speed:Number,

        timestamp:{
          type:Date,
          default:Date.now
        }

      }

    ]


  },


  {
    timestamps:true
  }

);


export default mongoose.model(
  "Telemetry",
  telemetrySchema
);