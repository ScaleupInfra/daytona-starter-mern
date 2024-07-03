import React from 'react';
import sample from '../assets/sample-profile.jpg';
import { currentEmployeeState, userData } from '../state';
import { useRecoilState } from 'recoil';
import { FaTimes } from 'react-icons/fa';

export const UserCard = ({name, id, pic}) => {
  const [userList, setUserList] = useRecoilState(userData);
  const [currentEmployee, setCurrentEmployee] = useRecoilState(currentEmployeeState);
  const handleClick = () => {
    const user = userList.find(obj => obj.companyUid === id);
    setCurrentEmployee(user);
  }
  const handleCancle = () => {
    if(id !== currentEmployee.companyUid){
      let newUSerList = [];
      userList.map((obj)=>{
        if(obj.companyUid !== id) newUSerList.push(obj);
      })
      console.log(newUSerList)
  
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
      <img src={pic ? pic : sample} alt="No img" className=' w-12 h-12 rounded-full' />
      <div className='flex flex-col'>
        <p className='font-bold'>{name}</p>
      </div>
    </div>
      <div className=' absolute top-0 right-0 px-2 pb-1 pt-2 cursor-pointer hover:text-lg hover:text-[#2ECC71]' onClick={handleCancle}>
        <FaTimes/>
      </div>
    </div>
  )
}

