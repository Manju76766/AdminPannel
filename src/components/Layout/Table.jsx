import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Upload,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

// ✅ Import your uploaded images
import Cust1 from "../../assets/Img/Cust1.avif";
import Cust2 from "../../assets/Img/Cust2.webp";
import Cust3 from "../../assets/Img/Cust3.webp";
import Cust4 from "../../assets/Img/Cust4.avif";
import Cust5 from "../../assets/Img/Cust5.avif";
import Cust6 from "../../assets/Img/Cust6.avif";
import Cust7 from "../../assets/Img/Cust7.avif";
import Cust8 from "../../assets/Img/Cust8.avif";
import Cust9 from "../../assets/Img/Cust9.avif";


export default function OrdersTable() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();


  const orders = [
    { id: "#ER84781", date: "1 Oct 2024", name: "Kristin Watson", items: "2 Items", total: "$839", payment: "Success", avatar: Cust1 },
    { id: "#ER84782", date: "2 Oct 2024", name: "Leslie Alexander", items: "4 Items", total: "$374", payment: "Pending", avatar: Cust2 },
    { id: "#ER84783", date: "3 Oct 2024", name: "Guy Hawkins", items: "5 Items", total: "$485", payment: "Success", avatar: Cust3 },
    { id: "#ER84784", date: "4 Oct 2024", name: "Robert Fox", items: "8 Items", total: "$824", payment: "Success", avatar: Cust4 },
    { id: "#ER84785", date: "5 Oct 2024", name: "Cody Fisher", items: "2 Items", total: "$285", payment: "Pending", avatar: Cust5 },
    { id: "#ER84786", date: "6 Oct 2024", name: "Bessie Cooper", items: "1 Items", total: "$537", payment: "Success", avatar: Cust6 },
    { id: "#ER84787", date: "7 Oct 2024", name: "Albert Flores", items: "5 Items", total: "$426", payment: "Pending", avatar: Cust7 },
    { id: "#ER84788", date: "8 Oct 2024", name: "Ralph Edwards", items: "1 Items", total: "$386", payment: "Pending", avatar: Cust8 },
    { id: "#ER84789", date: "9 Oct 2024", name: "Arlene McCoy", items: "3 Items", total: "$657", payment: "Success", avatar: Cust9 },
  ];

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const paymentStyle = (status) =>
    status === "Success"
      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
      : "bg-amber-50 text-amber-600 border border-amber-200";

  return (
    <div className="">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left"></th>
                <th className="px-6 py-4 text-left font-semibold">Orders</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Customer</th>
                <th className="px-6 py-4 text-left font-semibold">Delivery</th>
                <th className="px-6 py-4 text-left font-semibold">Items</th>
                <th className="px-6 py-4 text-left font-semibold">Total</th>
                <th className="px-6 py-4 text-left font-semibold">Payment</th>
                <th className="px-6 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {orders.map((order, i) => {
                const isSelected = selected.includes(order.id);

                return (
                  <tr
                    key={i}
                    className={`transition ${
                      isSelected ? "bg-purple-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(order.id)}
                        className="accent-purple-600 w-4 h-4"
                      />
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {order.id}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {order.date}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={order.avatar}
                          alt={order.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <span className="text-gray-800 font-medium">
                          {order.name}
                        </span>
                      </div>
                    </td>

                    {/* ✅ Delivery Logic Updated */}
                    <td className="px-6 py-4 text-gray-600">
                      {order.payment === "Pending"
                        ? "Shipped"
                        : "Delivered"}
                    </td>

                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {order.items}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {order.total}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${paymentStyle(
                          order.payment
                        )}`}
                      >
                        {order.payment}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                        <MoreVertical size={16} className="text-gray-500" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {selected.length > 0 && (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-200 rounded-2xl px-8 py-4 flex items-center gap-6 text-sm">

    <span className="font-medium text-gray-700">
      {selected.length} Selected
    </span>

    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition">
      <Pencil size={14} /> Edit Info
    </button>

    <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
      <Trash2 size={14} /> Delete
    </button>

    <button onClick={() => setSelected([])}>
      <X size={16} className="text-gray-500 hover:text-gray-800" />
    </button>

  </div>
)}

 {/* Bottom View All Button */}
<div className="flex justify-center mt-8 pb-8">
  <button
    onClick={() => navigate("/orders")}
    className="group relative px-10 py-3 rounded-2xl 
               bg-gradient-to-r from-purple-600 to-indigo-500 
               text-white font-semibold tracking-wide
               shadow-lg hover:shadow-2xl
               transition-all duration-300 ease-in-out
               hover:-translate-y-1 hover:scale-105"
  >
    <span className="relative z-10">View All Orders</span>

    {/* Soft Glow Effect */}
    <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
  </button>
</div>


      </div>
    </div>
  );
} 