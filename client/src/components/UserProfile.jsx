import { useRecoilValue } from "recoil";
import { currentEmployeeState, userData } from "../state";
import sample from '../assets/sample-profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const UserProfile = () => {
    const currentEmployee = useRecoilValue(currentEmployeeState);
    const userList = useRecoilValue(userData);
    const user = userList.find(obj => obj.companyUid === currentEmployee);

    return <div className="bg-[#151515] flex flex-row mx-6 p-4 rounded-2xl border-solid border-l-8 border-l-green-600">
        <div>
            <img src={user.pic ? user.pic : sample} alt="No img" className=' w-48 h-48 rounded-full' />
        </div>
        <div className="ml-24">
            <div className={'flex flex-col gap-y-2'}>
                <div className="text-4xl font-bold">{user.name}</div>
                <div className="text-2xl">{user.designation}</div>
                <div>{user.companyUid}</div>
            </div>
            <div className={'flex flex-row mt-6'}>
                <a href={user.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="flex flex-row items-center border-solid border-green-600 border-2 px-2 mr-2 py-0.5 rounded-lg">
                        <FaGithub/>
                        <div className="ml-1">Github</div>
                    </button>
                </a>
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="flex flex-row items-center border-solid border-green-600 border-2 px-2 ml-2 py-0.5 rounded-lg">
                        <FaLinkedin/>
                        <div className="ml-1">LinkedIn</div>
                    </button>
                </a>
            </div>
        </div>
        
    </div>;
};
