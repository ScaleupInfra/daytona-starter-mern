import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { clientStatusListState, currentEmployeeState } from "../state";
import { FaCheckCircle } from 'react-icons/fa';

const ClientStatus = () => {
  const [clientStatusList, setClientStatusList] = useRecoilState(clientStatusListState);
  const currentEmployee = useRecoilValue(currentEmployeeState)
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full font-medium">
      <div className="text-3xl font-bold my-6">
        Customer Status
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-[#151515] p-2 flex items-center justify-between border-solid rounded-lg border-2 border-[#2ECC71] text-white`}
      >
        {selected ? selected : currentEmployee.clientStatus}
        <BiChevronDown size={20} className={`${open && "rotate-180"} text-[#2ECC71]`} />
      </div>
      <div
        className={`bg-[#151515]  mt-2 overflow-y-auto ${
          open ? "max-h-60" : "hidden"
        } border-solid rounded-lg border-2 border-[#2ECC71] `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-[#090909] ">
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
          {clientStatusList?.map((clientStatus) => {
            return (
              <div
              className={` flex flex-row justify-between items-center p-2 text-md font-light hover:font-medium pl-4 py-2 cursor-pointer shadow-thin-border
                ${
                  clientStatus?.toLowerCase() === selected?.toLowerCase() &&
                  "font-medium"
                }
                ${
                  clientStatus?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
                }`}
              onClick={() => {
                if (clientStatus?.toLowerCase() !== selected?.toLowerCase()) {
                  setSelected(clientStatus);
                  setOpen(false);
                  setInputValue("");
                }
              }}>

              <div
                key={clientStatus}
                
              >
                {clientStatus}
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

export default ClientStatus;