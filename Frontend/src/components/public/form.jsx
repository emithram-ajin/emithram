import React, { useState } from 'react'

const Formpage = () => {
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
        <div className="order-1 lg:order-2 bg-white w-full sm:w-[450px] h-auto lg:h-[800px] mb-6 lg:mb-0">
            <div className="flex font-poppins justify-start items-start">
                <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-[500px] sm:max-w-md md:max-w-lg mx-auto">
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
                className="rounded-2xl mt-8 lg:mt-[50px] w-full max-w-[350px] h-[200px] sm:h-[250px] mx-auto flex flex-col md:flex-row items-center gap-4  overflow-hidden"
                style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
            >
                <div className="w-full h-full flex items-center justify-center font-semibold bg-[url('short.png')] bg-cover bg-center overflow-hidden">
                </div>
            </div>
        </div>
    )
}

export default Formpage;