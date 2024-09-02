
const timetableData = [
  {
    time: '08:00 - 08:40',
    monday: 'Math - Class 3',
    tuesday: 'NIL',
    wednesday: 'Math - Class 3',
    thursday: 'Math - Class 3',
    friday: 'NIL',
  },
  {
    time: '08:40 - 09:20',
    monday: 'NIL',
    tuesday: 'Math - Class 3',
    wednesday: 'English - Class 3',
    thursday: 'English - Class 3',
    friday: 'Math - Class 3',
  },
  {
    time: '09:40 - 10:20',
    monday: 'English - Class 3',
    tuesday: 'NIL',
    wednesday: 'NIL',
    thursday: 'Lab - Class 3',
    friday: 'English - Class 3',
  },
  // Add more rows as per the timetable structure
  {
    time: '10:30 - 11:10',
    monday: 'NIL',
    tuesday: 'English - Class 3',
    wednesday: 'NIL',
    thursday: 'Lab - Class 3',
    friday: 'NIL',
  },
  {
    time: '11:20 - 12:00',
    monday: 'Lab - Class 3',
    tuesday: 'Lab - Class 3',
    wednesday: 'Biology - Class 3',
    thursday: 'Biology - Class 3',
    friday: 'Lab - Class 3',
  },
  {
    time: '12:00 - 01:00',
    monday: 'Break',
    tuesday: 'Break',
    wednesday: 'Break',
    thursday: 'Break',
    friday: 'Break',
  },
  {
    time: '01:00 - 01:40',
    monday: 'Biology - Class 3',
    tuesday: 'NIL',
    wednesday: 'Physics - Class 3',
    thursday: 'NIL',
    friday: 'Physics - Class 3',
  },
  {
    time: '01:50 - 02:30',
    monday: 'NIL',
    tuesday: 'Biology - Class 3',
    wednesday: 'NIL',
    thursday: 'Physics - Class 3',
    friday: 'NIL',
  },
  {
    time: '02:40 - 03:20',
    monday: 'Physics - Class 3',
    tuesday: 'NIL',
    wednesday: 'NIL',
    thursday: 'NIL',
    friday: 'NIL',
  },
  {
    time: '03:30 - 04:10',
    monday: 'NIL',
    tuesday: 'Physics - Class 3',
    wednesday: 'Lab - Class 3',
    thursday: 'NIL',
    friday: 'Physics - Class 3',
  },
  {
    time: '04:10 - 04:20',
    monday: 'Closing',
    tuesday: 'Closing',
    wednesday: 'Closing',
    thursday: 'Closing',
    friday: 'Closing',
  },
];

export default function Timetable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-[#8E959C] table-auto border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-[#E6F2FF]">Days</th>
            <th className="border border-gray-300 px-4 py-2 bg-blue-100">Monday</th>
            <th className="border border-gray-300 px-4 py-2 bg-blue-100">Tuesday</th>
            <th className="border border-gray-300 px-4 py-2 bg-blue-100">Wednesday</th>
            <th className="border border-gray-300 px-4 py-2 bg-blue-100">Thursday</th>
            <th className="border border-gray-300 px-4 py-2 bg-blue-100">Friday</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((row, index) => (
            <tr key={index} className="text-[#8E959C] font-[400]">
              <td className="border border-gray-300 bg-[#E6F2FF] px-4 py-2">{row.time}</td>
              <td className="border border-gray-300 px-4 py-2">{row.monday}</td>
              <td className="border border-gray-300 px-4 py-2">{row.tuesday}</td>
              <td className="border border-gray-300 px-4 py-2">{row.wednesday}</td>
              <td className="border border-gray-300 px-4 py-2">{row.thursday}</td>
              <td className="border border-gray-300 px-4 py-2">{row.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
