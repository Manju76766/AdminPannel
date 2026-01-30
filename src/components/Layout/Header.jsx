import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Moon,
  Settings,
  ChevronDown,
  User,
  Info,
  LogOut,
} from "lucide-react";

export default function Header({ open, setOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications,setnotifications] = useState(false);

  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-4">
          {/* Hamburger */}
          <Menu
            className="cursor-pointer text-gray-600"
            onClick={() => setOpen(!open)}
          />

          <div>
            <h1 className="text-lg font-bold">Dashboard</h1>
            <p className="text-xs text-gray-400">
              Welcome back, Alex! Here's what's happening today.
            </p>
          </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 justify-center px-10">
        <div className="relative w-full max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-100 text-sm outline-none"
            placeholder="Search anything..."
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 relative">
        <Moon className="text-gray-500" />

        <div className="relative" onClick={()=>{
          setnotifications(!notifications)
        }}>
          <Bell className="text-gray-500" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>
        </div>
             {notifications && (
  <div className="absolute right-10 top-14 w-72 bg-white rounded-xl shadow-lg border z-50">
    
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <h3 className="text-sm font-semibold">Notifications</h3>
      <button
        onClick={() => setnotifications(false)}
        className="text-gray-400 hover:text-gray-600 text-xs"
      >
        ✕
      </button>
    </div>

    {/* Items */}
    <div className="divide-y">
      <NotificationMini
        name="Terry Franci"
        time="5m"
        active
      />
      <NotificationMini
        name="Alena Franci"
        time="8m"
        active
      />
      <NotificationMini
        name="Jocelyn Kenter"
        time="15m"
      />
    </div>

    {/* Footer */}
    <div className="px-4 py-2 text-center text-xs text-blue-600 cursor-pointer hover:bg-gray-50 rounded-b-xl">
      View all
    </div>
  </div>
)}


        <Settings className="text-gray-500" />

        {/* Profile */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <img
            src="https://plus.unsplash.com/premium_vector-1727454009297-f7448e40f314?q=80&w=1170&auto=format&fit=crop"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown size={16} className="text-gray-600" />
        </div>

        {/* Dropdown */}
        {profileOpen && (
          <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-lg p-3 space-y-2">
            <DropdownItem icon={<User size={16} />} text="Edit profile" />
            <DropdownItem icon={<Settings size={16} />} text="Account settings" />
            <DropdownItem icon={<Info size={16} />} text="Support" />
            <hr />
            <DropdownItem icon={<LogOut size={16} />} text="Sign out" />
          </div>
        )}
      </div>
    </header>
  );
}

function DropdownItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm px-2 py-2 rounded-md cursor-pointer hover:bg-gray-100">
      {icon}
      {text}
    </div>
  );
}
function NotificationMini({ name, time, active }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
      
      {/* Avatar */}
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          className="w-8 h-8 rounded-full"
        />
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-white ${
            active ? "bg-green-500" : "bg-gray-300"
          }`}
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-xs">
          <span className="font-semibold">{name}</span> requested access
        </p>
        <p className="text-[10px] text-gray-400">{time} ago</p>
      </div>
    </div>
  );
}
