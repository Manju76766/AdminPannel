import {
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
} from "lucide-react";

const data = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    subtitle: "vs last month",
    icon: DollarSign,
    color: "green",
    
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    subtitle: "vs last month",
    icon: Users,
    color: "blue",
    bar: "bg-blue-500",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    subtitle: "vs last month",
    icon: ShoppingCart,
    color: "purple",
    bar: "bg-purple-500",
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    subtitle: "vs last month",
    icon: Eye,
    color: "orange",
    bar: "bg-orange-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-gray-800">
        {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index}
            className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl shadow-sm p-5 border border-gray-100">
           
            <div className="flex items-center justify-between">
              <p className="text-sm text-black font-bold">{item.title}</p>
              <div
          className={`w-9 h-9 flex items-center justify-center rounded-lg bg-${item.color}-100`}>
          <Icon className={`text-${item.color}-600`} size={18} />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-3">{item.value}</h2>
            <p className="text-sm mt-1 text-green-800 " >
            {item.change} <span className="text-amber-50 text-sm ">{item.subtitle}</span>
            </p>

          </div>
        );
      })}
    </div>
  );
}