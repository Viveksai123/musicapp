import React, { useState } from "react";
import { FaBars, FaMusic, FaVideo, FaShoppingCart, FaTshirt, FaEnvelope, FaHeart } from "react-icons/fa";

const NavBar = ({ username, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(""); // Track the selected tab

  const handleTabClick = (section) => {
    setSelectedTab(section); // Update the selected tab
    scrollToSection(section); // Scroll to the section
    if (menuOpen) setMenuOpen(false); // Close the menu in mobile view
  };

  const tabs = [
    { label: "Performances", icon: <FaMusic />, section: "performances" },
    { label: "Videos", icon: <FaVideo />, section: "videos" },
    { label: "Songs Sale", icon: <FaShoppingCart />, section: "songsSale" },
    { label: "Merchandise", icon: <FaTshirt />, section: "merchandise" },
    { label: "Messages", icon: <FaEnvelope />, section: "messages" },
    { label: "Support", icon: <FaHeart />, section: "support" },
  ];

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-black">
      {/* Navbar Container */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Username */}
        <h2 className="font-bold text-2xl animate__animated animate__fadeInRightBig text-white font-serif">@{username}</h2>

        {/* Hamburger Icon */}
        <button
          className="md:hidden animate__animated animate__fadeInLeftBig text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Tabs */}
        <div className="hidden md:flex space-x-6">
          {tabs.map(({ label, icon, section }) => (
            <button
              key={label}
              onClick={() => handleTabClick(section)}
              className={`flex items-center animate__animated animate__fadeInLeftBig space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === section
                  ? "text-white bg-gradient-to-r from-[#8b1a1a] via-[#7a1616] to-[#6a1212] shadow-lg"
                  : "text-[#b22222] hover:text-white hover:bg-gradient-to-r hover:from-[#8b1a1a] hover:via-[#7a1616] hover:to-[#6a1212] hover:shadow-lg"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
          {tabs.map(({ label, icon, section }) => (
            <button
              key={label}
              onClick={() => handleTabClick(section)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg animate__animated animate__fadeInRightBig transition-all duration-300 ${
                selectedTab === section
                  ? "text-white bg-gradient-to-r from-[#8b1a1a] via-[#7a1616] to-[#6a1212] shadow-lg"
                  : "text-[#b22222] hover:text-white hover:bg-gradient-to-r hover:from-[#8b1a1a] hover:via-[#7a1616] hover:to-[#6a1212] hover:shadow-lg"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
