import { FaCheckSquare } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { MdPerson } from "react-icons/md";

export default function GridView () {
    const scheduleData = [
      {
        time: '08:00 - 08:40',
        Monday: {
          subject: 'Mathematics',
          class: 'Class 3',
          students: 32,
          attendance: true,
          lms: true,
        },
      },
      {
        time: '11:20 - 12:00',
        Monday: {
          subject: 'Mathematics',
          class: 'Class 3',
          students: 32,
          attendance: true,
          lms: true,
        },
      },
      {
        time: '02:40 - 03:20',
        Monday: {
          subject: 'Mathematics',
          class: 'Class 3',
          students: 32,
          attendance: true,
          lms: true,
        },
      },
      // Add more slots as needed
    ];
  
    return (
      <div className="bg-white p-4 rounded-xl border-[#C8D2DC] shadow-md">
        <p className='my-4 text-[#C8D2DC] text-sm'>Schedule</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="border">
              <tr className="border">
                <th className="py-2 px-4">Days</th>
                <th className="py-2 px-4 bg-blue-100">Monday</th>
                <th className="py-2 px-4">Tuesday</th>
                <th className="py-2 px-4">Wednesday</th>
                <th className="py-2 px-4">Thursday</th>
                <th className="py-2 px-4">Friday</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 min-w-40">{slot.time}</td>
                  <td className="py-2 px-4 min-w-80 border">
                    {slot.Monday ? (
                      <div className=" max-w-[100px] flex flex-col gap-6 w-full">
                        <p className="font-medium">{slot.Monday.subject}</p>
                        <p className="text-gray-500  w-full">{slot.Monday.class}</p>
                        <div className="flex w-80 space-x-2 mt-2 ">
                          <span className=" text-black   gap-1 py-1 rounded text-xs flex items-center">
                            <span className="bg-[#FFBE00] p-2"> <MdPerson /> </span>{' '}
                           <span className="bg-[#FFBE00] flex items-center p-1">{slot.Monday.students} Students </span>  
                          </span>
                          <span className=" text-[#3599FF] gap-1 px-2 py-1 rounded text-xs flex items-center">
                           <span className="bg-[#E6F2FF]"> <FaCheckSquare /> </span>   <span  className="bg-[#E6F2FF]">Attendance </span>   
                          </span>
                          <span className=" px-2 py-1 gap-1 text-white rounded text-xs flex items-center">
                           <span className="bg-[#04BF3C] p-1"> <LiaBookSolid /> </span>   <span className="bg-[#04BF3C] p-1">LMS </span>  
                          </span>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="py-2 px-4 min-w-52 border"></td>
                  <td className="py-2 px-4 border"></td>
                  <td className="py-2 px-4 border"></td>
                  <td className="py-2 px-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }