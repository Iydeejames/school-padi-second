
const ProfileTab = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Image and Name */}
          <div className="flex flex-col items-center md:w-1/3 w-full">
            <img
              src="/student.svg" // Replace with the actual image path
              alt="Student"
              className="rounded-lg w-full h-2/5 object-contain"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-[#54585C]">King David</h2>
              <p className="text-blue-500">(Teacher)</p>
            </div>
          </div>

          {/* Right Section - Tab Content */}
          <div className="md:w-3/4 border rounded-xl p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">General Information</h3>
          <p className="text-sm text-[#54585C]">Employee Type: Teaching Staff</p>
          <p className="text-sm text-[#54585C]">Staff ID: 123456</p>
          <p className="text-sm text-[#54585C]">First Name: Allison</p>
          <p className="text-sm text-[#54585C]">Last Name: Werner</p>
          <p className="text-sm text-[#54585C]">Phone Number: 123498127</p>
          <p className="text-sm text-[#54585C]">Email Address: allisonwerner@mail.com</p>
          <p className="text-sm text-[#54585C]">Date of Birth: 28-04-1997</p>
          <p className="text-sm text-[#54585C]">Gender: Female</p>
        </div>

     
        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">Additional Details</h3>
          <p className="text-sm text-[#54585C]">Address: Lot 45, GRA</p>
          <p className="text-sm text-[#54585C]">Zip Code: 283653</p>
          <p className="text-sm text-[#54585C]">State: Lagos</p>
          <p className="text-sm text-[#54585C]">Country: Nigeria</p>
          <p className="text-sm text-[#54585C]">Father’s Name: Solomon David</p>
          <p className="text-sm text-[#54585C]">Mother’s Name: Martha David</p>
          <p className="text-sm text-[#54585C]">Parent Contact: 080 5868 484</p>
          <p className="text-sm text-[#54585C]">Parent Email: thedavids01@gmail.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-[500] text-[#54585C]">Skills & Social Details</h3>
        <div className="mt-2 grid justify-center grid-cols-3 item-center">
          <h4 className="text-sm ml-0  m-auto col-span-1 font-[500] text-[#8E959C]">Profile Summary:</h4>
          <p className="text-sm col-span-2 text-[#54585C] leading-snug">
            King David is a dedicated and ambitious student known for his strong academic performance
            and leadership qualities. He excels in subjects such as mathematics, science, and history,
            consistently achieving top grades. David is also actively involved in extracurricular activities,
            including the debate team, student government, and the school’s robotics club. His peers and
            teachers describe him as a motivated individual with excellent problem-solving skills and a
            collaborative spirit. David aspires to pursue a career in engineering and is committed to making
            a positive impact in his community through his academic and extracurricular endeavors.
          </p>
        </div>
        <div className="mt-4 grid justify-center grid-cols-3 item-center ">
          <h4 className="text-sm col-span-1  font-[500] text-[#8E959C]">Skills:</h4>
          <p className="text-sm text-[#54585C] leading-snug">Time management, critical thinking, communication, technological proficiency</p>
        </div>
        <div className="mt-4 grid justify-center xl:grid-cols-3 grid-cols-1 item-center">
          <h4 className="text-sm ml-0  m-auto col-span-1 font-[500] text-[#8E959C]">Facebook Profile Link:</h4>
          <p><a href="https://www.facebook.com/alisontwerner/profile" className="font-normal text-sm text-[#54585C]">https://www.facebook.com/alisontwerner/profile</a></p>
        </div>
        <div className="mt-4 grid justify-center xl:grid-cols-3 grid-cols-1 item-center">
          <h4 className="text-sm col-span-1  font-[500] text-[#8E959C]">LinkedIn Profile Link:</h4>
          <p><a href="https://www.linkedin.com/in/alisontwerner/profile" className="font-normal text-sm text-[#54585C]">https://www.linkedin.com/in/alisontwerner/profile</a></p>
        </div>
      </div>
    </div>
        </div>
   
  );
};

export default ProfileTab;
