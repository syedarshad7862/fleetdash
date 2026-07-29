import {
  LayoutDashboard,
  Map,
  Bell,
  Settings,
  CircleHelp,
  FileText,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Live Map",
    icon: <Map size={20} />,
  },
  {
    title: "Alerts",
    icon: <Bell size={20} />,
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-[#11151d] border-r border-gray-800 flex flex-col justify-between">

      <div>

        <div className="p-6 border-b border-gray-800">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Menu
          </p>

          <p className="text-gray-300 mt-2">
            Telemetry v2.4
          </p>

        </div>

        <div className="mt-4">

          {menu.map((item, index) => (

            <button
              key={index}
              className={`w-full flex items-center gap-4 px-6 py-4 transition duration-300 ${
                index === 0
                  ? "bg-[#1b2230] border-l-4 border-blue-500 text-white"
                  : "text-gray-400 hover:bg-[#1b2230] hover:text-white"
              }`}
            >
              {item.icon}

              {item.title}

              {item.title === "Alerts" && (
                <span className="ml-auto w-2 h-2 rounded-full bg-red-500"></span>
              )}

            </button>

          ))}

        </div>

      </div>

      <div className="border-t border-gray-800 p-6 space-y-5 text-gray-500">

        <div className="flex items-center gap-3">

          <CircleHelp size={18} />

          Support

        </div>

        <div className="flex items-center gap-3">

          <FileText size={18} />

          Logs

        </div>

      </div>

    </aside>
  );
}