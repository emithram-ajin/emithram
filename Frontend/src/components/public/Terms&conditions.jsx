import React, { useState } from 'react'

const Termsconditions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", district: "", agree: false });
  };
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 p-2 sm:p-4 justify-center font-poppins items-start sm:items-center md:items-center lg:items-start">
      {/* Form Section - Shows first on mobile, second on desktop */}
      <div className="order-1 lg:order-2 bg-white w-full sm:w-[450px] h-auto lg:h-[800px] mb-6 lg:mb-0">
        <div className="flex font-poppins justify-start items-start">
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-[500px] sm:max-w-md md:max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-3 sm:mb-4 text-center">
              <h3 className="w-full text-center text-sm sm:text-base md:text-sm lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3">
                . Registration Form .
              </h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-sm sm:text-xs lg:text-xs"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-sm sm:text-xs lg:text-xs"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-sm sm:text-xs lg:text-xs"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-sm sm:text-xs lg:text-xs"
                  required
                />
              </div>
              <div className="flex items-start justify-center gap-2 mt-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4 flex-shrink-0"
                  required
                />
                <p className="text-xs sm:text-[8px] md:text-[10px] lg:text-[10px] text-gray-500">
                  I accept the Terms and Conditions and Privacy Policy.
                </p>
              </div>
              <button
                type="submit"
                className="w-full sm:w-[140px] md:w-[140px] lg:w-[170px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-2.5 font-bold text-sm sm:text-xs lg:text-sm hover:opacity-90 transition-opacity mx-auto block font-poppins rounded-lg tracking-wide"
              >
                GET AFFILIATION
              </button>
            </form>
          </div>
        </div>
        <div
          className="rounded-2xl mt-8 lg:mt-[50px] w-full max-w-[350px] h-[200px] sm:h-[250px] mx-auto flex flex-col md:flex-row items-center gap-4 bg-gradient-to-br from-blue-400 to-teal-500"
          style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-semibold bg-[url('short.png')] bg-cover bg-center">
          </div>
        </div>
      </div>

      {/* Text Content Section - Shows second on mobile, first on desktop */}
      <div className="order-2 lg:order-1 p-2 sm:p-4 w-full lg:w-[850px] h-auto rounded text-[#008C7E] mb-8 lg:mb-[80px] font-poppins">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-6 sm:space-y-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#008C7E] font-medium">
            Terms and Conditions
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
            Effective Date: [Insert Date]
          </h2>

          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
            Welcome to our website. By accessing and using this website, you agree to comply with the following Terms and Conditions. Please read them carefully before using our services.
          </p>

          {/* Use of Website Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Use of Website
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>
                This website is intended to provide information about our Common Services Provider (CSP) franchise model, our services,
                and locations of our franchise outlets.
              </li>
              <li>
                By using this website, you agree to use it only for lawful purposes and not for any illegal or unauthorized activity.
              </li>
            </ul>
          </div>

          {/* Franchise Model Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Franchise Model
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>Our business model aims to promote entrepreneurship among individuals by offering a wide range of government and non-government digital services.</li>
              <li>Becoming a franchisee requires completing the official registration process, including training and compliance with operational guidelines.</li>
              <li>We reserve the right to approve or reject any franchise application at our sole discretion.</li>
            </ul>
          </div>

          {/* Training and Support Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Training and Support
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>All registered franchisees will be provided with access to training and backend support.</li>
              <li>Ongoing updates and quality improvement measures will be implemented regularly to ensure the best experience and service standards.</li>
            </ul>
          </div>

          {/* CSP Locator Tool Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              CSP Locator Tool
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>Our "Search for CSP" functionality is designed to help users locate the nearest franchise outlet.</li>
              <li>We make reasonable efforts to maintain the accuracy of this tool but do not guarantee the availability or performance of any listed CSP.</li>
            </ul>
          </div>

          {/* Service Availability Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Service Availability
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>
                While we strive to keep the website and all digital services available at all times, we do not guarantee uninterrupted access.
                Scheduled maintenance or unforeseen technical issues may result in temporary service disruptions.
              </li>
            </ul>
          </div>

          {/* Intellectual Property Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Intellectual Property
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>All content on this website, including logos, graphics, text, and software, is the property of [Company Name] and protected by applicable intellectual property laws.</li>
              <li>Unauthorized reproduction or distribution of any content from this website is strictly prohibited.</li>
            </ul>
          </div>

          {/* Limitation of Liability Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Limitation of Liability
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>We are not responsible for any direct, indirect, or consequential damages arising from the use of this website or services obtained through our franchise outlets.</li>
              <li>Franchisees operate as independent entities and are solely responsible for the services they offer.</li>
            </ul>
          </div>

          {/* Changes to Terms Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Changes to Terms
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] font-poppins">
              <li>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website.</li>
              <li>It is your responsibility to review these terms periodically for updates.</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#008C7E] font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              For questions or concerns regarding these Terms and Conditions, please contact us at:{' '}
              <span className="font-semibold text-[#008C7E]">estaenterprises@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Termsconditions