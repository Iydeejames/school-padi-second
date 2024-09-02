import Modal from "../reusables/modal";
import PropTypes from "prop-types";

export default function SmsModal({
  isOpen,
  onClose,
  selectedItem,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      // title={isEnabled ? 'Disable Report Cards' : 'Enable Report Cards'}
    >
      <h3 className="text-2xl mt-4 mb-4">{selectedItem.title}</h3>

      {/* Content */}
      <article  className="font-normal mt-10 text-[#8E959C]">
        Dear All, <br /><br />
        We dearly welcome you all to Classs. <br /> <br />
        
        Now, this is your account&apos;s notice board and you&apos;ll be able to
        see all the notice board messages here. 
        
        <br />
        <br />
        Thanks, SchoolPadi
      </article>

      <div className="flex items-center flex-wrap mt-8">
                <p className="text-[#8E959C] text-xs mr-2">Publish To</p>
                {selectedItem.sentTo.split(", ").map((word, index) => {
                  const colors = [
                    "bg-blue-400",
                    "bg-blue-400",
                    "bg-blue-400",
                    "bg-blue-400",
                    "bg-blue-400",
                  ];
                  const colorClass = colors[index % colors.length]; // Cycle through colors

                  return (
                    <span
                      key={index}
                      className={`px-1 mx-1 text-white text-xs ${colorClass} rounded`}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
      {/* <p className="my-8 text-[#8E959C]">Published: <span className="px-2 py-1  bg-blue-100 text-blue-500 rounded-xl">Admin</span></p> */}
    </Modal>
  );
}

SmsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // toggleStatus: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};
