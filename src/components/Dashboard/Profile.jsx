import React, { useState } from "react";
import profile from "../../assets/profile.svg";
import upload from "../../assets/Icons/upload.svg";
import Input from "../../Core/Input";
import Button from "../../Core/Button";
import Dropdown from "../../Core/Dropdown"; 
const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    city: "",
    phoneNumber: "",
    organizationName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const countryOptions = ["USA", "Canada", "UK", "Germany"];
  const cityOptions = ["New York", "Toronto", "London", "Berlin"];

  return (
    <section className="w-full p-2 lg:mb-16">
      <h1 className="font-semibold text-lg py-2">Profile</h1>
      <div className="flex justify-start items-start w-full rounded-sm overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="w-[10%] -mr-6 mt-6">
          <div className="w-full flex justify-end py-2 relative">
            <img src={profile} alt="profile" className="w-24" />
            <img src={upload} alt="upload" className="absolute bottom-3" />
          </div>
        </div>
        <div className="w-[90%] p-4">
          <form
            className="space-y-4 px-10 py-4 flex flex-col w-full rounded-sm overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 w-full">
              <div className="w-full">
                <label htmlFor="firstName" className="block">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="w-full">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <label htmlFor="address" className="block">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="w-full">
                <label htmlFor="country" className="block">
                  Country
                </label>
                <Dropdown
                  options={countryOptions}
                  selected={formData.country}
                  onSelect={(value) => handleDropdownChange("country", value)}
                  placeholder=""
                />
              </div>
              <div className="w-full">
                <label htmlFor="city" className="block">
                  City
                </label>
                <Dropdown
                  options={cityOptions}
                  selected={formData.city}
                  onSelect={(value) => handleDropdownChange("city", value)}
                  placeholder=""
                  textColor=""
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="w-full">
                <label htmlFor="phoneNumber" className="block">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <label htmlFor="organizationName" className="block">
                  Organization Name
                </label>
                <Input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="pt-4 py-1 self-end">
              <Button text="Save" className="bg-[#882EFD] text-white" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
