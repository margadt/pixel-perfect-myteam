import React from 'react';
import closeBtn from '../styles/images/icon-close.svg';

const Modal = (props) => {
    const stopPropagation = e => e.stopPropagation();

    return (
        <div className="modal" onClick={stopPropagation}>
            <img src={closeBtn} alt="close" className="close-btn" onClick={props.toggleModal} />
            <div className="menu flex column">
                <p>home</p>
                <p>about</p>
            </div>
            <div className="btn flex justify-center align-center"><p>contact us</p></div>
        </div>
    );
}

export default Modal;