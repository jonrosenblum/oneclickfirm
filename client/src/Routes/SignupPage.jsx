
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiInjustice } from "react-icons/gi";
import axiosInstance from "../axios";

export default function SignupPage() {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);


  const navigate = useNavigate();

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
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
      const response = await axiosInstance.post('/signup', formData);
      console.log(response.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      setShowFailure(true);
      setTimeout(() => {
        setShowFailure(false)});

      console.error('Signup failed:', error.message);
    }
  };
  return (
    <section className="gradient-form h-screen bg-[#f6f8fc]">
          <div className=" h-full ">
            <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
              <div className="w-full xl:px-48 lg:px-20 p-2">
                <div className="block rounded-lg bg-white shadow-lg ">
                  <div className="g-0 lg:flex grid grid-cols-[1fr 1.2fr]">
                    <div
                      className={`flex items-center rounded w-full bg-gradient-to-b from-[#30b5b1] to-blue-500`}
                    >
                      <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/03/Nanga-Parbat.jpg" className="w-[100%] h-[100%]" alt="" />
                     
                    </div>
                    <div className="relative px-4 md:px-0 l w-[100%]">
                      <div className="p-2 sm:p-[30px] md:p-[20px] w-[100%]">
                        <div className="flex flex-col gap-2">
                          <GiInjustice className="text-4xl"/>
                          <h1 className="text-4xl mb-4 mt-2"> Sign up </h1>
                        </div>
                        <p className="text-light mb-4 text-xs">Enter your details below to create your account and get started.</p>
                        <form ref={formRef} onSubmit={handleSubmit} className="w-full mx-auto">
                          
                        <div className="sall grid grid-cols-2 gap-5">
    
                          <div className="s">
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
                          </div>
                          
                      <div className="s1">
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
                      </div>
                      </div>
                      <div className="s3 grid grid-cols-2 gap-5">
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
                        </div>
                                {/* Display success message */}
                        {showSuccess && (
                          <div className="text-green-600 mb-4">
                            Signup successful! Redirecting to login...
                          </div>
                        )}
                        {showFailure && (
                          <div className="text-red-600 mb-4">
                           Signup failed! Please try again.
                          </div>
                        )}
                        
    
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
    // {showAlert && <AlertSignup />}