import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    setToken,
    setCartItems,
    token, // ✅ assuming your ShopContext provides this
  } = useContext(ShopContext);

  const navigate = useNavigate();

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setShowProfileMenu(false);

    setTimeout(() => navigate("/login"), 100);
  };

  // ✅ Navigation guard
  const handleProtectedNavigate = (path) => {
    if (!token && !localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* 🛍️ Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 hover:text-black"
      >
        <span className="font-extrabold text-3xl text-black">Trendigo</span>
      </Link>

      {/* 🧭 Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["HOME", "COLLECTIONS", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-black font-bold" : ""
              }`
            }
          >
            <p>{item}</p>
            {({ isActive }) =>
              isActive ? (
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
              ) : null
            }
          </NavLink>
        ))}
      </ul>

      {/* 🎯 Right Section */}
      <div className="flex items-center gap-6">
        {/* 🔍 Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* 📦 Orders Link */}
        <button
          onClick={() => handleProtectedNavigate("/orders")}
          className="text-sm text-gray-700 hover:text-black"
        >
          Orders
        </button>

        {/* 👤 Profile Dropdown */}
        <div
          className="relative profile-menu"
          onMouseEnter={() => setShowProfileMenu(true)}
          onMouseLeave={() => setShowProfileMenu(false)}
        >
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50 transform transition-all duration-200 ease-in-out ${
              showProfileMenu
                ? "opacity-100 visible translate-y-1"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="flex flex-col gap-2 py-3 px-5 text-gray-500">
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => handleProtectedNavigate("/profile")}
              >
                My Profile
              </p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => handleProtectedNavigate("/orders")}
              >
                Orders
              </p>
              {token || localStorage.getItem("token") ? (
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              ) : (
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/login")}
                >
                  Login
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 🛒 Cart Icon with Counter */}
        <div
          onClick={() => handleProtectedNavigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </div>

        {/* 📱 Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* 📱 Mobile Sidebar */}
      {visible && (
        <div className="fixed inset-0 bg-white transition-transform w-full z-50">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="Back"
            />
            <p>Back</p>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-start pl-6 text-gray-600 text-lg gap-4">
            {["HOME", "COLLECTIONS", "CONTACT"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-medium py-2 pl-6 border-l-4 border-black"
                    : "py-2 pl-6"
                }
              >
                {item}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setVisible(false);
                handleProtectedNavigate("/orders");
              }}
              className="py-2 pl-6 text-left"
            >
              Orders
            </button>

            {token || localStorage.getItem("token") ? (
              <button
                className="py-2 pl-6 text-left hover:text-black"
                onClick={() => {
                  setVisible(false);
                  handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="py-2 pl-6 text-left hover:text-black"
                onClick={() => {
                  setVisible(false);
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
