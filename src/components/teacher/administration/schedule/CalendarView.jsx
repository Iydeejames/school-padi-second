
const scheduleData = [
    {
      time: '08:00 - 08:40',
      Monday: 'Math - Class 3',
      Tuesday: 'NIL',
      Wednesday: 'Math - Class 3',
      Thursday: 'Math - Class 3',
      Friday: 'NIL',
    },
    {
      time: '08:50 - 09:30',
      Monday: 'NIL',
      Tuesday: 'English - Class 3',
      Wednesday: 'NIL',
      Thursday: 'English - Class 3',
      Friday: 'Math - Class 3',
    },
    {
      time: '09:40 - 10:20',
      Monday: 'English - Class 3',
      Tuesday: 'Math - Class 3',
      Wednesday: 'NIL',
      Thursday: 'English - Class 3',
      Friday: 'Math - Class 3',
    },
    {
      time: '10:30 - 11:10',
      Monday: 'NIL',
      Tuesday: 'English - Class 3',
      Wednesday: 'NIL',
      Thursday: 'NIL',
      Friday: 'English - Class 3',
    },
    {
      time: '11:20 - 12:00',
      Monday: 'Lab - Class 3',
      Tuesday: 'Lab - Class 3',
      Wednesday: 'Biology - Class 3',
      Thursday: 'Lab - Class 3',
      Friday: 'Lab - Class 3',
    },
    {
      time: '12:00 - 01:00',
      Monday: 'Break',
      Tuesday: 'Break',
      Wednesday: 'Break',
      Thursday: 'Break',
      Friday: 'Break',
    },
    {
      time: '01:00 - 01:40',
      Monday: 'Biology - Class 3',
      Tuesday: 'NIL',
      Wednesday: 'Physics - Class 3',
      Thursday: 'Biology - Class 3',
      Friday: 'NIL',
    },
    {
      time: '01:50 - 02:30',
      Monday: 'NIL',
      Tuesday: 'Biology - Class 3',
      Wednesday: 'NIL',
      Thursday: 'NIL',
      Friday: 'Biology - Class 3',
    },
    {
      time: '02:40 - 03:20',
      Monday: 'Physics - Class 3',
      Tuesday: 'NIL',
      Wednesday: 'NIL',
      Thursday: 'Physics - Class 3',
      Friday: 'NIL',
    },
    {
      time: '03:30 - 04:10',
      Monday: 'NIL',
      Tuesday: 'Physics - Class 3',
      Wednesday: 'Lab - Class 3',
      Thursday: 'NIL',
      Friday: 'Physics - Class 3',
    },
    {
      time: '04:10 - 04:20',
      Monday: 'Closing',
      Tuesday: 'Closing',
      Wednesday: 'Closing',
      Thursday: 'Closing',
      Friday: 'Closing',
    },
  ];
export default function CalendarView() {
  return (
    <div>

<div className="bg-white p-4 rounded-xl border-[#C8D2DC] shadow-md">
<p className='my-4 text-[#C8D2DC] text-sm'>Schedule</p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-4">Days</th>
                <th className="py-2 px-4">Monday</th>
                <th className="py-2 px-4">Tuesday</th>
                <th className="py-2 px-4">Wednesday</th>
                <th className="py-2 px-4">Thursday</th>
                <th className="py-2 px-4">Friday</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{slot.time}</td>
                  <td className={`py-2 px-4 text-center ${slot.Monday !== 'NIL' ? 'bg-blue-500 text-white' : ''}`}>{slot.Monday}</td>
                  <td className={`py-2 px-4 text-center ${slot.Tuesday !== 'NIL' ? 'bg-blue-500 text-white' : ''}`}>{slot.Tuesday}</td>
                  <td className={`py-2 px-4 text-center ${slot.Wednesday !== 'NIL' ? 'bg-blue-500 text-white' : ''}`}>{slot.Wednesday}</td>
                  <td className={`py-2 px-4 text-center ${slot.Thursday !== 'NIL' ? 'bg-blue-500 text-white' : ''}`}>{slot.Thursday}</td>
                  <td className={`py-2 px-4 text-center ${slot.Friday !== 'NIL' ? 'bg-blue-500 text-white' : ''}`}>{slot.Friday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
