import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../axios";

export default function NewClient() {
  const [searchData, setsearchData] = useState({
    client_name: "",
    violation_date: "",
  });
  const formRef = useRef(null);
  const [searchFormSubmitted, setSearchFormSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [newClientForm, setnewClientForm] = useState({
    client_name: responseData?.client_info?.client_name ?? "",
    todays_date: "",
    fax_number: "",
    complaint_violation_ticket_numbers: "",
    court_house_name: "",
    court_house_address: "",
    court_house_city: "",
    court_house_state: "NJ",
    court_house_zip: "",
    court_house_county: "",
    client_email: "",
    incident_date: "",
    case_status: "OPEN",
    dwi_status: "",
    credit_card_number: "",
    credit_card_expiration: "",
    credit_card_cvv: "",
    client_balance: "",
    payment_type: "",
    credit_card_type: "",
  });

  const handleToggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };


  useEffect(() => {
    if (responseData && responseData.client_info) {
      setnewClientForm((prevForm) => ({
        ...prevForm,
        client_name: responseData.client_info.client_name ?? "",
        // ... other properties
      }));
    }
  }, [responseData]);


  const generateNewClient = () => {
    console.log(newClientForm)
  }

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

  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center">
      <div className="bg-white font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:my-2 sm:mx-4 sm:rounded-2xl pt-4 h-[100%]">
        <div className="bg-gray-200 flex-1 flex-col px-2 sm:px-0">

          <div className="flex justify-between p-2">
            <h1 className="title text-2xl">Add new client</h1>
            <button className="button rounded-md bg-gradient-to-r from-s via-cyan-500 to-emerald-500 text-xs p-2">View all</button>
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
                  onChange={(e)=> setsearchData({...searchData, violation_date: e.target.value})}/>
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
            <div className="p-5">
              <div className="m-2">
                <h1 className="text-2xl">Client Legal Information</h1>
              </div>
              <div>
                <form>
                  <div className="">
                    <div className="bg-gray-300 p-5 m-2">
                        <h1>Client Information</h1>
                      <div className="m-2 flex items-center gap-8">
                        <div>
                        <input
                        className={`${
                          isEditMode ? 'bg-white' : 'bg-gray-300'
                        } m-2 p-2 rounded-lg`}
                        type="text"
                        value={newClientForm.client_name}
                        placeholder={responseData.client_info.client_name}
                        onChange={(e) => {
                          setnewClientForm({
                            ...newClientForm,
                            client_name: e.target.value,
                          });
                        }}
                        disabled={!isEditMode} 
                        />
                        <button type="button" onClick={handleToggleEditMode} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{isEditMode ? "Confirm" : "Edit"}</button>
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
                      </div>
                      <div className="m-2">
                        <p>Age: {responseData.client_info.client_age}</p>

                        <p>From {responseData.client_info.client_birth_place}</p>
                      </div>
                    </div>
                        <div className="bg-gray-300 p-5 m-2">
                        <h1>Violation Information</h1>
                        <div className="m-2">
                        <p>Court House Name: {responseData.court_info.court_house_name}</p>
                        <p>Court House Street: {responseData.court_info.court_house_street}</p>
                        <p>Court House City: {responseData.court_info.court_house_city}</p>
                        <p>Court House State: {responseData.court_info.court_house_state}</p>
                        <p>Court House Zip: {responseData.court_info.court_house_zip}</p>
                        <p>Phone Number: {responseData.court_info.phone_number}</p>
                        <p>Fax Number: {responseData.court_info.fax_number}</p>
                        <p>Violations: {responseData.violations.join(", ")}</p>
                        </div>
                        </div>


                   
                  </div>
                  <div className="bg-gray-300 p-5 m-2">
                      <h1 className="text-lg">Payment Information</h1>
                      <div className="m-2">

                      <label>Payment Type</label>
                      <select
                        value={newClientForm.payment_type}
                        onChange={(e) => {
                          setnewClientForm({
                            ...newClientForm,
                            payment_type: e.target.value,
                          });
                        }}
                        required
                        >
                        <option value="">Select Payment Type</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Zelle">Zelle</option>
                      </select>

                      <label>Card Type</label>
                      <select
                        required
                        value={newClientForm.credit_card_type}
                        onChange={(e) => {
                          setnewClientForm({
                            ...newClientForm,
                            credit_card_type: e.target.value,
                          });
                        }}
                        disabled={newClientForm.payment_type === "Zelle"}
                        >
                        <option value="">Select Card Type</option>
                        <option value="American Express">American Express</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="Discover">Discover</option>
                      </select>

                      <label>Credit Card Number</label>
                      <input
                        type="text"
                        placeholder="Credit Card Number"
                        value={searchData.credit_card_number}
                        required
                        onChange={(e) => {
                          setnewClientForm({
                            ...newClientForm,
                            credit_card_number: e.target.value,
                          });
                        }}
                        disabled={newClientForm.payment_type === "Zelle"}
                        />

                      <label>Expiration</label>
                      <input
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
                        disabled={newClientForm.payment_type === "Zelle"}
                        />

                      <label>CVV</label>
                      <input
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
                        disabled={newClientForm.payment_type === "Zelle"}
                        />

                      <label>Client Balance</label>
                      <input
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
                    <button onClick={generateNewClient}>Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
