//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
//import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/schoolpadi-img/user.svg"
import camera from "../../../assets/schoolpadi-img/camera.svg";
import uploadIcon from "../../../assets/schoolpadi-img/upload.svg";
import bin from "../../../assets/schoolpadi-img/bin.svg";
import successIcon from "../../../assets/schoolpadi-img/success.svg";
import tick from "../../../assets/schoolpadi-img/tick.svg";
import { TiTick } from "react-icons/ti";
import { BiX } from "react-icons/bi";
import Modal from "../../atoms/modal";

export default function AddAdmin() {
  const [isuploaded, setisuploaded] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  const uploadhandler = () => {
    setisuploaded(!isuploaded);
  };

  const handleSubmit = () => {
    setisSubmitted(!isSubmitted);
  };

  const upload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      uploadhandler();
    }
  };

  return (
    <div className=" relative  ">
      {/* header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <div
          className="text-white cursor-pointer text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2"
          onClick={handleBackClick}
        >
          <AiOutlineArrowLeft /> <p className="text-sm">Back</p>
        </div>
        {/*
        <div className="text-white  py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0">
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Admin
        </div>
        */}
      </div>
      {/* main */}

      <div className="relative mx-[2%] -top-4 ">
        <div className="flex-col flex md:flex-row gap-8 ">
          <div className="rounded-full md:w-[14.75rem] w-[10rem] md:h-[14.75rem] h-[10rem] md:self-start self-center bg-[#FFE7CC] flex justify-center items-center overflow-hidden ">
            {imageUrl ? (
              <img src={imageUrl} alt="Preview" className=" w-full h-full object-cover rounded-md" />
            ) : (
              <img src={user} alt="" className=" w-[7.375rem] h-[7.375rem] " />
            )}
          </div>
          <div className="rounded-full cursor-pointer md:w-[4.9169rem] w-[3rem] ring-white ring absolute top-[6rem] md:top-[10rem] md:left-[10rem] left-[16rem] md:h-[4.9169rem] h-[3rem] bg-[#C8D2DC] flex justify-center items-center ">
            <img src={camera} alt="" className=" md:w-[2.75rem] w-[2rem] md:h-[2.75rem] h-[2rem] " />

            <input
              type="file"
              id="file"
              className=" opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer "
              onChange={upload}
            />
          </div>

          {/* upload */}
          <div className="rounded-[.625rem] flex flex-1 bg-white flex-col gap-8 mb-8 ">
            <div className="  ">
              {
                // upload

                isuploaded ? (
                  <div className="flex justify-between px-4 py-5 border rounded-[.625rem]">
                    <div className="flex text-sm items-center gap-2 ">
                      <div className="w-[2rem] h-[2rem] bg-[#E7F6EC] flex justify-center items-center rounded-full ">
                        <img src={tick} alt className="w" />
                      </div>
                      <div className="">
                        <div className="">Upload Successful</div>
                        <div className=" text-[.6875rem] text-[#D3DBE3] ">File Title.pdf | 313 KB . 31 Aug, 2022</div>
                      </div>
                    </div>
                    <button className=" rounded-lg text-white text-sm py-2 px-2  " onClick={uploadhandler}>
                      <img src={bin} alt className="w" />
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between px-4 py-5 border rounded-[.625rem]">
                    <div className="flex text-sm items-center gap-2 ">
                      <div className="w-[2rem] h-[2rem] bg-[#FAFBFC] flex justify-center items-center rounded-full ">
                        <img src={uploadIcon} alt="" className="w" />
                      </div>
                      <div className="">
                        <div className="">Tap to Upload</div>
                        <div className=" text-[.6875rem] text-[#D3DBE3] ">CSV | 10MB max.</div>
                      </div>
                    </div>
                    <button className=" rounded-lg bg-[#027FFF] text-white text-sm py-2 px-4  " onClick={uploadhandler}>
                      Upload
                    </button>
                  </div>
                )
              }
              {/* or border */}
              <div className="flex gap-6 items-center text-[#D3DBE3] mt-8 ">
                <div className="border-[#D3DBE3] flex-1 border-b  "></div>
                <div className="text-sm">Or</div>
                <div className="border-[#D3DBE3] flex-1 border-b  "></div>
              </div>
            </div>

            {/* General Information */}
            <div className="px-4 py-5 border rounded-[.625rem]">
              <div className="h1 text-[#D3DBE3] mb-4 ">General Information</div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 ">
                <div className=" flex-1 text-[#54585C] ">
                  <div className=" text-sm  ">First Name</div>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="enter here"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  sm:text-sm rounded-md"
                  />
                </div>

                <div className=" flex-1 text-[#54585C] ">
                  <div className=" text-sm  ">Last Name</div>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="enter here"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  sm:text-sm rounded-md"
                  />
                </div>

                <div className="flex-1 text-[#54585C] ">
                  <div className=" text-sm  ">Email</div>
                  <input
                    type="text"
                    name="Email"
                    placeholder="enter here"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  sm:text-sm rounded-md"
                  />
                </div>
                <div className="flex-1 text-[#54585C] ">
                  <div className=" text-sm  ">Contact</div>
                  <input
                    type="text"
                    name="Contact"
                    placeholder="enter here"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  sm:text-sm rounded-md"
                  />
                </div>
                <div className="flex-1 text-[#54585C] ">
                  <div className=" text-sm  ">Adresss</div>
                  <input
                    type="text"
                    name="Adresss"
                    placeholder="enter here"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  sm:text-sm rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex gap-8 ">
              <div
                className="bg-[#027FFF] hover:bg-[#027FFF]/80 text-white text-sm py-4 cursor-pointer  flex justify-center items-center gap-2 px-4  rounded-lg flex-1"
                onClick={handleSubmit}
              >
                <div className="rounded-full bg-white w-4 h-4 flex justify-center items-center">
                  <TiTick className="text-[#027FFF]" />
                </div>
                <div className="">Save</div>
              </div>
              <div className="bg-[#C8D2DC] hover:bg-[#C8D2DC]/80 text-white text-sm py-4 cursor-pointer  flex justify-center items-center gap-2 px-4  rounded-lg flex-1">
                <div className="rounded-full bg-white w-4 h-4 flex justify-center items-center">
                  <BiX className="text-[#C8D2DC]" />
                </div>
                <div className="">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        // Submitted
        isSubmitted && (
          <Modal>
            <div className="bg-white relative w-[32.625rem] rounded-lg p-8">
              <div
                className=" hover:border absolute right-8 bg-white w-8 h-8 flex justify-center items-center cursor-pointer "
                onClick={handleSubmit}
              >
                <BiX className="text-[#8E959C] text-[24px] " />
              </div>
              <div className="flex flex-col text-center my-[5.5rem] justify-center items-center gap-4">
                <div className="rounded-full w-[7.5rem] h-[7.5rem] flex justify-center items-center">
                  <img src={successIcon} alt className="w" />
                </div>
                <div className=" text-[1.5rem]">Student Added Successfully 🎉</div>
                <div className="text-sm font-light">
                  You have successfully initiated the process to onboard Student Name to your School.
                </div>
              </div>

              <div
                className="bg-[#027FFF] mt-8 text-white text-sm py-4 cursor-pointer  flex justify-center items-center gap-2 px-4  rounded-lg"
                onClick={handleSubmit}
              >
                Done
              </div>
            </div>
          </Modal>
        )
      }
    </div>
  );
}
