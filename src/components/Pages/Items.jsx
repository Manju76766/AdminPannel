import Tomato from "../../Product Images/Tomato.jpg";
import Apple from "../../Product Images/Apple.jpg";
import Milk from "../../Product Images/Milk.jpg";
import Potato from "../../Product Images/Potato.jpg";
import Orange from "../../Product Images/Orange.jpg";
import Eggs from "../../Product Images/Eggs.jpg";
import Capsicum from "../../Product Images/Capasicum.jpg";
import Banana from "../../Product Images/Banana.jpg";


export default function Items() {

  const categories = [
    {
      name: "Vegetables",
      count: 12,
      image: Tomato,
    },
    {
      name: "Fruits",
      count: 18,
      image: Apple,
    },
    {
      name: "Dairy",
      count: 10,
      image: Milk,
    },
    {
      name: "Snacks",
      count: 8,
      image: Banana,
    },
    {
      name: "Beverages",
      count: 14,
      image: Orange,
    },
  ];

  const products = [
    {
      name: "Fresh Tomato",
      price: "3 SAR",
      image: Tomato,
    },
    {
      name: "Red Apple",
      price: "5 SAR",
      image: Apple,
    },
    {
      name: "Organic Milk",
      price: "7 SAR",
      image: Milk,
    },
    {
      name: "Potatoes Pack",
      price: "4 SAR",
      image: Potato,
    },
    {
      name: "Orange Juice",
      price: "8 SAR",
      image: Orange,
    },
    {
      name: "Egg Tray",
      price: "12 SAR",
      image: Eggs,
    },
    {
      name: "Green Capsicum",
      price: "6 SAR",
      image: Capsicum,
    },
    {
      name: "Banana",
      price: "4 SAR",
      image: Banana,
    },
  ];

  return (
    <div className="w-full p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Menu Items</h2>
        <button className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-90 flex items-center gap-2 transition">
          <span className="text-lg">+</span> Add Item
        </button>
      </div>

      <p className="text-gray-500 mb-6">Total items - 50</p>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-5 py-4 rounded-xl min-w-[190px] 
            ${index === 0
                ? "bg-[#FFF7E6] border border-[#F6C56F]"
                : "bg-white border"}
            shadow-sm hover:shadow-md transition cursor-pointer`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium text-sm">{cat.name}</h4>
              <p className="text-xs text-gray-500">
                {cat.count} items
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg"
              />
            </div>

            <div className="px-4 pb-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{item.name}</h4>
                <span className="text-gray-600 text-sm">
                  {item.price}
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-1">
                Fresh grocery product
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
