import React, { useState } from "react";
import VMlogo from "../assets/Logos/ATS.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <section className="py-5 min-h-screen text-[#1C1C1C] flex flex-col justify-center items-center gap-10 xs:py-10 ">
      <div>
        <img src={VMlogo} alt="VM-logo-image" />
      </div>

      <div className="bg-white rounded-sm flex flex-col justify-start items-center lg:w-[27.5rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className=" text-center py-4 w-full">
          <h1 className=" font-bold pt-3 xs:text-[1.5rem] md:text-[1.7rem] lg:text-[2rem]">
            Sign in to your account
          </h1>
          <p className="xs:px-4 text-sm pb-8">
            Enter your credentials to access your account.
          </p>
        </div>
        <div className="w-full xs:px-5 md:px-10">
          <form className="space-y-3 w-full" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email" className="block   ">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl  focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block  ">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl  focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center flex-wrap  xs:justify-center xs:items-center xs:gap-2 md:flex-nowrap md:gap-4 md:justify-between ">
              <div className="flex items-center">
              <input
      id="rememberMe"
      name="rememberMe"
      type="checkbox"
      checked={rememberMe}
      className="w-4 h-4 border-[1px] border-[#F7F7F8] bg-[#F4F4F4] checked:bg-[#882EFD] focus:ring-transparent hover:bg-[#882EFD]"
      onChange={(e) => setRememberMe(e.target.checked)}
    />
                <label htmlFor="rememberMe" className="ml-2 text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-mf">
                <a
                  href="#"
                  className="font-medium text-sm underline text-[#882EFD]"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="pt-4 ">
              <button
                type="submit"
                className="text-white bg-[#882EFD] rounded-md text-md px-12 py-2 w-full"
              >
                Sign in
              </button>
            </div>
            <div className="text-center text-sm w-full pb-10 ">
              Don't have a VMaintain account?{" "}
              <span className="underline cursor-pointer text-[#882EFD]">
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
