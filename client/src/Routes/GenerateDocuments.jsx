import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineDocumentScanner } from "react-icons/md";
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

  // const njCounties = [
  //   "Atlantic",
  //   "Bergen",
  //   "Burlington",
  //   "Camden",
  //   "Cape May",
  //   "Cumberland",
  //   "Essex",
  //   "Gloucester",
  //   "Hudson",
  //   "Hunterdon",
  //   "Mercer",
  //   "Middlesex",
  //   "Monmouth",
  //   "Morris",
  //   "Ocean",
  //   "Passaic",
  //   "Salem",
  //   "Somerset",
  //   "Sussex",
  //   "Union",
  //   "Warren",
  // ];

  const njCounties = [
    ...new Set(njdataList.map((item) => item.county_name_common)),
  ];

  const goHome = () => {
    navigate("/home");
  };

  const handleClearForm = () => {
    setFormData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="text-white bg-gradient-to-tl from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 w-10/12 mx-auto rounded-xl shadow-lg z-50 p-4">
          <div className="form-content py-4 text-left px-6 mb-5 space-y-4">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">
                  GENERATE CLIENT DOCUMENTS
                </h1>
                <p>Complete the form to generate legal documents</p>
              </div>
              <div className="text-9xl">
                <MdOutlineDocumentScanner />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="text-lg font-medium">Today&apos;s Date</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="date"
                  value={formData.todays_date}
                  onChange={(e) =>
                    setFormData({ ...formData, todays_date: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Client Name</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="John Smith"
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Violation Date</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="date"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      incident_date: e.target.value,
                    })
                  }
                  value={formData.incident_date}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-lg font-medium">Fax Number</label>
              <input
                className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="tel"
                placeholder="(516) 404-8762"
                onChange={(e) =>
                  setFormData({ ...formData, fax_number: e.target.value })
                }
                required
                value={formData.fax_number}
              />
            </div>

            <div>
              <label className="text-lg font-medium">
                Violation Number(s) or Ticket Number(s)
              </label>
              <p className="text-xs font-light mb-2">
                Please separate values by commas *
              </p>
              <textarea
                className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
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
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-lg font-medium">Court House Name</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="Woodbridge Municipal Court"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      court_house_name: e.target.value,
                    })
                  }
                  type="text"
                  value={formData.court_house_name}
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Address Line 1</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="text"
                  value={formData.court_house_address}
                  required
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="text-lg font-medium">City</label>
                <select
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="text"
                  value={formData.court_house_city}
                  required
                  placeholder="Woodbridge"
                  name="cityInput"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      court_house_city: e.target.value,
                    })
                  }
                >
                  <option value="">Select a City</option>
                  {/* make options from unique cities based on county selected */}
                  {getUniqueCitiesInCounty(formData.court_house_county).map(
                    (city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-md font-light mb-2">
                  Select a State:
                </label>
                <select
                  required
                  className="rounded-lg w-1/4 text-center text-sm text-black p-2"
                  value={formData.court_house_state}
                  disabled
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

              <div>
                <label className="text-lg font-medium">Zip Code</label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="text"
                  value={formData.court_house_zip}
                  required
                  placeholder="07095"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      court_house_zip: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col">
                <label className="text-md font-light mb-2">
                  Select a County:{" "}
                </label>
                <select
                  className="rounded-lg w-3/5 text-center text-sm text-black p-2"
                  required
                  value={formData.court_house_county}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      court_house_county: e.target.value,
                    })
                  }
                >
                  <option value="">-- Select County --</option>
                  {njCounties.map((county, index) => (
                    <option key={index} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-lg font-medium">
                  Client Email Address
                </label>
                <input
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  type="email"
                  value={formData.client_email}
                  placeholder="E-Mail"
                  onChange={(e) =>
                    setFormData({ ...formData, client_email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-lg font-medium">DWI?</label>
                <select
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="07095"
                  value={formData.dwi_status}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, dwi_status: e.target.value })
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="text-lg font-medium">Payment Type</label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Credit Card or Zelle"
                  value={formData.payment_type}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, payment_type: e.target.value });
                  }}
                />
              </div>
              <div>
                <label className="text-lg font-medium">
                  Credit Card Company
                </label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="Visa, Mastercard, American Express"
                  value={formData.credit_card_type}
                  // required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      credit_card_type: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label className="text-lg font-medium">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
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
              <div>
                <label className="text-lg font-medium">
                  Credit Card Expiration
                </label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
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
              <div>
                <label className="text-lg font-medium">Credit Card CVV</label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="XXX"
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
              <div>
                <label className="text-lg font-medium">Client Balance</label>
                <input
                  type="text"
                  className="w-full text-black border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                  placeholder="$"
                  value={formData.client_balance}
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      client_balance: e.target.value,
                    });
                  }}
                />
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
        </div>
      </form>
      {showAlert && <AlertClientAdded />}
    </div>
  );
}
