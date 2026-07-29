import Vehicle from "../models/Vehicle.js";



// GET ALL VEHICLES


export const getVehicles = async(req,res)=>{

    try{


        const vehicles =
        await Vehicle.find();


        res.json(vehicles);


    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// ADD VEHICLE


export const addVehicle = async(req,res)=>{


    try{


        const vehicle =
        await Vehicle.create(req.body);



        res.status(201).json({

            message:"Vehicle Added",

            vehicle

        });


    }


    catch(error){

        res.status(500).json({
            message:error.message
        });

    }


};




// UPDATE LOCATION


export const updateLocation = async(req,res)=>{


    try{


        const {id}=req.params;


        const {
            lat,
            lng
        } = req.body;



        const vehicle =
        await Vehicle.findByIdAndUpdate(

            id,

            {
                currentLocation:{
                    lat,
                    lng
                }
            },

            {
                new:true
            }

        );



        res.json(vehicle);


    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }


};