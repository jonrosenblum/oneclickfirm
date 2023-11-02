import { BiArrowBack } from "react-icons/bi";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { MdOutlineDocumentScanner } from "react-icons/md";

export default function GenerateDocuments() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    client_name: "",
    todays_date: '',
    fax_number: "",
    complaint_violation_ticket_numbers: "",
    court_house_name: "",
    court_house_address: "",
    court_house_city: "",
    court_house_state: "",
    court_house_zip: "",
    court_house_county: "",
    client_email: "",
    incident_date: "",
    case_status: "OPEN",
    dwi_status: "",

  });


  const formRef = useRef(null);

  const goHome = () => {
    navigate('/home');

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    

    try {
      const response = await axios.post("http://localhost:5001/generate-documents", formData, {
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
    <div className="text-white bg-gradient-to-tl from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 w-10/12 mx-auto rounded-xl shadow-lg z-50 p-4">
          <div className="form-content  ## flex flex-col gap-2  ## py-4 text-left px-6 mb-5 ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">Generate Client Documents</h1>
                <p className="mb-2">Complete the form to generate legal documents</p>
              </div>
              <div className="text-white"><span className="text-9xl"><MdOutlineDocumentScanner/></span></div>
              
            </div>

            <div className="date-created">
              <div className="flex flex-col">
              <label className="text-lg font-medium">Today&apos;s Date</label>
                  <input
                  className="w-1/5 text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="date"
                  value={formData.todays_date}
                  onChange={(e) =>
                    setFormData({ ...formData, todays_date: e.target.value })}/>

              </div>
             

            </div>
            <div className="mt-3">
              <div className="flex justify-between gap-10 items-center mb-3">
                <div>
                  <label className="text-lg font-medium">Client Name</label>
                  <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="John Smith"
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })}/>
                </div>

              <div>
                <label className="text-lg font-medium">Violation Date</label>
                <input
                  className="w-3/4 text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="date"
                  onChange={(e) =>
                  setFormData({ ...formData, incident_date: e.target.value })}/>
              </div>
              <div className="">
                <label className="text-lg font-medium">
                    Fax Number
                  </label>
                  <input
                    className="border-2 text-black border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    
                    type="text"
                    placeholder="(516) 404-8762"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fax_number: e.target.value,
                      })
                    }
                  />

            </div>
            </div>

       
          </div>

          <div className="gap-8 items-center">

            <div className="">
            <label className="text-lg font-medium">
                Violation Number(s) or Ticket Number(s)
              </label>
              <p className="text-xs font-light mb-2">Please seperate values by commas *</p>
              <textarea
                className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                placeholder="e.g. 1217E23006116"
                type="text"
                rows="3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    complaint_violation_ticket_numbers: e.target.value,
                  })
                }
              />

            </div>
          </div>
          <div className="mt-3">
              <div className="flex justify-between items-center mb-3 gap-8">
                <div className='w-full'>
                  <label className="text-lg font-medium">Court House Name</label>
                  <input
                  className="w-3/4 text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  placeholder="Woodbridge Municipal Court"
                  onChange={(e) =>
                    setFormData({ ...formData, court_house_name: e.target.value })}/>
                </div>

              <div className='w-full'>
                <label className="text-lg font-medium">Address Line 1</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  type="text"
                  placeholder="1 Main Street"
                  onChange={(e) =>
                  setFormData({ ...formData, court_house_address: e.target.value })}/>
              </div>
            </div>
            
          </div>
          <div className="address-info flex justify-between gap-8 mt-3">
              <div className="w-full">
              <label className="text-lg font-medium">City</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Woodbridge"
                  onChange={(e) =>
                  setFormData({ ...formData, court_house_city: e.target.value })}/>
                
              </div>
              <div className="w-full">
              <label className="text-lg font-medium">State</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  type="text"
                  placeholder="NJ"
                  onChange={(e) =>
                  setFormData({ ...formData, court_house_state: e.target.value })}/>
                
              </div>
              <div className="w-full">
              <label className="text-lg font-medium">Zip Code</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="07095"
                  onChange={(e) =>
                  setFormData({ ...formData, court_house_zip: e.target.value })}/>
                
              </div>
            </div>

            <div className="country-email-dwi flex justify-between gap-8 mt-3">
              <div className="w-full">
              <label className="text-lg font-medium">County</label>
                <input
                  className="text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  type="text"
                  placeholder="Mercer"
                  onChange={(e) =>
                  setFormData({ ...formData, court_house_county: e.target.value })}/>
                
              </div>
              <div className="w-full">
                <label className="text-lg font-medium">Client Email Address</label>
                  <input
                    className="text-black w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="E-Mail"
                    onChange={(e) =>
                    setFormData({ ...formData, client_email: e.target.value })}/>
                
              </div>
              <div className="w-full">
              <label className="text-lg font-medium">DWI?</label>
                <select
                  className="w-full border-2 border-gray-300 text-black rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="07095"
                  value={formData.dwi_status}
                  onChange={(e) =>
                  setFormData({ ...formData, dwi_status: e.target.value })}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
              </div>
            </div>
            

          <div className="flex justify-between mt-8">
            <button onClick={goHome} className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
            >
              <span>
                <BiArrowBack />
              </span>
            </button>
            <button className="px-4 text-black py-2 bg-white rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
              Generate
            </button>
          </div>
          </div>

        </div>
    </form>
    </div>
    
  );
}
