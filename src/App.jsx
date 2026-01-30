import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Card from "./components/Layout/Card";
import Table from "./components/Layout/Table"

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1">
        <Header open={open} setOpen={setOpen} /> 
        <main className="p-6">
        <Card/>
        <div className="mt-17">
          <Table/>
        </div>
        
        </main>
      </div>
    </div>
  );
}

