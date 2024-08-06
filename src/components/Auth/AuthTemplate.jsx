import React from "react";
import ATSlogo from "../../assets/Logos/ATS.svg";
import Heading from "../../Core/Heading";
import Subheading from "../../Core/Subheading";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import OtpForm from "./OtpForm";
import ResetPasswordForm from "./ResetPasswordForm";

const AuthTemplate = ({ type, title, subTitle, link, text,subTitleTwo }) => {
    const paths = {
        "sign-in": "/sign-up",
        "forgot-password": "/sign-in",
        "otp": "/sign-in",
        "reset-password": "/sign-in"
      };
      
      const path = paths[type] || "/sign-in";

  return (
    <section className="py-5 min-h-screen text-[#1C1C1C] flex flex-col justify-center items-center gap-10 xs:py-10 ">
      <div>
        <img src={ATSlogo} alt="VM-logo-image" />
      </div>

      <div className=" bg-white xs:mx-2 rounded-sm flex flex-col justify-start items-center md:w-[27.5rem]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className=" text-center py-4 w-full">
          <Heading text={title} className="pt-3" />
          <Subheading text={subTitle} className="pb-8 text-sm" />
        {subTitleTwo &&  (<Subheading text={subTitleTwo} className="mt-[-2rem] pb-8 text-sm"/>)}
        </div>
        <div className="w-full xs:px-5 md:px-10">
          {type === "sign-in" ? (
            <LoginForm />
          ) : type === "forgot-password" ? (
            <ForgotPasswordForm />
          ) : type === "otp" ? (
            <OtpForm/>
          ):  type === "reset-password" ? (
            <ResetPasswordForm/>
          ):(
            <SignUpForm />
          )}

          <div className="text-center text-sm w-full pb-10 pt-3">
            {text}
            <span className="cursor-pointer text-[#882EFD] font-semibold">
              <Link to={path}> {link}</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthTemplate;
