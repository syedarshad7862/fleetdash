const alerts = [

{
time:"10:12 AM",
vehicle:"Truck-01",
event:"Entered Geofence",
status:"HIGH"
},

{
time:"10:18 AM",
vehicle:"Car-12",
event:"Overspeed",
status:"MEDIUM"
},

{
time:"10:25 AM",
vehicle:"Bus-08",
event:"Exited Geofence",
status:"LOW"
},

{
time:"10:31 AM",
vehicle:"Drone-04",
event:"Battery Critical",
status:"HIGH"
}

];

export default function VehicleTable(){

return(

<div className="bg-[#171b22] border border-gray-700 rounded-lg mt-6">

<div className="p-5 border-b border-gray-700">

<h2 className="text-2xl font-semibold">
Recent Alerts
</h2>

</div>

<table className="w-full">

<thead className="text-gray-400">

<tr>

<th className="p-4 text-left">Time</th>

<th className="text-left">Vehicle</th>

<th className="text-left">Event</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{alerts.map((a,index)=>(

<tr
key={index}
className="border-t border-gray-800 hover:bg-[#1e242d]"
>

<td className="p-4">{a.time}</td>

<td>{a.vehicle}</td>

<td>{a.event}</td>

<td>

<span
className={`px-3 py-1 rounded text-sm

${a.status==="HIGH"
?"bg-red-900 text-red-400"

:a.status==="MEDIUM"

?"bg-yellow-900 text-yellow-300"

:"bg-green-900 text-green-400"

}`}

>

{a.status}

</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}