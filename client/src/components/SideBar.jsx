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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/customers/");
                if (response.status === 200) {
                    const updatedData = response.data.customers.map((el) => {
                        return {
                            ...el,
                            contactDetails: {
                                ...el.contactDetails,
                                phone: el.contactDetails.phone.toString()
                            }
                        };
                    });
                    const prevdata = userList.filter((obj)=>{
                        return obj._id.length <= 5;
                    })
                    const concatenatedData = [...prevdata, ...updatedData];
                    setUserList(concatenatedData);
                    setFilteredData(concatenatedData);
                }
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userList, filteredData]);

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
