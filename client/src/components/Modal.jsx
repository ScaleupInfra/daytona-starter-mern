// src/Modal.js
import React, { useEffect } from 'react';

const Modal = ({ show, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'modal-backdrop') {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div id="modal-backdrop" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-auto z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-8">
        <h2 className="text-2xl mb-4">Create New User</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">GitHub Link</label>
              <input type="url" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">LinkedIn Link</label>
              <input type="url" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
