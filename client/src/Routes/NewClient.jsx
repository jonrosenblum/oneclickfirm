import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../axios";
import ReactCreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import creditCardType from 'credit-card-type';
import AlertClientAdded from "../Components/Pieces/AlertClientAdded";


export default function NewClient() {
  const [searchData, setsearchData] = useState({
    client_name: "",
    violation_date: "",
    crime_type: "",
  });
  const formRef = useRef(null);
  const [searchFormSubmitted, setSearchFormSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const [newClientForm, setnewClientForm] = useState({
    client_name: responseData?.client_info?.client_name ?? "",
    todays_date: today,
    fax_number: responseData?.court_info?.fax_number ?? "",
    complaint_violation_ticket_numbers: responseData?.violations ?? "",
    court_house_name: responseData?.court_info?.court_house_name ?? "",
    court_house_address: responseData?.court_info?.court_house_street ?? "",
    court_house_city: responseData?.court_info?.court_house_city ?? "",
    court_house_state: responseData?.court_info?.court_house_state ?? "",
    court_house_zip: responseData?.court_info?.court_house_zip ?? "",
    court_house_county: responseData?.court_info?.court_county ?? "",
    client_email: "",
    client_phone: "",
    client_fax: "",
    incident_date: searchData.violation_date,
    case_status: "OPEN",
    dwi_status: "No",
    credit_card_number: "",
    credit_card_expiration: "",
    credit_card_cvv: "",
    client_balance: "",
    payment_type: "",
    credit_card_type: "",
  });

  const handleViolationDateChange = (e) => {
    const { value } = e.target;
    const selectedDate = new Date(value);
  
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);
  
    setsearchData({ ...searchData, violation_date: value });
    setnewClientForm({ ...newClientForm, incident_date: formattedDate });
  };

  const handleToggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };


  const handleCreditCardNumberChange = (e) => {
    const { value } = e.target;
    const updatedForm = {
      ...newClientForm,
      credit_card_number: value,
      // Identify card type based on the input credit card number
      credit_card_type: creditCardType(value)[0]?.niceType || '', // Update the card type directly
    };
    setnewClientForm(updatedForm);
  };
  

  useEffect(() => {
    if (responseData && responseData.client_info && responseData.court_info) {
      setnewClientForm((prevForm) => ({
        ...prevForm,
        client_name: responseData.client_info.client_name ?? "",
        fax_number: responseData.court_info.fax_number ?? "",
        court_house_name: responseData.court_info.court_house_name ?? "",
        court_house_address: responseData.court_info.court_house_street ?? "",
        court_house_city: responseData.court_info.court_house_city ?? "",
        court_house_state: responseData.court_info.court_house_state ?? "",
        court_house_zip: responseData.court_info.court_house_zip ?? "",
        court_house_county: responseData.court_info.court_county ?? "",
        complaint_violation_ticket_numbers: responseData.violations
        .map((violation) => {
          const match = violation.match(/^([^-]+)/);
          return match ? match[1] : null;
        })
        .filter(Boolean)
        .join(", "),
    }));
  }
  }, [responseData]);


  const generateNewClient = async (e) => {
    e.preventDefault();
    console.log(newClientForm);

    try {
      const response = await axiosInstance.post("/new-client", newClientForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Request Success");
        setShowAlert(true);
      } else {
        console.error("Request Failed");
      }
    } catch (error) {
      console.error("Request Error:", error);
      alert("Request Error");
    }
  };

  const searchClient = async (e) => {
    e.preventDefault();
    console.log(searchData);
    setSearchFormSubmitted(true);
    setLoading(true); 

    try {
      const response = await axiosInstance.post("/search", searchData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Request Success");
        setResponseData(response.data.data);
      } else {
        console.error("Request Failed");
      }
    } catch (error) {
      console.error("Request Error:", error);
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };


  const handleClearForm = () => {
    setnewClientForm({
      client_name: responseData?.client_info?.client_name ?? "",
      todays_date: today,
      fax_number: responseData?.court_info?.fax_number ?? "",
      complaint_violation_ticket_numbers: "",
      court_house_name: responseData?.court_info?.court_house_name ?? "",
      court_house_address: responseData?.court_info?.court_house_street ?? "",
      court_house_city: responseData?.court_info?.court_house_city ?? "",
      court_house_state: responseData?.court_info?.court_house_state ?? "",
      court_house_zip: responseData?.court_info?.court_house_zip ?? "",
      court_house_county: responseData?.court_info?.court_county ?? "",
      incident_date: searchData.violation_date,
      case_status: "OPEN",
      dwi_status: "No",
      credit_card_number: "",
      credit_card_expiration: "",
      credit_card_cvv: "",
      client_balance: "",
      payment_type: "",
      credit_card_type: "",
    });
  };
  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center">
      <div className="bg-white font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:my-2 sm:mx-4 sm:rounded-2xl pt-4 h-[100%]">
        <div className="bg-gray-200 flex-1 flex-col px-2 sm:px-0">

          <div className="flex bg-white justify-between items-center p-4">
            <div className="flex flex-col">
              <h1 className="title text-2xl">Add new client</h1>
              <p className="mt-2 text-sm font-light text-gray-500">Please use the search panel to search for clients</p>
            </div>
            <button className="button rounded-md bg-gradient-to-r from-s via-cyan-500 to-emerald-500 text-xs p-2">View all clients</button>
          </div>

          <div className="m-2 p-5">
            <form ref={formRef} onSubmit={searchClient}>
              <div className="flex gap-2 items-center">
                <div>
                  <label className="font-medium">Legal Name</label>
                  <input className="m-2 p-2 rounded-lg"
                  placeholder="Enter client name"
                  type="text"
                  onChange={(e)=> setsearchData({...searchData, client_name: e.target.value})}/>
                </div>
                <div className="">
                  <label className="font-medium">Violation Date</label>
                  <input className="m-2 p-2 rounded-lg"
                  type="date"
                  onChange={handleViolationDateChange}/>
                </div>
                <div>
                  <label className="font-medium">Violation Type</label>
                  <select className="m-2 p-2 rounded-lg" onChange={(e)=> setsearchData({...searchData, crime_type: e.target.value})}>
                    <option value="">Select violation type</option>
                    <option value="NJ Traffic">NJ Traffic</option>
                    <option value="Criminal">Criminal</option>
                    </select>
                </div>
                <button type="submit" className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                    <span><AiOutlineSearch/></span>
                </button>
              </div>
            </form>
          </div>

          {loading && (
            <div className="flex justify-center items-center">Loading...</div>
          )}

          {searchFormSubmitted && responseData && !loading && (
            <div className="p-5 ">
              <div className="m-2">
                <h1 className="text-2xl">Client Legal Information</h1>
              </div>
              <div>
                <form>
                  <div className="">
                    <div className="bg-gray-300 p-5 m-2">
                        <h1>Personal Information</h1>
                      <div className="m-2 flex items-center gap-8">
                        <div>
                          <p>{responseData.client_info.client_name} ({responseData.court_info.crime_type}) </p>
                        </div>
                        <div>
                          <label>Email</label>
                          <input 
                          type="email"
                          className="m-2 p-2 rounded-lg"
                          value={newClientForm.client_email}
                          placeholder="Enter email"
                          onChange={(e) => {
                            setnewClientForm({
                              ...newClientForm,
                              client_email: e.target.value,
                            });
                          }}
                          disabled={!isEditMode}
                          />
                          <button type="button" onClick={handleToggleEditMode} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{isEditMode ? "Confirm" : "Edit"}</button>
                        </div>
                        <div>
                          <label>Phone</label>
                          <input 
                          type="tel"
                          className="m-2 p-2 rounded-lg"
                          value={newClientForm.client_phone}
                          placeholder="Enter email"
                          onChange={(e) => {
                            setnewClientForm({
                              ...newClientForm,
                              client_phone: e.target.value,
                            });
                          }}
                          disabled={!isEditMode}
                          />
                          <button type="button" onClick={handleToggleEditMode} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{isEditMode ? "Confirm" : "Edit"}</button>
                        </div>
                      </div>
                      <div className="m-2">
                        <p>Age {responseData.client_info.client_age} from {responseData.client_info.client_birth_place}</p>
                      </div>
                    </div>
                        <div className="bg-gray-300 p-5 m-2">
                        <h1>Violation Information</h1>
                        <div className="m-4">
                          <p>{responseData.violations.join(", ")}</p>
                          <div className="m-2 flex items-center">
                            <label>DWI?</label>
                            <input
                              className="m-2 p-2 rounded-lg"
                              type="checkbox"
                              checked={newClientForm.dwi_status === "Yes"}
                              onChange={(e) => {
                                const status = e.target.checked ? "Yes" : "No";
                                setnewClientForm({ ...newClientForm, dwi_status: status });
                              }}
                            />
                            <span className="text-sm">Yes</span>
                          </div>
                        </div>
                        <div className="m-2 flex items-center">
                          <div className=""> 
                            <p>{responseData.court_info.court_county}</p>
                            <p>{responseData.court_info.court_house_name}</p>
                            <p>{responseData.court_info.court_house_street}</p>
                            <p>{responseData.court_info.court_house_city}, {responseData.court_info.court_house_state} {responseData.court_info.court_house_zip}</p>
                          </div>
                          <div className="m-4">
                            <p>Phone Number: {responseData.court_info.phone_number}</p>
                            <p>Fax Number: {responseData.court_info.fax_number}</p>
                          </div>
                        </div>
                      </div>


                   
                  </div>
                  <div className="bg-gray-300 p-5 m-2">
                      <h1 className="text-lg">Payment Information</h1>
                      <div className="m-2">
                        <label className="m-2">Payment Type</label>
                        <select
                          className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          value={newClientForm.payment_type}
                          onChange={(e)=>{setnewClientForm({...newClientForm, payment_type: e.target.value})}}
                          required
                          >
                          <option value="">Select Payment Type</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Zelle">Zelle</option>
                        </select>

                        

                        {newClientForm.payment_type === 'Credit Card' && (
                          <div className="flex justify-between">
                                    <div className="flex gap-4 items-center m-2">
                                      <div className="flex flex-col">
                                        <label className="m-2">Credit Card Number</label>
                                        <input
                                          className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                          type="text"
                                          placeholder="Credit Card Number"
                                          value={newClientForm.credit_card_number}
                                          required
                                          onChange={handleCreditCardNumberChange}
                                        />
                                        <label className="m-2">Expiration</label>
                                          <input
                                            className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                            type="text"
                                            placeholder="MM/YY"
                                            value={newClientForm.credit_card_expiration}
                                            required
                                            onChange={(e) => {
                                              setnewClientForm({
                                                ...newClientForm,
                                                credit_card_expiration: e.target.value,
                                              });
                                            }}
                                          
                                            />
                                      </div>
                                      <div className="flex flex-col">
                                            <label className="m-2">CVV</label>
                                            <input
                                              className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                              type="text"
                                              placeholder="XXXX"
                                              value={newClientForm.credit_card_cvv}
                                              required
                                              onChange={(e) => {
                                                setnewClientForm({
                                                  ...newClientForm,
                                                  credit_card_cvv: e.target.value,
                                                });
                                              }}
                                              />
                                            <label className="m-2">Client Balance</label>
                                            <input
                                              className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                              type="text"
                                              placeholder="$"
                                              value={newClientForm.client_balance}
                                              required
                                              onChange={(e) => {
                                                setnewClientForm({
                                                  ...newClientForm,
                                                  client_balance: e.target.value,
                                                });
                                              }}
                                            />
                                        
                                      </div>

                                    
                                      </div>
                                      <div>
                                         <ReactCreditCard
                                            cvc={newClientForm.credit_card_cvv}
                                            expiry={newClientForm.credit_card_expiration}
                                            name={newClientForm.client_name}
                                            number={newClientForm.credit_card_number}/>
                                      </div>
                                    </div>
                                  )}

                        {newClientForm.payment_type === 'Zelle' && (
                                    <>
                                      <label className="m-2">Client Balance</label>
                                      <input
                                        className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                        type="text"
                                        placeholder="$"
                                        value={newClientForm.client_balance}
                                        required
                                        onChange={(e) => {
                                          setnewClientForm({
                                            ...newClientForm,
                                            client_balance: e.target.value,
                                          });
                                        }}
                                      />
                                    </>
                                  )}
                      </div>
                      <div className="flex mt-4 justify-between">
                        <button className="bg-red-500 rounded-lg p-2" onClick={handleClearForm}>Clear</button>
                        <button className="bg-blue-500 rounded-lg p-2" onClick={generateNewClient}>Add client</button>

                      </div>
                    </div>
                </form>
                {showAlert && <AlertClientAdded />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
