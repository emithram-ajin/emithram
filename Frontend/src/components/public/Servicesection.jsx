import React from "react";
import {
  Phone,
  Grid,
  Check,
} from "lucide-react";

const services = [
  { label: "Govt Services", icon: "section-img.png" },
  { label: "Non-Govt Services", icon: "/icons/non-govt.png" },
  { label: "Banking Services", icon: "/icons/bank.png" },
  { label: "Recharge & Bill Payment", icon: "/icons/recharge.png" },
  { label: "Tax Services", icon: "/icons/tax.png" },
  { label: "Travel Services", icon: "/icons/travel.png" },
  { label: "Education Services", icon: "/icons/education.png" },
  { label: "Marketing Services", icon: "/icons/marketing.png" },
  { label: "Design Services", icon: "/icons/design.png" },
  { label: "Matrimonial", icon: "/icons/matrimonial.png" },
];


const steps = [
  {
    id: 1,
    title: "REQUEST CALL",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: <Phone size={40} className="text-cyan-600" />,
  },

  {
    id: 2,
    title: "PLANNING",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: <Grid size={40} className="text-cyan-600" />,
  },

  {
    id: 3,
    title: "DELIVER",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: <Check size={40} className="text-cyan-600" />,
  },
];
function Servicesection() {
  return (
    <>
    {/* Domains page */}
      <div className="w-full bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center px-3  font-poppins">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-10">
          {/* Image on the left */}
          <div className="flex-shrink-0 hidden md:block">
            <img
              src="section-img.png"
              alt="Section visual"
              className="w-64 md:w-72 lg:w-80 xl:w-80 h-auto rounded-xl"
            />
          </div>
          
          {/* Text content on the right */}
          <div className="my-2 mt-2 sm:mt-3 md:mt-4 flex-1">
            <h1 className="text-[#3988A2] font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-4 mt-10">
              <span className="underline underline-offset-4">Doma</span>
              <span>ins</span>
            </h1>
            
            <p className="text-[#3988A2] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed font-semibold mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8">
              Our business model works with the objective of expanding the scope
              of entrepreneurship among the common class of people by providing
              them with an ocean of opportunities under the Common Services
              segment. Our businesses have expanded all over the Kerala state
              with the increase in number of successful franchisees and happy
              entrepreneurs providing various government and non-government
              online services.
            </p>
            
            <div className="w-full overflow-x-auto">
              <div className="w-fit rounded-full bg-[#F3F7FA] flex justify-start items-center px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                {["icon-1.png", "icon-2.png", "icon-3.png", "icon-4.png", "icon-5.png"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Service icon ${i + 1}`}
                    className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 rounded-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="w-full flex justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-4 font-poppins bg-[#F3F7FA]">
        <div className="w-full max-w-5xl bg-gradient-to-r from-[#34899D] to-teal-600 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 xl:px-4 py-3 sm:py-4 md:py-4 lg:py-5 xl:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 shadow-md">
          <div className="flex-1 w-full sm:w-auto">
            <h2 className="text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold leading-snug">
              ഇപ്പോൾ തന്നെ ഈ മിത്രം ജനസേവന കേന്ദ്രത്തിന്റെ ഭാഗമാകൂ
            </h2>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button
              className="cursor-pointer bg-white text-teal-600 px-4 sm:px-5 md:px-5 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 rounded-full font-medium text-xs sm:text-sm md:text-sm lg:text-base xl:text-base hover:bg-gray-50 transition-all duration-200 shadow hover:shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Get Franchise
            </button>
          </div>
        </div>
      </div>

      {/* our services */}
      <section className="bg-[#F3F7FA] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8  font-poppins">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl  text-[#2A8193] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          Our <span className="underline underline-offset-4 decoration-2 md:decoration-3 font-bold">Services</span>
        </h2>
        <p className="text-[#2A8193] text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg font-medium leading-relaxed px-2 sm:px-4 md:px-0">
          Our business model works with the objective of expanding the scope of entrepreneurship among the common class of people by providing them with an ocean of opportunities under Common Services segment. Our businesses have expanded all over the Kerala state with the increase
        </p>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="block sm:hidden">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-shrink-0">
                <div className="w-16 h-16 bg-[#34899D] rounded-full flex items-center justify-center mb-2 shadow-md">
                  <img src={service.icon} alt={service.label} className="w-8 h-8 object-contain" />
                </div>
                <p className="text-[#2A8193] text-xs font-medium max-w-[80px] leading-tight">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet: 2 columns */}
      <div className="hidden sm:block md:hidden">
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#34899D] rounded-full flex items-center justify-center mb-3 shadow-md">
                <img src={service.icon} alt={service.label} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-[#2A8193] text-sm font-medium leading-tight">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Medium screens: 3 columns */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-22 h-22 bg-[#34899D] rounded-full flex items-center justify-center mb-3 shadow-md">
                <img src={service.icon} alt={service.label} className="w-11 h-11 object-contain" />
              </div>
              <p className="text-[#2A8193] text-sm font-medium leading-tight">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Large screens: 4 columns */}
      <div className="hidden lg:block xl:hidden">
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#34899D] rounded-full flex items-center justify-center mb-3 shadow-md">
                <img src={service.icon} alt={service.label} className="w-12 h-12 object-contain" />
              </div>
              <p className="text-[#2A8193] text-base font-medium leading-tight">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra large screens: 5 columns */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#34899D] rounded-full flex items-center justify-center mb-3 shadow-md">
                <img src={service.icon} alt={service.label} className="w-12 h-12 object-contain" />
              </div>
              <p className="text-[#2A8193] text-base font-medium leading-tight">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for smooth scrolling */}
      <style jsx>{`
        /* Hide scrollbar completely on mobile */
        .overflow-x-auto {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>

{/* our process */}

       <section className="w-full px-4 py-12 bg-white font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl text-cyan-700">
          Our <span className="text-cyan-700 underline font-bold">Process</span>
        </h2>
        <p className=" text-cyan-700 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Our business model works with the objective of expanding the scope of entrepreneurship
          among the common class of people by providing them with an ocean of opportunities under
          Common Services segmen
        </p>

        {/* Steps */}
        <div className="relative mt-14 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              {/* Top number circle */}
              <div className="absolute -top-6 w-6 h-6 bg-[#DCE444] text-black text-xs font-bold rounded-full flex items-center justify-center shadow-md z-10">
                {step.id}
              </div>

              {/* Icon circle */}
              <div className="rounded-full border border-gray-300 p-6 bg-white shadow-md z-10">
                {step.icon}
              </div>

              {/* Title & description */}
              <h3 className="mt-4 text-cyan-700 font-semibold text-sm md:text-base">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm max-w-[150px] mt-1">
                {step.description}
              </p>

              {/* Connecting line (only between items) */}
               {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-[50px] left-[calc(50%+40px)] w-[calc(100%-80px+3.5rem)] h-0.5 bg-gray-300 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}


export default Servicesection;