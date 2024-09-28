import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    address: '',
    localBodyType: '',
    localBodyName: '',
    mobile: '',
    otp: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      district: '',
      address: '',
      localBodyType: '',
      localBodyName: '',
      mobile: '',
      otp: '',
      email: '',
    });
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder=''
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>

        {/* District Dropdown */}
        <div className="input-group">
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className='district'
          >
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
          </select>
          <label>District</label>
        </div>

        {/* Address */}
        <div className="input-group">
          <input
            type="text"
            name="address"
            placeholder=''
            value={formData.address}
            onChange={handleChange}
            required
          />
          <label>Address</label>
        </div>

        {/* Type of Local Body Dropdown */}
        <div className="input-group">
          <select
            name="localBodyType"
            value={formData.localBodyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Local Body Type</option>
            <option value="Municipality">Municipality</option>
            <option value="Corporation">Corporation</option>
            <option value="Panchayat">Panchayat</option>
          </select>
          <label>Type of Local Body</label>
        </div>

        {/* Name of Local Body */}
        <div className="input-group">
          <input
            type="text"
            name="localBodyName"
            placeholder=''
            value={formData.localBodyName}
            onChange={handleChange}
            required
          />
          <label>Name of Local Body</label>
        </div>

        {/* Mobile Number */}
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            placeholder=''
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <label>Mobile Number</label>
          <button className='verify'>Verify</button>
        </div>

        {/* OTP */}
        <div className="input-group">
          <input
            type="text"
            name="otp"
            placeholder=''
            value={formData.otp}
            onChange={handleChange}
          />
          <label>OTP</label>
        </div>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder=''
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        {/* Submit and Reset buttons */}
        <div className="button-group">
          <button type="submit" className="register-button">
            Submit
          </button>
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;