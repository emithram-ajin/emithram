import React from 'react';
import { BiLike } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { TiTime, TiMessages } from "react-icons/ti";
import { GrGroup } from "react-icons/gr";


export default function EMithramSection() {

    return (
        <>
            <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile and Tablet: Stack vertically, Desktop: Side by side */}
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start">

                        {/* Left Content */}
                        <div className="space-y-6 mt-8 sm:mt-16 lg:mt-[130px] px-2 sm:px-4 lg:px-0">
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-2">
                                    <span className="font-normal text-[#2f849c]">Why </span>
                                    <span className="font-bold text-[#2f849c]">e-</span>
                                    <span className="font-bold text-[#2f849c]">Mithram</span>
                                </h1>
                                <div className="w-32 sm:w-40 lg:w-48 h-1 mt-3 lg:mt-[15px] ml-0 sm:ml-2 lg:ml-[12px] bg-teal-600"></div>
                            </div>

                            <div>
                                <p className="text-teal-700 font-medium text-base sm:text-lg lg:text-[19px] leading-relaxed font-poppins lg:leading-[1.6rem] max-w-none lg:max-w-[750px]">
                                    Our business model works with the objective of expanding the scope of entrepreneurship
                                    among the common class of people by providing them with an ocean of opportunities under
                                    the Common Services segment. Our businesses have expanded all over the Kerala state
                                    with the increase in number of successful franchisees and happy entrepreneurs providing
                                    various government and non-government online services.
                                </p>
                            </div>

                            <div>
                                <p className="text-teal-700 font-medium text-base sm:text-lg lg:text-[19px] leading-relaxed font-poppins lg:leading-[1.6rem] max-w-none lg:max-w-[700px]">
                                    Need to visit one of our CSP? Please use our search for CSP functionality to find a CSP
                                    near you. We have an exclusive training and backend support for all the franchisee
                                    members who are registered with us. We also take every initiative to improve the quality
                                    of our services and subsequently work on the updates at every level.
                                </p>
                            </div>

                            {/* Button */}
                            <button className=" text-white font-semibold py-2 px-4 rounded hover:from-teal-700 hover:to-teal-800 transition-all duration-300" style={{
                                background: "linear-gradient(to right, #44A1A0, #3687A2)", // teal-600 → teal-700
                            }}>
                                Register a CSP
                            </button>

                        </div>

                        <div className="w-full max-w-md sm:max-w-lg lg:w-[520px] h-64 sm:h-80 lg:h-[320px] mt-8 lg:mt-[215px] mx-auto lg:mx-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl lg:rounded-[30px] shadow-[0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden relative text-white">
                            {/* Video element */}
                            <video
                                src="emithram.mp4"
                                className="w-[520px] h-[320px]  object-cover"
                                autoPlay
                                loop
                                muted
                                controls
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 text-center " style={{ background: "linear-gradient(to right, #44A1A0, #3687A2)" }}>
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2">
                    <span className="font-normal font-poppins text-[28px] sm:text-[35px] md:text-[45px]">Our </span>
                    <span className="font-bold font-poppins text-[32px] sm:text-[40px] md:text-[50px]">Advantages</span>
                </h2>

                <div className="w-20 sm:w-24 md:w-28 h-1 bg-white mx-auto mb-4 sm:mb-6"></div>

                {/* Subheading */}
                <p className="text-base sm:text-lg max-w-[90%] sm:max-w-[600px] md:max-w-[900px] text-white mx-auto font-poppins mb-8 sm:mb-10 md:mb-12 px-2">
                    Our business model works with the objective of expanding the scope of entrepreneurship among
                </p>

                {/* Features Grid */}

                <div className="w-full px-2 sm:px-4 lg:px-6 ">
                    {/* Mobile Horizontal Scroll */}
                    <div className="block sm:hidden">
                        <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <style jsx>{`.scrollbar-hide::-webkit-scrollbar {display: none;}`}</style>

                            {/* Mobile Feature Items */}
                            <div className="flex flex-col items-center min-w-[120px] group">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
                                    <IoBulbOutline className="text-2xl text-gray-700" />
                                </div>
                                <p className="text-lg text-white font-bold font-poppins mb-1 text-center">2600+</p>
                                <p className="text-xs text-white font-poppins font-medium text-center leading-tight">Franchise All Over Kerala</p>
                            </div>

                            <div className="flex flex-col items-center min-w-[120px] group">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
                                    <BiLike className="text-2xl text-gray-700" />
                                </div>
                                <p className="text-lg text-white font-bold font-poppins mb-1 text-center">300+</p>
                                <p className="text-xs text-white font-poppins font-medium text-center leading-tight">Online Services</p>
                            </div>

                            <div className="flex flex-col items-center min-w-[120px] group">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
                                    <TiTime className="text-2xl text-gray-700" />
                                </div>
                                <p className="text-lg text-white font-bold font-poppins mb-1 text-center">24/7</p>
                                <p className="text-xs text-white font-poppins font-medium text-center leading-tight">Backend Support*</p>
                            </div>

                            <div className="flex flex-col items-center min-w-[120px] group">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
                                    <GrGroup className="text-2xl text-gray-700" />
                                </div>
                                <p className="text-lg text-white font-bold font-poppins mb-1 text-center">Community</p>
                                <p className="text-xs text-white font-poppins font-medium text-center leading-tight">Support</p>
                            </div>

                            <div className="flex flex-col items-center min-w-[120px] group">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
                                    <TiMessages className="text-2xl text-gray-700" />
                                </div>
                                <p className="text-lg text-white font-bold font-poppins mb-1 text-center">Licensing &</p>
                                <p className="text-xs text-white font-poppins font-medium text-center leading-tight">Training</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Grid Layout */}
                    <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-5 lg:gap-4 xl:gap-6 justify-items-center items-start mx-auto max-w-5xl">

                        {/* Feature 1 */}
                        <div className="flex flex-col items-center w-full max-w-[200px] sm:max-w-none group hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="bg-white rounded-full w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out">
                                <IoBulbOutline className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                            </div>
                            <p className="text-xl md:text-xl lg:text-xl xl:text-2xl text-white font-bold font-poppins mb-1 sm:mb-2 text-center">
                                2600+
                            </p>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-base text-white font-poppins font-medium text-center leading-tight px-1 sm:px-2">
                                Franchise All<br />Over Kerala
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center w-full max-w-[200px] sm:max-w-none group hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="bg-white rounded-full w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out">
                                <BiLike className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                            </div>
                            <p className="text-xl md:text-xl lg:text-xl xl:text-2xl text-white font-bold font-poppins mb-1 sm:mb-2 text-center">
                                300+
                            </p>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-base text-white font-poppins font-medium text-center leading-tight px-1 sm:px-2">
                                Online Services
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center w-full max-w-[200px] sm:max-w-none group hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="bg-white rounded-full w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out">
                                <TiTime className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                            </div>
                            <p className="text-xl md:text-xl lg:text-xl xl:text-2xl text-white font-bold font-poppins mb-1 sm:mb-2 text-center">
                                24/7
                            </p>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-base text-white font-poppins font-medium text-center leading-tight px-1 sm:px-2">
                                Backend Support*
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center w-full max-w-[200px] sm:max-w-none group hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="bg-white rounded-full w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out">
                                <GrGroup className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                            </div>
                            <p className="text-xl md:text-xl lg:text-xl xl:text-2xl text-white font-bold font-poppins mb-1 sm:mb-2 text-center">
                                Community
                            </p>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-base text-white font-poppins font-medium text-center leading-tight px-1 sm:px-2">
                                Support
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="flex flex-col items-center w-full max-w-[200px] sm:max-w-none group hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="bg-white rounded-full w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out">
                                <TiMessages className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                            </div>
                            <p className="text-xl md:text-xl lg:text-xl xl:text-2xl text-white font-bold font-poppins mb-1 sm:mb-2 text-center">
                                Licensing &
                            </p>
                            <p className="text-sm md:text-sm lg:text-sm xl:text-base text-white font-poppins font-medium text-center leading-tight px-1 sm:px-2">
                                Training
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}