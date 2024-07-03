// src/NewUser.js
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
    <>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleOpenModal}
      >
        Create New User
      </button>
      <Modal show={showModal} onClose={handleCloseModal} />
    </>
  );
};

