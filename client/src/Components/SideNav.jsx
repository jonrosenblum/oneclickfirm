import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";

export default function SideNav() {

    const [open, setOpen] = useState(true)

    
    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 
            ${open ? "w-72": "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full 
            absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => {
                setOpen(!open)
            }}/>
            <div className="inline-flex">
                <AiFillEnvironment className={`bg-amber-300 text-4xl
                rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 
                ${!open && "scale-0"}`}>Tailwind</h1>
            </div>
            <div className={`flex items-center rounded-md
            bg-light-white mt-6 ${!open ? "px-4" : "px-2.5"} py-2`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                <input type="{search}" placeholder="Search" className={`text-base bg-transparent 
                w-full text-white focus:outline-none ${!open && "hidden" }`} />
            </div>

            </div>

            <div className="p-7">
                <h1 className="text-2xl font-semibold">Home Page</h1>
            </div>
        </div>
    )
}