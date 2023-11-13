import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertClientAdded from "../Components/Pieces/Alert";
import njdataList from "./../njdata.json";
import axiosInstance from "../axios";

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
    dwi_status: "",
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
      dwi_status: "",
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
    console.log(formData);

    try {
      const response = await axiosInstance.post("/new-client", formData, {
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
    <>
      <div className="flex bg-gray-100 flex-row h-screen overflow-auto">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="p-10">
              <div className="client-information flex flex-col bg-gray-200 m-1 p-2 py-2 rounded-md">
                <h3 className="font-medium">Client Information</h3>
                <div className="bg-white shadow-sm ring-1 mt-2 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                  <div className="px-4 py-2">
                    <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
                      <div className="sm:col-span-full md:col-span-2 lg:col-span-4">
                        <label className="block text-sm font-base  text-gray-900">
                          Today&apos;s Date
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                            <input
                              type="date"
                              value={formData.todays_date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  todays_date: e.target.value,
                                })
                              }
                              required
                              className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-full md:col-span-2 lg:col-span-4">
                        <label className="block text-sm font-base  text-gray-900">
                          Client Name
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                            <input
                              type="text"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  client_name: e.target.value,
                                })
                              }
                              required
                              className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-full md:col-span-2 lg:col-span-4">
                        <label className="block text-sm font-base  text-gray-900">
                          Email Address
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                            <input
                              type="text"
                              value={formData.client_email}
                              placeholder="example@gmail.com"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  client_email: e.target.value,
                                })
                              }
                              required
                              className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="violation-information flex flex-col bg-gray-200 p-2 m-2 py-2 rounded-md">
                <h3 className="font-medium">Violation Information</h3>
                <div className="bg-white shadow-sm ring-1 mt-2 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                  <div className="px-4 py-2">
                    <div className="flex lg:flex-row flex-col gap-2">
                      <div className="grid w-full gap-x-2 grid-cols-12 lg:grid-cols-12">
                        <div className="col-span-full lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            Violation Date
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ">
                              <input
                                type="date"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    incident_date: e.target.value,
                                  })
                                }
                                value={formData.incident_date}
                                required
                                className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            DWI?
                          </label>
                          <div className="mt-2">
                            <select
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:leading-6"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  dwi_status: e.target.value,
                                })
                              }
                              value={formData.dwi_status}
                              required
                            >
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            Fax Number
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ">
                              <input
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                                type="tel"
                                placeholder="(516) 404-8762"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fax_number: e.target.value,
                                  })
                                }
                                required
                                value={formData.fax_number}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-6">
                          <label className="block text-sm font-base  text-gray-900">
                            Court House Name
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Woodbridge Municipal Court"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    court_house_name: e.target.value,
                                  })
                                }
                                value={formData.court_house_name}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-6">
                          <label className="block text-sm font-base  text-gray-900">
                            Address Line 1
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
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
                        </div>
                        <div className="col-span-full md:col-span-6 lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            County
                          </label>
                          <div className="mt-2">
                            <select
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
                              required
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
                        </div>
                        <div className="col-span-full md:col-span-6 lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            City
                          </label>
                          <div className="mt-2">
                            <select
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
                              value={formData.court_house_city}
                              required
                              name="cityInput"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  court_house_city: e.target.value,
                                })
                              }
                            >
                              <option value="">Select a City</option>
                              {getUniqueCitiesInCounty(
                                formData.court_house_county
                              ).map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-6 lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            State
                          </label>
                          <div className="mt-2">
                            <select
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
                              disabled
                              required
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
                        <div className="col-span-full md:col-span-6 lg:col-span-4">
                          <label className="block text-sm font-base  text-gray-900">
                            Zip Code
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
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
                        </div>
                      </div>
                      <div className="grid w-full gap-x-2 gap-y-6 grid-cols-12 lg:grid-cols-12">
                        <div className="col-span-full lg:col-span-12 lg:pl-10">
                          <label
                            htmlFor="about"
                            className="block text-sm font-base text-gray-900"
                          >
                            Violation Number(s)
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows="5"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-3"
                              placeholder="e.g. 127E23006116"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  complaint_violation_ticket_numbers: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                          <p className="mt-3 text-xs leading-6 text-gray-600">
                            Please separate values by commas *
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="violation-information flex flex-col bg-gray-200 p-2 m-2 py-2 rounded-md">
              <div className="payment-information flex flex-col bg-gray-200 mt-3 py-2 rounded-md">
                  <h3 className="font-medium">Payment Information</h3>
                  <div className="bg-white shadow-sm ring-1 mt-2 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-2">
                      <div className="grid gap-x-2 gap-y-6 grid-cols-12">
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            Payment Type
                          </label>
                          <div className="mt-2">
                            <select
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
                              value={formData.payment_type}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  payment_type: e.target.value,
                                });
                              }}
                              required
                            >
                              <option value="">Select Payment Type</option>
                              <option value="Credit Card">Credit Card</option>
                              <option value="Zelle">Zelle</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            Card Type
                          </label>
                          <div className="mt-2">
                            <select
                              required
                              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
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
                              <option value="American Express">
                                American Express
                              </option>
                              <option value="Visa">Visa</option>
                              <option value="MasterCard">MasterCard</option>
                              <option value="Discover">Discover</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            Credit Card Number
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Credit Card Number"
                                value={formData.credit_card_number}
                                required
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    credit_card_number: e.target.value,
                                  });
                                }}
                                disabled={formData.payment_type === "Zelle"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            Expiration
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="MM/YY"
                                value={formData.credit_card_expiration}
                                required
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    credit_card_expiration: e.target.value,
                                  });
                                }}
                                disabled={formData.payment_type === "Zelle"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            CVV
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="XXXX"
                                value={formData.credit_card_cvv}
                                required
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    credit_card_cvv: e.target.value,
                                  });
                                }}
                                disabled={formData.payment_type === "Zelle"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full md:col-span-4 lg:col-span-2">
                          <label className="block text-sm font-base  text-gray-900">
                            Client Balance
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                              <input
                                type="text"
                                className="block w-full border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6"
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
                        </div>
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
        {showAlert && <AlertClientAdded />}
      </div>
    </>
  );
}
