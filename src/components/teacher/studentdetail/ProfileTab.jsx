
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
              <p className="text-blue-500">(Student)</p>
            </div>
          </div>

          {/* Right Section - Tab Content */}
          <div className="md:w-3/4 border rounded-xl p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">Academic Detail</h3>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C] text-sm">Academic Session </span> : SY 2024</p>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C]">Section</span> : SECTION A</p>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C]">Class</span>: CLASS 2</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">General Information</h3>
          <p className="text-sm text-[#54585C]">First Name: King</p>
          <p className="text-sm text-[#54585C]">Last Name: David</p>
          <p className="text-sm text-[#54585C]">Student ID: 123456FR</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">Personal Information</h3>
          <p className="text-sm text-[#54585C]">Student Email: kingdavid34@gmail.com</p>
          <p className="text-sm text-[#54585C]"> Date of Birth: 04-02-2005</p>
          <p className="text-sm text-[#54585C]">Student Contact: 081 4857 473</p>
          <p className="text-sm text-[#54585C]">Gender: Male</p>
          <p className="text-sm text-[#54585C]">Blood Group: AB-</p>
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
        <div className="mt-2">
          <h4 className="text-lg font-[500] text-[#54585C]">Profile Summary:</h4>
          <p className="text-sm text-[#54585C] leading-snug">
            King David is a dedicated and ambitious student known for his strong academic performance
            and leadership qualities. He excels in subjects such as mathematics, science, and history,
            consistently achieving top grades. David is also actively involved in extracurricular activities,
            including the debate team, student government, and the school’s robotics club. His peers and
            teachers describe him as a motivated individual with excellent problem-solving skills and a
            collaborative spirit. David aspires to pursue a career in engineering and is committed to making
            a positive impact in his community through his academic and extracurricular endeavors.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-[500] text-[#54585C]">Skills:</h4>
          <p className="text-sm text-[#54585C] leading-snug">Time management, critical thinking, communication, technological proficiency</p>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-[500] text-[#54585C]">Facebook Profile Link:</h4>
          <p><a href="https://www.facebook.com/alisontwerner/profile" className="text-blue-600">https://www.facebook.com/alisontwerner/profile</a></p>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-[500] text-[#54585C]">LinkedIn Profile Link:</h4>
          <p><a href="https://www.linkedin.com/in/alisontwerner/profile" className="text-blue-600">https://www.linkedin.com/in/alisontwerner/profile</a></p>
        </div>
      </div>
    </div>
        </div>
   
  );
};

export default ProfileTab;
