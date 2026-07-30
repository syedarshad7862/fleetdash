import { Server } from "socket.io";


const setupSocket = (server)=>{


    const io = new Server(server,{


        cors:{

            origin:
            process.env.CLIENT_URL,

            methods:[
                "GET",
                "POST"
            ]

        }

    });



    io.on(
        "connection",

        (socket)=>{


            console.log(
                "Vehicle client connected:",
                socket.id
            );



            // receive location


            socket.on(

                "vehicle-location",

                (data)=>{


                    console.log(
                        data
                    );



                    // broadcast to dashboard

                    io.emit(
                        "live-location",
                        data
                    );


                }

            );




            socket.on(
                "disconnect",

                ()=>{

                    console.log(
                        "Client disconnected"
                    );

                }

            );


        }

    );


};


export default setupSocket;