import { BiArrowBack } from "react-icons/bi";
import { useRef, useState } from "react";
import axios from "axios";
import ClientLegalInformation from "./Pieces/ClientLegalInformation";
import ClientAddConfirmInformation from "./Pieces/ClientAddConfirmInformation";

export default function NewClient() {
  const [formData, setFormData] = useState({
    client_name: "",
    violation_date: "",
    violation_ticket_number: "",
  });
  const formRef = useRef(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

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

      <div className="bg-gray-500/30 w-full min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 font-oswald flex-1 flex flex-col justify-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="flex flex-col">
            <h1 className="text-3xl">Add New Client</h1>
            <p className="mt-5 mb-5">Add a new client to start generating documents</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label className="text-lg font-medium">Client Name:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                placeholder="e.g. John Smith"
                type="text"
                onChange={(e)=> setFormData({...formData, client_name: e.target.value})}/>
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Date of Violation:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="date"
                onChange={(e)=> setFormData({...formData, violation_date: e.target.value})}/>
              </div>
              <div className="mt-4">
                <label className="text-lg font-medium">Violation or Ticket Number:</label>
                <input className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="text"
                onChange={(e)=> setFormData({...formData, violation_ticket_number: e.target.value})}/>
              </div>
              <div className="mt-5 flex justify-between">
                <button className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                  <span><BiArrowBack/></span>
                </button>
                <button className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                  <span>Add Client</span>
                </button>
              </div>
            </form>
          </div>
          <div className="mb-10 sm:mb-0 mt-5 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6">
                <h3 className="text-center text-lg font-medium text-gray-900">Client Legal Information</h3>
                <div className="mt-5">
                  <ClientLegalInformation />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6">
                <h3 className="text-center text-lg font-medium text-gray-900">Add and Confirm Client Information </h3>
                <div className="mt-5">
                  <ClientAddConfirmInformation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

    );
}

    