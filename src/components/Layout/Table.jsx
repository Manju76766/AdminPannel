import { Eye, SlidersHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const orders = [
  {
    id: "#87961",
    name: "Mark Allen",
    date: "May 25, 2023",
    time: "10:30 AM",
    amount: "₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Jasso",
    date: "May 25, 2023",
    time: "10:30 AM",
    amount: "₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Ram",
    date: "May 26, 2023",
    time: "10:30 AM",
    amount: "₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Bob",
    date: "May 22, 2023",
    time: "10:30 AM",
    amount: "₹120",
    payment: "COD",
  },
];

export default function OrdersTable() {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 w-full">
      {/* ================= Header ================= */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
            New Orders
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Latest customer transactions
          </p>
        </div>

        {/* Filter */}
        <div ref={filterRef} className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>

          {filterOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
              {["All Orders", "Online Payments", "Cash on Delivery"].map(
                (item) => (
                  <div
                    key={item}
                    onClick={() => setFilterOpen(false)}
                    className="px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================= Table ================= */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wide text-gray-400 border-b border-gray-100">
              <th className="px-6 py-3 font-medium text-left">Order</th>
              <th className="px-6 py-3 font-medium text-left">Customer</th>
              <th className="px-6 py-3 font-medium text-left">Date</th>
              <th className="px-6 py-3 font-medium text-left">Time</th>
              <th className="px-6 py-3 font-medium text-left">Amount</th>
              <th className="px-6 py-3 font-medium text-left">Payment</th>
              <th className="px-6 py-3 font-medium text-left">Status</th>
              <th className="px-6 py-3 font-medium text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr
                key={index}
                className="group border-b border-gray-50 hover:bg-gray-50/70 transition-colors"
              >
                <td className="px-6 py-5 font-medium text-gray-900">
                  {item.id}
                </td>
                <td className="px-6 py-5 text-gray-600">
                  {item.name}
                </td>
                <td className="px-6 py-5 text-gray-500">
                  {item.date}
                </td>
                <td className="px-6 py-5 text-gray-500">
                  {item.time}
                </td>
                <td className="px-6 py-5 font-semibold text-gray-900">
                  {item.amount}
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                    {item.payment}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition">
                      Reject
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition">
                      Accept
                    </button>
                  </div>
                </td>

                {/* Action */}
                <td className="px-6 py-5 text-center">
                  <Eye
                    size={16}
                    className="inline-block text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer transition"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Footer ================= */}
      <div className="flex justify-center py-5">
        <button className="text-sm font-medium text-white px-6 py-2 rounded-xl bg-[#925EFF] hover:bg-[#925EFF]/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          View all orders
        </button>
      </div>
    </section>
  );
}
