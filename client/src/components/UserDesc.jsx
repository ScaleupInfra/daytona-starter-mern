import { useRecoilValue } from "recoil";
import { currentEmployeeState, userData } from "../state";
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdPhone, MdBusinessCenter, MdBusiness } from 'react-icons/md';
export const  UserDesc = () => {
    const currentEmployee = useRecoilValue(currentEmployeeState);
    const userList = useRecoilValue(userData);
    const user = userList.find(obj => obj.companyUid === currentEmployee);
    return <div className="bg-[#151515] flex flex-col mx-6 p-4 rounded-2xl border-solid border-l-8 border-l-green-600 my-8 gap-y-4">
        <div>
            <div className="text-3xl font-bold mb-4">
                Bio
            </div>
            <div className="text-justify">
                {user.bio}
            </div>

        </div>
        <div className="flex flex-row gap-x-24 mb-6 ">
            <div className="flex flex-col">
                <div className="text-3xl font-bold mb-4">
                    Contact
                </div>
                <div className="flex fles-row items-center text-center gap-x-4 ml-3">
                    <FaEnvelope/>
                    <div>
                        {user.email}
                    </div>
                </div>
                <div className="flex fles-row items-center text-center gap-x-4 ml-3">
                    <MdPhone/>
                    <div>
                        {user.mobile}
                    </div>
                </div>
            </div>
            <div>
                <div className="text-3xl font-bold mb-4">
                    Work History
                </div>
                <div className="flex fles-row items-center text-center gap-x-4 ml-3">
                    <MdBusiness/>
                    <div>
                        {user.workHistory.companyName}
                    </div>
                </div>
                <div className="flex fles-row items-center text-center gap-x-4 ml-3">
                    <MdBusinessCenter/>
                    <div>
                        {user.workHistory.position}
                    </div>
                </div>
                </div>
        </div>
    </div>
}