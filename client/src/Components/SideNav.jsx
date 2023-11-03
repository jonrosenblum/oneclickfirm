import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillPeopleFill,
  BsPerson,
} from "react-icons/bs";
import {
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { GiInjustice } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useAuthSelector } from "../services/useAuthSelector";

export default function SideNav() {
  const navigate = useNavigate();
  const [sideNaveExpanded, setSideNavExpanded] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const auth = useAuthSelector()

  const doLogout = () => {
    // clean up local storage
    auth.doLogout()
    //go to login page
    navigate("/login");
  };

  const Menus = [
    { title: "Dashboard", key: 1, onAction: { onClick: () => navigate("/home") } },
    {
      title: "Clients",
      key: 2,
      submenu: true,
      icon: <BsFillPeopleFill />,
      onAction: { onClick: () => navigate("/all-clients") },
      submenuItems: [
        {
          title: "Add New Client",
          key:7,
          onAction: { onClick: () => navigate("/new-client") },
        },
        // {
        //   title: "View All Clients",
        //   key: 8,
        //   onAction: { onClick: () => navigate("/all-clients") },
        // },
      ],
    },
    {
      title: "Documents",
      key: 3,
      icon: <AiOutlineFileText />,
      onAction: { onClick: () => navigate("/generate-documents") },
    },

    {
      title: "Profile",
      key: 4,
      spacing: true,
      icon: <BsPerson />,
      onAction: { onClick: () => navigate("/profile") },
    },
    {
      title: "Settings",
      key: 5,
      icon: <AiOutlineSetting />,
      onAction: { onClick: () => navigate("/settings") },
    },
    {
      title: "Logout",
      key: 6,
      icon: <AiOutlineLogout />,
      onAction: { onClick: doLogout },
    },
  ];

  const toggleSidenavExpansion = () => {
    setSideNavExpanded((prevState) => {
      const newState = !prevState;

      if (newState === false) {
        // close any open accordions
        setSubmenuOpen(newState);
      }
      return newState;
    });
  };

  return (
    <div className="flex">
      <div
        className={`font-oswald bg-gradient-to-tr from-blue-800 to-green-400 p-5 pt-8 
            ${sideNaveExpanded ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-3xl rounded-full 
            absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !sideNaveExpanded && "rotate-180"
            }`}
          onClick={toggleSidenavExpansion}
        />
        <div className="inline-flex">
          <GiInjustice
            className={`bg-amber-300 text-4xl
                rounded cursor-pointer block float-left mr-2 duration-500 ${
                  sideNaveExpanded && "rotate-[360deg]"
                }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 
                ${!sideNaveExpanded && "scale-0"}`}
          >
            Stabile Law Firm
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md
            bg-light-white mt-6 ${!sideNaveExpanded ? "px-4" : "px-2.5"} py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              sideNaveExpanded && "mr-2"
            }`}
          />
          <input
            type="{search}"
            placeholder=""
            className={`text-base bg-transparent 
                w-full text-white focus:outline-none ${
                  !sideNaveExpanded && "hidden"
                }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu) => (
            <div key={menu.key}>
              <li
                
                {...{ ...menu.onAction }}
                className={`text-white text-sm flex items-center 
                    gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      menu.spacing ? "mt-9" : "mt-2"
                    }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !sideNaveExpanded && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && sideNaveExpanded && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && sideNaveExpanded && (
                <ul>
                  {menu.submenuItems.map((submenuItem) => (
                    <li
                      key={submenuItem.key}
                      {...{ ...submenuItem.onAction }}
                      className="text-white mt-2 text-sm flex items-center gap-x-4
                                cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
