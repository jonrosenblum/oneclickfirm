import { useEffect, useState } from "react";
import axios from "./../axios";
import { Link, useParams } from "react-router-dom";

export default function EditClient() {
  const [clientsList, setClientsList] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [newClientName, setNewClientName] = useState("");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("");
  const [newClientNotes, setNewClientNotes] = useState("");

  useEffect(() => {
    // Update newClientNotes when selectedClient changes
    setNewClientNotes(selectedClient?.client_notes || "");
  }, [selectedClient]);

  const params = useParams();

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

  const fetchSelectedClientInfo = async () => {
    try {
      const response = await axios.get("/clients");
      setClientsList(response.data);
    } catch (error) {
      console.error("Error fetching client data", error);
    }
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    fetchSelectedClientInfo();
  };

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
        })
        .catch((error) => {
          console.error("Error deleting client", error);
          // Handle the error, display a message, or take appropriate action
        });
    }
  };

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  return (
    <div className="bg-gradient-to-tr p-2 from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center h-full">
      <div className="bg-gray-100 h-100 w-full flex p-3 gap-8 rounded-md flex flex-row h-full">
        <div className="client-content-area flex-1  border border-2 flex flex-row justify-center">
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

                  <p className="title text-2xl font-medium p-2"> Violations </p>
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
        </div>
      </div>
    </div>
  );
}
