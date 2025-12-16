import PropTypes from "prop-types"
const SACard = ({ title, mainValue, subValues }) => {
  return (
    <div className="p-4 bg-white border shadow-md flex justify-between items-start rounded-md">
        <div className=" space-y-4">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-4xl font-[500] text-[#6E7479]">{mainValue}</p>
      <div className="flex gap-x-4 items-center flex-wrap gap-y-3">

      {Array.isArray(subValues) ? (
        subValues.map((subValue, index) => (
          <p key={index} className= "bg-[#F2F5F7] p-1 rounded-full px-2 text-sm text-gray-500">{`${subValue.label}: ${subValue.value}`}</p>
        ))
      ) : (
        <p className="text-gray-500">{subValues}</p>
      )}

        </div>
      </div>
      <div className="bg-[#E6F2FF] h-10 w-10 p-2 rounded-xl">

        <img src="/3d.svg" className="" alt="" />
      </div>
    </div>
  );
};

SACard.propTypes = {
title: PropTypes.string,
  mainValue: PropTypes.string,
  subValues: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]),
};



export default SACard;
