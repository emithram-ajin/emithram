import React, { useState, useRef } from 'react'
import Breadcrumbs from './Breadcrumbs';




const Refundpolicy = () => {
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
        <div className=" py-3 md:pl-10 ml-5">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 p-2 sm:p-4 justify-center font-poppins items-center">

        {/* Form Section - Shows first on mobile, second on desktop */}
        <div className="order-1 lg:order-2 bg-white w-full sm:w-[450px] h-auto lg:h-[800px] mb-6 lg:mb-0 ">
          <div className="flex font-poppins justify-center items-center">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#008C7E] font-medium">
              Refund Policy | <span className="text-[#008C7E]">eMithram</span>
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E]">
              Emithram.in is committed to providing our customers with the best possible service.
              However, due to the nature of our digital services, we are unable to offer refunds
              on any purchases.
            </p>

            {/* Products Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
                Our products and services are:
              </h2>
              <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg font-poppins">
                <li>
                  Non-tangible and irrevocable. Once a purchase is made, the product or
                  service is immediately available for download or use.
                </li>
                <li>
                  Delivered electronically. This means there are no physical goods to return.
                </li>
              </ul>
            </div>

            {/* Agreement Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
                By purchasing a product or service from emithram, {' '}
                <span className="hidden lg:inline"><br /></span>
                you agree to the following:
              </h2>
              <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg font-poppins">
                <li>You understand that all sales are final and non-refundable.</li>
                <li>
                  You have carefully reviewed the product or service description before making
                  a purchase.
                </li>
                <li>
                  You are aware that emithram.in reserves the right to modify this refund policy
                  at any time without prior notice.
                </li>
              </ul>
            </div>

            {/* Encourage Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#008C7E] font-semibold mb-4">
                We encourage you to:
              </h2>
              <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-[#008C7E] text-sm sm:text-base lg:text-lg font-poppins">
                <li>
                  Read the product or service description carefully before making a purchase.
                </li>
                <li>
                  Contact us if you have any questions about our products or services.
                </li>
              </ul>
            </div>

            {/* Contact Line */}
            <p className="text-sm sm:text-base lg:text-lg text-[#008C7E] font-poppins">
              If you have any questions about this refund policy, please contact {' '}
              <span className="hidden lg:inline"><br /></span>
              us at <span className="font-semibold text-[#008C7E]">emithramcare@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Refundpolicy