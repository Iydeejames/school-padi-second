import PropTypes from "prop-types"

export default function InfoCard ({ title, mainValue, details, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-gray-500 ">{title}</h2>
          {icon}
        {/* <div className="bg-blue-50 p-2 rounded-full">
        </div> */}
      </div>
      <div className="text-2xl font-semibold text-[#6E7479]  mb-4">{mainValue}</div>
      <div className="flex justify-between text-gray-600">
        {details.map((detail, index) => (
          <div key={index} className="text-center">
            <div className="text-sm">{detail.label}</div>
            <div className="text-lg font-semibold">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
  mainValue: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  icon: PropTypes.element.isRequired,
}