import React, { useState, useRef } from 'react';
import Button from '../../Core/Button';
import Input from '../../Core/Input';

const ResetPasswordForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').split('').slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      if (/^[0-9]$/.test(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);
    const nextIndex = pasteData.length < 6 ? pasteData.length : 5;
    inputsRef.current[nextIndex].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length === 6 && password && confirmPassword) {
      console.log({
        otp: otp.join(''),
        password,
        confirmPassword
      });
    }
  };

  return (
    <form className="space-y-3 w-full" onSubmit={handleSubmit}>
        <label htmlFor="Verification-code" className="block">Verification code</label>
      <div onPaste={handlePaste} className="xs:gap-1 flex justify-center sm:gap-3 items-center">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            {index === 3 && <span className="text-xl text-[#999999]">-</span>}
            <input
              className="xs:w-[2.2rem] xs:h-[2rem] xs-1:w-[2.86rem] xs-1:h-[2.5rem]  text-[#882EFD]  border-[.5px] bg-[#F7F7F8] text-center border-[#EAEAEA] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
              type="text"
              maxLength="1"
              placeholder=""
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          </React.Fragment>
        ))}
      </div>
      <div>
        <label htmlFor="password" className="block">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block">Confirm Password</label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="pt-7">
        <Button 
          type="submit" 
          text="Reset Password" 
          disabled={otp.join('').length !== 6 || !password || !confirmPassword}
          className={otp.join('').length === 6 && password && confirmPassword ? "text-white bg-[#882EFD]" : "text-gray-100 bg-[#882efd93] cursor-not-allowed"} 
        />
      </div>
    </form>
  );
}

export default ResetPasswordForm;
