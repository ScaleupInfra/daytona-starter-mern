import React, { useState } from 'react';
import Modal from './Modal';

export const NewUser = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        <button 
          className="bg-[#151515] text-white px-4 py-2 rounded-md w-full text-center"
          onClick={handleOpenModal}
        >
          Create New User
        </button>
        <Modal show={showModal} onClose={handleCloseModal} />
      </div>
    );
};

