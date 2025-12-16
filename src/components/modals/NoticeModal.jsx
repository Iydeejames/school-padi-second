import Modal from "../reusables/modal";
import PropTypes from "prop-types";

export default function NoticeModal({
  isOpen,
  //   toggleStatus,
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
        We dearly welcome you all to Classe365. <br /> <br />
        
        Now, this is your account&apos;s notice board and you&apos;ll be able to
        see all the notice board messages here. 
        
        <br />
        <br />
        Thanks, SchoolPadi
      </article>

      <p className="my-8 text-[#8E959C]">From: <span className="px-2 py-1  bg-blue-100 text-blue-500 rounded-xl">Admin</span></p>
    </Modal>
  );
}

NoticeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // toggleStatus: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};
