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
    <div id="modal-backdrop" className="fixed inset-0 bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-[#151515] p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-8 border-solid border-[#2ECC71] border-[1px] ">
        <h2 className="text-2xl mb-4">Create New User</h2>
        <form className="space-y-4">
          <div>
            <label className=" text-sm font-medium text-white">Name</label>
            <input type="text" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">Designation</label>
              <input type="text" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">Status</label>
              <input type="text" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">Email</label>
              <input type="email" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">Phone Number</label>
              <input type="tel" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">GitHub Link</label>
              <input type="url" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-white">LinkedIn Link</label>
              <input type="url" className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" />
            </div>
          </div>
          <div>
            <label className=" text-sm font-medium text-white">Bio</label>
            <textarea className="mt-1  w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg" rows="4"></textarea>
          </div>
          <div>
          <label for="file-upload" class="cursor-pointer text-sm font-medium text-white bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-2 rounded-lg">
            Upload Profile Picture
          </label>
          <input id="file-upload" type="file" class="hidden"/>
            
          </div>
          <div className="flex justify-end space-x-4">
            <button type="submit" className="bg-[#151515] text-white px-4 py-2 border-solid border-[#2ECC71] border-[1px] rounded-lg">Submit</button>
            <button type="button" className="bg-[#151515] text-white px-4 py-2 border-solid border-[#2ECC71] border-[1px] rounded-lg" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
