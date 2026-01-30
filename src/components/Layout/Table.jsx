import { Eye, SlidersHorizontal, } from "lucide-react";

const orders = [
  {
    id: "#87961",
    name: "Mark Allen", 
    date: "May 25, 2023",
    time: "10:30 AM",
    amount: " ₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Jasso",
    date: "May 25, 2023",
    time: "10:30 AM",
    amount: " ₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Ram",
    date: "May 26, 2023",
    time: "10:30 AM",
    amount: " ₹120",
    payment: "Online",
  },
  {
    id: "#87961",
    name: "Bob",
    date: "May 22, 2023",
    time: "10:30 AM",
    amount: " ₹120",
    payment: "Online",
  },
];

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 w-full">
      
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          New Orders
        </h2>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          Filter <SlidersHorizontal size={16} />
        </button>
      </div>

      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="py-3">Order ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50">
                <td className="py-4 font-medium text-gray-700">
                  {item.id}
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td className="font-medium">{item.amount}</td>
                <td>{item.payment}</td>

                
                <td className="flex gap-2 py-4">
                  <button className="px-3 py-1 text-xs rounded-full font-sm bg-red-100 text-red-600">
                    Reject
                  </button>
                  <button className="px-3 py-1 text-xs rounded-full font-sm bg-green-200 text-green-600">
                    Accept
                  </button>
                </td>

                
                <td className="text-center">
                  <Eye
                    size={16}
                    className="inline-block text-gray-500 cursor-pointer hover:text-gray-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="text-center mt-4">
        <button className="text-sm font-medium text-white border-1 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:underline">
          See All
        </button>
      </div>
    </div>
  );
}
