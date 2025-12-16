//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import edit from "../../../assets/schoolpadi-img/edit.png";
import { Link } from 'react-router-dom';


export default function AddStudent() {

     const navigate = useNavigate();

     const handleBackClick = () => {
       navigate(-1); // This will navigate back to the previous route
     };

     return (
     <div className=" relative  ">
          {/* header */}
          <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
  <div
    className="text-white text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2"
  >
    <div onClick={handleBackClick} className="flex items-center cursor-pointer">
      <AiOutlineArrowLeft />
      <p className="text-sm">Back</p>
    </div>
    <Link to="/policymanagement" className="flex items-center">
      <img src={edit} alt="Edit" className="cursor-pointer" />
    </Link>
  </div>
</div>


          {/* Overlapping White Box */}
   <div className="relative -top-6 px-6">
   <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4" style={{ color: '#54585C' }}>

    {/* Policy Section */}
    <div>
    <h1 className="font-semibold text-base" style={{ color: '#6E7479' }}>Attendance Policy</h1>
      <p className="text-xs text-[#B6BFC8]">Effective Date: June 1, 2024</p>
    </div>

    {/* Purpose Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Purpose:</h3>
      <p className="text-sm">The purpose of this policy is to establish the standards for student attendance to ensure that students attend school regularly and participate fully in their educational experience.</p>
    </div>

    {/* Policy Statement Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Policy Statement:</h3>
      <p className="text-sm">Regular attendance is essential for academic success. Students are expected to attend all scheduled classes, labs, and other instructional sessions. Absences must be justified and communicated to the school in a timely manner.</p>
    </div>

    {/* Definitions Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Definitions:</h3>
      <ul className="list-disc list-inside">
        <li className="text-sm">Excused Absence: An absence due to illness, family emergency, religious observance, or other legitimate reasons as determined by the school administration.</li>
        <li className="text-sm">Unexcused Absence: An absence without a valid reason or without proper notification to the school.</li>
      </ul>
    </div>

    {/* Procedures Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Procedures:</h3>
      <ol className="list-decimal list-inside text-sm">
        <li>Reporting Absences: Parents or guardians must notify the school of a student’s absence by 8:00 AM on the day of the absence, stating the reason and expected duration of the absence.</li>
        <li>Documentation: For absences due to medical reasons, a doctor’s note may be required upon the student’s return to school.</li>
        <li>Make-Up Work: Students are responsible for making up any missed work due to absences. Teachers will provide assignments and set deadlines for completion.</li>
      </ol>
    </div>

    {/* Responsibilities Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Responsibilities:</h3>
      <ul className="list-disc list-inside text-sm">
        <li>Students: Attend all classes and complete assigned work. Notify teachers in advance of planned absences.</li>
        <li>Parents/Guardians: Ensure their child attends school regularly and notify the school of any absences.</li>
        <li>Teachers: Maintain accurate attendance records and provide make-up work for excused absences.</li>
        <li>School Administration: Monitor attendance records and implement interventions for chronic absenteeism.</li>
      </ul>
    </div>

    {/* Consequences Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Consequences:</h3>
      <ul className="list-disc list-inside text-sm">
        <li>Unexcused absences may result in disciplinary action, which can include detention, loss of privileges, and impact on academic grades.</li>
        <li>Excessive unexcused absences can lead to referral to child protective services or legal action as per local regulations.</li>
      </ul>
    </div>

    {/* Review and Revision Section */}
    <div className="mt-6">
      <h3 className="text-md " style={{ color: '#B6BFC8' }}>Review and Revision:</h3>
      <p className="text-sm">This policy will be reviewed annually and revised as necessary to ensure compliance with educational standards and regulations.</p>
    </div>

    {/* Attachment Section */}
    <div className="mt-6">
      <h3 className="text-md" style={{ color: '#B6BFC8' }}>Attachment:</h3>
      <ul className="list-disc list-inside text-sm">
        <li><a href="#" className="text-blue-500 underline">Sample Doctors Note Template</a></li>
        <li><a href="#" className="text-blue-500 underline">Parental Notification Form</a></li>
      </ul>
    </div>

    {/* Last Updated and Status Section */}
    <div className="mt-6 text-sm">
      <p>Last Updated: June 21st, 2024.</p>
      <p>Status: Active</p>
    </div>
    
  </div>
</div>

     </div>
     )

}