import * as turf from "@turf/turf";


// check vehicle inside zone

export const checkGeofence = (
    vehiclePoint,
    zone
)=>{


    const point = turf.point([

        vehiclePoint.lng,

        vehiclePoint.lat

    ]);



    const polygon =
    turf.polygon([zone]);



    const inside =
    turf.booleanPointInPolygon(

        point,

        polygon

    );



    return inside;

};