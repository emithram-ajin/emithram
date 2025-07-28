import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Whyemitram from "./whyemitram";
import Servicesection from "./Servicesection";
import { useTranslation } from "react-i18next";
import Languageselecor from "./language-selector";


function RegistrationForm({ formData, handleChange, handleSubmit, handleMouseEnter, handleMouseLeave }) {
  return (
    <div className="flex items-center justify-center font-poppins h-full">
      <div
        className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-[300px] sm:max-w-xs mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between mb-3 sm:mb-4 text-center">
          <h3 className="w-full text-center text-base sm:text-sm md:text-sm lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3">
            Registration Form
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm"
        >
          <div>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-xs sm:text-xs" required />
          </div>
          <div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-xs sm:text-xs" required />
          </div>
          <div>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-xs sm:text-xs" required />
          </div>
          <div>
            <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 px-2 text-xs sm:text-xs" required />
          </div>
          <div className="flex items-start justify-center gap-2 mt-2">
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="w-4 h-4 flex-shrink-0" required />
            <p className="text-[10px] sm:text-[8px] md:text-[10px] text-gray-500">
              I accept the Terms and Conditions and Privacy Policy.</p>
          </div>
          <button type="submit" className="w-[140px] sm:w-[140px] md:w-[170px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-2.5 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity mx-auto block font-poppins rounded-lg tracking-wide">
            GET AFFILIATION
          </button>
        </form>
      </div>
    </div>
  );
}

function TextContent({ isLargeScreen = false }) {
  const { t } = useTranslation();

  const titleSizes = isLargeScreen ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" : "text-2xl sm:text-3xl md:text-4xl";
  const businessSizes = isLargeScreen ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl" : "text-3xl sm:text-4xl md:text-5xl";
  const subtitleSizes = isLargeScreen ? "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" : "text-sm sm:text-base md:text-lg";
  const descSizes = isLargeScreen ? "text-sm sm:text-sm md:text-base lg:text-lg" : "text-xs sm:text-sm md:text-base";
  const alignment = isLargeScreen ? "text-left" : "text-center md:text-left";

  return (
    <div className={`text-white flex flex-col justify-center space-y-1 sm:space-y-2 md:space-y-3 ${isLargeScreen ? 'space-y-4' : ''} max-w-2xl ${isLargeScreen ? '' : 'mx-auto md:mx-0'} ${alignment}`}>
      <div>
        <h1 className={`${titleSizes} font-bold leading-tight`}>
          {t('hero.title.line1')}<br />
          <span className={`text-[#f2ff3d] font-extrabold ${businessSizes} leading-none block`}>{t('hero.title.highlight')}</span>
        </h1>
        <p className={`${subtitleSizes} inline-block pb-2 sm:pb-3 font-bold`}>{t('hero.tagline')}</p>
        <div className={`h-[4px] sm:h-[4px] md:h-[4px] w-[25%] bg-[#D9E535] ${isLargeScreen ? '' : 'mx-auto md:mx-0'}`}></div>
      </div>
      <div className="space-y-1 sm:space-y-2 md:space-y-3">
        <p className={`${descSizes} font-bold`}>
          {t('hero.description.line1')}
          {isLargeScreen && <br className="hidden sm:block" />}
          {isLargeScreen && <span className="sm:hidden"> </span>} {t('hero.description.line2')}
        </p>
      </div>
      <div className="flex justify-center md:justify-start pt-6 sm:pt-2 md:pt-4 lg:pt-6">
        <button className="w-[160px] sm:w-[140px] sm:py-1 text-[12px] xl:text-[18px] bg-white border border-white text-teal-900 font-semibold rounded-tl-xl rounded-tr-xl rounded-bl-xl hover:bg-teal-900 hover:text-white transition-all duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    agree: false,
  });

  const swiperRef = useRef(null);

  const handleFormMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleFormMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

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

  const containerClasses = "relative w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-cover bg-center overflow-hidden bg-[#1D7675]";
  const mainContainerClasses = "relative w-full max-w-7xl mx-auto  sm:px-4 md:px-6 lg:px-0 xl:px-4 min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-0 font-anek";

  return (
    <>
      <div className="relative min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] w-full overflow-hidden">
        <div className="fixed bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-50 group">
          {/* Sliding help message div */}
          <div className="absolute right-full bottom-1/2 translate-y-1/2 translate-x-1 xs:translate-x-2 sm:translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-green-500 text-white px-2 py-1 xs:px-3 xs:py-1.5 sm:px-2 sm:py-1 rounded-full whitespace-nowrap shadow-lg text-xs xs:text-sm sm:text-base md:text-md">
            Need any help?
          </div>

          {/* WhatsApp icon button with enhanced responsive size */}
          <a
            href="https://wa.me/9539270777"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-14 md:h-14  bg-green-500 text-black rounded-full flex items-center justify-center   transition-all duration-800 group-hover:rotate-[360deg] group-hover:scale-110"
          >
            <img
              src="/support.png"
              alt="Support Icon"
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7  object-contain"
            />
          </a>
        </div>

        <div className="absolute top-4 right-2 sm:right-4 md:right-[130px] z-30">
          <Languageselecor />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          speed={3000}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => { if (swiperRef.current) { swiperRef.current.swiper = swiper; } }}
          className="!w-screen !max-w-none !ml-0 !overflow-hidden"
        >
          {/* --- Slide 1 --- */}
          <SwiperSlide className="!w-screen !max-w-none !px-0">
            <div className={containerClasses} style={{ backgroundImage: "url('/banner1.png')" }}>
              <div className={mainContainerClasses}>
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 py-4 sm:py-6 items-start md:items-center md:min-h-[400px] w-full">
                  <div className="w-full px-2  pr-4">
                    <TextContent />
                  </div>
                  <div className="w-full px-2">
                    <RegistrationForm {...{ formData, handleChange, handleSubmit, handleMouseEnter: handleFormMouseEnter, handleMouseLeave: handleFormMouseLeave }} />
                  </div>
                </div>

                <div className="hidden lg:contents">
                  <div className="col-span-5 h-full flex flex-col justify-center pl-4 pr-2">
                    <TextContent isLargeScreen={true} />
                  </div>
                  <div className="col-span-4 flex items-end justify-center z-60 w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-no-repeat bg-bottom bg-cover px-0" style={{ backgroundImage: "url('/woman.png')" }}></div>
                  <div className="col-span-3 h-full flex items-center justify-center py-4 pl-2 pr-4">
                    <RegistrationForm {...{ formData, handleChange, handleSubmit, handleMouseEnter: handleFormMouseEnter, handleMouseLeave: handleFormMouseLeave }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
      <Whyemitram />
      <Servicesection />
    </>
  );
}

export default Home;