export default function StatsCard({
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div className="bg-[#171b22] border border-gray-700 rounded-lg p-5">

      <p className="uppercase text-xs tracking-widest text-gray-400">
        {title}
      </p>

      <h1 className={`text-6xl font-bold mt-3 ${color}`}>
        {value}
      </h1>

      <p className="text-sm text-gray-400 mt-2">
        {subtitle}
      </p>

    </div>
  );
}