import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../constant/routesPath";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

interface MenuItems {
  label: string;
  path: string;
}

const menuItems: MenuItems[] = [
  { label: "Home", path: ROUTES.HOME.path },
  { label: "Service", path: ROUTES.Service.path },
  { label: "Gallery", path: ROUTES.Gallery.path },
  { label: "About", path: ROUTES.About.path },
  { label: "Contact", path: ROUTES.Contact.path },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Employee Form</div>
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  clsx(
                    "text-white font-medium text-lg hover:text-gray-300 transition",
                    isActive && "underline underline-offset-4"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  clsx(
                    "block text-white text-lg font-medium hover:text-gray-300 transition",
                    isActive && "underline underline-offset-4"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
