import { useRecoilValue } from "recoil";
import { currentEmployeeState } from "../../state";
import sample from '../../../src/assets/sample-profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdPhone} from 'react-icons/md';

const UserProfile = () => {
    const currentEmployee = useRecoilValue(currentEmployeeState)

    return <div className="bg-[#151515] flex flex-row mx-6 p-6 rounded-2xl border-solid border-l-8 border-l-green-600">
        <div>
            <img src={currentEmployee.pic ? currentEmployee.pic : sample} alt="No img" className=' w-48 h-48 rounded-full' />
            {console.log(currentEmployee.pic)}
        </div>
        <div className="ml-24">
            <div className={'flex flex-col gap-y-2'}>
                <div className="text-4xl font-bold">{currentEmployee.name}</div>
                <div className="text-2xl">{currentEmployee.designation}</div>
            </div>
            <div className="flex flex-row gap-x-8 mb-6 mt-4">
                    <div className="flex fles-row items-center text-center gap-x-2">
                        <FaEnvelope className="text-[#2ECC71]"/>
                        <div>
                            {currentEmployee.email}
                        </div>
                    </div>
                    <div className="flex fles-row items-center text-center gap-x-2">
                        <MdPhone className="text-[#2ECC71]"/>
                        <div>
                            {currentEmployee.mobile}
                        </div>
                    </div>
                </div>
            <div className={'flex flex-row mt-6'}>
                <a href={currentEmployee.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="flex flex-row items-center border-solid border-[#2ECC71] border-2 px-3 mr-2 py-0.5 rounded-lg">
                        <FaGithub/>
                        <div className="ml-1">Github</div>
                    </button>
                </a>
                <a href={currentEmployee.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="flex flex-row items-center border-solid border-[#2ECC71] border-2 px-3 ml-2 py-0.5 rounded-lg">
                        <FaLinkedin/>
                        <div className="ml-1">LinkedIn</div>
                    </button>
                </a>
            </div>   
        </div>
    </div>
};

export default UserProfile;