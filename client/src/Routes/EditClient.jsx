import { useEffect, useState } from "react";
import axios from "./../axios";
import { useNavigate, useParams } from "react-router-dom";


export default function EditClient() {
  const [clientsList, setClientsList] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [newClientName, setNewClientName] = useState(null);
  const [newClientEmail, setNewClientEmail] = useState(null);
  const [newClientPhone, setNewClientPhone] = useState(null);
  const [newClientNotes, setNewClientNotes] = useState(null);

  useEffect(() => {
    // Update newClientNotes when selectedClient changes
    setNewClientNotes(selectedClient?.client_notes || "");
  }, [selectedClient]);

  const params = useParams();
  const navigate = useNavigate();

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  const fetchClientsList = () => {
    return axios
      .get("/clients")
      .then((response) => {
        setClientsList(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching client data", error);
      });
  };

  useEffect(() => {
    fetchClientsList();
  }, []);

  if (params.id && clientsList && !selectedClient) {
    const foundClient = clientsList.find((c) => c.client_id + "" === params.id);
    if (foundClient) {
      setSelectedClient(foundClient);
    }
  }


  const refreshSelectedClientInfo = (selectedClient, clientsList) => {
    const foundClient = clientsList.find(
      (c) => c.client_id === selectedClient.client_id
    );

    setSelectedClient(foundClient);
  };

  const updateCaseStatus = () => {
    if (selectedClient) {
      let newStatus;
      if (selectedClient.case_status === "OPEN") {
        newStatus = "CLOSED";
      } else {
        newStatus = "OPEN";
      }
      axios
        .patch(`/clients/${selectedClient.client_id}`, {
          case_status: newStatus,
        })
        .then(() => {
          setSelectedClient({ ...selectedClient, case_status: newStatus });
        })
        .catch((error) => {
          console.error("Error updating case status", error);
        });
    }
  };

  const updateClientName = () => {
    if (selectedClient && newClientName) {
      axios
        .patch(`/clients/${selectedClient.client_id}`, {
          client_name: newClientName,
        })
        .then(() => {
          setNewClientName("");

          return fetchClientsList().then((clientsList) =>
            refreshSelectedClientInfo(selectedClient, clientsList)
          );
        })
        .catch((error) => {
          console.error("Error updating client name", error);
        });
    }
  };

  const addOrUpdateClientNote = async () => {
    if (selectedClient && newClientNotes) {
      try {
        // Send a POST request to add or update client notes
        await axios
          .post("/client-notes", {
            client_id: selectedClient.client_id,
            client_notes: newClientNotes,
          })
          .then(async () => {
            // Clear the input field
            setNewClientNotes("");
            console.log("Client notes added/updated successfully");

            refreshSelectedClientInfo(selectedClient, await fetchClientsList());
          });
      } catch (error) {
        console.error("Error adding/updating client notes", error);
      }
    }
  };

  const updateClientEmail = () => {
    if (selectedClient && newClientEmail) {
      // Send a PATCH request to update the client name
      axios
        .patch(`/clients/${selectedClient.client_id}`, {
          client_email: newClientEmail,
        })
        .then(() => {
          console.log("Updated client email", newClientEmail);
          setSelectedClient({
            ...selectedClient,
            client_email: newClientEmail,
          });
          // Clear the input field
          setNewClientEmail("");
        })
        .catch((error) => {
          console.error("Error updating client email", error);
        });
    }
  };

  const updateClientPhone = () => {
    if (selectedClient && newClientPhone) {
      // Send a PATCH request to update the client name
      axios
        .patch(`/clients/${selectedClient.client_id}`, {
          client_phone: newClientPhone,
        })
        .then(() => {
          console.log("Updated client phone", newClientPhone);
          setSelectedClient({
            ...selectedClient,
            client_phone: newClientPhone,
          });
          // Clear the input field
          setNewClientPhone("");
        })
        .catch((error) => {
          console.error("Error updating client phone", error);
        });
    }
  };

  const downloadDocuments = () => {
    if (selectedClient) {
      const clientId = selectedClient.client_id;

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

          // Release the URL object
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading documents", error);
        });
    }
  };

  const handleClientDelete = () => {
    console.log("TRYING TO DELETE");
    if (selectedClient) {
      const clientId = selectedClient.client_id;

      // Send a DELETE request to the backend route for client deletion
      axios
        .delete(`/clients/${clientId}`)
        .then(() => {
          // Client deleted successfully, you can perform any additional actions here
          console.log("Client deleted successfully");
          setSelectedClient(null);
          navigate("/clients");
          
        })
        .catch((error) => {
          console.error("Error deleting client", error);
          // Handle the error, display a message, or take appropriate action
        });
    }
  };


  return (
    <div className="bg-white w-full p-4 min-h-screen flex">
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200  text-gray-900">
          <div className="bg-[#E5E7EB] h-100 w-full flex p-3 gap-8 rounded-md flex-col h-full">
            {selectedClient && (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 flex-col md:flex-row">
                    <div className="text-xl md:text-3xl font-semibold">
                      Client ID: {selectedClient.client_id}
                    </div>
                    <p
                      className={`bg-green-500 p-1 px-3 text-white rounded-xl ${selectedClient.case_status === "OPEN"
                          ? "bg-green-500"
                          : "bg-red-500"
                        }`}
                    >
                      {selectedClient.case_status}
                    </p>
                  </div>
                  <div className="flex items-center flex-col sm:flex-row gap-5">
                    <button
                      onClick={updateCaseStatus}
                      className={`$active:scale-[.99]  w-full px-3 py-2 bg-gray-400 text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                    >
                      Mark{" "}
                      {selectedClient.case_status === "OPEN" ? "CLOSE" : "OPEN"}
                    </button>
                    <button
                      onClick={handleClientDelete}
                      className={`$active:scale-[.99]  w-full px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                    >
                      Delete Client
                    </button>
                    <button
                      onClick={downloadDocuments}
                      className={`$active:scale-[.99]  w-full px-3 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                    >
                      Generate Documents
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mt-10 gap-10">
                  <div className="flex gap-10 flex-col w-full">
                    <div className="w-full p-5 border-2 shadow rounded-lg bg-gray-100">
                      <div className="text-2xl font-bold">Violations</div>
                      <div className="mt-1 text-sm text-gray-600 sm:flex sm:flex-col sm:items-start">
                        <div className="mt-1 font-medium sm:mt-0">
                          {selectedClient.complaint_number}
                        </div>
                        <div className="mt-1 font-medium sm:mt-0">
                          {" "}
                          {formatDate(selectedClient.incident_date)}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="w-full p-5 border-2 shadow rounded-lg bg-gray-100">
                      <div className="text-2xl font-bold">Client Information</div>
                      <div className="mt-10">
                        <div className="flex flex-col sm:flex-row items-center gap-3 my-3">
                          <input
                            value={newClientName ?? selectedClient.client_name}
                            onChange={(e) => setNewClientName(e.target.value)}
                            placeholder="Enter new client name"
                            className="rounded-lg outline-none font-medium w-full border p-2"
                          />
                          <button
                            onClick={updateClientName}
                            className={`$active:scale-[.99]  w-full px-3 py-2 bg-[#181A1C] text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                          >
                            update
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 my-3">
                          <input
                            value={newClientEmail ?? selectedClient.client_email}
                            onChange={(e) => setNewClientEmail(e.target.value)}
                            placeholder="Enter new client email"
                            className="rounded-lg outline-none font-medium w-full border p-2"
                          />
                          <button
                            onClick={updateClientEmail}
                            className={`$active:scale-[.99]  w-full px-3 py-2 bg-[#181A1C] text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                          >
                            update
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 my-3">
                          <input
                            value={newClientPhone??selectedClient.client_phone}
                            onChange={(e) => {
                              const onlyNums = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              if (onlyNums.length > 10) {
                                alert("Phone number must be exactly 10 digits.");
                                return;
                              }
                              setNewClientPhone(onlyNums);
                            }}
                            placeholder="Enter new client phone"
                            className="rounded-lg outline-none font-medium w-full border p-2"
                          />
                          <button
                            onClick={updateClientPhone}
                            className={`$active:scale-[.99]  w-full px-3 py-2 bg-[#181A1C] text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                          >
                            update
                          </button>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="w-full md:w-[40%] border-2 shadow rounded-lg bg-gray-100">
                    <div className="w-full p-5">
                      <div className="text-2xl font-bold">Client Notes</div>
                      <div className="font-medium mt-9">
                        {selectedClient.client_notes}
                      </div>

                      <textarea
                        value={newClientNotes}
                        onChange={(e) => {
                          setNewClientNotes(e.target.value);
                        }}
                        type="text"
                        rows="5"
                        className="bg-white w-full p-2 mt-5 text-black text-sm rounded-md"
                      />
                      <button
                        onClick={addOrUpdateClientNote}
                        className={`$active:scale-[.99] mt-5  w-full px-3 py-2 bg-[#181A1C] text-white rounded-lg hover:bg-opacity-90 text-sm md:text-base font-medium whitespace-nowrap`}
                      >
                        + Now Note
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* <div className="client-content-area flex-1  border border-2 flex flex-row justify-center">
            {selectedClient && (
              <div className="p-16" style={{ width: "clamp(700px,70%,750px)" }}>
                <div className="flex">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex gap-4 items-center">
                        <p
                          className={`bg-green-500 p-2 ${
                            selectedClient.case_status === "OPEN"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        >
                          {selectedClient.case_status}
                        </p>
                        <button
                          onClick={updateCaseStatus}
                          className="button rounded-md bg-gray-400 px-3 m-4 py-2 text-sm button active:scale-[.95] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                        >
                          {selectedClient.case_status === "OPEN"
                            ? "CLOSE"
                            : "OPEN"}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className="title text-2xl font-medium p-2">
                        Client ID: {selectedClient.client_id}
                      </h1>
                      <div className="">
                        <button
                          onClick={handleClientDelete}
                          className="button rounded-md bg-red-500 px-3 m-4 py-2 text-sm"
                        >
                          Delete client
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={downloadDocuments}
                          className="button rounded-md m-2 px-3 py-2 text-sm bg-blue-500 px-3"
                        >
                          Generate Documents
                        </button>
                      </div>
                    </div>

                    <p className="title text-2xl font-medium p-2">
                      {" "}
                      Violations{" "}
                    </p>
                    <p className="title text-lg font-light p-4">
                      {selectedClient.complaint_number}
                    </p>
                    <p className="title text-lg p-2 mb-2">
                      {formatDate(selectedClient.incident_date)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-center">
                  <h1 className="title bg-black text-sm text-white rounded-md p-2">
                    {selectedClient.client_name}
                  </h1>
                  <input
                    className="border-2 border-gray-500 text-sm rounded-md p-2"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    placeholder="Enter new client name"
                  />
                  <button
                    onClick={updateClientName}
                    className="button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm"
                  >
                    Update
                  </button>
                </div>

                <div className="flex gap-8 items-center">
                  <h1 className="title bg-black text-sm text-white rounded-md p-2">
                    {selectedClient.client_email}
                  </h1>
                  <input
                    className="border-2 border-gray-500 text-sm rounded-md p-2"
                    value={newClientEmail}
                    onChange={(e) => setNewClientEmail(e.target.value)}
                    placeholder="Enter new client email"
                  />
                  <button
                    onClick={updateClientEmail}
                    className="button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm"
                  >
                    Update
                  </button>
                </div>

                <div className="flex gap-8 items-center">
                  <h1 className="title bg-black text-sm text-white rounded-md p-2">
                    {formatPhoneNumber(selectedClient.client_phone)}
                  </h1>
                  <input
                    className="border-2 border-gray-500 text-sm rounded-md p-2"
                    value={newClientPhone}
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                      if (onlyNums.length > 10) {
                        alert("Phone number must be exactly 10 digits.");
                        return;
                      }
                      setNewClientPhone(onlyNums);
                    }}
                    placeholder="Enter new client phone"
                  />
                  <button
                    onClick={updateClientPhone}
                    className="button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm"
                  >
                    Update
                  </button>
                </div>

                <div className="flex flex-col bg-gray-400 rounded-md">
                  <h1 className="title text-lg p-4">Client Notes</h1>
                  <p className="p-4">{selectedClient.client_notes}</p>
                  <textarea
                    value={newClientNotes}
                    onChange={(e) => {
                      setNewClientNotes(e.target.value);
                    }}
                    type="text"
                    rows="5"
                    className="bg-white text-black text-sm rounded-md p-2 m-4"
                  />
                  <div className="text-center">
                    <button
                      onClick={addOrUpdateClientNote}
                      className="button rounded-md bg-blue-500 px-3 m-4 py-2 w-1/2 text-sm"
                    >
                      + New Note
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div> */}
          </div>
      </div>
    </div>
  );
}
