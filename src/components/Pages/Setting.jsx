import { useState } from "react";
import { FiEdit2, FiShield, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function Setting() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 rounded-xl p-6">
        <div className="bg-white rounded-xl p-8 shadow-sm">

          {/* ================= TABS ================= */}
          <div className="flex gap-8 border-b pb-3 text-sm font-medium">
            <button
              onClick={() => setActiveTab("profile")}
              className={`pb-2 ${
                activeTab === "profile"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Edit Profile
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`pb-2 ${
                activeTab === "security"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Security
            </button>
          </div>

          {/* ================= PROFILE TAB ================= */}
          {activeTab === "profile" && (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-24 h-24">
                  <img
                    src="https://i.pravatar.cc/120?img=12"
                    alt="profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-700 transition">
                    <FiEdit2 size={14} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <Input label="Your Name" value="Manju" />
                  <Input label="User Name" value="Naik" />
                  <Input label="Email" value="naikmanju716@gmail.com" />
                  <Input label="Password" value="********" type="password" />
                  <Input label="City" value="Bharamasagara" />
                  <Input label="Country" value="India" />
                </form>

                <div className="flex justify-end mt-10">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-10 py-2.5 rounded-lg border bg-white hover:bg-gray-100 text-gray-700 transition"
                  >
                    Save
                  </button>
                </div>

                {saved && (
                  <div className="flex justify-end mt-3">
                    <span className="text-sm text-green-600">
                      ✔ Profile updated successfully
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= SECURITY TAB ================= */}
          {activeTab === "security" && (
            <div className="mt-8 space-y-6">

              <div className="border rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    <FiLock /> Change Password
                  </h3>
                  <p className="text-sm text-gray-500">
                    Update your account password regularly.
                  </p>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-90">
                  Update
                </button>
              </div>

              <div className="border rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    <FiShield /> Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-gray-500">
                    Add extra security to your admin account.
                  </p>
                </div>
                <button className="px-6 py-2 border rounded-lg hover:bg-gray-100">
                  Enable
                </button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-3">Recent Login Activity</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🟢 Logged in from Chrome – India (Today)</li>
                  <li>🟢 Logged in from Mobile – 2 days ago</li>
                  <li>🔴 Failed login attempt – 5 days ago</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Logout All Devices</h3>
                  <p className="text-sm text-gray-500">
                    Sign out from all active sessions.
                  </p>
                </div>
                <button className="px-6 py-2 text-red-600 border border-red-500 rounded-lg hover:bg-red-50">
                  Logout All
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= UPDATED INPUT WITH EYE ================= */
function Input({ label, value, type = "text" }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm text-gray-500">{label}</label>

      <input
        type={isPassword && showPassword ? "text" : type}
        defaultValue={value}
        className={`border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 ${
          isPassword ? "pr-10" : ""
        }`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[34px] text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button>
      )}
    </div>
  );
}
