import { useState } from "react";
import { FiEdit2, FiEye, FiEyeOff, FiShield, FiLock } from "react-icons/fi";

export default function Setting() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">

          {/* Tabs */}
          <div className="flex gap-10 px-8 pt-6 border-b text-base font-medium">
            <button
              onClick={() => setActiveTab("profile")}
              className={`pb-3 ${
                activeTab === "profile"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Edit Profile
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`pb-3 ${
                activeTab === "security"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Security
            </button>
          </div>

          {/* ================= PROFILE ================= */}
          {activeTab === "profile" && (
            <div className="px-8 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-45 h-45 ml-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[4px]">
                      <img
                        src="https://i.pravatar.cc/400?img=12"
                        alt="profile"
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>

                    <button className="absolute bottom-4 right-4 bg-black w-12 h-12 rounded-full flex items-center justify-center">
                      <FiEdit2 size={18} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

                    <Input label="Your Name" value="Manju" />
                    <Input label="User Name" value="Naik" />

                    <Input label="Email" value="naikmanju716@gmail.com" />

                    {/* Password */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-sm text-gray-600">
                        Password
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        defaultValue="DontTell"
                        className="border border-gray-300 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-10 text-gray-500"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>

                    <Input label="City" value="Bharamasagara" />
                    <Input label="Country" value="India" />
                  </form>

                  {/* Save Button */}
                  <div className="flex justify-end mt-10">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="px-10 py-3 bg-black text-white rounded-xl text-sm hover:opacity-90 transition"
                    >
                      Save Changes
                    </button>
                  </div>

                  {saved && (
                    <p className="text-green-600 text-sm mt-4 text-right">
                      ✔ Profile updated successfully
                    </p>
                  )}
                </div>

              </div>
            </div>
          )}

         {/* ================= SECURITY ================= */}
{activeTab === "security" && (
  <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 space-y-6">

    {/* Change Password */}
    <div className="border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <FiLock /> Change Password
        </h3>
        <p className="text-sm text-gray-500">
          Update your admin password regularly.
        </p>
      </div>

      <button className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-xl text-sm hover:opacity-90 transition">
        Update
      </button>
    </div>

    {/* Two Factor */}
    <div className="border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <FiShield /> Two-Factor Authentication
        </h3>
        <p className="text-sm text-gray-500">
          Add extra security to your account.
        </p>
      </div>

      <button className="w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition">
        Enable
      </button>
    </div>

    {/* Login Activity */}
    <div className="border rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">
        Recent Login Activity
      </h3>

      <ul className="space-y-4 text-sm text-gray-600">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Chrome – India (Today)
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Mobile – 2 days ago
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          Failed attempt – 5 days ago
        </li>
      </ul>
    </div>

  </div>
)}

        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        defaultValue={value}
        className="border border-gray-300 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

/* Security Card */
function SecurityCard({ icon, title, desc, button, primary }) {
  return (
    <div className="border rounded-xl p-6 flex justify-between items-center">
      <div>
        <h3 className="font-semibold flex items-center gap-2 text-lg">
          {icon} {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>

      <button
        className={`px-8 py-2.5 rounded-xl text-sm ${
          primary
            ? "bg-black text-white hover:opacity-90"
            : "border border-gray-300 hover:bg-gray-100"
        }`}
      >
        {button}
      </button>
    </div>
  );
}
