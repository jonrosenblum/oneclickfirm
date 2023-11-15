import { useEffect, useState } from "react";
import axios from "./../axios";
import { useNavigate } from "react-router-dom";
import AlertDocumentDownload from "../Components/Pieces/AlertDocumentDownload";

export default function AllClients() {
  const [clientInfo, setClientInfo] = useState(null);
  const [searchInput, setSearchInput] = useState(""); // State variable for search input
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // State variable to control the alert visibility
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [loading, setLoading] = useState(true); // State variable for loading state


  useEffect(() => {
    // Simulating a 2-second delay before fetching client information
    const timer = setTimeout(() => {
      axios
        .get("/clients")
        .then((response) => {
          setClientInfo(response.data);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error(error);
          setLoading(false); // Set loading to false in case of an error
        });
    }, 125); // 125ms delay before sending the request

    return () => clearTimeout(timer); // Clear the timeout on unmount or before the next effect
  }, []);

  useEffect(() => {
    // Fetch client information from your backend
    if (clientInfo) {
      return;
    }

    axios
      .get("/clients")
      .then((response) => {
        setClientInfo(response.data);
      })
      .catch((error) => console.error(error));
  }, [clientInfo]);

  const downloadDocuments = (client) => {
    if (client) {
      const clientId = client.client_id;

      // Construct the URL for the download route
      const downloadURL = `/download-documents/${clientId}`;

      // Send a GET request to the backend route to download the documents
      axios
        .get(downloadURL, { responseType: "blob" })
        .then((response) => {
          // Create a blob from the response data
          const blob = new Blob([response.data], { type: "application/zip" });

          // Create a URL for the blob
          const url = window.URL.createObjectURL(blob);

          // Create an invisible anchor element to trigger the download
          const link = document.createElement("a");
          link.href = url;
          link.download = "client_documents.zip";
          link.click();
          setShowAlert(true);

          // Release the URL object
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading documents", error);
        });
    }
  };
  if (loading) {
    return <div className="w-full min-h-screen flex items-center justify-center">Loading...</div>
  }

  const filteredClients = clientInfo.filter(
    (client) =>
      client.client_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      client.court_house_county
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      client.court_house_name.toLowerCase().includes(searchInput.toLowerCase())
  );


  const toggleDropdown = (clientId) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [clientId]: !prevState[clientId],
    }));
  };

 

  return (
    <>
    <div>
      {clientInfo.length === 0 ? (
        <div className="bg-gradient-to-tr font-oswald from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
          <div className="overflow-y-auto max-h-[800px] text-white px-2 sm:px-0 text-center">
            <h1 className="title font-extralight text-2xl">
              NO CLIENTS AVAILABLE
            </h1>
            <button
              onClick={() => {
                navigate("/generate-documents");
              }}
              className="px-4 mt-4 text-black font-medium py-2 bg-gray-300 rounded-md hover:bg-blue-300 focus:outline-none
                            focus:shadow-outline-blue active:bg-blue-500"
            >
              Add New Client
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white w-full p-4 min-h-screen flex">
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200  text-gray-900">
            <div className="rounded-t mb-0 px-4">
              <div className="flex flex-wrap">
              <div className="p-4 flex justify-between relative w-full max-w-full flex-grow flex-1">
                <h3 className="title text-2xl font-bold">All Clients</h3>
                <input
                  type="text"
                  placeholder="Search for clients"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="p-2  text-sm text-black border border-gray-300 rounded"
                />
              </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto max-h-[800px] overflow-y-auto">
              <div className="p-4">
                <table className="w-full text-sm text-left">
              <thead className="text-xs text-white  rounded-lg uppercase bg-gradient-to-b from-[#30b5b1] to-blue-500">
                <tr>
                  <th scope="col" className="px-6 rounded-tl-lg py-3">
                  Client Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Case Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Court House
                  </th>
                  <th scope="col" className="px-6 py-3">
                  County
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-tr-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
              {filteredClients.map((client) => (
                <tr key={client.client_id} className="bg-white hover:bg-gray-50">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                      alt="Jese image "
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                      {client.client_name}
                      </div>
                      <div className="font-normal text-gray-500">
                      {client.client_id}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      { client.case_status === "OPEN" && <><div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> <span>{client.case_status}</span></>}
                      { client.case_status != "OPEN" && <><div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> <span>{client.case_status}</span></>}
                    </div>
                  </td>
                  <td className="px-6 py-4">{client.court_house_name.toUpperCase()}</td>
                  <td className="px-6 py-4">{client.court_house_county.toUpperCase()}</td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleDropdown(client.client_id)}
                      className="text-sm text-left inline-flex items-center font-medium relative text-blue-600 dark:text-blue-500 hover:underline"
                      type="button"
                    >
                      View actions
                    </button>

                    <div
                       className={`${
                        dropdownOpen[client.client_id] ? "" : "hidden"
                      } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 "
                        aria-labelledby={`dropdownDefaultButton_${client.client_id}`}
                      >
                        <li>
                          <a
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => downloadDocuments(client)}
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                          >
                            Download Documents
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
              </div>
            </div>
          </div>
          
        </div>
      )}
      {showAlert && (
        <AlertDocumentDownload onClose={() => setShowAlert(false)} />
      )}
    </div>
    </>
  );
}