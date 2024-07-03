import React from 'react';
import sample from '../assets/sample-profile.jpg';
import { currentEmployeeState } from '../state';
import { useRecoilState } from 'recoil';

export const UserCard = ({name, id, pic}) => {
  const [currentEmployee, setCurrentEmployee] = useRecoilState(currentEmployeeState);
  const handleClick = () => {
    setCurrentEmployee(id);
  }
//   console.log({name, id});
  return (
    <div
      
      className='flex items-center gap-5 w-full py-4 pl-7 cursor-pointer border-b-[1px] border-b-gray-400'
      onClick={handleClick}
    >
      <img src={pic ? pic : sample} alt="No img" className=' w-12 h-12 rounded-full' />
      <div className='flex flex-col'>
        <p className='font-bold'>{name}</p>
        <p className=' text-sm '>{id}</p>
      </div>
    </div>
  )
}

