import Tomato from "../../Product Images/Tomato.jpg";
import Apple from "../../Product Images/Apple.jpg";
import Milk from "../../Product Images/Milk.jpg";
import Potato from "../../Product Images/Potato.jpg";
import Orange from "../../Product Images/Orange.jpg";
import Eggs from "../../Product Images/Eggs.jpg";
import Capsicum from "../../Product Images/Capasicum.jpg";
import Banana from "../../Product Images/Banana.jpg";
import { useNavigate } from "react-router-dom";


export default function Items() {
  const categories = [
    { name: "Vegetables", count: 12, image: Tomato },
    { name: "Fruits", count: 18, image: Apple },
    { name: "Dairy", count: 10, image: Milk },
    { name: "Snacks", count: 8, image: Banana },
    { name: "Beverages", count: 14, image: Orange },
  ];

  const products = [
    { name: "Fresh Tomato", price: "3 SAR", image: Tomato },
    { name: "Red Apple", price: "5 SAR", image: Apple },
    { name: "Organic Milk", price: "7 SAR", image: Milk },
    { name: "Potatoes Pack", price: "4 SAR", image: Potato },
    { name: "Orange Juice", price: "8 SAR", image: Orange },
    { name: "Egg Tray", price: "12 SAR", image: Eggs },
    { name: "Green Capsicum", price: "6 SAR", image: Capsicum },
    { name: "Banana", price: "4 SAR", image: Banana },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-8">

      {/* Header Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-8 py-7 mb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
              Menu Items
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Manage your grocery inventory efficiently
            </p>
            <p className="text-sm text-gray-600 mt-6">
              Total items -{" "}
              <span className="font-semibold text-gray-900">50</span>
            </p>
          </div>

          <button
            onClick={() => navigate("/add-product")}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
          <span className="text-lg leading-none">+</span> Add Item
        </button>

        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-5 mb-10 overflow-x-auto pb-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`group flex items-center gap-4 px-6 py-4 rounded-2xl min-w-[220px] border transition-all duration-300 cursor-pointer
            ${
              index === 0
                ? "bg-amber-50 border-amber-200 shadow-sm"
                : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-14 h-14 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
            />

            <div>
              <h4 className="font-semibold text-sm text-gray-900">
                {cat.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {cat.count} items
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-4 pb-0">
                <div className="overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Fresh grocery product
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <button className="text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                    View Details
                  </button>
                  <button className="text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
