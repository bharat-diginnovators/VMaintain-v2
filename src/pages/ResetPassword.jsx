import React from 'react'
import AuthTemplate from '../components/Auth/AuthTemplate'
const ResetPassword = () => {
  return (
    <AuthTemplate
     type="reset-password"
     title="Reset Password"
     subTitle="Set the new password for your account, so you can "
     subTitleTwo="sign in and access all the features."
     link="Sign in"
     text ="Never mind, I remember my password. Back to "
    />
  )
}

export default ResetPassword