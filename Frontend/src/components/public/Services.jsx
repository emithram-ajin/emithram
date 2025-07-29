import React, { useState } from 'react';

const tabs = [
    'Government',
    'Banking',
    'Utility',
    'Registration & Tax',
    'Education',
    'Travel',
    'Multi Courier',
];

const services = {
  "Government": [
    { "title": "k Smart", "image": "e-district.jpeg", "subServices": ['Income Certificate','Caste Certificate','Nativity Certificate','One and the Same Certificate','Community certificate','Relationship Certificate','Family Membership Certificate','Non-Remarriage Certificate','Possession and Non-Attachment Certificate','Domicile Certificate','Identification Certificate','Valuation Certificate','Widow-Widower Certificate','Dependency Certificate','Destitute Certificate','Solvency Certificate','Inter-Caste Marriage Certificate','Conversion Certificate','Minority Certificate'] },
    { "title": "Banking", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2", "SubService 3"] },
    { "title": "Aadhar Card", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2", "SubService 3"] },
    { "title": "Ration Card", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] },
    { "title": "Government Service 5", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Government Service 6", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Government Service 7", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2", "SubService 3"] },
    { "title": "Government Service 8", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B", "SubService C"] },
    { "title": "Government Service 9", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y"] },
    { "title": "Government Service 10", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] },
    { "title": "Government Service 11", "image": "e-district.jpeg", "subServices": ["SubService A"] },
    { "title": "Government Service 12", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y", "SubService Z"] },
    { "title": "Government Service 13", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Government Service 14", "image": "e-district.jpeg", "subServices": ["SubService 2", "SubService 3"] },
    { "title": "Government Service 15", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Government Service 16", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Government Service 17", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y"] },
    { "title": "Government Service 18", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Government Service 19", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Government Service 20", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y", "SubService Z"] },
    { "title": "Government Service 21", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] },
    { "title": "Government Service 22", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B", "SubService C"] },
    { "title": "Government Service 23", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] }
  ],
  "Banking": [
    { "title": "Banking Service 1", "image": "e-district.jpeg", "subServices": ["Account Opening", "ATM Services"] },
    { "title": "Banking Service 2", "image": "e-district.jpeg", "subServices": ["Loan Services", "Net Banking"] },
    { "title": "Banking Service 3", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Banking Service 4", "image": "e-district.jpeg", "subServices": ["Cheque Book Request"] },
    { "title": "Banking Service 5", "image": "e-district.jpeg", "subServices": ["SubService X"] },
    { "title": "Banking Service 6", "image": "e-district.jpeg", "subServices": ["Mini Statement"] },
    { "title": "Banking Service 7", "image": "e-district.jpeg", "subServices": ["Balance Enquiry"] },
    { "title": "Banking Service 8", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Banking Service 9", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Banking Service 10", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] }
  ],
  "Utility": [
    { "title": "Utility Service 1", "image": "e-district.jpeg", "subServices": ["Electric Bill"] },
    { "title": "Utility Service 2", "image": "e-district.jpeg", "subServices": ["Water Bill"] },
    { "title": "Utility Service 3", "image": "e-district.jpeg", "subServices": ["Gas Connection"] },
    { "title": "Utility Service 4", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Utility Service 5", "image": "e-district.jpeg", "subServices": ["SubService A"] },
    { "title": "Utility Service 6", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] },
    { "title": "Utility Service 7", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y"] },
    { "title": "Utility Service 8", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Utility Service 9", "image": "e-district.jpeg", "subServices": ["SubService 1"] }
  ],
  "Registration & Tax": [
    { "title": "Tax Service 1", "image": "e-district.jpeg", "subServices": ["Property Tax", "Registration Certificate"] },
    { "title": "Tax Service 2", "image": "e-district.jpeg", "subServices": ["SubService A"] },
    { "title": "Tax Service 3", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Tax Service 4", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Y"] },
    { "title": "Tax Service 5", "image": "e-district.jpeg", "subServices": ["SubService 1", "SubService 2"] },
    { "title": "Tax Service 6", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Tax Service 7", "image": "e-district.jpeg", "subServices": ["SubService X"] },
    { "title": "Tax Service 8", "image": "e-district.jpeg", "subServices": ["SubService Y", "SubService Z"] }
  ],
  "Education": [
    { "title": "Education Service 1", "image": "e-district.jpeg", "subServices": ["Exam Registration", "Certificate Download"] },
    { "title": "Education Service 2", "image": "e-district.jpeg", "subServices": ["SubService A"] },
    { "title": "Education Service 3", "image": "e-district.jpeg", "subServices": ["SubService X"] },
    { "title": "Education Service 4", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Education Service 5", "image": "e-district.jpeg", "subServices": ["SubService Y"] },
    { "title": "Education Service 6", "image": "e-district.jpeg", "subServices": ["SubService X", "SubService Z"] },
    { "title": "Education Service 7", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService C"] }
  ],
  "Travel": [
    { "title": "Travel Service 1", "image": "e-district.jpeg", "subServices": ["Train Booking", "Flight Enquiry"] },
    { "title": "Travel Service 2", "image": "e-district.jpeg", "subServices": ["SubService X"] },
    { "title": "Travel Service 3", "image": "e-district.jpeg", "subServices": ["SubService Y"] },
    { "title": "Travel Service 4", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] },
    { "title": "Travel Service 5", "image": "e-district.jpeg", "subServices": ["SubService 1"] },
    { "title": "Travel Service 6", "image": "e-district.jpeg", "subServices": ["SubService X"] }
  ],
  "Multi Courier": [
    { "title": "Courier Service 1", "image": "e-district.jpeg", "subServices": ["Domestic", "International"] },
    { "title": "Courier Service 2", "image": "e-district.jpeg", "subServices": ["Same Day Delivery"] },
    { "title": "Courier Service 3", "image": "e-district.jpeg", "subServices": ["Tracking", "Insurance"] },
    { "title": "Courier Service 4", "image": "e-district.jpeg", "subServices": ["Pickup Service"] },
    { "title": "Courier Service 5", "image": "e-district.jpeg", "subServices": ["SubService A", "SubService B"] }
  ]
};

function Services() {
    const [activeTab, setActiveTab] = useState('Government');
    const [selectedService, setSelectedService] = useState(null);

    const handleCardClick = (service) => {
        setSelectedService(service);
    };

    const handleClosePopup = () => {
        setSelectedService(null);
    };

    return (
        <div className="relative pt-10 mb-10 max-w-7xl mx-auto px-4">
            <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins">
                <span className="text-[#1fb082]">OUR</span>
                <span className="font-bold text-[#008C80]">SERVICES</span>
            </h2>

            <p
                className="mt-6 max-w-7xl mx-auto text-base sm:text-lg md:text-xl text-[#008C80]"
                style={{ fontWeight: 400 }}
            >
                At eMithram CSP, we offer both government and private services to the
                public. For government services, we provide training and backend
                support to help individuals access essential services offered by
                various government agencies through citizen service portals. On the
                private side, we partner with leading brands to make their services
                accessible to both rural and urban residents simultaneously.
                Additionally, we offer last-mile marketing services to these brands,
                ensuring their reach extends to the remotest areas.
            </p>

            <div className="w-full max-w-7xl mx-auto px-4 mt-10">
                {/* Tabs */}
                <div className="flex flex-wrap gap-6 justify-center mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md border border-[#bbfdf6] text-2xl font-semibold ${activeTab === tab
                                ? 'bg-[#00b39f] text-white'
                                : 'bg-gray-100 text-[#4db0a5] hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Description */}
                <p className="text-2xl text-gray-500 font-medium mb-6 px-4">
                    We provide training and support to help people access{' '}
                    {activeTab.toLowerCase()} services through citizen portals.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {services[activeTab]?.map((service, idx) => (
                    <div
  key={idx}
  onClick={() => handleCardClick(service)}
  className="bg-white shadow-md rounded-xl border border-[#00b39f] overflow-hidden text-center cursor-pointer transition-transform duration-300 hover:scale-103"
>
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-32 object-cover"
  />
  <div className="p-2 font-semibold text-[#008C80] flex justify-between items-center">
    <span>{service.title}</span>
    <button className="bg-[#008C80] rounded-full w-6 h-6 text-white flex items-center justify-center text-base leading-none">
      ▼
    </button>
  </div>
</div>

                    ))}
                </div>
            </div>

            {/* Popup */}
            {selectedService && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm bg-opacity-40 px-4 py-10 flex justify-center items-start overflow-y-auto">
                    <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative shadow-2xl">
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-2 right-6 text-gray-600 hover:text-red-500 text-3xl"
                        >
                            ×
                        </button>
                        <h3 className="text-4xl font-bold text-[#008C80] mb-4">
                            {selectedService.title}
                        </h3>
                        <div>
                            {/* Heading Row */}
                            <div className="flex font-semibold text-[#008C80] mb-2 gap-10 border-t border-b border-[#008C80] text-2xl">
                                <div className="w-20">Sl. No</div>
                                <div>Service</div>
                            </div>

                            {/* Services List */}
                            {selectedService.subServices && selectedService.subServices.length > 0 ? (
                                <ul className="space-y-2">
                                    {selectedService.subServices.map((sub, index) => (
                                        <li
                                            key={index}
                                            className="flex cursor-pointer text-gray-700 hover:text-[#008C80] pb-1 gap-10"
                                        >
                                            <div className="w-20 font-semibold text-[#008C80] text-2xl">
                                                {index + 1}.
                                            </div>
                                            <div className="text-2xl font-semibold text-[#008C80]">{sub}</div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[#008C80] italic text-xl mt-4 px-6 ">
                                    No Services Available.
                                </p>
                            )}

                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Services;


 