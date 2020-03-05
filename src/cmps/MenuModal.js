import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from './Modal';

const MenuModal = (props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(_ => {
        setIsMounted(bool => !bool);
    }, []);

    const toggleModal = _ => {
        setIsMounted(!isMounted);
        setTimeout(_ => {
            props.setToggleMobMenu(!props.toggleMobMenu);
        }, 600);
    }

    return (
        <div className="modal-container" onClick={toggleModal}>
            <CSSTransition
                in={isMounted}
                timeout={700}
                classNames="modal"
                unmountOnExit
            >
                <Modal toggleModal={toggleModal}></Modal>
            </CSSTransition>
        </div>
    );
}

export default MenuModal;