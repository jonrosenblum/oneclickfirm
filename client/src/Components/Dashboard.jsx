import PlusSignSVG from "../assets/plus-svgrepo-com.svg"
import AllClientsPNG from "../assets/users-svgrepo-com (4).png"
import DocumentsPNG from "../assets/documents-svgrepo-com.png"
import EditPNG from "../assets/edit-svgrepo-com.png"
import CompletePNG from "../assets/checkmark-complete-correct-svgrepo-com.png"
import PendingPNG from "../assets/shifts-pending-svgrepo-com.png"
import LogoutPNG from "../assets/logout-svgrepo-com.png"
import NotesPNG from "../assets/notes-push-pin-svgrepo-com.png"
import UserIcon from "../assets/user-icon-svgrepo-com.png"
import { useState } from "react"
import NewClientModal from "./NewClientModal"
import AllClientsModal from "./AllClientsModal"
import DocumentsModal from "./DocumentsModal"
import EditClientModal from "./EditClientModal"
import OpenCasesModal from "./OpenCaseModal"
import ArchivedCasesModal from "./ArchivedCases"


export default function Dashboard() {

  const [isNewClientModalVisible, setIsNewClientModalVisible] = useState(false);
  const [isAllClientsModalVisible, setIsAllClientsModalVisible] = useState(false);
  const [isDocumentsModalVisible, setIsDocumentsModalVisible] = useState(false);
  const [isEditClientModalVisible, setIsEditClientModalVisible] = useState(false);
  const [isOpenCasesModalVisible, setIsOpenCasesModalVisible] = useState(false);
  const [isArchivedCasesModalVisible, setIsArchivedCasesModalVisible] = useState(false);

  const openNewClientsModal = () => {
    setIsNewClientModalVisible(true);
  };

  const openAllClientsModal = () => {
    setIsAllClientsModalVisible(true);
  };

  const openDocumentsModal = () => {
    setIsDocumentsModalVisible(true);
  };

  const openEditClientModal = () => {
    setIsEditClientModalVisible(true);
  };
  const openOpenCasesModal = () => {
    setIsOpenCasesModalVisible(true);
  };
  const openArchivedCasesModal = () => {
    setIsArchivedCasesModalVisible(true);
  };



    return (

      <div className="bg-gradient-to-tr from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
        <div className="font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
         
         <div className="flex-1 px-2 sm:px-0">
          
          <div className="flex justify-between items-center text-white">
            <div>
            <h3 className="text-3xl font-bold text-white">Welcome Back!</h3>
            <div className="flex mt-2 ml-3 items-center" >
              <img src={UserIcon} className="h-6 w-6"/>
              <h6 className="ml-3 flex">Steven Stabile </h6>
            </div>
            <h6 className="items-center ml-5 mt-2">October 31st, 2023</h6>
            </div>
          
          <div className="inline-flex items-center space-x-2">
            <a className="bg-gray-200 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg className="h-6 w-5" width="74px" height="74px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#050505"></circle> <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#050505"></path></g></svg>  
            </a>
            <a className="bg-gray-200 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg className="h-6 w-5" width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="#030303" ></path> <path d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17" stroke="#030303"></path> </g></svg> 
            </a>
        </div>
      </div>


      <div className="mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div onClick={openNewClientsModal} className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <a className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
          <img
            src={PlusSignSVG}
            alt="plus sign to add clients"
            className="h-7 w-10"/>
          </a>
          <a className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="#">ADD NEW CLIENT</a>

          {isNewClientModalVisible ? (
            <NewClientModal /> ) : null}
      </div>

        <div onClick={openAllClientsModal} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src={AllClientsPNG} alt="all clients" />
          <h4 className="text-white text-2xl font-bold capitalize text-center"> ALL CLIENTS</h4>
          <p className="text-white/50">VIEW ALL 55 CLIENTS </p>

          {isAllClientsModalVisible ? (
            <AllClientsModal /> ) : null}
        </div>

        <div onClick={openDocumentsModal} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={DocumentsPNG} alt="generate documents" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">DOCUMENTS</h4>
          <p className="text-white/50">GENERATE CLIENT DOCS</p>

          {isDocumentsModalVisible ? (
            <DocumentsModal /> ) : null}
        </div>

        <div onClick={openEditClientModal} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={EditPNG} alt="update client" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">EDIT CLIENT</h4>
          <p className="text-white/50">UPDATE CLIENT INFO</p>

          {isEditClientModalVisible ? (
            <EditClientModal /> ) : null}
        </div>

        <div onClick={openOpenCasesModal}  className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={PendingPNG} alt="pending cases" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">OPEN CASES</h4>
          <p className="text-white/50">VIEW PENDING CASES</p>

          {isOpenCasesModalVisible ? (
            <OpenCasesModal /> ) : null}
        </div>

        <div onClick={openArchivedCasesModal}  className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={CompletePNG} alt="complete cases" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">ARCHIVED CASES</h4>
          <p className="text-white/50"> VIEW CLOSED CASES</p>

          {isArchivedCasesModalVisible ? (
            <ArchivedCasesModal /> ) : null}
        </div>
        <div onClick={openArchivedCasesModal}  className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={NotesPNG} alt="complete cases" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">CLIENT NOTES</h4>
          <p className="text-white/50">ADD A NOTE TO A CLIENT</p>

          {isArchivedCasesModalVisible ? (
            <ArchivedCasesModal /> ) : null}

        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src={LogoutPNG} alt="Logout" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">LOGOUT</h4>
          <p className="text-white/50">SEE YOU LATER!</p>
        </div>
        

      </div>
    </div>
  </div>
</div>

    );
}

    