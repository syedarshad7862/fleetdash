import redisClient from "../config/redis.js";


// publish data

export const publishLocation =
async(data)=>{


    await redisClient.publish(

        "vehicle-location",

        JSON.stringify(data)

    );

};




// subscribe


export const subscribeLocation =
async(callback)=>{


    const subscriber =
    redisClient.duplicate();


    await subscriber.connect();



    subscriber.subscribe(

        "vehicle-location",

        (message)=>{


            callback(

                JSON.parse(message)

            );


        }

    );

};