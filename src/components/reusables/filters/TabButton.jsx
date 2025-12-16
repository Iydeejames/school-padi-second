import PropTypes from "prop-types";

const TabButton = ({ tabs, counts, activeTab, onTabClick, isBorder }) => {
  return (
    <div className={`flex space-x-4  overflow-x-auto justify-between px-8 mb-4 w-full`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-6 min-w-56 text-[#8A92A6] text-lg w-full  ${
            activeTab === tab
              ? isBorder
                ? "border-b-2 py-6 border-[#3599FF]  text-[#3599FF]"
                : "bg-accent-gradient text-white"
              : " "
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}{" "}
          {
            counts &&
            <>
            
            {counts !== 0 ? (
              <span
                className={` ${
                  activeTab === tab
                    ? " bg-[#3599FF] text-white"
                    : "bg-[#EEF1F4] text-[#8E959C]"
                } px-3 rounded-2xl`}
              >
                {" "}
                {counts[tab?.toLowerCase()]}{" "}
              </span>
            ) : null}{" "}
            </>
          }
        </button>
      ))}
    </div>
  );
};

TabButton.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  isBorder: PropTypes.bool,
  counts: PropTypes.object,
};

export default TabButton;
