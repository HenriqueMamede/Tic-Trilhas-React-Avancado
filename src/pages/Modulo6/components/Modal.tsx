


import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');

    if(modalRoot){
        return ReactDOM.createPortal(
            <>
                <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-500 bg-white p-6 rounded-lg">
                        {children}
                    </div>
            </>
        ,modalRoot);
    }
};

export default Modal;
