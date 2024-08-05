import React, { useState } from "react";
import ATSlogo from "../assets/Logos/ATS.svg";
import Heading from "../Core/Heading";
import Subheading from "../Core/Subheading";
import Input from "../Core/Input";
import Button from "../Core/Button";
import Checkbox from "../Core/Checkbox";

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
        <img src={ATSlogo} alt="VM-logo-image" />
      </div>

      <div className="bg-white rounded-sm flex flex-col justify-start items-center lg:w-[27.5rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className=" text-center py-4 w-full">
        <Heading text="Sign in to your account" className="pt-3" />
        <Subheading text="Enter your credentials to access your account." className="pb-8 text-sm" />
        </div>
        <div className="w-full xs:px-5 md:px-10">
          <form className="space-y-3 w-full" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email" className="block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center flex-wrap  xs:justify-center xs:items-center xs:gap-2 md:flex-nowrap md:gap-4 md:justify-between ">
              <div className="flex items-center">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                label="Remember me"
              />
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
            <Button type="submit" text="Sign in" className='text-white bg-[#882EFD]'/>
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
