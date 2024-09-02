import { RxCross2 } from "react-icons/rx";

export default function ModalWrap({ isOpen, onClose, children, className, size = "md" }) {
    const overlayClassName = "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
    const modalClassName = `bg-white rounded-xl py-6 md:py-8 px-4 shadow-lg overflow-hidden min-w-[70%] md:min-w-[45%]  ${className}`;

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={overlayClassName} onClick={onClose}>
            <div className={modalClassName} onClick={handleModalClick}>
                <div className="flex justify-between items-center w-full p-4">
                    {/* {title && <h2 className="text-lg font-semibold">{title}</h2>} */}
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-white border justify-start ml-auto p-1 rounded-lg hover:text-gray-600"
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
