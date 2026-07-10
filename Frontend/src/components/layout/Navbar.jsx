import {
  Search,
  Radio,
  BarChart3,
  UserCircle2,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-between px-8 shadow-lg">

      {/* Left */}

      <div className="flex items-center gap-16">

        <h1 className="text-3xl font-bold text-white">
          FleetDash
        </h1>

        <nav className="flex gap-10">

          <button className="text-white border-b-2 border-white pb-1 uppercase text-sm tracking-wider">
            Dashboard
          </button>

          <button className="text-blue-100 hover:text-white uppercase text-sm tracking-wider">
            Fleet
          </button>

          <button className="text-blue-100 hover:text-white uppercase text-sm tracking-wider">
            Analytics
          </button>

        </nav>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <div className="flex items-center bg-blue-600 rounded-lg px-3 py-2 w-64">

          <Search size={18} className="text-blue-200" />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-white placeholder-blue-200 w-full"
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