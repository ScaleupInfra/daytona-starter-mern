import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { currentEmployeeState } from "../../state";
import { FaCheckCircle } from 'react-icons/fa';
import projectStatusData from "../../../public/data/projectStatusData";

const ProjectStatus = () => {
  const [ProjectStatusList, setProjectStatusList] = useState(projectStatusData);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const currentEmployee = useRecoilValue(currentEmployeeState)

  return (
    <div className="w-full font-medium">
      <div className="text-3xl font-bold my-6">
        Project Status
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-[#151515] p-2 flex items-center justify-between border-solid rounded-lg border-2 border-[#2ECC71] text-white`}
      >
        {selected ? selected : currentEmployee.projectStatus}
        <BiChevronDown size={20} className={`${open && "rotate-180"} text-[#2ECC71]`} />
      </div>
      <div
        className={`bg-[#151515]  mt-2 overflow-y-auto ${
          open ? "max-h-60" : "hidden"
        } border-solid rounded-lg border-2 border-[#2ECC71] `}
      >
        <div className="flex items-center px-2 bg-[#090909] ">
          <AiOutlineSearch size={18} className="text-white" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search Client Status"
            className="text-white p-2 outline-none bg-[#090909] w-full "
          />
        </div>

        <div className="bg-[#090909] "> 
          {ProjectStatusList?.map((projectStatus) => {
            return (
              <div
              key={projectStatus}
              className={` flex flex-row justify-between items-center p-2 text-md font-light hover:font-medium pl-4 py-2 cursor-pointer shadow-thin-border
                ${
                  projectStatus?.toLowerCase() === selected?.toLowerCase() &&
                  "font-medium"
                }
                ${
                  projectStatus?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
                }`}
              onClick={() => {
                if (projectStatus?.toLowerCase() !== selected?.toLowerCase()) {
                  setSelected(projectStatus);
                  setOpen(false);
                  setInputValue("");
                }
              }}>

              <div
                key={projectStatus}
                
              >
                {projectStatus}
              </div>
                <FaCheckCircle/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
