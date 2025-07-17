"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";


export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  {/*
  const handleSignInClick = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    console.log("Sending:", formData); 

    {/*
    try {
      const response = await fetch('http://localhost/directRenalBackend/admin/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password
        })
      });

      const result = await response.json();
      console.log(result); // DEBUG!

      if (result.success) {
        alert("Login successful!");
        navigate('/Intro');
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  }; */}

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    console.log("Sending:", formData); 

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Welcome back!");
      navigate.push("/onboarding"); // or any protected route
    } catch (error) {
      alert("Login error: " + error.message);
    }

  };


  return (
    <div className="bg-gray-50 flex items-center justify-center w-full min-h-screen">
      <div className="bg-white rounded-lg border border-[#E3E3E3] shadow-md w-[90%] md:max-w-[520px] p-4 md:p-8 mx-auto">
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <div className="bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center">
              <img className='h-7 w-auto max-w-full' src='/assets/images/house.png' alt="" />
            </div>
          </Link>
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-[#000000]">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-[#000000] text-center max-w-[320px]">
            Sign in to access your account and continue your home search
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
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

          <div>
            <label htmlFor="password" className="block text-start text-base font-medium text-[#000000]">
              Password
            </label>
            <div className="relative max-w-full overflow-hidden">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {/* <img
                src={passwordVisible ? '/assets/images/eye-solid.svg' : '/assets/images/eye-slash-solid.svg'}
                onClick={() => setPasswordVisible(!passwordVisible)}
                alt="Toggle visibility"
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-w-full"
              /> */}
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className='flex items-center mr-auto'>
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-[#000000]">
                Remember Me
              </label>
            </div>
            <p className='text-blue text-[13px]'>Forgot Password</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-[15px] tracking-wide text-white py-[10px] rounded-lg mt-4"
          >
            Sign In
          </button>
        </form>

        <p className="flex justify-center text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link href="/signup">
            <span className="text-blue-500 ml-1">
              Create an account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
