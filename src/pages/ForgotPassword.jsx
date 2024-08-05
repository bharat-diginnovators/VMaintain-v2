import React from 'react'
import AuthTemplate from '../components/Auth/AuthTemplate'

const ForgotPassword = () => {
  return (
    <AuthTemplate
     type="forgot-password"
     title="Forgot Password"
     subTitle="Enter your email for the verification process. We will send a code to your email."
     link="Sign in"
     text ="Never mind, I remember my password. Back to"
    />
  )
}

export default ForgotPassword