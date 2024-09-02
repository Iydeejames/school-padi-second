import PropTypes from "prop-types";

export default function UpcomingClassItem({
  avatar,
  subject,
  time,
  className,
  attendees,
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#FAFBFC] shadow-sm rounded-lg mb-4">
      {/* <div className=" p-3 rounded-xl"> */}
        <div className="flex border-0 pl-4 border-[#027FFF] border-l-4 items-center">
          <img className="w-16 h-16 rounded-full" src={avatar} alt="Avatar" />
          <div className="ml-4">
            <h3 className="text-sm font-[500] text-[#54585C]">{subject}</h3>
            <p className="text-xs text-[#54585C] ">{time}</p>
          </div>
        </div>
      {/* </div> */}
      <div className="flex flex-col items-end">
       <p>{className} </p>  

      <div className="flex  items-center">
        <div className="flex -space-x-3">
          {attendees.map((attendee, index) => (
            <img
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white"
              src={attendee}
              alt="Attendee"
            />
          ))}
        </div>
      <div className="bg-[#FAFBFC] p-1 border-white  border-2 h-10 w-10 rounded-full">
        {`+${attendees.length}`}
        </div>
      </div>
      </div>
    </div>
  );
}

UpcomingClassItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  attendees: PropTypes.arrayOf(PropTypes.string).isRequired,
};
