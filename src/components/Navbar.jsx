import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      // navigate to the root + hash so the URL updates
      navigate(`/#${id}`);
      // try scrolling to the element; if not present yet, retry shortly
      const scrollToId = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      scrollToId();
      setTimeout(scrollToId, 120);
    } else {
      navigate(path);
    }
  };

  // track which section is currently visible
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = navLinks
      .map((l) => (l.path.startsWith("/#") ? l.path.substring(2) : null))
      .filter(Boolean);

    let observer = null;
    let pollInterval = null;

    const createObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length === 0) return;
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const top = visible[0];
          if (top && top.intersectionRatio > 0.25) {
            setActiveSection(top.target.id);
          }
        },
        { root: null, rootMargin: "-20% 0px -30% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
    };

    const tryAttach = () => {
      const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (elements.length === 0) return false;
      if (!observer) createObserver();
      elements.forEach((el) => observer.observe(el));
      return true;
    };

    // try immediately; otherwise poll until sections mount (useful during SPA navigation)
    if (!tryAttach()) {
      let attempts = 0;
      pollInterval = setInterval(() => {
        attempts += 1;
        if (tryAttach() || attempts > 30) {
          clearInterval(pollInterval);
        }
      }, 200);
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveSection(hash);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (observer) observer.disconnect();
      if (pollInterval) clearInterval(pollInterval);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 container mx-auto transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="btn btn-ghost"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-base-100 rounded-b-md shadow p-4 z-50">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const id = link.path.startsWith("/#") ? link.path.substring(2) : null;
                    const isActive = id ? activeSection === id : location.pathname === link.path;
                    return (
                      <li key={link.name}>
                        <button
                          onClick={() => handleLinkClick(link.path)}
                          className={`text-sm font-medium transform transition-transform duration-200 ${
                            isActive ? "text-blue-600 scale-[1.2]" : "hover:text-blue-600"
                          }`}
                        >
                          {link.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
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
            {navLinks.map((link) => {
              const id = link.path.startsWith("/#") ? link.path.substring(2) : null;
              const isActive = id ? activeSection === id : location.pathname === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-medium transform transition-transform duration-200 ${
                    isActive ? "text-blue-600 scale-[1.2]" : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
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
