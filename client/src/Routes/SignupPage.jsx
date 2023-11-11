import crossIcon from "./../assets/cross_icon.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiInjustice } from "react-icons/gi";
import axiosInstance from "../axios";

export default function SignupPage() {
  const [confirmEmail, setConfirmEmail] = useState('');


  const navigate = useNavigate();

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    first_name: 't1',
    last_name: 't1',
    username: 't1',
    email: 't1@test.com',
    password: 't1',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== confirmEmail) {
      console.error('Email and Confirm Email must match');
      return;
    }

    try {
      // Make a POST request to your signup endpoint
      const response = await axiosInstance.post('/signup', formData);

      // Handle the response, e.g., show a success message or redirect
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Signup failed:', error.message);
    }
  };

  return (
<section className="gradient-form h-screen bg-[#f6f8fc]">
      <div className=" h-full ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full xl:px-48 lg:px-20 p-10">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div
                  className={`flex items-center rounded w-full lg:w-6/12 bg-gradient-to-b from-[#30b5b1] to-blue-500`}
                >
                  <div className="px-4 py-6 mx-6 text-white text-center md:mx-6 md:p-12 ">
                    <div className="flex gap-4 justify-center" >
                    <GiInjustice className="text-3xl"/>
                    <h4 className="mb-6 text-3xl font-semibold">
                      <span className="font-extrabold">Legal</span> Street
                    </h4>
                    </div>
                    <p className="text-sm w-full sm:w-[85%] md:w-[75%] lg:w-[60%] mx-auto">
                    Best-in-class tools for legal client intake, workflow & marketing automation, legal billing, document management, and much more — all in one easy-to-use law practice software.
                    </p>
                  </div>
                </div>
                <div className="relative px-4 md:px-0 lg:w-6/12">
                <img
            src={crossIcon}
            alt="x"
            onClick={() => {
              

              
            }}
            className="cursor-pointer hidden md:block absolute top-8 right-8"
          />
                  <div className="p-6 sm:p-[90px] md:p-[80px]">
                    <div className="flex flex-col gap-2">
                      <GiInjustice className="text-4xl"/>
                      <h1 className="text-4xl mb-4 "> Sign up </h1>
                    </div>
                    <p className="text-light mb-4 text-xs">Enter your details below to create your account and get started.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full mx-auto">
                      
                        <div className="relative mb-4">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="peer h-12 block border  text-neutral-800 mt-1 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                              id="first_name"
                              name="first_name"
                              placeholder="John"
                              onChange={handleChange}
                              value={formData.first_name}
                              required
                            />
                          </div>
                          <div className="relative mb-4">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="peer h-12 block border  text-neutral-800 mt-1 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                              id="last_name"
                              name="last_name"
                              placeholder="Smith"
                              onChange={handleChange}
                              value={formData.last_name}
                              required
                            />
                          </div>
                      

                      <div className="relative mb-4">
                        <label>Username</label>
                        <input
                          type="text"
                          className="peer h-12 block border  text-neutral-800 mt-1 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="username"
                          name="username"
                          placeholder="Username"
                          onChange={handleChange}
                          value={formData.username}
                          required
                        />
                      </div>
                      <div className="relative mb-4">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="peer h-12 block border  text-neutral-800 mt-1 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          value={formData.email}
                          required
                        />
                      </div>
                      
                      <div className="relative mb-4">
                        <label>Confirm Email</label>
                        <input
                          type="email"
                          name="confirmEmail"
                          className="peer h-12 block border text-neutral-800 mt-1 min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="confirmEmail"
                          placeholder="Confirm Email Address"
                          onChange={(e) => setConfirmEmail(e.target.value)}
                          value={confirmEmail}
                          required
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="peer h-12 block min-h-[auto] text-neutral-800 mt-1 w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="password"
                          placeholder="Create Password"
                          onChange={handleChange}
                          value={formData.password}
                          required
                          
                        />
                      </div>
                    

                      <div className="mb-5 pb-1 pt-1 ">
                        <button
                          className="mb-3 h-12 text-center bg-yellow-500 inline-block w-full rounded-3xl px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_rgb(234 179 8)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="mb-0 mr-2 text-xs">Already a member?</p>
                        <span onClick={()=> {navigate('/login')}} className="mb-0 text-xs font-bold cursor-pointer">Login</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
