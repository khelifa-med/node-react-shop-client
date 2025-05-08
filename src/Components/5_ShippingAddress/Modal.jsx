import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            {/* Close Icon at Parent Level */}
            <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                onClick={onClose}
            >
                <AiOutlineClose size={22} />
            </button>

            {/* Modal Content */}
            <div
                className="bg-white rounded-lg shadow-lg p-6 w-1/3 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;