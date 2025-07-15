import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaYoutube, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (

    <footer className="bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-16 py-8 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* About Us */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <img
            src="emithram-logo.jpg"
            alt="e-Mithram Logo"
            className="mb-4 sm:mb-5 w-48 sm:w-60 h-[60px] max-w-full"
          />
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">About us</h3>
          <p className="text-sm text-gray-300 leading-relaxed font-poppins mt-3 sm:mt-5">
            Our business model works with the objective of expanding the scope
            of entrepreneurship among the common class of people by providing them
            with an ocean of opportunities
          </p>
        </div>

        {/* Our Services */}
        <div className="lg:border-r lg:border-teal-500 lg:pl-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 font-poppins text-sm mt-3 sm:mt-5">
            <li>• Govt Services</li>
            <li>• Banking Services</li>
            <li>• Matrimony Services</li>
            <li>• Other Services</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="lg:border-r lg:border-teal-500 lg:pl-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Useful Links</h3>
          <ul className="space-y-2 font-poppins text-gray-300 mt-3 sm:mt-5 text-sm">
            <li>• Contact Us</li>
            <li>• Privacy & Policy</li>
            <li>• Refund Policy</li>
            <li>• Terms & Conditions</li>
            <li>• Cookie Policy</li>
          </ul>
        </div>

        {/* Address */}
        <div className="lg:pl-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Address</h3>
          <p className="text-sm text-gray-300 font-poppins leading-relaxed">
            DD Vyapar Bhavan<br />
            KP Vallon Rd, Kadavanthra, Kochi, Ernakulam<br />
            Pincode: 682020
          </p>

          <div className="mt-4 space-y-1">
            <div className="flex items-center text-sm text-gray-300">
              <FaPhone className="mr-2 flex-shrink-0" />
              <span>95392 70777</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <FaPhone className="mr-2 flex-shrink-0" />
              <span>95392 70666</span>
            </div>
            <p className="text-sm text-gray-300">✉ emithramcare@gmail.com</p>
          </div>

          <h3 className="mt-6 text-xl sm:text-2xl font-bold">Follow Us</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            <a href="https://www.youtube.com/@emithram.csc." target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: "2.6rem",            // w-8 = 32px
                  height: "2.6rem",           // h-8 = 32px
                  backgroundColor: "#0d9488", // teal-600
                  borderRadius: "9999px",   // fully rounded
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",         // text-white
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")} // teal-700
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")} // teal-600
              >                <FaYoutube size={14} />
              </div>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: "2.6rem",            // w-8 = 32px
                  height: "2.6rem",           // h-8 = 32px
                  backgroundColor: "#0d9488", // teal-600
                  borderRadius: "9999px",   // fully rounded
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",         // text-white
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")} // teal-700
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")} // teal-600
              >                   <FaFacebookF size={14} />
              </div>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: "2.6rem",            // w-8 = 32px
                  height: "2.6rem",           // h-8 = 32px
                  backgroundColor: "#0d9488", // teal-600
                  borderRadius: "9999px",   // fully rounded
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",         // text-white
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")} // teal-700
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")} // teal-600
              >                   <FaTwitter size={14} />
              </div>
            </a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: "2.6rem",            // w-8 = 32px
                  height: "2.6rem",           // h-8 = 32px
                  backgroundColor: "#0d9488", // teal-600
                  borderRadius: "9999px",   // fully rounded
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",         // text-white
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")} // teal-700
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")} // teal-600
              >                   <FaGooglePlusG size={14} />
              </div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: "2.6rem",            // w-8 = 32px
                  height: "2.6rem",           // h-8 = 32px
                  backgroundColor: "#0d9488", // teal-600
                  borderRadius: "9999px",   // fully rounded
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",         // text-white
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")} // teal-700
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")} // teal-600
              >                   <FaLinkedinIn size={14} />
              </div>
            </a>

          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-[10px] sm:text-xs mt-8 sm:mt-10 pt-4">
        Copyright © 2025 e-Mithram | All Rights Reserved.
      </div>

    </footer>
  );
}
