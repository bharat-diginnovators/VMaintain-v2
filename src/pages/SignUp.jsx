import React from 'react'
import AuthTemplate from '../components/Auth/AuthTemplate'
const SignUp = () => {
    return (
      <AuthTemplate
       type="sign-up"
       title="Create your account"
       subTitle="Enter your details."
       link="Sign In"
       text = "Already have an ATS account?"
      />
    )
  }

export default SignUp