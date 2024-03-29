import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../axios";
import ReactCreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import creditCardType from 'credit-card-type';
import AlertClientAdded from "../Components/Pieces/AlertClientAdded";
import Pagination from "../Components/Pagination";
import ClockLoader from "react-spinners/ClockLoader";
import { CustomModal } from "../Components/CustomModal";
import { BiArrowBack } from "react-icons/bi";

let PageSize = 1;
export default function NewClient() {
  const [searchData, setsearchData] = useState({
    client_name: "",
    crime_type: "",
  });
  const formRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFormSubmitted, setSearchFormSubmitted] = useState(false);
  const [clientFormPopup, setClientFormPopup] = useState(false);
  const [selectClientData, setSelectClientData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState('Recently Issued First');
  const [showOptions, setShowOptions] = useState(false);
  const [searchOptions, setSearchOptions] = useState(['Recently Issued First', 'Old Issued First']);
  const [responseData, setResponseData] = useState(null);
  const [isEmailEditMode, setIsEmailEditMode] = useState(false);
  const [isPhoneEditMode, setIsPhoneEditMode] = useState(false);
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
    incident_date: responseData?.client_info?.violation_date ?? "",
    case_status: "OPEN",
    dwi_status: "No",
    credit_card_number: "",
    credit_card_expiration: "",
    credit_card_cvv: "",
    client_balance: "",
    payment_type: "",
    credit_card_type: "",
  });


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

  const OpenCasesModal = (client) => {
    setClientFormPopup(true)
    console.log('Selected Client', client);

    if (client && client.client_info && client.court_info) {
      setSelectClientData(client)
      setnewClientForm((prevForm) => ({
        ...prevForm,
        client_name: client.client_info.client_name ?? "",
        fax_number: client.court_info.fax_number ?? "",
        court_house_name: client.court_info.court_house_name ?? "",
        court_house_address: client.court_info.court_house_street ?? "",
        court_house_city: client.court_info.court_house_city ?? "",
        court_house_state: client.court_info.court_house_state ?? "",
        court_house_zip: client.court_info.court_house_zip ?? "",
        court_house_county: client.court_info.court_county ?? "",
        incident_date: client.client_info.violation_date?? "",
        complaint_violation_ticket_numbers: client.violations
          .map((violation) => {
            const match = violation.match(/^([^-]+)/);
            return match ? match[1] : null;
          })
          .filter(Boolean)
          .join(", "),
      }));
    }
  }


  useEffect(() => {
    if (responseData && responseData.client_info && responseData.court_info) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setResponseData(responseData && responseData.slice(firstPageIndex, lastPageIndex))
    }

  }, [responseData, currentPage]);




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
        console.log(response.data)
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

  const searchOrder = (typedValue) => {
    console.log(typedValue);
    searchOptions.filter(res => res.includes(typedValue))
    setSearchOptions(searchOptions)
  }

  const updateOrder= (option) =>{
    setSelectedOrder(option); 
    setShowOptions(false) 
    if(option=='Recently Issued First')
    {
      responseData.sort((a,b) => new Date(b.client_info.violation_date).getTime() - new Date(a.client_info.violation_date).getTime());
    }
    else{
      responseData.sort((a,b) => new Date(a.client_info.violation_date).getTime() - new Date(b.client_info.violation_date).getTime());
    }
  }



  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex justify-center">

        {/* <OpenCasesModal/> */}
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
                      onChange={(e) => setsearchData({ ...searchData, client_name: e.target.value })} />
                  </div>
                  {/* <div className="">
                  <label className="font-medium">Violation Date</label>
                  <input className="m-2 p-2 rounded-lg"
                  type="date"
                  onChange={handleViolationDateChange}/>
                </div> */}
                  <div>
                    <label className="font-medium">Violation Type</label>
                    <select className="m-2 p-2 rounded-lg" onChange={(e) => setsearchData({ ...searchData, crime_type: e.target.value })}>
                      <option value="">Select violation type</option>
                      <option value="NJ Traffic">NJ Traffic</option>
                      <option value="NJ Criminal (DP)"> NJ Criminal (DP)</option>
                    </select>
                  </div>
                  <button type="submit" className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                    <span><AiOutlineSearch /></span>
                  </button>
                </div>
              </form>
            </div>



            {loading && (
              <div className="flex justify-center items-center py-5"><ClockLoader color="#36d7b7" /></div>
            )}

            {searchFormSubmitted && responseData && !loading && (
              <>
                          <div className="flex bg-gray-50 justify-between items-center p-4 mx-4 rounded-md">
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10" viewBox="0 -3.66 65.015 65.015" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_99" data-name="Group 99" transform="translate(-107.858 -217.309)"> <g id="Group_97" data-name="Group 97"> <path id="Path_247" data-name="Path 247" d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912v30.934a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912V223.676A2.911,2.911,0,0,0,158.251,220.766Z" fill="#1e40af"></path> <path id="Path_248" data-name="Path 248" d="M161.162,242.6V227.133a2.914,2.914,0,0,0-2.911-2.914H114.226a2.914,2.914,0,0,0-2.912,2.914V242.6Z" fill="#1e40af"></path> <path id="Path_249" data-name="Path 249" d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912V221.6a2.911,2.911,0,0,1,2.912-2.912h13.522l5.725,3.455h24.778a2.913,2.913,0,0,1,2.911,2.912v-1.383A2.911,2.911,0,0,0,158.251,220.766Z" fill="#4ade80" opacity="0.5" ></path> <path id="Path_250" data-name="Path 250" d="M161.707,226.293H110.771a2.913,2.913,0,0,0-2.913,2.913l3.456,30.933a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912l3.455-30.933A2.912,2.912,0,0,0,161.707,226.293Z" fill="#4ade80"></path> <path id="Path_251" data-name="Path 251" d="M110.771,227.676h50.936a2.911,2.911,0,0,1,2.83,2.254l.08-.724a2.912,2.912,0,0,0-2.91-2.913H110.771a2.913,2.913,0,0,0-2.913,2.913l.081.724A2.911,2.911,0,0,1,110.771,227.676Z" fill="#4ade80" opacity="0.5" ></path> </g> <path id="Path_252" data-name="Path 252" d="M161.162,260.139l.592-5.3a14.7,14.7,0,1,0-27.687,8.211h24.184A2.911,2.911,0,0,0,161.162,260.139Z" fill="#8c93a1" opacity="0.6" ></path> <g id="Group_98" data-name="Group 98"> <rect id="Rectangle_36" data-name="Rectangle 36" width="4.156" height="12.401" transform="translate(157.7 262.706) rotate(-45)" fill="#1e40af"></rect> <path id="Path_253" data-name="Path 253" d="M165.421,252.721a14.7,14.7,0,1,1-14.7-14.7A14.7,14.7,0,0,1,165.421,252.721Z" fill="#1e40af"></path> <path id="Path_254" data-name="Path 254" d="M161.682,252.721a10.964,10.964,0,1,1-10.964-10.965A10.965,10.965,0,0,1,161.682,252.721Z" fill="#8c93a1"></path> <path id="Path_255" data-name="Path 255" d="M150.718,262.616a9.895,9.895,0,1,1,9.894-9.9A9.9,9.9,0,0,1,150.718,262.616Z" fill="#4ade80" opacity="0.6"></path> <path id="Path_256" data-name="Path 256" d="M141.833,253.735a9.895,9.895,0,0,1,16.368-7.484A9.892,9.892,0,1,0,144.247,260.2,9.843,9.843,0,0,1,141.833,253.735Z" fill="#4ade80" opacity="0.6"></path> <path id="Path_257" data-name="Path 257" d="M150.718,257.606a4.885,4.885,0,1,1,4.885-4.885A4.888,4.888,0,0,1,150.718,257.606Z" fill="#4ade80"></path> <path id="Path_258" data-name="Path 258" d="M147.01,258.946a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,147.01,258.946Z" fill="#f3f3f3" opacity="0.5"></path> <path id="Path_259" data-name="Path 259" d="M157.45,251.192c-.937.937-2.879.517-4.336-.94s-1.879-3.4-.942-4.335,2.879-.516,4.337.941S158.385,250.256,157.45,251.192Z" fill="#f3f3f3" opacity="0.5"></path> <path id="Path_260" data-name="Path 260" d="M160.6,267.028l7.219,7.22a3.055,3.055,0,0,0,4.3-4.3l-7.219-7.219Z" fill="#4ade80"></path> </g> </g> </g></svg>
                <h1 className="title text-xl">Result for - {searchData && searchData.client_name}</h1><span className="inline-flex ml-3 items-center rounded-full bg-green-400 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{responseData.length}</span>
              </div>
              <div className="relative mt-2">
                <input id="combobox" type="text" onClick={()=>setShowOptions(option=> !option)} value={selectedOrder} onChange={(e) => { searchOrder(e.target.value) }} className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" role="combobox" aria-controls="options" aria-expanded="false" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {showOptions && <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">

                  {searchOptions && searchOptions.map((option, index) =>
                    <li key={index} onClick={() =>{ updateOrder(option)} } className="cursor-pointer relative select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabIndex="-1">
                      <span className="block truncate">{option}</span>
                      {selectedOrder == option && <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </span>}
                    </li>
                  )}

                </ul>}
              </div>
            </div>
                {responseData.length == 0 && <div className="flex justify-center items-center py-5 text-gray-600">Result not found. Please try with other search</div>}
                {responseData.length > 0 && responseData.map((client, index) => <>
                  <div key={index} className="rounded-md bg-gray-50 mx-4 mt-4 mb-4  px-6 py-5 sm:flex sm:flex-col">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div className="text-sm mt-3  sm:mt-0 font-medium text-gray-900 uppercase  underline cursor-pointer" onClick={() => OpenCasesModal(client)}>{client.client_info.client_name}</div>
                      <div className="text-sm font-medium text-gray-900 mt-4 sm:mt-0 sm:flex-shrink-0">{client.court_info.court_house_name}</div>
                    </div>
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3  sm:mt-0">
                          <div className="mt-1 text-sm text-gray-600 sm:flex sm:flex-col sm:items-start">
                            <div ><span className="capitalize">{`${client.client_info.client_age} year old `}</span> from <span className="capitalize">{`${client.client_info.client_birth_place}`}</span></div>
                            {client.violations.map((v) => v.split('/')[0]).length > 0 &&<div className="mt-1 sm:mt-0">{client.violations.map((v) => v.split('/')[0]).join(' ,')}</div>}
                            <div className="mt-1 sm:mt-0">{client.client_info.violation_date}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:flex-shrink-0">

                        {/* add mail button here */}
                      </div>
                    </div>
                  </div></>)}

                {/* pagination */}
                { responseData.length>10 && <Pagination
                  className="pagination-bar justify-center py-5"
                  currentPage={currentPage}
                  totalCount={responseData.length}
                  pageSize={PageSize}
                  onPageChange={page => setCurrentPage(page)}
                />}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Show Client Detail Modal */}
      {clientFormPopup && <CustomModal>

        <div className="p-5 ">
          <div className="m-2 flex gap-2">
            <button
              onClick={() => setClientFormPopup(false)}
              className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
            >
              <span>
                <BiArrowBack />
              </span>
            </button>
            <h1 className="text-2xl">Client Legal Information</h1>
          </div>
          <div>
            <form>
              <div className="">
                <div className="bg-gray-300 p-5 m-2 rounded-md">
                  <h1>Personal Information</h1>
                  <div className="m-2 flex items-center gap-8">
                    <div>
                      <p>{selectClientData.client_info.client_name} ({selectClientData.court_info.crime_type}) </p>
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
                        disabled={!isEmailEditMode}
                      />
                      <button type="button" onClick={() => setIsEmailEditMode((prevMode) => !prevMode)} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{isEmailEditMode ? "Confirm" : "Edit"}</button>
                    </div>
                    <div>
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="m-2 p-2 rounded-lg"
                        value={newClientForm.client_phone}
                        placeholder="Enter phone"
                        onChange={(e) => {
                          setnewClientForm({
                            ...newClientForm,
                            client_phone: e.target.value,
                          });
                        }}
                        disabled={!isPhoneEditMode}
                      />
                      <button type="button" onClick={() => setIsPhoneEditMode((prevMode) => !prevMode)} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{isPhoneEditMode ? "Confirm" : "Edit"}</button>
                    </div>
                  </div>
                  <div className="m-2">
                    <p>Age {selectClientData.client_info.client_age} from {selectClientData.client_info.client_birth_place}</p>
                  </div>
                </div>
                <div className="bg-gray-300 p-5 m-2 rounded-md">
                  <h1>Violation Information</h1>
                  <div className="m-4">
                    <p>{selectClientData.violations.join(", ")}</p>
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
                      <p>{selectClientData.court_info.court_county}</p>
                      <p>{selectClientData.court_info.court_house_name}</p>
                      <p>{selectClientData.court_info.court_house_street}</p>
                      <p>{selectClientData.court_info.court_house_city}, {selectClientData.court_info.court_house_state} {selectClientData.court_info.court_house_zip}</p>
                    </div>
                    <div className="m-4">
                      <p>Phone Number: {selectClientData.court_info.phone_number}</p>
                      <p>Fax Number: {selectClientData.court_info.fax_number}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 p-5 m-2 rounded-md">
                <h1 className="text-lg">Payment Information</h1>
                <div className="m-2">
                  <label className="m-2">Payment Type</label>
                  <select
                    className="rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    value={newClientForm.payment_type}
                    onChange={(e) => { setnewClientForm({ ...newClientForm, payment_type: e.target.value }) }}
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
                          number={newClientForm.credit_card_number} />
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
      </CustomModal>}
    </>
  );
}
