import React, { useState, useRef } from 'react';
import Button from '../../Core/Button';

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);


  const handleChange = (e, index) => {
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

  const handleClick = () => {
    alert(otp.join(''));
    
    
  };

  


  return (
    <form className="space-y-3 w-full">
      <div onPaste={handlePaste} className="flex justify-center  gap-3 items-center">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            {index === 3 && <span className="text-xl text-[#999999]">-</span>}
            <input
              className="w-[2.86rem] h-[2.5rem] text-[#882EFD]  border-[.5px] bg-[#F7F7F8] text-center border-[#EAEAEA] rounded-xl focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD]"
              type="text"
              maxLength="1"
              placeholder=""
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="pt-7">
      <Button 
  type="submit" 
  text="Verify Account" 
  disabled={otp.join('').length !== 6}
  className={otp.join('').length === 6 ? "text-white bg-[#882EFD]" : "text-gray-100 bg-[#882efd93] cursor-not-allowed"} 
  onClick={handleClick} 
/>
      </div>
    </form>
  );
};

export default OtpForm;
