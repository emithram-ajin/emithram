import React from 'react'

function Contact() {

  return (
    <>
      <div
        className="min-h-screen bg-white px-4 py-10 md:px-10 md:py-16 border-t-8"
        style={{
          borderImage: 'linear-gradient(to right, #44A1A0, #3687A2) 1',
          borderTopStyle: 'solid',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="w-full">
            <h2 className="text-lg md:text-xl font-semibold border-l-4 border-teal-500 bg-teal-100 px-4 py-2 mb-4 md:mb-6 text-teal-700">
              Contact Us
            </h2>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your full name"
                />
              </div>



              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your phone number"
                />
              </div>



              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-vertical"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="w-full">
            <h2 className="text-lg md:text-xl font-semibold border-l-4 border-teal-500 bg-teal-100 px-4 py-2 mb-4 md:mb-6 text-teal-700">
              Registered Office
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    DD Vyapar Bhavan<br />
                    KP Vallon Rd, Kadavanthra, Kochi, Ernakulam<br />
                    Pincode: 682020
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+919539270777" className="hover:text-teal-600 transition-colors">95392 70777</a><br />
                    <a href="tel:+919539270666" className="hover:text-teal-600 transition-colors">95392 70666</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:emithramcare@gmail.com" className="hover:text-teal-600 transition-colors">emithramcare@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map placeholder */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden">
            <iframe
              title="ESTA Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1310634465283!2d76.30848951432713!3d9.966178576430248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db88f0b26e3%3A0xd30147090ff3e114!2sESTA%20ENTERPRISES%20PVT%20LTD%20%7C%20eMitram!5e0!3m2!1sen!2sin!4v1625387691457!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </>
  );


}

export default Contact