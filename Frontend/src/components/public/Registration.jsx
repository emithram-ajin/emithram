import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const site_key = "6LebTYYrAAAAACUW4X0bOsRWh4ZBkWxStx0uBPww";

function Registration() {
  const initialFormData = {
    name: '',
    place: '',
    localBody: '',
    district: '',
    mobile: '',
    email: '',
    heardFrom: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [captchaStatus, setCaptchaStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.place.trim()) newErrors.place = "Place is required.";
    if (!formData.localBody) newErrors.localBody = "Select a local body.";
    if (!formData.district) newErrors.district = "Select a district.";
    if (!formData.mobile) newErrors.mobile = "Mobile is required.";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.heardFrom) newErrors.heardFrom = "Select how you heard about us.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCaptchaChange = (token) => {
    if (token) {
      setCaptchaStatus(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaStatus) {
      alert("Please complete the CAPTCHA");
      return;
    }

    if (validate()) {
    //   alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);

      setFormData(initialFormData);
      setErrors({});
      setCaptchaStatus(false); // Reset captcha
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex justify-center items-center p-4">
      <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-center text-2xl font-semibold mb-6">
          e-Mithram Registration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Place */}
          <div>
            <label className="block mb-1 font-medium">Place:</label>
            <input
              name="place"
              value={formData.place}
              onChange={handleChange}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your place"
            />
            {errors.place && <p className="text-red-500 text-sm">{errors.place}</p>}
          </div>

          {/* Local body */}
          <div>
            <label className="block mb-1 font-medium">Local body:</label>
            <select
              name="localBody"
              value={formData.localBody}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">--Select--</option>
              <option>Panchayath</option>
              <option>Municipality</option>
              <option>Corporation</option>
            </select>
            {errors.localBody && <p className="text-red-500 text-sm">{errors.localBody}</p>}
          </div>

          {/* District */}
          <div>
            <label className="block mb-1 font-medium">District:</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">--Select--</option>
              <option>Thiruvananthapuram</option>
              <option>Kollam</option>
              <option>Pathanamtitta</option>
              <option>Alappuzha</option>
              <option>Kottayam</option>
              <option>Idukki</option>
              <option>Ernakulam</option>
              <option>Thrissur</option>
              <option>Palakkad</option>
              <option>Malappuram</option>
              <option>Kozhikkod</option>
              <option>Wayanad</option>
              <option>Kannur</option>
              <option>Kasargod</option>
            </select>
            {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile:</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Centre Name */}
          <div>
            <label className="block mb-1 font-medium">Centre Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              value="Emithram CSP"
              readOnly
            />
          </div>

          {/* How did you hear */}
          <div>
            <label className="block mb-1 font-medium">
              How did you hear about us:
            </label>
            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">--Select--</option>
              <option>Facebook</option>
              <option>Newspaper</option>
              <option>Friends</option>
              <option>Google</option>
              <option>BDO</option>
              <option>BDM</option>
              <option>Others</option>
            </select>
            {errors.heardFrom && <p className="text-red-500 text-sm">{errors.heardFrom}</p>}
          </div>

          {/* CAPTCHA */}
          <div className="md:col-span-2 flex justify-center">
            <ReCAPTCHA
              sitekey={site_key}
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!captchaStatus}
              className={`px-6 py-2 rounded transition-colors ${
                captchaStatus
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
