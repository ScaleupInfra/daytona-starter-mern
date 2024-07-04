import { useRecoilValue } from "recoil";
import { currentEmployeeState, userData } from "../../state";
import ClientStatus from "../status/ClientStatus";
import ProjectStatus from "../status/ProjectStatus";

const  UserDesc = () => {
    const currentEmployee = useRecoilValue(currentEmployeeState);
    return <div className="bg-[#151515] flex flex-col mx-6 p-4 rounded-2xl border-solid border-l-8 border-l-green-600 my-8 gap-y-4">
        <div className="mx-4 pb-8">
            <div className="text-3xl font-bold mb-4 ">
                Bio
            </div>
            <div className="text-justify">
                {currentEmployee.bio}
            </div>
            <div className="">
                <ClientStatus/>
                <ProjectStatus/>
            </div>
        </div>
        
    </div>
}

export default UserDesc;