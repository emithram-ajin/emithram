import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Whyemitram from './whyemitram';
import Servicesection from './Servicesection';

function Home() {
  return (
    <>
      <div className="relative min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div
              className="relative w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/banner1.png')" }}
            >
              {/* Content Container */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] grid grid-cols-1 lg:grid-cols-12  gap-2 sm:gap-4 font-anek">

                {/* When image is hidden (< lg), center text and form */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 py-6 items-start md:items-center md:min-h-[400px]">

                  {/* Text Section */}
                  <div className="text-white z-20 flex flex-col justify-center text-center md:text-left space-y-1 sm:space-y-2 md:space-y-3 max-w-2xl mx-auto md:mx-0">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                      നിങ്ങൾക്കും തുടങ്ങാം
                    </div>

                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        നാട്ടിൽ ഒരു<br />
                        <span className="text-[#D9E535] font-extrabold text-3xl sm:text-4xl md:text-5xl leading-none block">
                          ബിസിനസ്
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg inline-block pb-2 sm:pb-3 font-bold">
                        അതും ഏറ്റവും കുറഞ്ഞ മുതൽമുടക്കിൽ
                      </p>
                      <div className="h-[3px] sm:h-[4px] md:h-[5px] w-[20%] bg-[#D9E535] mt-2 sm:mt-3 md:mt-4 mx-auto md:mx-0"></div>

                    </div>

                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <p className="text-xs sm:text-sm md:text-base font-bold">
                        ഇപ്പോൾ തന്നെ ഇ മിത്രം ജനസേവന കേന്ദ്രത്തിന്റെ
                        ഭാഗമാകു
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] hidden md:block font-bold leading-[1.4] sm:leading-[1.6] text-justify max-w-md mx-auto md:mx-0">
                        എല്ലാ വിധ ലൈസൻസുകളോടു കുടി ഗവണ്മെന്റ് ഇതര സേവനങ്ങൾ
                        പൊതുജനങ്ങൾക് നൽകിക്കൊണ്ട് മാന്യമായ ഒരു വരുമാനം നിങ്ങൾക്കും നേടാം
                      </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <button className="w-[100px] sm:w-[120px] py-2 sm:py-2.5 text-xs sm:text-sm bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-teal-500 transition-all duration-300">
                        Explore More
                      </button>
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="z-20 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-[280px] sm:max-w-xs mx-auto">
                      <div className="flex items-center justify-between mb-3 sm:mb-4 text-center">
                        <h3 className="w-full text-center text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                          Registration Form
                        </h3>
                      </div>

                      <form className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm">
                        <div>
                          <input
                            type="text"
                            placeholder="Name"
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Email address"
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Phone"
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="District"
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>

                        <div className="flex items-start gap-2 mt-2">
                          <input type="checkbox" className="mt-1 w-3 h-3 flex-shrink-0" />
                          <p className="text-[7px] sm:text-[8px] text-gray-500 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt
                          </p>
                        </div>

                        <button className="w-[120px] sm:w-[140px] md:w-[150px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-2.5 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity mx-auto block">
                          GET AFFILIATION
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Large screen layout with image */}
                <div className="hidden lg:contents">
                  {/* Column 1: Text */}
                  <div className="col-span-12 lg:col-span-5 text-white z-20 flex flex-col justify-center h-full text-left space-y-4">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      നിങ്ങൾക്കും തുടങ്ങാം
                    </div>

                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        നാട്ടിൽ ഒരു<br />
                        <span className="text-[#D9E535] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-none block">
                          ബിസിനസ്
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block pb-2 sm:pb-3 font-bold">
                        അതും ഏറ്റവും കുറഞ്ഞ മുതൽമുടക്കിൽ
                      </p>
                      <div className="h-[3px] sm:h-[4px] md:h-[5px] w-[20%] bg-[#D9E535] mt-2 sm:mt-3 md:mt-4 lg:mt-5"></div>

                    </div>

                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                        ഇപ്പോൾ തന്നെ ഇ മിത്രം ജനസേവന കേന്ദ്രത്തിന്റെ
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>ഭാഗമാകു
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs hidden md:block font-bold leading-[1.4] sm:leading-[1.6] text-justify max-w-md">
                        എല്ലാ വിധ ലൈസൻസുകളോടു കുടി ഗവണ്മെന്റ് ഇതര സേവനങ്ങൾ
                        പൊതുജനങ്ങൾക് നൽകിക്കൊണ്ട് മാന്യമായ ഒരു വരുമാനം നിങ്ങൾക്കും നേടാം
                      </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <button className="w-[100px] sm:w-[120px]  sm:py-1 text-xs sm:text-sm bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-teal-500 transition-all duration-300">
                        Explore More
                      </button>
                    </div>
                  </div>

                  {/* Column 2: Image */}
                  <div
                    className="hidden lg:flex lg:col-span-4 items-end z-50 w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-no-repeat bg-bottom bg-cover"
                    style={{ backgroundImage: "url('/woman.png')" }}
                  ></div>

                  {/* Column 3: Registration Form */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-3 z-20 h-full flex items-center justify-center py-4 md:py-0">
                    <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-[280px] sm:max-w-xs mx-auto">
                      <div className="flex items-center justify-between mb-3 sm:mb-4 text-center">
                        <h3 className="w-full text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                          Registration Form
                        </h3>
                      </div>

                      <form className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm">
                        <div>
                          <input
                            type="text"
                            placeholder='Name'
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder='Email address'
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder='Phone'
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder='District'
                            className="w-full placeholder-black border-b border-teal-400 focus:outline-none focus:border-blue-500 pb-1 text-xs sm:text-sm"
                          />
                        </div>

                        <div className="flex items-start gap-2 mt-2">
                          <input type="checkbox" className="mt-1 w-3 h-3 flex-shrink-0" />
                          <p className="text-[7px] sm:text-[8px] text-gray-500 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt
                          </p>
                        </div>

                        <button className="w-[120px] sm:w-[140px] md:w-[150px] bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-2.5 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity mx-auto block">
                          GET AFFILIATION
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: "url('/banner1.png')" }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Welcome to Our Website</h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-xl">
                  slide 2
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full min-h-[450px] sm:min-h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: "url('/banner1.png')" }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Welcome to Our Website</h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-xl">
                  slide 3
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Whyemitram/>
      <Servicesection/>
    </>
  );
}

export default Home;