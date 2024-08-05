import React,{useState} from 'react'
import Checkbox from '../../Core/Checkbox';
import Button from '../../Core/Button';
import Input from '../../Core/Input';

const SignUpForm = () => {
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
    <form className="space-y-3 w-full" onSubmit={handleSubmit}>
    <div className="flex gap-2 xs:flex-col md:flex-row">
      <div>
        <label htmlFor="firstName" className="block">First name</label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block">Last name</label>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block">Email</label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="contactNumber" className="block">Contact Number</label>
      <Input
        id="contactNumber"
        name="contactNumber"
        type="text"
        value={formData.contactNumber}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="password" className="block">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="confirmPassword" className="block">Confirm Password</label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </div>
    <div className="flex items-center flex-wrap xs:justify-center xs:items-center xs:gap-2 md:flex-nowrap md:justify-start md:items-center">
      <Checkbox
        id="rememberMe"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={handleChange}
        label="I agree to ATS's"
      />
      <div className="text-mf">
        <a href="#" className="font-medium text-sm text-[#882EFD]">Terms of Service.</a>
      </div>
    </div>
    <div className="pt-4">
    <Button type="submit" text="Sign Up" className='text-white bg-[#882EFD]'/>
    </div>
  </form>
  )
}

export default  SignUpForm