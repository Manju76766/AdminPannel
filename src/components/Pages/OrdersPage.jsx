import { useState, useMemo } from "react";
import { MoreVertical } from "lucide-react";

import Cust1 from "../../assets/Img/Cust1.avif";
import Cust2 from "../../assets/Img/Cust2.webp";
import Cust3 from "../../assets/Img/Cust3.webp";
import Cust4 from "../../assets/Img/Cust4.avif";
import Cust5 from "../../assets/Img/Cust5.avif";
import Cust6 from "../../assets/Img/Cust6.avif";
import Cust7 from "../../assets/Img/Cust7.avif";
import Cust8 from "../../assets/Img/Cust8.avif";
import Cust9 from "../../assets/Img/Cust9.avif";
import Cust10 from "../../assets/Img/Cust10.avif";

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);
  const ordersPerPage = 7;

  const [orders, setOrders] = useState([
    { id: 78654, name: "Zayan", img: Cust1, address: "1901 Thornridge Cir. Shiloh, Hawaii 81063", date: "15-05-2023", price: "₹300", status: "Complete" },
    { id: 89769, name: "Robiul islam", img: Cust2, address: "8502 Preston Rd. Inglewood, Maine 98380", date: "17-05-2023", price: "₹495", status: "Complete" },
    { id: 65437, name: "Sadek hossin", img: Cust3, address: "6391 Elgin St. Celina, Delaware 10299", date: "22-05-2023", price: "₹355", status: "Complete" },
    { id: 84653, name: "Sarfaraz", img: Cust4, address: "2464 Royal Ln. Mesa, New Jersey 45463", date: "25-05-2023", price: "₹350", status: "Pending" },
    { id: 47654, name: "Huzaifa", img: Cust5, address: "8502 Preston Rd. Inglewood, Maine 98380", date: "29-05-2023", price: "₹456", status: "Complete" },
    { id: 67854, name: "Mehwish", img: Cust6, address: "8502 Preston Rd. Inglewood, Maine 98380", date: "07-06-2023", price: "₹460", status: "Complete" },
    { id: 89657, name: "Zainab Fatima", img: Cust7, address: "6391 Elgin St. Celina, Delaware 10299", date: "12-06-2023", price: "₹340", status: "Cancel" },
    { id: 99876, name: "Ayesha Khan", img: Cust8, address: "742 Evergreen Terrace, Springfield 62704", date: "28-06-2023", price: "₹390", status: "Pending" },
    { id: 12345, name: "Hanzalah", img: Cust9, address: "New Street 45, Chicago", date: "30-06-2023", price: "₹300", status: "Complete" },
    { id: 56789, name: "Rizwan", img: Cust10, address: "Main Street 12, Texas", date: "01-07-2023", price: "₹410", status: "Pending" }
  ]);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const paginatedOrders = useMemo(() => {
    return orders.slice(
      (currentPage - 1) * ordersPerPage,
      currentPage * ordersPerPage
    );
  }, [currentPage, orders]);

  const statusStyle = (status) => {
    switch (status) {
      case "Complete":
        return "text-green-600";
      case "Pending":
        return "text-yellow-500";
      case "Cancel":
        return "text-red-600";
      default:
        return "";
    }
  };

  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    setOpenMenu(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f6f9] px-6 py-0">
      <div className="w-full max-w-[1450px] mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-8">

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[1100px] text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="text-left font-medium py-4 pr-6">Id</th>
                  <th className="text-left font-medium py-4 pr-6">Name</th>
                  <th className="text-left font-medium py-4 pr-6">Address</th>
                  <th className="text-left font-medium py-4 pr-6">Date</th>
                  <th className="text-left font-medium py-4 pr-6">Price</th>
                  <th className="text-left font-medium py-4 pr-6">Status</th>
                  <th className="py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-5 pr-6 font-medium text-gray-900">
                      #{order.id}
                    </td>

                    <td className="py-5 pr-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={order.img}
                          alt={order.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {order.name}
                        </span>
                      </div>
                    </td>

                    <td className="py-5 pr-6 max-w-[280px] truncate">
                      {order.address}
                    </td>

                    <td className="py-5 pr-6">{order.date}</td>
                    <td className="py-5 pr-6 font-medium">{order.price}</td>

                    <td className="py-5 pr-6">
                      <span className={statusStyle(order.status)}>
                        {order.status}
                      </span>
                    </td>

                    <td className="py-5 text-right relative">
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === order.id ? null : order.id)
                        }
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical size={18} />
                      </button>

                      {openMenu === order.id && (
                        <div className="absolute right-0 top-12 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                          <button
                            onClick={() => updateStatus(order.id, "Complete")}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          >
                            Complete
                          </button>
                          <button
                            onClick={() => updateStatus(order.id, "Pending")}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => updateStatus(order.id, "Cancel")}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-md text-sm flex items-center justify-center ${
                  currentPage === i + 1
                    ? "bg-[#4f46e5] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className="w-9 h-9 rounded-md border border-[#4f46e5] text-[#4f46e5] flex items-center justify-center"
            >
              &gt;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
