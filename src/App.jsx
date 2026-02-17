import { useState } from "react";

// Layout
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";

// Pages
import Card from "./components/Layout/Card";
import Table from "./components/Layout/Table";
import OrdersPage from "./components/Pages/OrdersPage";
import Setting from "./components/Pages/Setting";
import Items from "./components/Pages/Items";
import AllOrdersPage from "./components/Pages/AllOrdersPage";

import AddProduct from "./components/Pages/AddProduct";


export default function App() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        open={open}
        setOpen={setOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <Header open={open} setOpen={setOpen} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">

          {activePage === "Dashboard" && (
            <>
              <Card />
              <div className="mt-8">
                <Table />
              </div>
            </>
          )}

          {activePage === "Users" && <OrdersPage />}

          {activePage === "Orders" && <AllOrdersPage />}

          {activePage === "Setting" && <Setting />}

          {activePage === "Items" && <Items />}

          {activePage === "AddProduct" && <AddProduct />}

        </main>
      </div>
    </div>
  );
}
