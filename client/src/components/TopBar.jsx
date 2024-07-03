import logo from '../assets/logo.png'

export const  TopBar = () => {
    return <div className={'flex fles-row items-center ml-10 mb-4'}>
        <img src={logo} alt="No img" className=' w-10 h-10 rounded-full my-4' />
        <div className={'text-2xl ml-2'}>DayTona</div>
    </div>
}