import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AlertClientAdded from "../Components/Pieces/Alert";
import njdataList from "./../njdata.json";

/**
 *
 * @typedef {typeof njdataList[number]} NjDataItem
 */

const getUniqueCitiesInCounty = (/** @type {string }*/ countyName) => {
  const cities = njdataList
    .filter((item) => item.county_name_common === countyName)
    .map((item) => item.municipality_name_nj_1040);
  return [...new Set(cities)];
};

export default function GenerateDocuments() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    client_name: "",
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
    dwi_status: "No",
    credit_card_number: "",
    credit_card_expiration: "",
    credit_card_cvv: "",
    client_balance: "",
    payment_type: "",
    credit_card_type: "",
  });

  const stateAbbreviations = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const njCounties = [
    ...new Set(njdataList.map((item) => item.county_name_common)),
  ];

  const goHome = () => {
    navigate("/home");
  };

  const handleClearForm = () => {
    setFormData({
      client_name: "",
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
      dwi_status: "No",
      credit_card_number: "",
      credit_card_expiration: "",
      credit_card_cvv: "",
      client_balance: "",
      payment_type: "",
      credit_card_type: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await axios.post("/new-client", formData, {
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

  return (
    <div className="flex flex-row h-screen">
        <div className="">
          <form onSubmit={handleSubmit}>
          <div className="p-10">

            <div className="client-information flex flex-col bg-gray-100 m-1 p-2">
              <h3>Client Information</h3>
            <div className="border border-2 border-gray-300 p-2 mt-2">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">

              <div className="flex flex-col m-2">
                <label className="text-sm mb-1">Today&apos;s Date</label>
                <input
                  className="rounded-md border-2 p-1 text-xs border-gray-300 focus:outline-none focus:border-gray-500"
                  type="date"
                  value={formData.todays_date}
                  onChange={(e) =>
                    setFormData({ ...formData, todays_date: e.target.value })
                  }
                  // required
                  />
              </div>

               <div className="flex flex-col m-2">
                <label className="text-sm mb-1">Client Name</label>
                <input
                  className="rounded-md border-2 p-1 text-sm border-gray-300 focus:outline-none focus:border-gray-500"
                  placeholder="John Smith"
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                  // required
                  />
              </div>


              <div className="flex flex-col m-2">
                <label className="text-sm mb-1">
                  Email Address
                </label>
                <input
                  className="rounded-md border-2 text-sm p-1 border-gray-300 focus:outline-none focus:border-gray-500"
                  type="email"
                  value={formData.client_email}
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, client_email: e.target.value })
                  }
                  />
              </div>
            </div>
          </div>
        </div>


          <div className="violation-information flex flex-col bg-gray-100 p-2 m-1">
            <h3>Violation Information</h3>      

            <div className="border border-2 border-gray-300 p-2 mt-2">
              <div className=" flex grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex flex-col m-2">
                      <label className="text-sm mb-1">Violation Date</label>
                      <input
                      className="rounded-md border-2 text-xs p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      type="date"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          incident_date: e.target.value,
                        })
                      }
                      value={formData.incident_date}
                      // required
                    />
                  </div>
                  <div className="flex flex-col m-2">
                  <label className="text-sm mb-2">DWI?</label>
                <select
                  className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.dwi_status}
                  // required
                  onChange={(e) =>
                    setFormData({ ...formData, dwi_status: e.target.value })
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex flex-col m-2">
              <label className="text-sm mb-2">Fax Number</label>
              <input
                className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="tel"
                placeholder="(516) 404-8762"
                onChange={(e) =>
                  setFormData({ ...formData, fax_number: e.target.value })
                }
                // required
                value={formData.fax_number}
              />
            </div>
           
            </div>

                  <div className="flex items-center">
                    <div className="flex flex-col m-2">
                      <label className="text-sm mb-2">Court House Name</label>
                      <input
                        className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Woodbridge Municipal Court"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            court_house_name: e.target.value,
                          })
                        }
                        type="text"
                        value={formData.court_house_name}
                        // required
                      />
                  </div> 
                  <div className="flex flex-col m-2">
                    <label className="text-sm mb-2">Address Line 1</label>
                    <input
                      className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      type="text"
                      value={formData.court_house_address}
                      // required
                      placeholder="1 Main Street"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          court_house_address: e.target.value,
                        })
                      }
                    />
              </div>
            </div>

              <div className="flex items-center">
                  <div className="flex flex-col m-2">
                    <label className="text-sm mb-2">County</label>
                      <select
                        className="rounded-md border-2 text-sm p-1 border-gray-300 focus:outline-none focus:border-gray-500"
                        // required
                        value={formData.court_house_county}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            court_house_county: e.target.value,
                          })
                        }
                      >
                        <option value="">Select a County</option>
                        {njCounties.map((county, index) => (
                          <option key={index} value={county}>
                            {county}
                          </option>
                        ))}
                      </select> 
                  </div>
                  
                <div className="flex flex-col m-2">
                  <label className="text-sm mb-2">City</label>
                    <select
                      className="rounded-md border-2 text-sm p-1 border-gray-300 focus:outline-none focus:border-gray-500"
                      type="text"
                      value={formData.court_house_city}
                      // required
                      name="cityInput"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          court_house_city: e.target.value,
                        })
                      }
                    >
                      <option value="">Select a City</option>
                      {getUniqueCitiesInCounty(formData.court_house_county).map(
                        (city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        )
                      )}
                    </select>
                </div>
                
                 <div className="flex flex-col m-2">
                <label className="text-sm mb-2"> State </label>
                <select
                  disabled
                  // required
                  className="rounded-md border-2 text-sm p-1 border-gray-300 focus:outline-none focus:border-gray-500"
                  value={formData.court_house_state}
                  
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      court_house_state: e.target.value,
                    })
                  }
                >
                  <option value="">-- Select State --</option>
                  {stateAbbreviations.map((state, index) => (
                    <option value={state} key={index}>
                      {state}
                    </option>
                  ))}
                </select>
              </div> 


              </div>   
              <div className="flex flex-col m-2">
                <label className="text-sm mb-2">Zip Code</label>
                <input
                className="w-1/2 rounded-md border-2 text-sm p-1 border-gray-300 focus:outline-none focus:border-gray-500"
                type="text"
                value={formData.court_house_zip}
                // required
                placeholder="07095"
                onChange={(e) =>
                setFormData({...formData, court_house_zip: e.target.value,
                 })}/>
              </div>
            </div>

              <div className="flex flex-col m-2">
                <label className="text-sm mb-1">Violation Number(s)
              </label>
                <p className="text-xs font-light mb-2"> Please separate values by commas * </p>
              <textarea
                className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="e.g. 1217E23006116"
                type="text"
                rows="3"
                value={formData.complaint_violation_ticket_numbers}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    complaint_violation_ticket_numbers: e.target.value,
                  })
                }
                // required
              />
            </div>
            

            </div>    
            
           </div>
           <div className="payment-information flex flex-col bg-gray-100 mt-3">
            <h3>Payment Information</h3>
            <div className="border border-2 border-gray-300 mt-3 p-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center">

                <div className="flex flex-col m-2">
                  <label className="text-sm mb-1">Payment Type</label>
                  <select
                    type="text"
                    className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={formData.payment_type}
                    onChange={(e) => {
                      setFormData({ ...formData, payment_type: e.target.value });
                    }}
                  >
                    <option value="">Select Payment Type</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Zelle">Zelle</option>
                  </select>
                </div>

                <div className="flex flex-col m-2">
                  <label className="text-sm mb-1">Card Type</label>
                  <select
                    type="text"
                    className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Select Card Type"
                    value={formData.credit_card_type}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        credit_card_type: e.target.value,
                      });
                    }}
                    disabled={formData.payment_type === "Zelle"}
                  >
                    <option value="">Select Card Type</option>
                    <option value="American Express">American Express</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Discover">Discover</option>
                  </select>
                </div>


              <div className="flex flex-col m-2">
                <label className="text-sm mb-1">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Credit Card Number"
                  value={formData.credit_card_number}
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      credit_card_number: e.target.value,
                    });
                  }}
                />

              </div>
                </div>

              </div>
              <div className="flex items-center">
                <div className="flex flex-col m-2">
                <label className="text-sm mb-1">
                  Expiration
                </label>
                <input
                  type="text"
                  className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="MM/YY"
                  value={formData.credit_card_expiration}
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      credit_card_expiration: e.target.value,
                    });
                  }}
                />
                </div>
                <div className="flex flex-col m-2">
                <label className="text-sm mb-1">CVV</label>
                <input
                  type="text"
                  className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="XXXX"
                  value={formData.credit_card_cvv}
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      credit_card_cvv: e.target.value,
                    });
                  }}
                />
                </div>
                <div className="flex flex-col m-2">
                <label className="text-sm mb-1">Client Balance</label>
                <input
                  type="text"
                  className="rounded-md border-2 text-sm p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="$"
                  value={formData.client_balance}
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      client_balance: e.target.value,
                    });
                  }}
                />
                </div>
                
              </div>
            </div>
           </div>

        </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={goHome}
                className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
              >
                <span>
                  <BiArrowBack />
                </span>
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="px-4 text-black py-2 bg-red-400 rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-4 text-black py-2 bg-green-400 rounded-md hover-bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {showAlert && <AlertClientAdded />}
    </div>
  );
}
