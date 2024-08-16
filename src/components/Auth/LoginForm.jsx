import React,{useState} from 'react'
import Input from '../../Core/Input';
import Checkbox from '../../Core/Checkbox';
import Button from '../../Core/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ email, password, rememberMe });
      navigate("/dashboard")

    };
  


  return (
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
        <Link
          to="/forgot-password"
          className="font-medium text-sm text-[#882EFD]"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
    <div className="pt-4 ">
    <Button type="submit" text="Sign in" className='text-white bg-[#882EFD]' />
    </div>
  </form>
  )
}

export default LoginForm