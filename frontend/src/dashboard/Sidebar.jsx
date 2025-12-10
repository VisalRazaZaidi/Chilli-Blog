import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import toast from "react-hot-toast";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false); // mobile menu
  const [collapsed, setCollapsed] = useState(false); // collapse for wider screens
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
    if (collapsed) setCollapsed(false); // open when navigating (optional)
  };
  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoadingLogout(true);
    try {
      const { data } = await axios.get("http://localhost:4001/api/users/logout", {
        withCredentials: true,
      });
      toast.success(data.message || "Logged out");
      localStorage.removeItem("jwt");
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      const msg = error?.response?.data?.message || error?.message || "Failed to logout";
      toast.error(msg);
    } finally {
      setLoadingLogout(false);
    }
  };

  const avatarSrc = profile?.user?.photo?.url || "https://via.placeholder.com/96?text=Avatar";

  return (
    <>
      {/* Mobile burger */}
      <div className="sm:hidden fixed top-4 left-4 z-50" onClick={() => setShow(!show)}>
        <CiMenuBurger className="text-2xl" aria-hidden="true" />
      </div>

      {/* Sidebar */}
      <div
        className={`h-full shadow-lg fixed top-0 left-0 bg-gray-50 transition-all duration-300 ease-in-out z-40
          ${collapsed ? "w-16" : "w-64"} 
          ${show ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
        style={{ minHeight: "100vh" }}
      >
        {/* Mobile close */}
        <div className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShow(!show)}>
          <BiSolidLeftArrowAlt className="text-2xl" aria-hidden="true" />
        </div>

        {/* Collapse toggle - visible on sm+ (desktop/tablet) */}
        <button
          type="button"
          onClick={() => setCollapsed((s) => !s)}
          className="absolute top-4 right-4 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? <BiChevronRight className="text-lg" /> : <BiChevronLeft className="text-lg" />}
        </button>

        <div className="flex flex-col items-center pt-8 pb-4 px-2">
          <img
            className={`rounded-full mb-2 transition-all duration-300 ${collapsed ? "w-10 h-10" : "w-24 h-24"}`}
            src={avatarSrc}
            alt={profile?.user?.name ? `${profile.user.name} avatar` : "User avatar"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/96?text=Avatar";
            }}
            style={{ objectFit: "cover" }}
            tabIndex={0}
          />
          {!collapsed && (
            <>
              <p className="text-lg font-semibold text-center">{profile?.user?.name}</p>
              <p className="text-sm text-gray-500">{profile?.user?.role}</p>
            </>
          )}
        </div>

        {/* Navigation buttons */}
        <ul className="space-y-3 mx-3 mt-4" role="menu" aria-label="Dashboard navigation">
          <li>
            <button
              onClick={() => handleComponents("My Blogs")}
              className="w-full flex items-center gap-3 px-3 py-2 bg-green-500 rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="My Blogs"
              title="My Blogs"
            >
              <span className="font-semibold text-white text-sm">{collapsed ? "MB" : "MY BLOGS"}</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleComponents("Create Blog")}
              className="w-full flex items-center gap-3 px-3 py-2 bg-blue-400 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Create Blog"
              title="Create Blog"
            >
              <span className="font-semibold text-white text-sm">{collapsed ? "CB" : "CREATE BLOG"}</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleComponents("My Profile")}
              className="w-full flex items-center gap-3 px-3 py-2 bg-pink-500 rounded-lg hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label="My Profile"
              title="My Profile"
            >
              <span className="font-semibold text-white text-sm">{collapsed ? "MP" : "MY PROFILE"}</span>
            </button>
          </li>

          <li>
            <button
              onClick={gotoHome}
              className="w-full flex items-center gap-3 px-3 py-2 bg-red-500 rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label="Home"
              title="Home"
            >
              <span className="font-semibold text-white text-sm">{collapsed ? "H" : "HOME"}</span>
            </button>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-60"
              aria-label="Logout"
              title="Logout"
              disabled={loadingLogout}
            >
              <span className="font-semibold text-white text-sm">{collapsed ? "LO" : loadingLogout ? "LOGGING OUT..." : "LOGOUT"}</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {show && (
        <button
          onClick={() => setShow(false)}
          className="fixed inset-0 bg-black/30 z-30 sm:hidden"
          aria-hidden="true"
          title="Close menu"
        />
      )}
    </>
  );
}

export default Sidebar;
