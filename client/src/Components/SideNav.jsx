import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillPeopleFill, BsPerson} from "react-icons/bs";
import { AiOutlineFileText, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import {GiInjustice} from "react-icons/gi";

export default function SideNav() {

    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const Menus = [
        {title: "Dashboard"},
        {title: "Clients", submenu: true, icon: <BsFillPeopleFill/>,
        submenuItems: [
            {title: "Add New Client"},
            {title: "View Clients"},
            ]},
        {title: "Documents", icon: <AiOutlineFileText/>, submenu:true, submenuItems: [
            {title: "Credit Card Authorization Forms"},
            {title: "Representation Letters"},
            {title: "Discovery Letters"},
            {title: "Retainer Agreements"},
]},
       
        {title: "Profile", spacing: true, icon: <BsPerson/>},
        {title: "Settings", icon: <AiOutlineSetting/>},
        {title: "Logout", icon: <AiOutlineLogout/>}
    ]

    
    return (
        <div className="flex">
            <div className={`font-oswald bg-gradient-to-tr from-blue-800 to-green-400 h-screen p-5 pt-8 
            ${open ? "w-72": "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-3xl rounded-full 
            absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => {
                setOpen(!open)
            }}/>
            <div className="inline-flex">
                <GiInjustice className={`bg-amber-300 text-4xl
                rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 
                ${!open && "scale-0"}`}>Stabile Law Firm</h1>
            </div>
            <div className={`flex items-center rounded-md
            bg-light-white mt-6 ${!open ? "px-4" : "px-2.5"} py-2`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                <input type="{search}" placeholder="" className={`text-base bg-transparent 
                w-full text-white focus:outline-none ${!open && "hidden" }`} />
            </div>

            <ul className="pt-2">
                {Menus.map((menu, index) => (
                <>
                    <li key={index} className={`text-white text-sm flex items-center 
                    gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                        <span className="text-2xl block float-left">
                            {menu.icon ? menu.icon : <RiDashboardFill/>}
                        </span>
                        <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                        {menu.submenu && open &&(
                            <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=> 
                            setSubmenuOpen(!submenuOpen)} />
                        )}
                    </li>

                    {menu.submenu && submenuOpen && open && (
                        <ul>
                            {menu.submenuItems.map((submenuItem, index) => (
                                <li key={index} className="text-white mt-2 text-sm flex items-center gap-x-4
                                cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                                    {submenuItem.title}
                                </li>
                            ))}
                        </ul>
                    )}

                </>
                ))}
            </ul>
        </div>

            {/* <div className="p-7">
                <h1 className="text-2xl font-semibold">Home Page</h1>
            </div> */}
        </div>
    )
}