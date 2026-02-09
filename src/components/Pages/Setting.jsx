import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

export default function Setting() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Page Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex gap-8 border-b text-sm font-medium">
          <button className="pb-3 border-b-2 border-black text-black">
            Edit Profile
          </button>
          <button className="pb-3 text-gray-400 hover:text-black">
            Preferences
          </button>
          <button className="pb-3 text-gray-400 hover:text-black">
            Security
          </button>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Profile Image */}
<div className="flex justify-center lg:justify-start">
  <div className="relative w-28 h-28">
    {/* Avatar */}
    <img
      src="https://i.pravatar.cc/120?img=12"
      alt="profile"
      className="w-28 h-28 rounded-full object-cover"
    />

    {/* Pencil Icon — EXACT like 2nd image */}
    <button
      className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2
                 bg-gray-900 w-9 h-9 rounded-full
                 flex items-center justify-center
                 shadow-md hover:bg-gray-800 transition"
      aria-label="Edit profile picture"
    >
      <FiEdit2 size={16} className="text-white" />
    </button>
  </div>
</div>


          {/* ================= FORM ================= */}
          <div className="lg:col-span-3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Input label="Your Name" value="Mohammad" />
              <Input label="User Name" value="Abdullah" />
              <Input label="Email" value="mohammad@gmail.com" />
              <Input label="Password" value="********" type="password" />
              <Input label="Date of Birth" value="25 January 1990" />
              <Input label="Present Address" value="7903 Beir Tawa" />
              <Input label="Permanent Address" value="Olaya St 6531" />
              <Input label="City" value="Makkah" />
              <Input label="Postal Code" value="24231" />
              <Input label="Country" value="Saudi arab" />

              {/* ================= SAVE BUTTON ================= */}
              <div className="md:col-span-2 flex items-center justify-end gap-4 mt-8">
                {saved && (
                  <span className="text-sm text-green-600">
                    ✔ Profile updated successfully
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-black text-white px-10 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE INPUT ================= */
function Input({ label, value, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        defaultValue={value}
        className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
