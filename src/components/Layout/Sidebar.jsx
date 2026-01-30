import {
  LayoutDashboard,
  BarChart2,
  Users,
  ShoppingCart,
  Package,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      onMouseEnter={() => !open && setOpen(true)}
      onMouseLeave={() => open && setOpen(false)}
      className={`h-screen bg-white border-r transition-all duration-300 ${
        open ? "w-64" : "w-20"
      } flex flex-col`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-4">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
          ⚡
        </div>
        {open && (
          <div>
            <h1 className="text-sm font-semibold">Admin</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-2">
        <Item open={open} icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <Item open={open} icon={<BarChart2 size={18} />} label="Analytics" />
        <Item open={open} icon={<Users size={18} />} label="Users" badge="2.4k" />
        <Item open={open} icon={<ShoppingCart size={18} />} label="E-commerce" />
        <Item open={open} icon={<Package size={18} />} label="Inventory" badge="847" />
        <Item open={open} icon={<CreditCard size={18} />} label="Transactions" />
        <Item open={open} icon={<MessageSquare size={18} />} label="Messages" badge="12" red />
        <Item open={open} icon={<Calendar size={18} />} label="Calendar" />
        <Item open={open} icon={<FileText size={18} />} label="Reports" />
        <Item open={open} icon={<Settings size={18} />} label="Settings" />
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-red-500 hover:bg-red-50">
          <LogOut size={18} />
          {open && <span className="text-sm font-medium">Logout</span>}
        </div>
      </div>
    </aside>
  );
}

function Item({ icon, label, open, active, badge, red }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
          : "text-gray-600 hover:bg-indigo-100"
      }`}
    >
      {icon}

      {open && (
        <>
          <span className="flex-1 text-sm">{label}</span>
          {badge && (
            <span
              className={`text-xs px-2 rounded-full text-white ${
                red ? "bg-red-500" : "bg-indigo-500"
              }`}
            >
              {badge}
            </span>
          )}
        </>
      )}
    </div>
  );
}
