import { useEffect, useState } from "react";
import axios from "./../axios";
import { useNavigate } from "react-router-dom";
// import { AiOutlineDownload } from 'react-icons/ai';
import AlertDocumentDownload from "../Components/Pieces/AlertDocumentDownload";

export default function AllClients() {
  const [clientInfo, setClientInfo] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // State variable for search input
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // State variable to control the alert visibility

  useEffect(() => {
    // Fetch client information from your backend
    axios
      .get("/clients")
      .then((response) => {
        setClientInfo(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

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


  const filteredClients = clientInfo.filter(
    (client) =>
      client.client_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      client.court_house_county.toLowerCase().includes(searchInput.toLowerCase()) ||
      client.court_house_name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
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
        <div className="bg-gradient-to-tr font-oswald from-blue-800 to-green-400 w-full p-4 min-h-screen flex">
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-900 text-white">
            <div className="rounded-t mb-0 px-4">
              <div className="flex flex-wrap">
                <div className="p-4 relative w-full max-w-full flex-grow flex-1">
                  <h3 className="title text-2xl font-bold">All Clients</h3>
                  <div className="mb-4">
                    <input
                    type="text"
                    placeholder="Search by Client Name or County"
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    className="p-2 w-1/6 mt-4 text-sm text-black border border-gray-300 rounded"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto max-h-[800px] overflow-y-auto">
              <div className="">
                <table className="table-auto items-center w-full bg-transparent border-collapse">
                  <thead className="sticky top-0">
                    <tr>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Client Name
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Client ID
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Case Status
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Client Documents
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Court House{" "}
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        County{" "}
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <tr
                        key={client.client_id}
                        className="hover:bg-gray-800 transition duration-150 ease-in-out"
                      >
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="Client Avatar"
                          />
                          <span className="ml-3 font-bold">
                            {client.client_name}
                          </span>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {client.client_id}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i
                            className={`fas fa-circle ${
                              client.case_status === "OPEN"
                                ? "text-green-500"
                                : "text-red-500"
                            } mr-2`}
                          >
                            {client.case_status}
                          </i>
                        </td>
                        <td>
                          <div className="flex">
                            <img
                              src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow "
                            />
                            <img
                              src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                            <img
                              src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg"
                              alt="..."
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            />
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {client.court_house_name.toUpperCase()}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {client.court_house_county.toUpperCase()}
                        </td>
                        <td className="border-t-0 px-2 align-middle items-center border-l-0 border-r-0 text-s whitespace-nowrap">
                          <div>
                            <button
                              onClick={() => downloadDocuments(client)}
                              className="rounded-md bg-blue-500 p-2 text-xs cursor-pointer button active:scale-[.95] active:duration-75 hover:scale-[1.05] ease-in-out transition-all"
                            >
                              Download Documents
                            </button>
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
  );
}
