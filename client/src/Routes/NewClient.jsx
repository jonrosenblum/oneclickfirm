import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useState } from "react";
import axiosInstance from "../axios";

export default function NewClient() {
  const [searchData, setsearchData] = useState({
    client_name: "",
    violation_date: "",
  });
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
    setFormSubmitted(true);
    setLoading(true); // Set loading state when the request starts

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

          <div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label className="">Legal Name</label>
                <input className=""
                placeholder="e.g. John Smith"
                type="text"
                onChange={(e)=> setsearchData({...searchData, client_name: e.target.value})}/>
              </div>
              <div className="">
                <label className="">Violation Date</label>
                <input className=""
                type="date"
                onChange={(e)=> setsearchData({...searchData, violation_date: e.target.value})}/>
              </div>
              <button className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                  <span><AiOutlineSearch/></span>
                </button>
            </form>
          </div>

          {loading && (
            <div>Loading...</div>
          )}

          {formSubmitted && responseData && !loading && (
            <div className="flex">
              <div>
                <p>Client ID: {responseData.client_id}</p>
                <p>Client Name: {responseData.client_info.client_name}</p>
                <p>Client Age: {responseData.client_info.client_age}</p>
                <p>Client Birth Place: {responseData.client_info.client_birth_place}</p>
                <p>Court House Name: {responseData.court_info.court_house_name}</p>
                <p>Court House Street: {responseData.court_info.court_house_street}</p>
                <p>Court House City: {responseData.court_info.court_house_city}</p>
                <p>Court House State: {responseData.court_info.court_house_state}</p>
                <p>Court House Zip: {responseData.court_info.court_house_zip}</p>
                <p>Phone Number: {responseData.court_info.phone_number}</p>
                <p>Fax Number: {responseData.court_info.fax_number}</p>
                <p>Violations: {responseData.violations.join(", ")}</p>
              </div>
              <div>
                <form>
                  <div className="flex">
                    <div>
                      <h1>Client Information</h1>
                      <label>Client Name</label>
                      
                    </div>
                    <div>
                      <h1>Violation Information</h1>
                      <label>Court House Name</label>
                      
                    </div>

                    <div className="text-center">
                      <h1>Payment Information</h1>
                      <label>Payment Type</label>
                      <select
                        value={searchData.payment_type}
                        onChange={(e) => {
                          setsearchData({
                            ...searchData,
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
                        value={searchData.credit_card_type}
                        onChange={(e) => {
                          setsearchData({
                            ...searchData,
                            credit_card_type: e.target.value,
                          });
                        }}
                        disabled={searchData.payment_type === "Zelle"}
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
                          setsearchData({
                            ...searchData,
                            credit_card_number: e.target.value,
                          });
                        }}
                        disabled={searchData.payment_type === "Zelle"}
                      />

                      <label>Expiration</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={searchData.credit_card_expiration}
                        required
                        onChange={(e) => {
                          setsearchData({
                            ...searchData,
                            credit_card_expiration: e.target.value,
                          });
                        }}
                        disabled={searchData.payment_type === "Zelle"}
                      />

                      <label>CVV</label>
                      <input
                        type="text"
                        placeholder="XXXX"
                        value={searchData.credit_card_cvv}
                        required
                        onChange={(e) => {
                          setsearchData({
                            ...searchData,
                            credit_card_cvv: e.target.value,
                          });
                        }}
                        disabled={searchData.payment_type === "Zelle"}
                      />

                      <label>Client Balance</label>
                      <input
                        type="text"
                        placeholder="$"
                        value={searchData.client_balance}
                        required
                        onChange={(e) => {
                          setsearchData({
                            ...searchData,
                            client_balance: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
