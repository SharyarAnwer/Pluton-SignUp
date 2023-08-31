import React, { useState } from "react";

import desktopBackground from "./desktop.png";
import error from "./error.svg";

export default function SignUp() {
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <div className="w-screen min-h-screen py-10 bg-custom-pink relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={desktopBackground} className="object-cover h-full w-full" />
      </div>

      <div className="flex flex-col gap-6 sm:flex-col lg:flex-row xl:flex-row justify-center  h-full sm:gap-6">
        <div className="basis-1/2 flex flex-col justify-center items-center px-7 gap-4">
          <h1 className="text-4xl font-semibold text-white text-center">
            Sign Up For Pluton Quiz App
          </h1>

          <h3 className="text-xl text-white text-center">
            Embark on a Journey of Learning and Discovery: Engaging Minds
            Through Interactive Quizzing Adventures
          </h3>
        </div>

        <div className="basis-1/2 flex flex-col justify-center items-center px-7 gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-3xl rounded-xl w-full z-20">
            <span className="text-lg text-white">Try it free 7 days</span>
            <span className="text-lg text-white">
              then $20 per month, thereafter
            </span>
          </button>

          <div className="bg-white w-full p-9 flex flex-col justify-center items-center gap-3 rounded-xl z-20 shadow-3xl">
            <div className="w-full">
              <div
                className={`flex flex-row w-full border ${
                  !firstName ? "border-slate-300" : "border-red-500"
                } rounded-md py-2 pl-3 pr-3`}
              >
                <input
                  class="placeholder:bold placeholder:text-slate-600 block bg-white w-full    focus:outline-none sm:text-sm "
                  placeholder="First Name"
                  type="text"
                  name="search"
                  required="true"
                  onBlur={(e) => {
                    if (
                      e.target.value.length <= 0 ||
                      e.target.value.length < 3
                    ) {
                      setFirstName(true);
                    } else {
                      setFirstName(false);
                    }
                  }}
                />

                <img src={error} className={`${!firstName ? "hidden" : ""}`} />
              </div>

              <div
                className={`grid w-full justify-items-end ${
                  !firstName ? "invisible" : ""
                }`}
              >
                <p className=" text-red-500 text-sm mt-1 italic">
                  First name cannot be empty
                </p>
              </div>
            </div>

            <div className="w-full">
              <div
                className={`flex flex-row w-full border ${
                  !lastName ? "border-slate-300" : "border-red-500"
                } rounded-md py-2 pl-3 pr-3`}
              >
                <input
                  class="placeholder:bold placeholder:text-slate-600 block bg-white w-full    focus:outline-none sm:text-sm "
                  placeholder="Last Name"
                  type="text"
                  name="search"
                  required="true"
                  onBlur={(e) => {
                    if (
                      e.target.value.length <= 0 ||
                      e.target.value.length < 3
                    ) {
                      setLastName(true);
                    } else {
                      setLastName(false);
                    }
                  }}
                />

                <img src={error} className={`${!lastName ? "hidden" : ""}`} />
              </div>

              <div
                className={`grid w-full justify-items-end ${
                  !lastName ? "invisible" : ""
                }`}
              >
                <p className=" text-red-500 text-sm mt-1 italic">
                  Last name cannot be empty
                </p>
              </div>
            </div>

            <div className="w-full">
              <div
                className={`flex flex-row w-full border ${
                  !email ? "border-slate-300" : "border-red-500"
                } rounded-md py-2 pl-3 pr-3`}
              >
                <input
                  class="placeholder:bold placeholder:text-slate-600 block bg-white w-full    focus:outline-none sm:text-sm "
                  placeholder="email@example.com"
                  type="email"
                  name="email"
                  required="true"
                  onBlur={(e) => {
                    if (
                      e.target.value.length <= 0 ||
                      e.target.value.length < 3
                    ) {
                      setEmail(true);
                    } else {
                      setEmail(false);
                    }
                  }}
                />

                <img src={error} className={`${!email ? "hidden" : ""}`} />
              </div>

              <div
                className={`grid w-full justify-items-end ${
                  !email ? "invisible" : ""
                }`}
              >
                <p className=" text-red-500 text-sm mt-1 italic">
                  Looks like this is not an email
                </p>
              </div>
            </div>

            <div className="w-full">
              <div
                className={`flex flex-row w-full border ${
                  !password ? "border-slate-300" : "border-red-500"
                } rounded-md py-2 pl-3 pr-3`}
              >
                <input
                  class="placeholder:bold placeholder:text-slate-600 block bg-white w-full    focus:outline-none sm:text-sm "
                  placeholder=""
                  type="password"
                  name="password"
                  required="true"
                  onBlur={(e) => {
                    if (
                      e.target.value.length <= 0 ||
                      e.target.value.length < 3
                    ) {
                      setPassword(true);
                    } else {
                      setPassword(false);
                    }
                  }}
                />

                <img src={error} className={`${!password ? "hidden" : ""}`} />
              </div>

              <div
                className={`grid w-full justify-items-end ${
                  !password ? "invisible" : ""
                }`}
              >
                <p className=" text-red-500 text-sm mt-1 italic">
                  Password cannot be empty
                </p>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 shadow-2xl rounded w-full">
              Claim your free trial
            </button>

            <p>
              <span>By clicking this button, you are agreeing to our </span>
              <span className="text-custom-pink cursor-pointer">
                Terms & Services
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
