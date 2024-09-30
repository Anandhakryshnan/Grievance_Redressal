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
    pass: '',
    c_pass: '',
  });


const [errors, setErrors] = useState({});

// Validation function
const validate = () => {
  let newErrors = {};

  if (!formData.name.trim()) newErrors.name = 'Name is required';
  if (!formData.district) newErrors.district = 'District is required';
  if (!formData.address.trim()) newErrors.address = 'Address is required';
  if (!formData.localBodyType) newErrors.localBodyType = 'Local Body Type is required';
  if (!formData.localBodyName.trim()) newErrors.localBodyName = 'Local Body Name is required';
  if (!formData.mobile) {
    newErrors.mobile = 'Mobile number is required';
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    newErrors.mobile = 'Mobile number must be exactly 10 digits';
  }
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }
  if (!formData.pass) {
    newErrors.pass = 'Password is required';
  } else if (formData.pass.length < 6) {
    newErrors.pass = 'Password must be at least 6 characters long';
  }
  if (formData.c_pass !== formData.pass) {
    newErrors.c_pass = 'Passwords do not match';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle registration logic here if form is valid
      console.log('Form submitted', formData);
      return
    }
    console.log(errors);
    
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
      pass: '',
      c_pass: '',
    });
    setErrors({});
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
          />
          <label>Name</label>
          {errors.name && <span className="error-text">{errors.name}</span>}
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
          />
          <label>Address</label>
          {errors.address && <span className="error-text">{errors.address}</span>}
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
          />
          <label>Name of Local Body</label>
          {errors.localBodyName && <span className="error-text">{errors.localBodyName}</span>}
        </div>

        {/* Mobile Number */}
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            placeholder=''
            value={formData.mobile}
            onChange={handleChange}
          />
          <label>Mobile Number</label>
          {errors.mobile && <span className="error-text">{errors.mobile}</span>}
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
          />
          <label>Email</label>
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            name="pass"
            placeholder=''
            value={formData.pass}
            onChange={handleChange}
          />
          <label>Password</label>
          {errors.pass && <span className="error-text">{errors.pass}</span>}
        </div>
        {/* Confirm Password */}
        <div className="input-group">
          <input
            type="password"
            name="c_pass"
            placeholder=''
            value={formData.c_pass}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
          {errors.c_pass && <span className="error-text">{errors.c_pass}</span>}
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