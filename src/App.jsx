import { useState } from "react";

// Layout
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";

// Pages
import Card from "./components/Layout/Card";
import Table from "./components/Layout/Table";
import OrdersPage from "./components/Pages/OrdersPage";
import Setting from "./components/Pages/Setting";

export default function App() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* ================= SIDEBAR ================= */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* HEADER */}
        <Header open={open} setOpen={setOpen} />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* DASHBOARD */}
          {activePage === "Dashboard" && (
            <>
              <Card />
              <div className="mt-8">
                <Table />
              </div>
            </>
          )}

          {/* USERS / ORDERS PAGE */}
          {activePage === "Users" && <OrdersPage />}

          {/* SETTING PAGE */}
          {activePage === "Setting" && <Setting />}
        </main>
      </div>
    </div>
  );
}
