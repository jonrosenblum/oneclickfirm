import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClientLegalInformation from "../Components/Pieces/ClientLegalInformation";
import ClientAddConfirmInformation from "../Components/Pieces/ClientAddConfirmInformation";

export default function NewClient() {
  const [formData, setFormData] = useState({
    client_name: "",
    violation_date: "",
    violation_ticket_number: "",
  });
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);

    try {
      const response = await axios.post("/search", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Request Success");
      } else {
        console.error("Request Failed");
      }
    } catch (error) {
      console.error("Request Error:", error);
    }
  };

    return (

      <div className="bg-gradient-to-tl from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 font-oswald flex-1 flex flex-col justify-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="search-client flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">SEARCH FOR CLIENTS</h1>
            <p className="mt-5 mb-5 text-gray-300">Please use the search form to search for a client</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label className="font-medium text-white">Client Name:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                placeholder="e.g. John Smith"
                type="text"
                onChange={(e)=> setFormData({...formData, client_name: e.target.value})}/>
              </div>
              <div className="mt-4">
                <label className="font-medium text-white">Date of Violation:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="date"
                onChange={(e)=> setFormData({...formData, violation_date: e.target.value})}/>
              </div>
              <div className="mt-4">
                <label className="font-medium text-white">Violation or Ticket Number:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="e.g. 1104E23004259"
                onChange={(e)=> setFormData({...formData, violation_ticket_number: e.target.value})}/>
              </div>
              <div className="mt-5 flex justify-between">
                <button onClick={()=> {navigate("/home")}} className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                  <span><BiArrowBack/></span>
                </button>
                <button className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                  <span><AiOutlineSearch/></span>
                </button>
              </div>
            </form>
          </div>

          <div className="mb-10 sm:mb-0 mt-5 grid grid-cols-2 gap-4">
            <div className='flex flex-col justify-center'>
                  {formSubmitted ? <ClientLegalInformation/> : (
                     <div className="p-10 text-center h-1/2 bg-gradient-to-tr from-blue-800 to-green-400 ml-6 rounded-xl">
                      <p className="animate-bounce text-white font-medium">READY TO GENERATE DOCUMENTS?</p>
                    </div>
                  )}
            </div>

            <div className='flex flex-col justify-center'>
            {formSubmitted ? <ClientAddConfirmInformation/> : (
                    <div className="p-10 text-center h-1/2 bg-gradient-to-tr from-blue-800 to-green-400 ml-6 rounded-xl">
                    <p className="animate-bounce text-white font-medium">JUST A FEW CLICKS AWAY...</p>
                  </div>
                  )}
            </div>

          </div>
        </div>
      </div>
  

    );
}

    