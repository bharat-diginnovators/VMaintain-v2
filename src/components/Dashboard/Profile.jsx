import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../../Slices/profileSlice";
import profile from "../../assets/profile.svg";
import upload from "../../assets/Icons/upload.svg";
import Input from "../../Core/Input";
import Button from "../../Core/Button";
import Dropdown from "../../Core/Dropdown";

const Profile = () => {
  const dispatch = useDispatch();
  const storedProfileImage = useSelector((state) => state.profile.profileImage);
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

  const [profileImage, setLocalProfileImage] = useState(storedProfileImage || profile);


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
    // console.log(formData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        if (imageDataUrl) {
          setLocalProfileImage(imageDataUrl); // Update local state
          dispatch(setProfileImage(imageDataUrl)); // Store image in Redux
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  

  const countryOptions = ["USA", "Canada", "UK", "Germany"];
  const cityOptions = ["New York", "Toronto", "London", "Berlin"];

  return (
    <section className="w-full p-2 lg:mb-16">
      <h1 className="font-semibold text-lg py-2">Profile</h1>
      <div className="flex justify-start items-start w-full rounded-sm overflow-hidden custom-shadow xs:flex-wrap md:flex-col lg:flex-row">
        
        {/* Upload profile images  */}
        <div className="xs:w-full lg:w-[15%] -mr-6 mt-6">
          <div className="xs:justify-center w-full flex md:justify-center lg:justify-center lg:pl-2 py-2">
            <div className="relative">
              <img src={profileImage} alt="profile" className="w-24 h-24 object-cover rounded-full border-2 border-[#882EFD]" />
              <label className="absolute bottom-0 right-1 cursor-pointer">
                <img src={upload} alt="upload" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="xs:w-full md:w-[85%] p-4">
          <form
            className="space-y-4 xs:px-2 md:px-10 py-4 flex flex-col w-full rounded-sm overflow-hidden"
            onSubmit={handleSubmit}
          >
            {/* Form Fields */}
            <div className="flex gap-2 w-full xs:flex-wrap lg:flex-nowrap">
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

            <div className="flex gap-2 w-full xs:flex-wrap lg:flex-nowrap">
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

            <div className="flex gap-2 w-full xs:flex-wrap lg:flex-nowrap">
              <div className="w-full">
                <label htmlFor="country" className="block">
                  Country
                </label>
                <Dropdown
                  options={countryOptions}
                  selected={formData.country}
                  onSelect={(value) => handleDropdownChange("country", value)}
                  placeholder=""
                  width="w-full"
                  menuWidth="xs:w-1/2 lg:w-2/6"
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
                  menuWidth="xs:w-1/2 lg:w-2/6"
                />
              </div>
            </div>

            <div className="flex gap-2 w-full xs:flex-wrap lg:flex-nowrap">
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
            <div className="py-2 self-end">
              <Button type="submit" text="Save"  className="bg-[#882EFD] text-[#fff]"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
