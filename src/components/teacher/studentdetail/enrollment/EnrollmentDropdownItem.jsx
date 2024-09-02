import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";

export default function EnrollmentDropdownItem({
  year,
  section,
  status,
  subjects,
  electives,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b text-[#54585C]">
      <div
        onClick={handleToggle}
        className="cursor-pointer flex justify-between items-center p-4 bg-white hover:bg-gray-100 transition-colors rounded-xl"
      >
        <div>
          <h3 className="text-xs font-[500] ">{year}</h3>
          <p className="text-gray-600 text-sm">{section}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-md ${
              status === "In progress"
                ? "bg-blue-100 text-blue-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {status}
          </span>
          {!isOpen ? (
            <IoIosArrowForward />
          ) : (
            <MdCancel className="text-[#D3DBE3]" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border mb-8 text-[#54585C] rounded-xl">
          {subjects.length > 0 && (
            <div>
              <h4 className="text-xs font-[500] my-4 text-[#54585C]">
                Core Subjects
              </h4>
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b   border-0 items-center py-4"
                >
                  <p className="text-[#54585C]">{subject.name}</p>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-md ${
                      subject.status === "Completed"
                        ? "bg-blue-100 text-blue-600"
                        : subject.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {subject.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {electives.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xs my-4 font-[500] text-[#54585C]">
                Elective Subjects
              </h4>
              {electives.map((elective, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-0 items-center py-4"
                >
                  <p>{elective.name}</p>
                  <span className="text-xs font-medium px-3 py-1 rounded-md bg-blue-100 text-blue-600">
                    {elective.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

EnrollmentDropdownItem.propTypes = {
  year: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(PropTypes.object),
  electives: PropTypes.arrayOf(PropTypes.object),
};
