import google from "./../assets/google-icon-logo.svg";
import apple from "./../assets/apple-logo.svg";
import crossIcon from "./../assets/cross_icon.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { useAuthSelector } from "../services/useAuthSelector";
import { useNavigate } from "react-router-dom";
import { GiInjustice } from "react-icons/gi";

export default function LoginForm() {
  const auth = useAuthSelector();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Request Success");
        auth.doLogin(
          { username: formData.username },
          response.data.access_token
        );
        // auth.setToken(response.data.token);
        // auth.setuser(response.data.user)
        navigate("/home");
      } else {
        console.error("Request Failed");
      }
    } catch (error) {
      console.error("Request Error:", error);
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
                  <div className="px-4 py-6 mx-6 text-white md:mx-6 md:p-12 ">
                    <div className="flex gap-4">
                    <GiInjustice className="text-3xl"/>
                    <h4 className="mb-6 text-3xl font-semibold">
                      Stabile Law Firm
                    </h4>
                    </div>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  <div className="p-6 md:mx-4 md:p-20 md:py-20">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="relative mb-4">
                      
                        <div className="peer cursor-pointer hover:shadow-sm border h-12 flex items-center text-neutral-800 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none">
                          <img
                            className="w-6 h-6 mr-3"
                            src={google}
                            alt=""
                            srcSet=""
                          />
                          <span className="text-sm md:text-base">
                            Continue With Google
                          </span>
                        </div>
                      </div>
                      <div className="relative mb-4">
                        <div className="peer border cursor-pointer hover:shadow-sm h-12 flex items-center text-neutral-800 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none">
                          <img
                            className="w-6 h-6 mr-3"
                            src={apple}
                            alt=""
                            srcSet=""
                          />
                          <span className="text-sm md:text-base">
                            Continue With Apple
                          </span>
                        </div>
                      </div>
                      <p className="mb-4">Or</p>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          className="peer h-12 block border  text-neutral-800 min-h-[auto] w-full rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="email"
                          placeholder="Email Address"
                          onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                          }
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer h-12 block min-h-[auto] text-neutral-800 w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                          id="password"
                          placeholder="Enter your password"
                          onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <input type="checkbox" id="password" />
                        <p className="text-xs font-medium">Keep me signed in</p>
                      </div>

                      <div className="mb-5 pb-1 pt-1 ">
                        <button
                          className="mb-3 h-12 text-center bg-yellow-500 inline-block w-full rounded-3xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgb(234 179 8)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Log in
                        </button>

                        <a href="#!" className="text-left text-xs font-bold">
                          Forgot password?
                        </a>
                      </div>

                      <div className="flex items-center justify-center">
                        <p className="mb-0 mr-2 text-xs">Not a member yet?</p>
                        <span className="mb-0 text-xs font-bold cursor-pointer">Sign Up</span>
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
