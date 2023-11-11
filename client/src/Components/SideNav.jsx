import { useState } from "react";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillCalendarDateFill,
  BsFillPeopleFill,
} from "react-icons/bs";

import {IoBriefcaseSharp} from "react-icons/io5";
import {
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuthSelector } from "../services/useAuthSelector";
import { BiArchiveOut} from "react-icons/bi";

export default function SideNav() {
  const navigate = useNavigate();
  const [sideNaveExpanded, setSideNavExpanded] = useState(true);
  const [submenuStates, setSubmenuStates] = useState({});
  const auth = useAuthSelector();

  const doLogout = () => {
    // clean up local storage
    auth.doLogout();
    // go to login page
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
          title: "Add new client",
          key: 7,
          onAction: { onClick: () => navigate("/generate-documents") },
        },
        {
          title: "Edit client",
          key: 8,
          onAction: { onClick: () => navigate("/generate-documents") },
        },
      ],
    },
    {
      title: "Documents",
      key: 3,
      icon: <AiOutlineFileText />,
      onAction: { onClick: () => navigate("/generate-documents") },
    },
    {
      title: "Cases",
      key: 4,
      submenu: true,
      spacing: true,
      icon: <IoBriefcaseSharp />,
      submenuItems: [
        {
          title: "Archived cases",
          key: 5,
          icon: <BiArchiveOut />,
        },
        {
          title: "Open cases",
          key: 6,
        },
      ],
    },
    {
      title: "Email",
      key: 7,
      icon: <AiOutlineMail />
    },
    {
      title: "Calendar",
      key: 8,
      icon: <BsFillCalendarDateFill/>
    },
  ];

  const Menus1 = [
    {
      title: "Settings",
      key: 9,
      icon: <AiOutlineSetting />,
    },
    {
      title: "Logout",
      key: 10,
      icon: <AiOutlineLogout />,
      onAction: { onClick: doLogout },
    },
  ];

  const handleSubmenuOpen = (key) => {
    setSubmenuStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleSidenavExpansion = () => {
    setSideNavExpanded((prevState) => {
      const newState = !prevState;

      if (newState === false) {
        // close any open accordions
        setSubmenuStates({});
      }
      return newState;
    });
  };

  const handleNewClientClick = () => {
    navigate('/new-client');
  }

  return (
    <div className="flex w-fit">
      <div
        className={`font-oswald bg-gradient-to-b from-s1 via-s2 to-s3 f-screen p-5 pt-6 h-[100%]
            ${sideNaveExpanded ? "w-72" : "w-20"} duration-300 relative`}
      >
        <button onClick={handleNewClientClick} className="rounded-lg bg-yellow-300 flex justify-start gap-5 items-center p-3 w-full">
          <svg className={sideNaveExpanded ? ",l-2" : "ml-0 w-full"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
          { sideNaveExpanded &&   <h3>Add new clients</h3>}
        </button>

        <button onClick={toggleSidenavExpansion} className="py-5 absolute right-0 top-[12.5rem] text-white gcursor-pointer rounded-l-full bg-hov">
          <BsArrowLeftShort
            className={` text-lg 
                 ${
              !sideNaveExpanded && "rotate-180"
            }`}
          />
        </button>
        <div className="all h-[90%] flex flex-col justify-between">
          <ul className="pt-2 mb-10">
            {Menus.map((menu) => (
              <div key={menu.key} >
                <li
                  {...{ ...menu.onAction }}
                  className={`text-white text-sm flex items-center  ${menu.title === 'Dashboard' ? "bg-hov" : "" }
                    gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-3`}
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
                      className={`${submenuStates[menu.key] && "rotate-180"}`}
                      onClick={() => handleSubmenuOpen(menu.key)}
                    />
                  )}
                </li>

                {menu.submenu &&
                  submenuStates[menu.key] &&
                  sideNaveExpanded && (
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
          <ul className="pb-5">
            <hr className="text-white mb-[5rem]" />
            {Menus1.map((menu) => (
              <div key={menu.key}>
                <li
                  {...{ ...menu.onAction }}
                  className={`text-white text-sm flex items-center  ${menu.title === 'Dashboard' ? "bg-hov" : "" }
                    gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-3`}
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
                      className={`${submenuStates[menu.key] && "rotate-180"}`}
                      onClick={() => handleSubmenuOpen(menu.key)}
                    />
                  )}
                </li>

                {menu.submenu &&
                  submenuStates[menu.key] &&
                  sideNaveExpanded && (
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
    </div>
  );
}
