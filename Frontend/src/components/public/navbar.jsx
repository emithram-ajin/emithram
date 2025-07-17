import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/emithramlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faTwitter, faGooglePlusG, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';



export default function Navbar() {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CERTIFICATIONS", path: "/certifications" },
    { label: "FRANCHISE", path: "/franchise" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <>
      <div className="bg-[#235764] w-full  top-0 z-50 h-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@emithram.csc."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 items-center justify-center hover:scale-105 transition"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-white text-lg" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 items-center justify-center hover:scale-105 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg" />
            </a>

            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 items-center justify-center hover:scale-105 transition"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 items-center justify-center hover:scale-105 transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-lg" />
            </a>

            <a
              href="https://www.youtube.com/@emithram.csc."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 items-center justify-center hover:scale-105 transition"
            >
              <FontAwesomeIcon icon={faGooglePlusG} className="text-white text-lg" />
            </a>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} className="text-[#46ab50]" />
              <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold">+91 9048853222</span>
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} className="text-[#46ab50]" />
              <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold">+91 9539270777</span>
            </span>
            <button
              className="bg-white px-1 sm:px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold text-[#235764]"
              onClick={() => {
                const confirmed = window.confirm("Do you want to call +91 8281033673");
                if (confirmed) {
                  window.location.href = "tel:+91 8281033673"; 
                }
              }}
            >
              CALL NOW
            </button>
          </div>
        </div>
      </div>


      <nav className="bg-white  w-full z-50 shadow-md font-poppins top-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="relative group px-1  text-sm lg:text-base "
              >
                {({ isActive }) => (
                  <>
                    <span className={`${isActive ? "font-bold text-black" : "text-gray-800"}`}>
                      {item.label}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-[5px] bg-[#D9E535] transition-all  ease-in-out ${isActive ? "w-full" : "w-0"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="bg-[#D9E535] px-4 py-1.5 text-sm lg:text-base font-bold rounded">
              LOGIN
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-50 px-4 pb-4 pt-2">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 ${isActive ? "font-bold underline underline-offset-4 text-black decoration-[#D9E535]" : "text-black"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <button className="mt-2 w-full bg-[#D9E535] px-4 py-2 rounded font-bold text-black">
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
