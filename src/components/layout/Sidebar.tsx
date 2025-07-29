import { useState } from "react";
import { Menu, Home, BarChart3, Users, LineChart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "داشبورد", icon: <Home />, link: "/" },
    { name: "تحلیل قیمت", icon: <BarChart3 />, link: "/analytics" },
    { name: "پیش‌بینی قیمت", icon: <LineChart />, link: "/forecast" },
    { name: "مدیریت کاربران", icon: <Users />, link: "/users" },
  ];

  return (
    <div
      className={`bg-neutral-900 text-white min-h-screen transition-all ${
        open ? "w-60" : "w-16"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {open && <h1 className="text-lg font-bold">داشبورد</h1>}
        <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>

      <ul className="mt-4 space-y-3 pr-4">
        {menus.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition ${
                  isActive ? "bg-red-600" : "hover:bg-neutral-800"
                }`
              }
            >
              {item.icon}
              {open && <span className="text-sm">{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
