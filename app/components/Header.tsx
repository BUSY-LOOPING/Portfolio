import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const darkRoutes = ['/rates'];
    const isDarkMode = darkRoutes.includes(location.pathname);
    
    if (headerRef.current) {
      if (isDarkMode) {
        headerRef.current.classList.add('dark-mode');
      } else {
        headerRef.current.classList.remove('dark-mode');
      }
    }
  }, [location.pathname]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="w-full pt-[1.5rem] px-[2.5rem] flex flex-row justify-between text-[1rem] items-center"
      >
        <div className="relative inline-block">
          <a href="/" className="inline-block logo-link">
            <div className="logo-content flex flex-row text-nowrap gap-1.5 py-[8px] px-[12px] rounded-[3px]">
              <span>DHRUV</span>
              <img 
                src="/icons/kokeshi_cross.svg" 
                alt="kokeshi cross" 
                className="logo-cross"
              />
              <span>YADAV</span>
            </div>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex flex-row gap-2">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                INTRO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/process"
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                PROCESS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rates"
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                RATES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        <a
          href="/docs/DhruvYadavResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item nav-link hidden md:inline-block"
        >
          RESUME
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden nav-item py-[13px] px-[20px] rounded-full bg-black text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden mobile-menu-overlay"
          onClick={toggleMenu}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md mobile-menu-pattern"></div>
          
          <div 
            className="absolute bottom-0 left-0 right-0 bg-[#f0ece5] rounded-t-[2rem] mobile-menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-4 pb-6">
              <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
            </div>

            <nav className="px-8 pb-12">
              <ul className="flex flex-col gap-2 items-center">
                <li className="w-full text-center">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `mobile-menu-item block py-4 text-2xl font-[SpeziaMono] transition-all duration-300 ${
                        isActive ? "text-black font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    SERVICE
                  </NavLink>
                </li>
                <li className="w-full text-center">
                  <NavLink
                    to="/process"
                    className={({ isActive }) =>
                      `mobile-menu-item block py-4 text-2xl font-[SpeziaMono] transition-all duration-300 ${
                        isActive ? "text-black font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    PROCESS
                  </NavLink>
                </li>
                <li className="w-full text-center">
                  <NavLink
                    to="/rates"
                    className={({ isActive }) =>
                      `mobile-menu-item block py-4 px-8 text-2xl font-[SpeziaMono] transition-all duration-300 ${
                        isActive ? "bg-black text-white rounded-full" : "text-gray-600"
                      }`
                    }
                  >
                    RATES
                  </NavLink>
                </li>
                <li className="w-full text-center">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `mobile-menu-item block py-4 text-2xl font-[SpeziaMono] transition-all duration-300 ${
                        isActive ? "text-black font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    CONTACT
                  </NavLink>
                </li>

                {/* Mobile Resume Link */}
                <li className="w-full text-center">
                  <a
                    href="/docs/DhruvYadavResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-menu-item block py-4 text-2xl font-[SpeziaMono] transition-all duration-300 text-gray-600"
                  >
                    RESUME
                  </a>
                </li>
              </ul>

              {/* Footer Text */}
              <div className="mt-12 text-center text-sm text-gray-400 font-[SpeziaMono]">
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
