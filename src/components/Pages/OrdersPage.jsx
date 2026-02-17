import { useState, useMemo } from "react";
import { MoreVertical } from "lucide-react";


// Images
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
    { id: 56789, name: "Rizwan", img: Cust10, address: "Main Street 12, Texas", date: "01-07-2023", price: "₹410", status: "Pending" },
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
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Cancel":
        return "bg-red-100 text-red-500";
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
    <div className="w-full h-full">
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-6">

        {/* ================= MOBILE VIEW (MATCH REFERENCE) ================= */}
        <div className="md:hidden space-y-5">
          {paginatedOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md p-5 relative"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={order.img}
                    alt={order.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold leading-tight">
                      {order.name}
                    </p>
                    <p className="text-sm text-gray-400">#{order.id}</p>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === order.id ? null : order.id)
                    }
                  >
                    <MoreVertical size={20} />
                  </button>

                  {openMenu === order.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-50">
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
                </div>
              </div>

              <div className="mt-5 space-y-2 text-gray-600 text-base">
                <p className="truncate">{order.address}</p>
                <p>{order.date}</p>
                <p className="font-semibold text-gray-900">{order.price}</p>
              </div>

              <div className="mt-5">
                <span
                  className={`px-4 py-1.5 text-sm rounded-full font-medium ${statusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-gray-100 text-gray-500">
                <th className="px-6 py-3 text-left font-medium rounded-l-xl">Id</th>
                <th className="px-6 py-3 text-left font-medium">Name</th>
                <th className="px-6 py-3 text-left font-medium">Address</th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 text-left font-medium">Price</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-center font-medium rounded-r-xl">Action</th>
              </tr>
            </thead>

            <tbody>
              {paginatedOrders.map((order) => (
                <tr key={order.id} className="bg-white shadow-sm">
                  <td className="px-6 py-4 font-medium">{order.id}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.img}
                        alt={order.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span>{order.name}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 max-w-[220px] truncate">
                    {order.address}
                  </td>

                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4 font-medium">{order.price}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === order.id ? null : order.id)
                      }
                    >
                      <MoreVertical size={18} />
                    </button>

                    {openMenu === order.id && (
                      <div className="absolute right-6 top-12 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-50">
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

        {/* ================= PAGINATION ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-sm text-gray-500">
            Showing {(currentPage - 1) * ordersPerPage + 1} to{" "}
            {Math.min(currentPage * ordersPerPage, orders.length)} of{" "}
            {orders.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
              }
              className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-40"
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "border"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < totalPages ? prev + 1 : prev
                )
              }
              className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-40"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
