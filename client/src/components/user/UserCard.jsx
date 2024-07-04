import React from 'react';
import sample from '../../../src/assets/sample-profile.jpg';
import { currentEmployeeState, userData } from '../../state';
import { useRecoilState } from 'recoil';
import { FaTimes } from 'react-icons/fa';

const UserCard = ({name, id, profilePicture}) => {
  const [userList, setUserList] = useRecoilState(userData);
  const [currentEmployee, setCurrentEmployee] = useRecoilState(currentEmployeeState);
  const handleClick = () => {
    const user = userList.find(obj => obj._id === id);
    setCurrentEmployee(user);
  }
  const handleCancle = () => {
    if(id !== currentEmployee._id){
      let newUSerList = [];
      userList.map((obj)=>{
        if(obj._id !== id) newUSerList.push(obj);
      })
      // console.log(newUSerList)
  
      if(newUSerList.length < userList.length){
        setUserList(newUSerList);
      }
    }
  }
  return (
    <div className='relative'>

    <div
      className='flex items-center gap-5 w-full py-4 pl-7 cursor-pointer border-b-[1px] border-b-gray-400 hover:text-lg'
      onClick={handleClick}
      >
      <img src={profilePicture ? profilePicture : sample} alt="No img" className=' w-12 h-12 rounded-full' />
      <div className='flex flex-col'>
        <p className='font-bold'>{name}</p>
      </div>
    </div>
      <div className=' absolute top-0 right-0 px-5 pb-1 pt-3 cursor-pointer hover:text-lg hover:text-[#2ECC71]' onClick={handleCancle}>
        <FaTimes/>
      </div>
    </div>
  )
}

export default UserCard;