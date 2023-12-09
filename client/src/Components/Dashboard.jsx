
import { useNavigate } from "react-router-dom"
import { format } from 'date-fns';
import { useEffect, useState } from "react"
import { BsFillCalendarFill, BsFillPeopleFill } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import { MdCloudDone, MdDescription, MdPendingActions } from 'react-icons/md';
import { FaStickyNote } from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';
import {MdPayment} from 'react-icons/md';
import axiosInstance from "../axios";
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Import calendar icon
import 'react-datepicker/dist/react-datepicker.css';






export default function Dashboard() {
  
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM d, yyyy'); // Format the date as "Month Day, Year"
  const [clientCount, setClientCount] = useState(0);
  
  useEffect(() => {
    // Fetch the count of clients from your backend
    axiosInstance.get('/clients')
      .then((response) => {
        setClientCount(response.data.length);
      })
      .catch((error) => console.error(error));
  }, []);




  const handleGenerateDocumentClick = () => {
    navigate('/generate-documents');
  };

  const handleAllClientsClick = () => {
    navigate('/clients');
  };

  const handlEditClientClick = () => {
    navigate('/edit-client');
  };


  return (

    <div className="bg-gray-100 w-full min-h-screen flex justify-center">
      <div className="font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:my-2 sm:mx-4 sm:rounded-2xl pt-4 h-[100%]">
       
       <div className="flex-1 px-2 sm:px-0">
        
        <div className="flex justify-between items-center text-white">
          <div>
          <h3 className="text-xl font-bold text-black">Welcome back!</h3>
          <div className="flex mt-2  items-center" >
           
            <h6 className=" flex text-gray-400">Overview </h6>
          </div>
          </div>
        
        <div className="inline-flex items-center space-x-2 text-gray-600">
        <h6 className="items-center ml-5 mt-2">{formattedDate}</h6>
        <FaCalendarAlt size={25} /> {/* Calendar icon */}

      </div>
    </div>
    <hr className="mt-5" />

    <div className="mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     

      <div onClick={handleAllClientsClick} className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
       <p className="text-gray-400 text-xs">{clientCount} {clientCount === 1 ? 'Client' : 'Clients'}</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> ALL CLIENTS</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-blue-500">
          <BsFillPeopleFill className="text-xl text-white"/>
          </div>
        </div>
      </div>
      <div onClick={handleGenerateDocumentClick} className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">Generate Client Documents </p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> DOCUMENTS</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-purple-500">
          <MdDescription className="text-xl text-white"/>
          </div>
        </div>
       
      </div>
      <div onClick={handlEditClientClick} className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">Update Client Information </p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> EDIT CLIENT</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-red-400">
          <BiEdit className="text-xl text-white"/>
          </div>
        </div>
        
      </div>
      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">View Pending Cases</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> OPEN CASES</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-teal-400">
          <MdPendingActions className="text-xl text-white"/>
          </div>
        </div>
       
      </div>
      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">View Closed Cases</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> ARCHIVED CASES</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-purple-300">
          <MdCloudDone className="text-xl text-white"/>
          </div>
        </div>
        
      </div>

      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">Add Notes to a Client</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> CLIENT NOTES</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-orange-400">
          <FaStickyNote className="text-xl text-white"/>
          </div>
        </div>
        
      </div>
      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">View Calander</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s"> APPOINTMENTS</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-yellow-400">
          <BsFillCalendarFill className="text-xl text-white"/>
          </div>
        </div>
       
      </div>
      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">Email Documents</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s">SEND LEGAL DOCUMENTS</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-green-400">
          <AiOutlineSend className="text-xl text-white"/>
          </div>
        </div>
        
      </div>
      <div  className="relative group bg-white shadow-lg grid  h-fit py-6 px-4 space-y-2 items-center cursor-pointer rounded-md  grid-cols-2">
       <div className="left flex flex-col justify-start whitespace-nowrap">
        <p className=" text-gray-400 text-xs">Invoices and Client Payments</p>
        <h5 className="text-black mt-1 font-bold capitalize text-left text-s">LEGAL BILLING</h5>
        <p className="text-xs text-gray-300 pt-3">Some Text Will Go Here</p>
        </div>
        <div className="right flex justify-end items-center">
          <div className="p-3 rounded-full bg-blue-400">
          <MdPayment className="text-xl text-white"/>
          </div>
        </div>
        
      </div>

    

   
    

    </div>
  </div>
</div>
</div>

  );
}

  

    