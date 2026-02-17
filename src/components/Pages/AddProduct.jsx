import { useState } from "react";

export default function AddGroceryItem() {
  const [images, setImages] = useState(Array(7).fill(null));

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE – IMAGE UPLOAD */}
        <div className="lg:col-span-1">

          {/* BIG IMAGE */}
          <label className="border-2 border-dashed border-gray-300 rounded-2xl h-[420px] flex items-center justify-center text-gray-400 text-center cursor-pointer overflow-hidden hover:border-green-500 transition">
            {images[0] ? (
              <img
                src={images[0]}
                alt="preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div>
                <p className="text-4xl font-bold">500 x 500</p>
                <p className="text-sm mt-2">Upload product image</p>
              </div>
            )}

            <input
              type="file"
              className="hidden"
              onChange={(e) => handleImageChange(0, e)}
            />
          </label>

          {/* SMALL BOXES */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <label
                key={index}
                className="h-24 border rounded-xl flex items-center justify-center text-xs text-gray-400 bg-gray-100 cursor-pointer overflow-hidden hover:border-green-500 transition"
              >
                {images[index] ? (
                  <img
                    src={images[index]}
                    alt="preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  "500 x 500"
                )}

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(index, e)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – YOUR ORIGINAL FORM (UNCHANGED) */}
        <div className="lg:col-span-2 space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Product Name</label>
              <input type="text" className="w-full border rounded-xl px-4 py-3 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full border rounded-xl px-4 py-3 outline-none">
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Dairy</option>
                <option>Beverages</option>
                <option>Snacks</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Slug</label>
            <input type="text" className="w-full border rounded-xl px-4 py-3 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Short Description</label>
            <textarea rows="3" className="w-full border rounded-xl px-4 py-3 outline-none"></textarea>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Price (SAR)</label>
              <input type="number" className="w-full border rounded-xl px-4 py-3 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Discount Price</label>
              <input type="number" className="w-full border rounded-xl px-4 py-3 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <input type="number" className="w-full border rounded-xl px-4 py-3 outline-none" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Unit</label>
              <select className="w-full border rounded-xl px-4 py-3 outline-none">
                <option>Kg</option>
                <option>Gram</option>
                <option>Piece</option>
                <option>Liter</option>
                <option>Pack</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expiry Date</label>
              <input type="date" className="w-full border rounded-xl px-4 py-3 outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Active
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Featured Product
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Full Description</label>
            <textarea rows="5" className="w-full border rounded-xl px-4 py-3 outline-none"></textarea>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button className="px-6 py-3 rounded-xl border hover:bg-gray-100 transition">
              Cancel
            </button>
            <button className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md">
              Save Product
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
22