import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../constant/routesPath";
import clsx from "clsx";
import { Menu, X } from "lucide-react"; // Icon library, install using `npm install lucide-react`
import logo from "../assets/ChatGPT Image Jul 19, 2025, 05_59_41 PM.png"; // Adjust the path to your logo image
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
    <nav className="bg-blue-100 p-4">
      <div className="container mx-auto flex justify-between md:justify-around items-center">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-30 h-12 object-cover rounded-full"
          />
        </div>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  clsx(
                    "text-gray-800 font-medium text-lg hover:text-gray-500 transition",
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
            className="text-gray-800 focus:outline-none"
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
                    "block text-gray-800 text-lg text-center font-medium hover:text-gray-500 transition",
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
