import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  subtitle,
  color,
  icon,
  trend = "+12%",
}) {
  return (
    <div className="bg-[#151C2C] border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-center">

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          {icon}
        </div>

        <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
          <ArrowUpRight size={16} />
          {trend}
        </div>

      </div>

      {/* Value */}
      <h2 className="text-4xl font-bold text-white mt-6">
        {value}
      </h2>

      {/* Title */}
      <p className="text-gray-400 mt-1">
        {title}
      </p>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-800 pt-3 text-sm text-gray-500">
        {subtitle}
      </div>

    </div>
  );
}