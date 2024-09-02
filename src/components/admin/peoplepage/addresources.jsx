import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import successIcon from "../../../assets/schoolpadi-img/success.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../../atoms/modal";

export default function AddResources() {
  const [isSubmitted, setisSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  const handleSubmit = () => {
    setisSubmitted(!isSubmitted);
  };

  return (
    <>
      {" "}
      {/* header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <div
          className="text-white cursor-pointer text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2"
          onClick={handleBackClick}
        >
          <AiOutlineArrowLeft />
          <p className="text-sm">Back</p>
        </div>

        <div className="text-white  py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0">
          Requester Details
        </div>
      </div>
      <div className="relative mx-[2%] -top-4 space-y-8 ">
        <div className="rounded-[.625rem] flex flex-1 bg-white border  flex-col md:gap-8 gap-4  p-4 ">
          <div className="">Status</div>
          <div className="flex">
            {/* radio buttons */}
            <div className="flex items-center gap-3 md:text-sm text-xs ">
              <div className=" space-x-1">
                <input type="radio" id="allocated" name="status" value="allocated" />
                <label className=" text-green-500" htmlFor="allocated">
                  Allocated
                </label>
              </div>
              <div className=" space-x-1">
                <input type="radio" id="rejected" name="status" value="rejected" />
                <label className=" text-customRed" htmlFor="rejected">
                  Rejected
                </label>
              </div>
              <div className=" space-x-1">
                <input type="radio" id="approved" name="status" value="approved" />
                <label className=" text-primary" htmlFor="approved">
                  Approved
                </label>
              </div>
              <div className=" space-x-1">
                <input type="radio" id="pending" name="status" value="pending" />
                <label className=" text-gray-500" htmlFor="pending">
                  Pending
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Request Information */}
        <div className="px-4 py-5 border rounded-[.625rem]">
          <div className="h1 text-[#D3DBE3] mb-4 ">Request Information</div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 text-xs md:text-sm ">
            <div className=" flex-1 text-[#54585C] ">
              <div className="   ">Resource</div>
              <input
                type="text"
                name="Resource"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>

            <div className=" flex-1 text-[#54585C] ">
              <div className="   ">Requester</div>
              <input
                type="text"
                name="Requester"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>

            <div className="flex-1 text-[#54585C] ">
              <div className="   ">Department</div>
              <input
                type="text"
                name="Department"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>
            <div className="flex-1 text-[#54585C] ">
              <div className="   ">Number</div>
              <input
                type="text"
                name="Number"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>
            <div className="flex-1 text-[#54585C] ">
              <div className="   ">Allocation Start</div>
              <input
                type="text"
                name="Allocation Start"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>
            <div className="flex-1 text-[#54585C] ">
              <div className="   ">Allocation End</div>
              <input
                type="text"
                name="Allocation End"
                placeholder="enter here"
                className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
              />
            </div>
          </div>
          <div className="flex-1 text-[#54585C] text-xs md:text-sm mt-4 ">
            <div className="   ">Note</div>
            <input
              type="text"
              name="Note"
              placeholder="enter here"
              className="mt-1 block w-full pl-3 pr-10 py-2 md:text-base  border  rounded-md"
            />
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
                <div className=" text-[1.5rem]">Request Added Successfully 🎉</div>
                <div className="text-sm font-light">
                  You have successfully added Resource Request Details to your Request List.
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
    </>
  );
}
