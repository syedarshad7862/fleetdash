import {
  Search,
  Radio,
  BarChart3,
  UserCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="h-16 bg-[#0b1118] border-b border-gray-800 flex items-center justify-between px-8">

      {/* Left */}

      <div className="flex items-center gap-16">

        <h1 className="text-3xl font-bold text-white">
          FleetDash
        </h1>

        <nav className="flex items-center gap-8">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `pb-1 text-sm font-medium transition-all ${isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tracking"
            className={({ isActive }) =>
              `pb-1 text-sm font-medium transition-all ${isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            Tracking
          </NavLink>

          <NavLink
            to="/vehicles"
            className={({ isActive }) =>
              `pb-1 text-sm font-medium transition-all ${isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            Vehicles
          </NavLink>

          <NavLink
            to="/alerts"
            className={({ isActive }) =>
              `pb-1 text-sm font-medium transition-all ${isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            Alerts
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `pb-1 text-sm font-medium transition-all ${isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
              }`
            }
          >
            Analytics
          </NavLink>

        </nav>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <div className="flex items-center bg-[#1f2937] rounded-lg px-3 py-2 w-64 border border-gray-700">

          <Search size={18} className="text-blue-200" />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-white placeholder-gray-500 w-full"
          />

        </div>

        <Radio size={18} className="text-white" />

        <BarChart3 size={18} className="text-white" />

        <span className="text-white font-semibold text-sm">
          OPS_COORD_04
        </span>

        <UserCircle2 size={28} className="text-white" />

      </div>

    </header>
  );
}