import React, { useState } from "react";
import ATSLogo from "../assets/Logos/ATS.svg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-5 min-h-screen text-[#1C1C1C] flex flex-col justify-center items-center gap-10 xs:py-10 ">
      <div>
        <img src={ATSLogo} alt="VM-logo-image" />
      </div>

      <div className="bg-white rounded-sm flex flex-col justify-start items-center lg:w-[27.5rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div className=" text-center py-4 w-full">
          <h1 className=" font-bold pt-3 xs:text-lg  md:text-[1.4rem] lg:text-[1.75rem] py-3">
            Create your account
          </h1>
          <p className="xs:px-4 text-[0.8rem] pb-8">Enter your details.</p>
        </div>
        <div className="w-full xs:px-5 md:px-10">
          <form className="space-y-3 w-full" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div>
                <label htmlFor="firstName" className="block">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block">Contact Number</label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="text"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center flex-wrap xs:justify-center xs:items-center xs:gap-2 md:flex-nowrap md:justify-start md:items-center ">
              <div className="flex items-center justify-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  className="w-4 h-4 border-[1px] border-[#F7F7F8] bg-[#F4F4F4] checked:bg-[#882EFD] focus:ring-transparent hover:bg-[#882EFD]"
                  onChange={handleChange}
                />
                <div>
                <label htmlFor="rememberMe" className="ml-2 text-sm">I agree to ATS's</label>
                </div>
              </div>
              <div className="text-mf">
                <a href="#" className=" font-medium text-sm text-[#882EFD]">Terms of Service.</a>
              </div>
            </div>
            <div className="pt-4">
              <button type="submit" className="text-white bg-[#882EFD] rounded-md text-md px-12 py-2 w-full">Sign in</button>
            </div>
            <div className="text-center text-sm w-full pb-10">
              Already have an ATS account?{" "}
              <span className="underline cursor-pointer text-[#882EFD]">Sign in</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
