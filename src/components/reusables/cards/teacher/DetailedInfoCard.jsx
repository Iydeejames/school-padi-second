import PropTypes from "prop-types"

export default function DetailedInfoCard  ({ title, mainValue, details, extraDetails, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-[#C8D2DC] font-">{title}</h2>
          {icon}
        {/* <div className="bg-blue-50 p-2 rounded-full">
        </div> */}
      </div>
      <div className="text-4xl font-[50] text-[#6E7479] mb-4">{mainValue}</div>
      <div className="grid grid-cols-3">

      <div className=" col-span-2 grid grid-cols-3 gap-y-4 text-gray-600 mb-4">
        {details.map((detail, index) => (
          <div key={index} className="text-center">
            <div className="text-sm">{detail.label}</div>
            <div className="text-lg font-semibold">{detail.value}</div>
          </div>
        ))}
      </div>
      <div className=" col-auto flex justify-center gap-4 text-gray-600">
        {extraDetails.map((extra, index) => (
          <div key={index} className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${extra.color}`}></div>
            <div className="text-sm">{extra.label}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

DetailedInfoCard.propTypes = {
    title: PropTypes.string.isRequired,
  mainValue: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.shape({ 
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
  extraDetails: PropTypes.arrayOf(PropTypes.shape({ 
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  icon: PropTypes.node.isRequired,
}