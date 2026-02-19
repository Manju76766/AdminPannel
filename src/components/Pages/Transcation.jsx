import { useState } from "react";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

export default function Transactions() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const data = [
    { name: "Davie white", transactionId: "#TXN-1001", type: "Credit", amount: "N8,000", date: "22 Jan, 2025", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Denis Obaro", transactionId: "#TXN-1002", type: "Debit", amount: "N2,500", date: "20 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Tp_Dapson", transactionId: "#TXN-1003", type: "Debit", amount: "N12,000", date: "18 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Creative_Kams", transactionId: "#TXN-1004", type: "Debit", amount: "N7,300", date: "16 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
    { name: "Hack Sultan", transactionId: "#TXN-1005", type: "Credit", amount: "N94,000", date: "16 Jan, 2025", status: "Failed", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Dev. Tobs", transactionId: "#TXN-1006", type: "Credit", amount: "N1,500,000", date: "14 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
    { name: "Uix_Ugo", transactionId: "#TXN-1007", type: "Credit", amount: "N80,600", date: "13 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
    { name: "Teeblix", transactionId: "#TXN-1008", type: "Debit", amount: "N4,000", date: "10 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: "Boluwatife", transactionId: "#TXN-1009", type: "Debit", amount: "N12,000", date: "10 Jan, 2025", status: "Successful", avatar: "https://randomuser.me/api/portraits/women/19.jpg" }
  ];

  const filteredData =
    typeFilter === "All"
      ? data
      : data.filter((item) => item.type === typeFilter);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="min-h-screen w-full bg-[#f4f6f9] px-6 py-0">
      <div className="w-full max-w-[1450px] mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h1 className="text-[22px] font-semibold text-gray-900">
              All transactions
            </h1>

            <div className="flex items-center gap-3">
              <select
                value={typeFilter}
                onChange={(e) => {
                  setTypeFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-[42px] px-4 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none"
              >
                <option value="All">All</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>

              <button className="h-[42px] px-5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 flex items-center gap-2">
                Filter
                <SlidersHorizontal size={16} />
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="text-left font-medium py-4 pr-6">Transaction title</th>
                  <th className="text-left font-medium py-4 pr-6">Transaction ID</th>
                  <th className="text-left font-medium py-4 pr-6">Type</th>
                  <th className="text-left font-medium py-4 pr-6">Amount</th>
                  <th className="text-left font-medium py-4 pr-6">Date</th>
                  <th className="text-left font-medium py-4 pr-6">Status</th>
                  <th className="py-4"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-5 pr-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-5 pr-6">{item.transactionId}</td>
                    <td className="py-5 pr-6">{item.type}</td>
                    <td className="py-5 pr-6">{item.amount}</td>
                    <td className="py-5 pr-6">{item.date}</td>
                    <td className="py-5 pr-6">
                      <span
                        className={
                          item.status === "Successful"
                            ? "text-green-600"
                            : item.status === "Pending"
                            ? "text-yellow-500"
                            : "text-red-600"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={18} />
                      </button>
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
