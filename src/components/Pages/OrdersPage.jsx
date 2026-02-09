import { useState, useRef, useEffect } from "react";
import {
  FiMoreVertical,
  FiCalendar,
  FiEye,
  FiEdit,
  FiDownload,
  FiX,
} from "react-icons/fi";

const ordersData = [
  {
    id: 78654,
    name: "Zayan",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    date: "2023-05-15",
    price: "₹120",
    status: "Complete",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 89769,
    name: "Robiul islam",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    date: "2023-05-17",
    price: "₹200",
    status: "Complete",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 84653,
    name: "Sarfraz",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    date: "2023-05-25",
    price: "₹650",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 47654,
    name: "Huzaifa",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    date: "2023-05-29",
    price: "₹456",
    status: "Complete",
    avatar: "https://i.pravatar.cc/40?img=5",
  },

  // ➕ EXTRA ROW ADDED
  {
    id: 99871,
    name: "Ayaan Khan",
    address: "742 Evergreen Terrace, Springfield",
    date: "2023-06-02",
    price: "₹520",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=8",
  },
  {
  id: 55421,
  name: "Imran Khan",
  address: "77 Sunset Blvd, Los Angeles, California 90028",
  date: "2023-06-10",
  price: "₹390",
  status: "Pending",
  avatar: "https://i.pravatar.cc/40?img=14",
},
{
  id: 66987,
  name: "Adnan Malik",
  address: "44 King Street, Manchester M2 5EA",
  date: "2023-06-12",
  price: "₹580",
  status: "Complete",
  avatar: "https://i.pravatar.cc/40?img=15",
},

];

const statusStyle = {
  Complete: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Cancel: "bg-red-100 text-red-600",
};

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  // ➕ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) =>
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      setOpenMenu(null);

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filteredOrders = ordersData.filter((o) => {
    const statusMatch = filter === "All" || o.status === filter;
    const dateMatch = !selectedDate || o.date === selectedDate;
    return statusMatch && dateMatch;
  });

  // ➕ PAGINATED DATA
  const start = (currentPage - 1) * perPage;
  const paginatedOrders = filteredOrders.slice(start, start + perPage);

  const totalPages = Math.ceil(filteredOrders.length / perPage);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <div className="flex gap-6 text-sm font-medium">
          {["All", "Pending", "Complete"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setFilter(tab);
                setCurrentPage(1);
              }}
              className={`pb-1 ${
                filter === tab
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              {tab === "All" ? "All Orders" : tab}
            </button>
          ))}
        </div>

        {/* FIXED DATE INPUT */}
        <div className="hidden sm:flex items-center gap-2 border rounded-lg px-3 py-2 text-sm text-gray-600">

          <FiCalendar />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setCurrentPage(1);
            }}
            className="outline-none bg-transparent"
          />
          {selectedDate && (
            <button onClick={() => setSelectedDate("")}>
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
<div className="space-y-4 md:hidden">
  {paginatedOrders.map((o) => (
    <div
      key={o.id}
      className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={o.avatar} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">{o.name}</p>
            <p className="text-xs text-gray-500">ID: {o.id}</p>
          </div>
        </div>

        <button
          onClick={() => setOpenMenu(o.id)}
          className="p-2 border rounded-lg"
        >
          <FiMoreVertical />
        </button>
      </div>

      <p className="text-sm text-gray-600">{o.address}</p>

      <div className="flex justify-between text-sm">
        <span>{o.date.split("-").reverse().join("-")}</span>
        <span className="font-medium">{o.price}</span>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-xs ${statusStyle[o.status]}`}
        >
          {o.status}
        </span>

        {openMenu === o.id && (
          <div
            ref={menuRef}
            className="absolute right-4 bottom-full mb-2 w-44 bg-white border rounded-lg shadow-lg z-20"
          >
            <ActionItem icon={<FiEye />} text="View details" />
            <ActionItem icon={<FiEdit />} text="Edit order" />
            <ActionItem icon={<FiDownload />} text="Download invoice" />
            <ActionItem icon={<FiX />} text="Cancel order" danger />
          </div>
        )}
      </div>
    </div>
  ))}
</div>

{/* ================= DESKTOP TABLE ================= */}
<div className="hidden md:block overflow-x-auto">
  <table className="w-full min-w-[900px] table-fixed border-separate border-spacing-y-3 text-sm">
    <thead>
      <tr className="bg-gray-100 text-gray-500">
        <th className="px-3 py-3 w-[90px]">Id</th>
        <th className="px-3 py-3 w-[180px]">Name</th>
        <th className="px-3 py-3">Address</th>
        <th className="px-3 py-3 w-[130px]">Date</th>
        <th className="px-3 py-3 w-[120px]">Price</th>
        <th className="px-3 py-3 w-[120px]">Status</th>
        <th className="px-3 py-3 w-[90px] text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      {paginatedOrders.map((o) => (
        <tr key={o.id} className="bg-white shadow rounded-lg">
          <td className="px-3 py-4 font-medium">{o.id}</td>

          <td className="px-3 py-4">
            <div className="flex items-center gap-2">
              <img src={o.avatar} className="w-8 h-8 rounded-full" />
              <span className="font-medium">{o.name}</span>
            </div>
          </td>

          <td className="px-3 py-4 truncate text-gray-600">
            {o.address}
          </td>

          <td className="px-3 py-4">
            {o.date.split("-").reverse().join("-")}
          </td>

          <td className="px-3 py-4 font-medium">{o.price}</td>

          <td className="px-3 py-4">
            <span
              className={`px-3 py-1 rounded-full text-xs ${statusStyle[o.status]}`}
            >
              {o.status}
            </span>
          </td>

          <td className="px-3 py-4 text-center relative">
            <button
              onClick={() => setOpenMenu(o.id)}
              className="p-2 border rounded-lg"
            >
              <FiMoreVertical />
            </button>

            {openMenu === o.id && (
              <div
                ref={menuRef}
                className="absolute right-0 bottom-full mb-2 w-44 bg-white border rounded-lg shadow-lg z-20"
              >
                <ActionItem icon={<FiEye />} text="View details" />
                <ActionItem icon={<FiEdit />} text="Edit order" />
                <ActionItem icon={<FiDownload />} text="Download invoice" />
                <ActionItem icon={<FiX />} text="Cancel order" danger />
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* PAGINATION */}
      <div className="flex justify-between mt-6 text-sm text-gray-500">
        <p>Showing {paginatedOrders.length} orders</p>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "border"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded-md"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

/* ACTION ITEM */
function ActionItem({ icon, text, danger }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
        danger ? "text-red-500" : ""
      }`}
    >
      {icon}
      {text}
    </div>
  );
}
