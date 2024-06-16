"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setError] = useState<string>('');
  const router = useRouter();

  const link = "http://localhost:8000/api/auth/login";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post(link, { email, password });
        localStorage.setItem('token', response.data.token);
        setError('');
        alert('Login successful');
        router.push('/task');
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            setError('User not found. Please register.');
        } else if (error.response && error.response.status === 401) {
            setError('Invalid credentials. Please try again.');
        } else {
            setError('An error occurred. Please try again.');
        }
    }
};
  return (
    <form 
    className="flex flex-col justify-center items-center gap-5 max-w-lg  shadow-2xl shadow-gray-900 h-screen hover:shadow-gray-300  bg-white mx-auto rounded-md text-gray-900"
    onSubmit={()=>handleLogin}
    >
      <h3 className="text-2xl ">Please Log In! </h3>

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
          onChange={(e) => {setEmail(e.target.value)}}
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
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </label>
      <span className="block w-full mr-auto ml-7">
        Dont have any Account?{" "}
        <Link className="text-blue-700 font-bold" href="/signup">
          Sign Up
        </Link>
      </span>
      <button
        className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]"
        type="submit"
      >
        Log In
      </button>
      {errors && <p className="text-red-500">{errors}</p>}
    </form>
  );
};

export default LogIn;
