import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 container mx-auto transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <Link
              to="/"
              className="text-xl md:text-3xl font-bold -800 hover:text-blue-600 flex items-center gap-2 transition-colors"
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-8 md:h-10 rounded-lg w-auto"
              />
              Sorkar Sourav
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="hidden md:flex items-center ml-8 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ||
                  (link.path === "/#about" && location.hash === "#about")
                    ? "text-blue-600"
                    : " hover:text-blue-600"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="hidden md:flex items-center mr-8">
  {navLinks.map((link) => (
    <button
      key={link.name}
      onClick={() => handleLinkClick(link.path)}
      className={`text-sm font-medium transition-colors ${
        location.pathname === link.path ||
        (link.path === "/#about" && location.hash === "#about")
          ? "text-blue-600"
          : " hover:text-blue-600"
      }`}
    >
      {link.name}
    </button>
  ))}
</div>; */
}
