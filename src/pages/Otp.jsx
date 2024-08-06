import React from 'react'
import AuthTemplate from '../components/Auth/AuthTemplate'

const Otp = () => {
  return (
    <AuthTemplate
     type="otp"
     title="Verify your account"
     subTitle="We have sent a code to: abc@pqr.com"
     subTitleTwo="Please check your email and enter the code we sent."
     link="resend"
     text ="You didn’t receive our email with verification code? Please check spam or"
    />
  )
}

export default Otp