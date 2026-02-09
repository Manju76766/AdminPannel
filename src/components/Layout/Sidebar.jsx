import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  ArrowLeftFromLine,
} from "lucide-react";

export default function Sidebar({
  open,
  setOpen,
  activePage,
  setActivePage,
}) {
  const [activeItem, setActiveItem] = useState(activePage);

  useEffect(() => {
    setActiveItem(activePage);
  }, [activePage]);

  // 👇 label = UI text | page = logic key
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", page: "Dashboard" },
    { icon: Users, label: "Users", page: "Users" },
    { icon: ShoppingCart, label: "Items", page: "Items" },
    { icon: CreditCard, label: "Transactions", page: "Transactions" },
    { icon: FileText, label: "Reservation", page: "Reservation" },
    { icon: Settings, label: "Settings", page: "Setting" }, // ✅ FIX
  ];

  return (
    <>
      {/* MOBILE BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden ${
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
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setActivePage={setActivePage}
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
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setActivePage={setActivePage}
          setOpen={setOpen}
          menuItems={menuItems}
        />
      </aside>
    </>
  );
}

function SidebarContent({
  open,
  activeItem,
  setActiveItem,
  setActivePage,
  setOpen,
  menuItems,
}) {
  return (
    <>
      {/* LOGO */}
      <div className="flex items-center justify-between px-4 py-5">
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
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => {
              setActiveItem(item.page);
              setActivePage(item.page);
              setOpen(false);
            }}
            className={`mt-4 flex items-center gap-4 px-3 py-2 rounded-xl cursor-pointer transition ${
              activeItem === item.page
                ? "bg-[#925EFF] text-white"
                : "text-gray-600 hover:bg-indigo-50"
            }`}
          >
            <item.icon size={20} />
            {open && <span className="flex-1">{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 text-red-500 cursor-pointer">
          <LogOut size={18} />
          {open && <span>Logout</span>}
        </div>
      </div>
    </>
  );
}
