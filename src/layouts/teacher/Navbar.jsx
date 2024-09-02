import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
function Navbar({ isMobile, toggleMenu }) {
  const navItems = [
    { name: "Dashboard", path: "/t" },
    { name: "Information System", path: "/t/information-system" },
    { name: "Learning Module", path: "/t/learning-module" },
    { name: "Schedule/Comms", path: "/t/schedule-comms" },
    { name: "Administrations", path: "/t/administrations" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav className="flex justify-between">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative py-2 px-4 ${
                  isActive
                    ? "bg-white text-[#01356B] rounded-xl font-bold"
                    : "text-white"
                }`
              }
            >
              <p>{item.name}</p>
              <div className="bg-white absolute left-1/2 right-0 rounded-full w-2 h-2 mt-3"></div>
            </NavLink>
          ))}
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="flex flex-col gap-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative py-2 px-4 ${
                  isActive
                    ? "bg-white text-[#01356B] rounded-xl font-bold"
                    : "text-white"
                }`
              }
              onClick={toggleMenu} // Close the drawer when a link is clicked
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}
Navbar.propTypes = {
  isMobile: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default Navbar;
