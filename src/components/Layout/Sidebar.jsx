import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  LogOut,
  ArrowLeftFromLine,
  Package,
  PlusCircle,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: ShoppingCart, label: "Products", path: "/items" },
    { icon: Package, label: "Orders", path: "/orders" },
    { icon: PlusCircle, label: "Add Product", path: "/add-product" },
    { icon: CreditCard, label: "Transactions", path: "/transactions" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* MOBILE BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent
          open
          setOpen={setOpen}
          menuItems={menuItems}
        />
      </aside>

      {/* DESKTOP SIDEBAR */}
      <aside
        onMouseEnter={() => !open && setOpen(true)}
        onMouseLeave={() => open && setOpen(false)}
        className={`hidden md:flex h-screen bg-white border-r transition-all duration-300 ${
          open ? "w-64" : "w-20"
        } flex-col shadow-sm`}
      >
        <SidebarContent
          open={open}
          setOpen={setOpen}
          menuItems={menuItems}
        />
      </aside>
    </>
  );
}

function SidebarContent({ open, setOpen, menuItems }) {
  return (
    <div className="flex flex-col h-full">
      {/* LOGO */}
      <div className="flex items-center justify-between px-4 py-5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#925EFF] flex items-center justify-center text-white font-bold">
            MA
          </div>
          {open && (
            <div>
              <h1 className="text-sm font-semibold">Admin</h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          )}
        </div>

        <button onClick={() => setOpen(false)} className="md:hidden">
          <ArrowLeftFromLine />
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `mt-4 flex items-center gap-4 px-3 py-2 rounded-xl transition ${
                isActive
                  ? "bg-[#925EFF] text-white"
                  : "text-gray-600 hover:bg-indigo-50"
              }`
            }
          >
            <item.icon size={20} />
            {open && <span className="flex-1">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t shrink-0">
        <div className="flex items-center gap-3 text-red-500 cursor-pointer">
          <LogOut size={18} />
          {open && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
}
