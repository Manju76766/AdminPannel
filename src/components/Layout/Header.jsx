import { useState, useRef, useEffect } from "react";

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
  const [notifications, setNotifications] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotifications(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* Hamburger – ALWAYS clickable */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="text-gray-700" size={22} />
        </button>

        {/* Desktop hamburger (optional hover-expand sidebar) */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="text-gray-700" size={20} />
        </button>

        <div className="leading-tight">
          <h1 className="text-base sm:text-lg font-bold">Dashboard</h1>
          <p className="hidden sm:block text-xs text-gray-400">
            Welcome back, Alex! Here's what's happening today.
          </p>
        </div>
      </div>

      {/* SEARCH (Desktop only) */}
      <div className="hidden md:flex flex-1 justify-center px-10">
        <div className="relative w-full max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Search anything..."
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-4 relative">
        <Moon
          size={37}
          className="text-gray-500 hover:text-indigo-600 cursor-pointer transition-all duration-300 p-2 rounded-full hover:bg-indigo-50 active:scale-95"
        />

        {/* Notifications */}
        <div ref={notificationRef} className="relative">
          <button
            onClick={() => setNotifications(!notifications)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Bell className="text-gray-600" size={20} />

            {/* 🔴 Badge hidden on small screens */}
            <span className="hidden sm:flex absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full items-center justify-center">
              3
            </span>
          </button>

          {notifications && (
            <div className="absolute right-0 top-11 w-[90vw] max-w-xs sm:w-72 bg-white rounded-xl shadow-lg border z-50">
              <div className="px-4 py-3 border-b">
                <h3 className="text-sm font-semibold">Notifications</h3>
              </div>

              <div className="divide-y">
                <NotificationMini name="Terry Franci" time="5m" active />
                <NotificationMini name="Alena Franci" time="8m" active />
                <NotificationMini name="Jocelyn Kenter" time="15m" />
              </div>

              <div className="px-4 py-2 text-center text-xs text-indigo-600 hover:bg-gray-50 cursor-pointer rounded-b-xl transition">
                View all
              </div>
            </div>
          )}
        </div>

        

        {/* Profile */}
        <div ref={profileRef} className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src="https://plus.unsplash.com/premium_vector-1727454009297-f7448e40f314?q=80&w=1170&auto=format&fit=crop"
              className="w-8 h-8 rounded-full object-cover"
              alt="Profile"
            />
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              Jasso
            </span>
            <ChevronDown size={16} className="text-gray-600 hidden sm:block" />
          </div>

          {profileOpen && (
            <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-lg p-2 z-50">
              <DropdownItem icon={<User size={16} />} text="Edit profile" />
              <DropdownItem icon={<Settings size={16} />} text="Account settings" />
              <DropdownItem icon={<Info size={16} />} text="Support" />
              <hr className="my-1" />
              <DropdownItem icon={<LogOut size={16} />} text="Sign out" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------------- Components ---------------- */

function DropdownItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
      {icon}
      {text}
    </div>
  );
}

function NotificationMini({ name, time, active }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition">
      <div className="relative shrink-0">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-white ${
            active ? "bg-green-500" : "bg-gray-300"
          }`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs leading-snug break-words">
          <span className="font-semibold">{name}</span> requested access
        </p>
        <p className="text-[10px] text-gray-400 mt-0.5">{time} ago</p>
      </div>
    </div>
  );
}
