"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useRouter();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim() ||
      !selectedRole
    ) {
      alert("Please fill in all fields and select a role before submitting.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    {/*
    try {
      const response = await fetch('http://localhost/directRenalBackend/admin/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          password: formData.password,
          role: selectedRole
        })
      }); 

      const result = await response.json();
      if (result.success) {
        alert("Account created successfully!");
        navigate('/Intro');
      } else {
        alert("Error: " + result.message);
      }

    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    } */}

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Account created!");
      navigate.push("/onboarding"); // or wherever you want to go after signup
    } catch (error) {
      alert("Error: " + error.message);
    }

  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-5">
      <div className="bg-white rounded-lg border border-[#E3E3E3] shadow-md w-full max-w-[520px] p-8">
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <div className="bg-blue-600 text-white rounded-xl p-4">
              <img className='h-7' src='/assets/images/house.png' alt="House icon" />
            </div>
          </Link>
          <h2 className="mt-4 text-2xl font-semibold text-[#000000]">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-[#000000] text-center">
            Join thousands of users finding homes without fees
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-start text-base font-medium text-[#000000]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-start text-base font-medium text-[#000000]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number*/}
          <div>
            <label htmlFor="phone" className="block text-start text-base font-medium text-[#000000]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+234"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-start text-base font-medium text-[#000000]">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {/* <img
                src={passwordVisible ? '/assets/images/eye-solid.svg' : '/assets/images/eye-slash-solid.svg'}
                onClick={() => setPasswordVisible(!passwordVisible)}
                alt="Toggle visibility"
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              /> */}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-start text-base font-medium text-[#000000]">
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {/* <img
                src={confirmPasswordVisible ? '/assets/images/eye-solid.svg' : '/assets/images/eye-slash-solid.svg'}
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                alt="Toggle visibility"
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              /> */}
            </div>
          </div>

          {/* Role */}
          <div>
            <p className="text-sm text-start font-medium text-[#000000] mb-1">I am a:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedRole === 'tenant'}
                  onChange={() => setSelectedRole('tenant')}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-[#000000] flex items-center space-x-1">
                  <img className='h-4' src='/assets/images/charm_person.png' alt="Tenant" />
                  <span>A Tenant</span>
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedRole === 'landlord'}
                  onChange={() => setSelectedRole('landlord')}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-[#000000] flex items-center space-x-1">
                  <img className='h-3' src='/assets/images/landlord.png' alt="Landlord" />
                  <span>Landlord</span>
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-[#000000]">
              I agree to the{' '}
              <a href="#" className="text-blue">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-[15px] tracking-wide text-white py-[10px] rounded-lg mt-4"
          >
            Create Account
          </button>
        </form>

        <p className="flex justify-center text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link href="/login">
            <span className="text-blue-500 ml-1">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
