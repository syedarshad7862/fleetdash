import {

    parentPort

} from "worker_threads";



// worker receive data


parentPort.on(

    "message",

    (data)=>{



        const processedData = {


            vehicleId:
            data.vehicleId,


            lat:
            data.lat,


            lng:
            data.lng,


            speed:
            data.speed,


            timestamp:
            new Date()


        };



        // return result

        parentPort.postMessage(

            processedData

        );


    }

);