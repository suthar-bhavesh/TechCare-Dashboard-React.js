import logo from "../assets/Images/TestLogo.png";
import userpic from "../assets/Images/user-Profile.png";
import { NavLink } from "react-router-dom";
import {
  House,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  EllipsisVertical,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="flex">
      <nav className="bg-white rounded-full md:px-7  w-full flex justify-between items-center h-16 shadow-sm px-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-37 object-contain cursor-pointer lg:w-37"
          />
        </div>

        {/* Nav Links */}
        <div className="items-center gap-12 hidden lg:flex xl:gap-3 lg:gap-3 2xl:gap-12">
          <NavLink
            className="flex items-center gap-2 text-sm font-medium"
            to="/"
          >
            <House size={18} />
            Overview
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center text-sm font-medium px-5 py-3 lg:p-2 lg:px-3 rounded-[41px] gap-2 ${isActive ? "bg-[#01F0D0]" : ""}`
            }
            to="/patients"
          >
            <Users size={18} />
            Patients
          </NavLink>

          <NavLink
            className="flex items-center gap-2 text-sm font-medium"
            to="/"
          >
            <Calendar size={18} />
            Schedule
          </NavLink>

          <NavLink
            className="flex items-center gap-2 text-sm font-medium"
            to="/"
          >
            <MessageSquare size={18} />
            Message
          </NavLink>

          <NavLink
            className="flex items-center gap-2 text-sm font-medium"
            to="/"
          >
            <CreditCard size={18} />
            Transactions
          </NavLink>
        </div>

        {/* Right Nav user profile */}
        <div className="hidden lg:flex items-center gap-3">
          <img
            src={userpic}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <p className="font-medium text-sm">Dr. Jose Simmons</p>
            <span className="text-gray-400 text-xs">General Practitioner</span>
          </div>

          <div className="h-8 w-px bg-gray-300 mx-2"></div>

          <div className="flex items-center gap-2">
            <Settings size={18} />
            <EllipsisVertical size={18} />
          </div>
        </div>

        {/* Menu icon */}
        <div className="2xl:hidden md:flex lg:hidden items-center xl:hidden">
          <button onClick={() => setmenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="gap-3 2xl:hidden absolute z-50 top-16 left-0 w-full shadow-md md:flex lg:flex flex flex-col bg-white p-5 transition-all">
            <NavLink
              onClick={() => setmenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium"
              to="/"
            >
              <House size={18} />
              Overview
            </NavLink>

            <NavLink
              onClick={() => setmenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center text-sm font-medium rounded-2xl gap-2 ${isActive ? "bg-[#01F0D0] px-5 py-3" : ""}`
              }
              to="/patients"
            >
              <Users size={18} />
              Patients
            </NavLink>

            <NavLink
              onClick={() => setmenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium"
              to="/schedule"
            >
              <Calendar size={18} />
              Schedule
            </NavLink>

            <NavLink
              onClick={() => setmenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium"
              to="/message"
            >
              <MessageSquare size={18} />
              Message
            </NavLink>

            <NavLink
              onClick={() => setmenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium"
              to="/transactions"
            >
              <CreditCard size={18} />
              Transactions
            </NavLink>

            <div className="h-px w-full bg-gray-300 mx-2"></div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2.5">
                <img
                  src={userpic}
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col leading-tight">
                  <p className="font-medium text-sm">Dr. Jose Simmons</p>
                  <span className="text-gray-400 text-xs">
                    General Practitioner
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Settings size={18} />
                <EllipsisVertical size={18} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
