import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    children: React.ReactElement;
}

const Modal = ({ children }: ModalProps) => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
        return ReactDOM.createPortal(
            <>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-500 bg-white p-6 rounded-lg">
                    {children}
                </div>
            </>,
            modalRoot
        );
    }
};

export default Modal;
