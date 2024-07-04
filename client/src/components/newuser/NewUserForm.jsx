import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { showModalState } from '../../state';
import axios from 'axios';

const UserForm = () => {
  const [newUser, setNewUser] = useState({});
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [base64String, setBase64String] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'modal-backdrop') {
        setShowModal(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  },[] );

  useEffect(() => {
    if (base64String.base64) {
      setNewUser({
        ...newUser,
        pic: base64String.base64,
      });
    }
  }, [base64String, setNewUser]);

  if (!showModal) {
    return null;
  }

  function convert(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        res(reader.result);
      };
    });
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert(file);
    setBase64String({
      name: file.name,
      base64: base64,
    });
  };

  return (
    <div id="modal-backdrop" className="fixed inset-0 bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-[#151515] p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 my-8 border-solid border-[#2ECC71] border-[1px]">
        <h2 className="text-2xl mb-4">Create New User</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-white">Name</label>
            <input
              onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value });
              }}
              type="text"
              className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
              required
            />
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-white">Designation</label>
            <input
              onChange={(e) => {
                setNewUser({ ...newUser, designation: e.target.value });
              }}
              type="text"
              className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="clientStatus" className="text-sm font-medium text-white">Client Status</label>
              <select
                id="clientStatus"
                onChange={(e) => {
                  setNewUser({ ...newUser, clientStatus: e.target.value });
                }}
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              >
                <option value="" disabled selected>Select Client Status</option>
                <option value="Work Agreement Signed">Work Agreement Signed</option>
                <option value="Deliverables Assigned">Deliverables Assigned</option>
                <option value="Deliverables Completed">Deliverables Completed</option>
                <option value="Payment Pending">Payment Pending</option>
                <option value="Payment Recieved">Payment Recieved</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="projectStatus" className="text-sm font-medium text-white">Project Status</label>
              <select
                id="projectStatus"
                onChange={(e) => {
                  setNewUser({ ...newUser, projectStatus: e.target.value });
                }}
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              >
                <option value="" disabled selected>Select Project Status</option>
                <option value="Work Agreement Signed">Work Agreement Signed</option>
                <option value="Deliverables Assigned">Deliverables Assigned</option>
                <option value="Deliverables Completed">Deliverables Completed</option>
                <option value="Payment Pending">Payment Pending</option>
                <option value="Payment Recieved">Payment Recieved</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-white">Email</label>
              <input
                onChange={(e) => {
                  setNewUser({ ...newUser, email: e.target.value });
                }}
                type="email"
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-white">Phone Number</label>
              <input
                onChange={(e) => {
                  setNewUser({ ...newUser, mobile: e.target.value });
                }}
                type="tel"
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-white">GitHub Link</label>
              <input
                onChange={(e) => {
                  setNewUser({ ...newUser, github: e.target.value });
                }}
                type="url"
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-white">LinkedIn Link</label>
              <input
                onChange={(e) => {
                  setNewUser({ ...newUser, linkedin: e.target.value });
                }}
                type="url"
                className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-white">Bio</label>
            <textarea
              onChange={(e) => {
                setNewUser({ ...newUser, bio: e.target.value });
              }}
              className="mt-1 w-full bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-0.5 rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label htmlFor="file-upload" className="cursor-pointer text-sm font-medium text-white bg-[#090909] border-solid border-[#2ECC71] border-[1px] px-3 mr-2 py-2 rounded-lg">
              {base64String.name ? base64String.name : "Upload Profile Picture"}
            </label>
            <input
              onChange={handleFileInputChange}
              id="file-upload"
              type="file"
              className="hidden"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => {
                const data = {
                  name: newUser.name,
                  designation: newUser.designation,
                  bio: newUser.bio,
                  contactDetails: {
                    email: newUser.email,
                    phone: newUser.mobile,
                  },
                  profiles: {
                    linkedin: newUser.linkedin,
                    github: newUser.github,
                  },
                  customerStatus: newUser.clientStatus,
                  projectStatus: newUser.projectStatus,
                  profilePicture: newUser.pic,
                };
                console.log(newUser);
                console.log(data);
                setShowModal(false);
                setNewUser({})
              }}
              className="bg-[#151515] text-white px-4 py-2 border-solid border-[#2ECC71] border-[1px] rounded-lg"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-[#151515] text-white px-4 py-2 border-solid border-[#2ECC71] border-[1px] rounded-lg"
              onClick={()=>{setShowModal(false)}}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
