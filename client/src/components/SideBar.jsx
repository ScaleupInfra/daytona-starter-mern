import { useRecoilState } from 'recoil';
import { userData, filteredUserData, currentEmployeeState } from '../state';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
import NewUser from './newUser/NewUserCreation';
import UserCard from './user/UserCard';
import logo from "../../src/assets/logo.png";
import axios from 'axios';

const SideBar = () => {
    const [userList, setUserList] = useRecoilState(userData);
    const [filteredData, setFilteredData] = useRecoilState(filteredUserData);
    const [currentEmployee, setCurrentEmployee] = useRecoilState(currentEmployeeState)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/customers/");
                if (response.status === 200 && Array.isArray(response.data.customers)) {
                    const updatedData = response.data.customers.map((el) => {
                        return {
                            ...el,
                            contactDetails: {
                                ...el.contactDetails,
                                phone: el.contactDetails.phone.toString()
                            }
                        };
                    });
                    const concatenatedData = [...userList, ...updatedData];
                    setUserList(concatenatedData);
                    setFilteredData(concatenatedData);
                    setCurrentEmployee(concatenatedData[0]);
                    console.log(currentEmployee);
                } else {
                    console.error('Error: Response data is not an array');
                }
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setUserList, setFilteredData]);

    return (
        <div className={''}>
            <div className='pl-7'>
                <img src={logo} alt="No img" className=' w-18 h-18 rounded-xl my-4' />
                <div className='mb-4'>
                    <div className='text-3xl font-bold'>Daytona CRM</div>
                    <div className='font-light py-2'>
                        Tool for enhanced creator relationship management
                    </div>
                </div>
            </div>
            <SearchBar />
            {filteredData.map((obj) => (
                <UserCard key={obj._id} name={obj.name} id={obj._id} profilePicture={obj.profilePicture} />
            ))}
            <NewUser />
        </div>
    );
};

export default SideBar;
