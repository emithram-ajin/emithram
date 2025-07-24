import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, ChevronDown, ChevronUp, HandCoins, Store } from "lucide-react";
import { motion } from "framer-motion";

// Dummy data
const testimonials = [
  {
    text: `Becoming an eMithram CSP changed my life. I not only earn a stable income but also help people in my community access essential services easily. It's more than a job it's a proud responsibility.`,
    name: "Santhosh T.J",
    role: "eMithram CSP Partner, Kannur",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: `Joining eMithram gave me purpose. I now run a successful service center in my village and I’m proud to serve my community.`,
    name: "Anjali M",
    role: "eMithram CSP Partner, Thrissur",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: `I was unemployed before this opportunity. Now I feel financially independent and respected in my area.`,
    name: "Rahul N",
    role: "eMithram CSP Partner, Palakkad",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const faqs = [
  {
    id: 1,
    question: "What types of services do you offer",
    answer:
      "Our business model works with the objective of expanding the scope of entrepreneurship among the common class of people by providing them with an ocean of opportunities under Common Services segment.",
  },
  {
    id: 2,
    question: "Our business model works with the objective of expanding",
    answer:
      "Our business model works with the objective of expanding the scope of entrepreneurship among the common class of people by providing them with an ocean of opportunities under Common Services segment.",
  },
  {
    id: 3,
    question: "Our business model works with the objective of expanding",
    answer:
      "Our business model works with the objective of expanding the scope of entrepreneurship among the common class of people by providing them with an ocean of opportunities under Common Services segment.",
  },
  {
    id: 4,
    question: "Our business model works with the objective of expanding",
    answer:
      "Our business model works with the objective of expanding the scope of entrepreneurship among the common class of people by providing them with an ocean of opportunities under Common Services segment.",
  },
];

function TestimonialSlider() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <>
      <section className="relative bg-[#F2F8F9] py-16 px-4 font-poppins overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:ml-20">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-4xl text-cyan-800 font-medium leading-snug">
              Real stories, real trust hear from our{" "}
              <span className="font-bold">satisfied franchise owners</span>
            </h2>
            <div className="w-35 h-1 bg-cyan-700 mt-4 mb-6"></div>
            <p className="text-cyan-900 text-sm md:text-base leading-relaxed">
              We take pride in empowering individuals through entrepreneurship.
              Through real-life stories and testimonials, hear how our eMithram
              CSP partners have transformed their livelihoods with stable income
              and community service. From delivering essential citizen services
              to building trust in their local areas, our CSPs share how
              eMithram has helped them create a meaningful impact.
            </p>
          </div>

          {/* Right: Testimonial Swiper */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0">
            {/* Layered Backgrounds */}
            <div className="absolute top-[12px] left-0 right-0 h-[270px] bg-white rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] shadow z-0"></div>
            <div className="absolute top-[5px] left-0 right-0 h-[270px] bg-white rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] shadow z-10"></div>

            {/* Foreground Swiper Card */}
            <div className="relative z-20 bg-white rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] shadow-lg overflow-hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-6 pt-8 text-center">
                      <p className="text-gray-700 text-sm md:text-base italic mb-4">
                        “{item.text}”
                      </p>

                      {/* Stars */}
                      <div className="flex justify-center space-x-1 text-yellow-400 text-lg mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            stroke="2"
                            className="fill-yellow-400"
                          />
                        ))}
                      </div>

                      <hr className="my-2" />

                      {/* Profile */}
                      <div className="flex items-center justify-center mt-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full mr-3 border-2 border-gray-300 object-cover"
                        />
                        <div className="text-left">
                          <p className="text-cyan-800 font-semibold text-base">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#F9FAFB"
              d="M0,320 C480,200 960,200 1440,320 L1440,320 L0,320 Z"
            />
          </svg>
                
        </div>
        .
      </section>

      <section className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-start ">
            {/* Left side - Image with badges */}
            <div className="relative hidden lg:block">
              {/* Arched Image Container */}
              <div className="relative overflow-hidden">
                <div className="overflow-hidden flex justify-center">
                  <img
                    src="Asset 30.png"
                    alt="Franchise Discussion"
                    className="w-90 h-100 "
                  />
                </div>

                {/* Top Right Badge - Franchise */}
                <div className="absolute top-10 right-38">
                  <div className="bg-white border border-teal-400 px-4 py-1 rounded-full shadow-sm flex items-center gap-2">
                    <Store className="w-4 h-4 text-[#009689]" />
                    <span className="text-teal-600 text-sm font-semibold">
                      2900+ Franchise
                    </span>
                  </div>
                </div>

                {/* Bottom Left Badge - Low Investment */}
                <div className="absolute bottom-12 left-23">
                  <div className="bg-white border border-teal-400 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                    <HandCoins className="w-4 h-4 text-[#009689]" />
                    <span className="text-teal-600 text-sm font-semibold">
                      LOW INVESTMENT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - FAQ Section */}
            <div className="relative right-13">
              <motion.h2
                className="text-3xl md:text-4xl mb-8 text-teal-600"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Frequently <span className="font-bold">asked</span> questions
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors rounded-lg ${
                        openAccordion === faq.id
                          ? "bg-[#1C6E7C] text-white"
                          : "bg-white text-[#1C6E7C] hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-semibold text-base">
                        {faq.id}. {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center ${
                          openAccordion === faq.id ? "bg-white" : "bg-[#D9F0F4]"
                        }`}
                      >
                        {openAccordion === faq.id ? (
                          <ChevronUp className="w-4 h-4 text-[#3689A1]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#3689A1]" />
                        )}
                      </div>
                    </button>

                    {openAccordion === faq.id && (
                      <div className="px-6 py-4 bg-[#D9F0F4] text-[#1C6E7C]">
                        <p className="text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSlider;
