"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const Signup = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const link = "http://localhost:8000/api/auth/register";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmPassword) {
        setError('Passwords do not match');
        return;
    }
    try {
        await axios.post(link, { username, password, email});
        alert('User registered successfully');
        router.push('/login');
    } catch (error) {
        console.error('Registration failed', error);
        setError('Registration failed. Please try again.');
    }
};

  return (
    <form
      className="flex flex-col justify-center items-center gap-5 max-w-lg  shadow-2xl shadow-gray-900 h-screen hover:shadow-gray-300  bg-white mx-auto rounded-md text-gray-900"
      onSubmit={()=>handleSubmit}
    >
      <h3 className="text-2xl ">Create New Account! </h3>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Name
        </span>
        <input
          required
          type="name"
          name="name"
          className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your name"
          onChange={(e) => {setUsername(e.target.value)}}
        />
      </label>

      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your email address"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </label>

      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Password
        </span>
        <input
          required
          type="password"
          name="password"
          className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Confirm Password
        </span>
        <input
          required
          type="password"
          name="confirmPassword"
          className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your password"
          onChange={(e)=>{setConfirmPassword(e.target.value===password)}}
        />
      </label>
      <span className="block w-full mr-auto ml-7">
        Already have an Account?{" "}
        <Link className="text-blue-700 font-bold" href="/login">
          Log In
        </Link>
      </span>
      <button
        className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]"
        type="submit"
        
      >
        Sign Up
      </button>
    {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Signup;
