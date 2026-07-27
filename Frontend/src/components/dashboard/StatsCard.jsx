import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function StatsCard({
  title,
  value,
  subtitle,
  color,
  icon,
  trend = "+0%",
}) {

  const positive = trend.startsWith("+");

  return (

    <div className="bg-[#151C2C] border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            positive
              ? "text-green-400"
              : "text-red-400"
          }`}
        >

          {positive ? (
            <ArrowUpRight size={18} />
          ) : (
            <ArrowDownRight size={18} />
          )}

          {trend}

        </div>

      </div>

      {/* Value */}

      <h2 className="text-4xl font-bold text-white mt-7">
        {value}
      </h2>

      {/* Title */}

      <p className="text-gray-400 text-sm mt-2">
        {title}
      </p>

      {/* Footer */}

      <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">

        <span className="text-gray-500 text-sm">
          {subtitle}
        </span>

        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

      </div>

    </div>

  );

}