import React,{useState} from 'react'
import Input from '../../Core/Input'
import Button from '../../Core/Button'

const ForgotPasswordForm = () => {
   const [email,setEmail] = useState("")
   
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email)
   }

  return (
    <form className="space-y-3 w-full" onSubmit={handleSubmit}>
    <div className="py-4">
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
 
   
    <div className="pt-4 py-1">
    <Button type="submit" text="Continue" className='text-white bg-[#882EFD]'/>
    </div>
  </form>
  )
}

export default ForgotPasswordForm