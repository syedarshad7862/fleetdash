import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Moving", value: 70 },
  { name: "Stopped", value: 20 },
  { name: "Idle", value: 10 },
];

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#f59e0b",
];

export default function VehicleStatusChart() {
  return (
    <div className="bg-[#151C2C] rounded-2xl border border-gray-800 p-5 h-[350px]">

      <h2 className="text-xl font-semibold text-white">
        Vehicle Status
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        Current fleet distribution
      </p>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}