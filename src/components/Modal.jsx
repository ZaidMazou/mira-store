import React from 'react';

const Modal = ({closeModal}) => {
    return (
        <div className='modal' onClick={(e)=>{if(e.target.className === "modal" || e.target.className === "modalbox")closeModal() }}>
            <div className="modalbox">
                <div className='modalimg'>
                    <img src="Mira/IMG-20230919-WA0093.jpg" alt="" />
                </div>
                <div className="modaltext">
                    <p>Ce produit te plaît ? </p>
                    <p>Contact moi au numero WhatsApp :</p>
                    <span>+229 41 82 29 25</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;