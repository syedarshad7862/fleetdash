import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "10:00", speed: 42 },
  { time: "10:05", speed: 55 },
  { time: "10:10", speed: 61 },
  { time: "10:15", speed: 48 },
  { time: "10:20", speed: 73 },
  { time: "10:25", speed: 66 },
];

export default function SpeedChart() {
  return (
    <div className="bg-[#151C2C] rounded-2xl border border-gray-800 p-5 h-[350px]">

      <h2 className="text-xl font-semibold text-white">
        Vehicle Speed
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        Average speed over time
      </p>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid stroke="#2b3648" />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}