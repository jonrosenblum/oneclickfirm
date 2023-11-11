import { useAuthSelector } from "../services/useAuthSelector";
import UserIcon from "../assets/user-icon-svgrepo-com.png"
import { GiInjustice } from "react-icons/gi";

export default function Nav() {
    const auth = useAuthSelector();
    console.log(auth);


  return (
    <>
    <nav className='p-3 bg-gradient-to-r from-s via-cyan-500 to-emerald-500 grid grid-cols-[2fr,7fr] items-center'>
    <div className=" inline-flex border-r border-white">
          <GiInjustice
            className="bg-amber-300 text-4xl
                rounded cursor-pointer block float-left mr-2 duration-500"/>
          <h1
            className="text-white origin-left font-medium text-2xl duration-300" >
            Stabile <span className='font-light'>Law Firm</span>
          </h1>
        </div>
        <div className="flex justify-between items-center">
        <div className="ml-5 flex items-center justify-center gap-5 bg-teal-400 border border-transparent text-white p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='white'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <input className='placeholder-white outline-0 bg-transparent' type="text" placeholder="Type to search" />
        </div>
        <div className="flex justify-center items-center mr-2">
            <ul className='flex justify-center items-center gap-5 font-light'>
             <a href="/">   <li className='flex justify-center items-center'> How it works</li></a>
             <a href="/">   <li className='flex justify-center items-center'>Pricing</li></a>
             <a href="/">   <li className='flex justify-center items-center'>FAQ</li></a>
             <a href="/">   <li className='flex justify-center items-center'>About</li></a>
             <a href="/">   <li className='flex justify-center items-center'>Contact</li></a>
             <a href="/">   <li className='flex justify-center items-center'>
                <div className="flex items-center " >
              <img src={UserIcon} className="h-6 w-6 "/>
              <h6 className="ml-3 flex">{auth.user.email} </h6>
            </div>
                </li></a>
            </ul>
        </div>
        </div>
    </nav>
    </>
  )
}