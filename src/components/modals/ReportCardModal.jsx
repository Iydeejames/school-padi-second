import { FaCheckCircle } from "react-icons/fa";
import Modal from "../reusables/modal";
import { MdCancel } from "react-icons/md";
import PropTypes from "prop-types";

export default function ReportCardModal({
  isOpen,
  // title,
  toggleStatus,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      // title={isEnabled ? 'Disable Report Cards' : 'Enable Report Cards'}
    >
      <div className="space-y-4">
        {
            toggleStatus === "enabled" ? 
        <h2 className="text-[#54585C] text-2xl font-[500]">
          Enable Report Cards
        </h2>:
        <h2 className="text-[#54585C] text-2xl font-[500]">
          Disable Report Cards
        </h2>
        }
            {
                toggleStatus === "enabled" ? 
        <p className="text-[#8E959C] text-sm leading-loose font-[400]">
          Enabling this setting will activate the report card and grade book for
          all enrollments. <br /> <br />
          Please keep in mind that if the report card has been deactivated for a
          specific enrollment, this setting will not reactivate it, To activate
          a report card for a specific enrollment, you will need to go to the
          report card of that enrollment and enable it seperately.
        </p> :
         <p className="text-[#8E959C] text-sm leading-loose font-[400]">
         Disabling this setting will deactivate the report card and grade book for all enrollments
       </p> 
            }

        <div className="grid grid-cols-2 border-t mt-6 py-5 gap-4 text-white">
          <button
            onClick={onClose}
            className="bg-[#027FFF] rounded-xl p-3 flex items-center justify-center gap-4"
          >
            {" "}
            <FaCheckCircle className="text-white" /> <span>Ok</span>
          </button>
          <button
            onClick={onClose}
            className="bg-[#C8D2DC] flex rounded-xl items-center justify-center gap-4"
          >
            {" "}
            <MdCancel className="text-white" /> <span>Close </span>
          </button>
        </div>
      </div>
    </Modal>
  );
}

ReportCardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    toggleStatus: PropTypes.func,
    onClose: PropTypes.func.isRequired,

}