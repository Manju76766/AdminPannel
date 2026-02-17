import { useState } from "react";
import { Routes, Route } from "react-router-dom";

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

function Dashboard() {
  return (
    <>
      <Card />
      <div className="mt-8">
        <Table />
      </div>
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1 min-w-0">
        <Header open={open} setOpen={setOpen} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<OrdersPage />} />
            <Route path="/orders" element={<AllOrdersPage />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/items" element={<Items />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
