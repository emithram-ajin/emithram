import React, { useState } from "react";
import { CheckCircle,X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
  const [activeTab, setActiveTab] = useState("vision");
  //   const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const tabData = {
    vision: {
      title: "Key Features of Our eMithram CSP Vision:",
      points: [
        "Focus on Continuous Improvement and Adaptation",
        "Maintain Transparency and Integrity in All Operations",
        "Provide Comprehensive and Accessible Digital Services",
        "Offer Tailored Support and Training for Every Franchisee",
        "Empower Entrepreneurs Through Sustainable Business Models",
        "Ensure Service Availability Across Urban and Rural India",
      ],
    },
    mission: {
      title: "Our Mission at eMithram CSP:",
      points: [
        "To create a seamless and inclusive digital ecosystem",
        "Bridge the gap between citizens and essential services",
        "Build a network of empowered franchisees across India",
        "Support community-level entrepreneurs in their growth",
        "Provide consistent service quality with accountability",
      ],
    },
    values: {
      title: "Core Values That Drive eMithram CSP:",
      points: [
        "Integrity – Honesty and transparency in everything we do",
        "Inclusivity – Serve all communities regardless of location",
        "Innovation – Adopt and evolve with the latest technology",
        "Collaboration – Work closely with partners and franchisees",
        "Excellence – Strive for quality in every service delivered",
      ],
    },
  };

  const whyChooseFeatures = [
    { icon: "About l2.png", label: "Proven Experience" },
    { icon: "About l3.png", label: "Widespread Network" },
    { icon: "About l4.png", label: "Full Support System" },
    { icon: "About l1.png", label: "Entrepreneur-Focused" },
  ];

  const tabs = ["vision", "mission", "values"];
  const getContent = () => tabData[activeTab]?.points || [];
  const getTitle = () => tabData[activeTab]?.title || "";

  return (
    <section className="w-full min-h-screen bg-gray-50 font-poppins flex flex-col items-center px-0">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row max-w-6xl mx-auto gap-2 mt-4 px-4">
        <div
          className="h-[100px] xs:h-[120px] sm:h-[140px] md:h-[160px] lg:h-[140px] xl:h-[160px] w-full lg:w-[400px] xl:w-[450px] bg-[#276664] rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-2xl lg:rounded-br-2xl bg-no-repeat bg-center bg-cover order-1 lg:order-2"
          style={{ backgroundImage: "url('/Asset 4.png')" }}
        />
        <div className="h-[100px] xs:h-[120px] sm:h-[140px] md:h-[160px] lg:h-[140px] xl:h-[160px] w-full lg:w-[650px] xl:w-[700px] bg-[#1AA39D] rounded-bl-2xl rounded-br-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none lg:rounded-br-none flex items-center px-4 xl:px-8 order-2 lg:order-1">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight">
            <span className="block sm:inline">Connecting Communities</span>
            <span className="block sm:inline"> Through a</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">Sustainable Digital Service</span>
            <br className="hidden sm:block" />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl block">
              Revolution
            </span>
          </h2>
        </div>
      </div>

      {/* Hero + Stats */}
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between bg-gray-50 px-4 py-8 gap-6">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl lg:text-5xl font-semibold text-[#088275] leading-tight">
            Transforming Lives <br />
            Through <span className="font-bold">Digital Services and</span>
            <br />
            <span className="font-bold">Entrepreneurship</span>
          </h1>
          <p className="text-gray-700 text-base lg:text-lg">
            With 10+ years in Common Services, we empower individuals to offer
            digital, education, IT, and multi-courier services through a unified
            platform.As a product launch hub, we help entrepreneurs reach 3000+
            service points across Kerala driving accessibility, innovation, and
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white shadow-md rounded-xl px-6 py-4 w-full sm:w-1/2 text-center">
              <div className="text-3xl font-bold text-[#088275]">2940+</div>
              <div className="text-gray-600 text-sm">Successful Franchise</div>
            </div>
            <div className="bg-white shadow-md rounded-xl px-6 py-4 w-full sm:w-1/2 text-center">
              <div className="text-3xl font-bold text-[#088275]">10+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold px-6 py-3 text-lg rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            Start Your Franchise Journey
          </button>
        </div>
           <div className="w-full lg:w-1/2 flex justify-center relative">
      {/* Image container with relative positioning */}
      <img
        src="Asset 1.png"
        alt="Founder"
        className="max-w-sm w-full h-auto"
      />

      {/* Play Button – centered absolutely over the image */}
      <button
        onClick={openModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#088275]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-white rounded-full p-1 hover:bg-gray-200"
            >
              <X/>
            </button>

            <div className="w-full h-64 sm:h-96">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CRoFQeIHL6Y?autoplay=1"
                title="Video Player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-6xl mx-auto flex justify-center">
        <div className="w-full bg-gray-100 py-12 px-4 md:px-8 rounded-3xl shadow-md border border-gray-200">
          <div className="flex flex-wrap gap-4 mb-6 w-full max-w-6xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-teal-600 text-white"
                    : "border border-teal-500 text-teal-600 hover:bg-teal-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {`Our ${tab}`}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-1/2 max-w-lg mx-auto">
              <div
                className="w-full h-[300px] bg-cover bg-center bg-no-repeat rounded-bl-2xl"
                style={{ backgroundImage: "url('/vision.png')" }}
              />
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 text-center md:text-left">
                {getTitle()}
              </h2>
              <ul className="space-y-3 text-gray-700">
                {getContent().map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-500 mr-2">
                      <CheckCircle size={20} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-5xl mx-auto px-4 py-4  flex justify-center font-poppins ">
        <div className="w-full flex justify-between items-center bg-gradient-to-r from-[#00C566] to-[#D1D900] rounded-xl px-4 sm:px-6 py-3 shadow-md">
          <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl">
            Your journey to income and impact begins here
          </h2>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-[#006F59] font-semibold text-sm sm:text-base px-5 py-2 rounded-full border border-[#006F59] hover:bg-gray-100 transition duration-200"
          >
            Apply for Franchise
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full max-w-6xl mx-auto flex justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 px-4 py-4 rounded-3xl mt-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-[#00735D] text-lg font-medium uppercase mb-2">
              why choose us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#00735D] mb-4">
              Why You Should <span className="font-bold">Choose Us?</span>
            </h2>
            <div className="w-16 h-1 bg-[#00735D] mb-6"></div>
            <p className="text-[#006A72] text-sm sm:text-base mb-8 max-w-lg">
              Partnering with eMithram CSP connects you to a reliable network
              built on years of experience, a strong presence across Kerala, and
              a passion for empowering entrepreneurs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {whyChooseFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00B96B] shadow">
                    <img src={feature.icon} alt={feature.label} />
                  </div>
                  <p className="font-semibold text-[#00735D] text-base">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="About l5.png"
              alt="eMithram office"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
