import React, { useState } from 'react';
import './RegisterPage.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });


const [errors, setErrors] = useState({});

// Validation function
const validate = () => {
  let newErrors = {};
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }
  if (!formData.pass) {
    newErrors.pass = 'Password is required';
  } else if (formData.pass.length < 8) {
    newErrors.pass = 'Password must be at least 8 characters long';
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
      email: '',
      pass: '',
    });
    setErrors({});
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Login</h1>
      <form className="Login-form" onSubmit={handleSubmit}>
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
        {/* Submit button */}
        <div className="button-group">
          <button type="submit" className="register-button">
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default Login;