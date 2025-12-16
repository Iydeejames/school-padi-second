import { UpcomingClassItem } from "../../reusables/cards/teacher";

export default function UpcomingClasses  () {
  const classes = [
    {
      avatar: 'person.svg',
      subject: 'Mathematics',
      time: '08:00 - 08:40',
      className: 'Class 3',
      attendees: ['3d.svg', 'person.svg', 'vite.svg'], // Example attendee avatars
    },
    {
      avatar: '3d.svg',
      subject: 'Mathematics',
      time: '08:00 - 08:40',
      className: 'Class 3',
      attendees: ['3d.svg', 'person.svg', 'vite.svg'],
    },
    {
      avatar: 'vite.svg',
      subject: 'Mathematics',
      time: '08:00 - 08:40',
      className: 'Class 3',
      attendees: ['3d.svg', 'person.svg', 'vite.svg'],
    },
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-[500] text-[#C8D2DC]">Upcoming Classes</h2>
        <a href="#" className="text-sm text-[#3599FF] font-[500]">View all</a>
      </div>
      <p className="text-md font-[500] text-gray-800 mb-4">Monday 24, June 2024</p>
      <div className="overflow-y-auto max-h-64 custom-scrollbar">
        {classes.map((classItem, index) => (
          <UpcomingClassItem
            key={index}
            avatar={classItem.avatar}
            subject={classItem.subject}
            time={classItem.time}
            className={classItem.className}
            attendees={classItem.attendees}
          />
        ))}
      </div>
    </div>
  );
}