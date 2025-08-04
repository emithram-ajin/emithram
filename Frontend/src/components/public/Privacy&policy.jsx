import React, { useState } from 'react'
import Breadcrumbs from './Breadcrumbs'

function Privacypolicy() {

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
    <>
        <div className=" py-3 md:pl-7 ml-5">
        <Breadcrumbs />
      </div>
    <div className="flex flex-col lg:flex-row lg:space-x-5 p-2 sm:p-4 justify-center font-poppins items-start sm:items-center md:items-center lg:items-start">

      {/* Form Section - Shows first on mobile, second on desktop */}
      <div className="order-1 lg:order-2 bg-white w-full sm:w-[450px] h-auto lg:h-[800px] mb-6 lg:mb-0 ">
        <div className="flex font-poppins justify-start items-start">
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-[500px] sm:max-w-md md:max-w-lg mx-auto ">
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
            Privacy Policy
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
            This Privacy Policy explains how emithram.in ("we,") collects, uses, and discloses information about you when you use our website, mobile applications, and other online services (collectively, the "Services").
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-sm sm:text-base lg:text-lg text-[#008C7E] mt-4 sm:mt-[20px] font-poppins">
              <li>
                Personal Information: This may include your name, email address, phone number, billing address, shipping address, and other information you provide to us when you register for an account,
                make a purchase, contact us, or otherwise interact with our Services.
              </li>
              <li>
                Usage Information: We may collect information about how you use our Services, such as the pages you visit,
                the features you use, and the actions you take. This may include information collected through cookies, web beacons,
                and other tracking technologies.
              </li>
              <li>
                Device Information: We may collect information about the device you use to access our Services,
                such as your IP address, device type, operating system, and browser type.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] text-[#008C7E] font-poppins">
              <li>To provide and improve our Services.</li>
              <li>To process your orders and payments.</li>
              <li>To communicate with you about your account and our Services.</li>
              <li>To respond to your inquiries and requests.</li>
              <li>To personalize your experience on our Services.</li>
              <li>To analyze and improve our business.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We may share your information with the following third parties:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-sm sm:text-base lg:text-lg mt-4 sm:mt-[20px] text-[#008C7E] font-poppins">
              <li>
                Service providers who help us operate our Services, such as payment processors, shipping carriers, and marketing platforms.
              </li>
              <li>
                Business partners who offer products or services that may be of interest to you.
              </li>
              <li>
                Law enforcement or other government agencies, as required by law.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              4. Data Security
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We take reasonable measures to protect your information from unauthorized access, use, and disclosure. However,
              no method of transmission over the internet or method of electronic storage is completely secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We use cookies and other tracking technologies to collect information about your use of our Services. You can control the use of cookies through your browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              6. Children's Privacy
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
              8. Contact Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              If you have any questions about this Privacy Policy, please contact us at [insert contact information].
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Privacypolicy