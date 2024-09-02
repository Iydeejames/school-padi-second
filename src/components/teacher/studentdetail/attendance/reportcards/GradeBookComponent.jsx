import ExpandIcon from "../../../../reusables/icons/ExpandIcon";
import PropTypes from "prop-types";
import ShrinkIcon from "../../../../reusables/icons/ShrinkIcon";
import AssessmentComponent from "./AssessmentComponent";

export default function GradeBookComponent({
  data,
  handleExpandClick,
  expandedRow,
}) {
  return (
    <>
      {data.map((row, index) => (
        <div key={index}>
          <div className="flex items-start gap-8">
            <table className="w-full font-[500] text-[#8E959C] border border-[#E6F2FF] rounded-2xl border-collapse">
              <thead>
                <tr className="bg-[#FAFBFC] font-[500] rounded-t-2xl">
                  <th className="border-b border-[#E6F2FF] py-3 font-[500] px-4 text-left rounded-tl-2xl">
                    Subject
                  </th>
                  <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                    HW (4)
                  </th>
                  <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                    Test
                  </th>
                  <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                    Exam
                  </th>
                  <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  border-[#E6F2FF] px-4 py-3">
                    {row.subject}
                  </td>
                  <td className="border px-4 border-[#E6F2FF] py-3">
                    {row.hw}
                  </td>
                  <td className="border px-4 border-[#E6F2FF] py-3">
                    {row.test}
                  </td>
                  <td className="border px-4 border-[#E6F2FF] py-3">
                    {row.exam}
                  </td>
                  <td className="border px-4 border-[#E6F2FF] py-3">
                    {row.overall}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="text-blue-500 p-4 bg-[#E6F2FF] rounded-xl"
              onClick={() => handleExpandClick()}
            >
              {!expandedRow ? <ExpandIcon /> : <ShrinkIcon />}
            </button>
          </div>
          {expandedRow && (
            <div className=" p-4 mt-2 rounded-xl shadow-inner">
              <AssessmentComponent />
            </div>
          )}
          {/* Expanded details */}
        </div>
      ))}

      <div className="flex items-start my-8 gap-8">
        <table className="w-full font-[500] text-[#8E959C] border border-[#E6F2FF] rounded-2xl border-collapse">
          <thead>
            <tr className="bg-[#FAFBFC] font-[500] rounded-t-2xl">
              <th className="border-b border-[#E6F2FF] py-3 font-[500] px-4 text-left rounded-tl-2xl">
                Subject
              </th>
              <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                HW (4)
              </th>
              <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                Test
              </th>
              <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                Exam
              </th>
              <th className="border px-4 border-[#E6F2FF] py-3 font-[500] text-left">
                Overall
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border  border-[#E6F2FF] px-4 py-3">
                  {row.subject}
                </td>
                <td className="border px-4 border-[#E6F2FF] py-3">{row.hw}</td>
                <td className="border px-4 border-[#E6F2FF] py-3">
                  {row.test}
                </td>
                <td className="border px-4 border-[#E6F2FF] py-3">
                  {row.exam}
                </td>
                <td className="border px-4 border-[#E6F2FF] py-3">
                  {row.overall}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => handleExpandClick()}
          className="text-blue-500 p-4 bg-[#E6F2FF] rounded-xl"
        >
          {!expandedRow ? <ExpandIcon /> : <ShrinkIcon />}
        </button>
      </div>
    </>
  );
}
GradeBookComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleExpandClick: PropTypes.func,
  expandedRow: PropTypes.bool,
};
