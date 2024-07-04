import { useRecoilState } from 'recoil';
import { userData, filteredUserData } from '../state';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
import NewUser from './newuser/NewUserCreation';
import UserCard from './user/UserCard';
import logo from "../../public/assets/logo.png"
import axios from 'axios';
const  SideBar = () => {
    const [userList, setUserList] = useRecoilState(userData);
    const [filteredData, setFilteredData] = useRecoilState(filteredUserData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`${process.env.BACKEND_URL}`);
                const response = await axios.get("http://localhost:8000/api/customers/get-all");
                if (response.status === 200) {
                setUserList(response.data);
                setFilteredData(userList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally{
            console.log(userList);
            }
        };
        fetchData();
    }, []);
    return <div className={''}> 
        <div className='pl-7'>
            <img src={logo} alt="No img" className=' w-18 h-18 rounded-xl my-4' />
            <div className='mb-4'>
                <div className='text-3xl font-bold'>
                Daytona CRM
                </div>
                <div className='font-light py-2'>
                    Tool for enhanced creator relationship management
                </div>
            </div>
        </div>
        <SearchBar/>
        {
            filteredData.map((obj)=>{
                return <UserCard key={obj.companyUid} name={obj.name} id={obj.companyUid} pic={obj.pic}/>
            })
        }
        <NewUser/>
    </div>
}

export default SideBar;