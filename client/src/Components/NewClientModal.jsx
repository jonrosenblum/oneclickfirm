import { BiArrowBack } from "react-icons/bi";
import { useRef, useState } from "react";
import axios from "axios";

export default function NewClientModal() {
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
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute w-full h-full backdrop-blur-md" />
        <div className="modal-container bg-gradient-to-tr from-blue-800 to-green-400 w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 p-4">
          <div className="modal-content py-4 text-left px-6 mb-5">
            <h1 className="text-3xl font-bold mb-4">Add New Client</h1>
            <p className="mb-2">Add a new client to generate documents</p>
            <div className="mt-6">
              <label className="text-lg font-medium">Client Name:</label>
              <input
                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                placeholder="e.g. John Smith"
                onChange={(e) =>
                  setFormData({ ...formData, client_name: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-medium">Date of Violation:</label>
              <input
                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                type="date"
                onChange={(e) =>
                  setFormData({ ...formData, violation_date: e.target.value })
                }
              />
            </div>
            <div className="mt-4 mb-5">
              <label className="text-lg font-medium">
                Violation Number or Ticket Number:
              </label>
              <input
                className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                placeholder="e.g. 1217E23006116"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    violation_ticket_number: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="modal-action-button px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500"
            >
              <span>
                <BiArrowBack />
              </span>
            </button>
            <button className="modal-action-button px-4 text-black py-2 bg-white rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
              Add Client
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
