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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, index) => {
        const Icon = item.icon;
        const positive = !item.change.includes("-");

        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 font-medium">{item.title}</p>
              <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100">
                <Icon className="text-gray-700" size={18} />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-3">{item.value}</h2>

            <p
              className={`text-sm mt-1 ${
                positive ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.change}{" "}
              <span className="text-gray-400">{item.subtitle}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
