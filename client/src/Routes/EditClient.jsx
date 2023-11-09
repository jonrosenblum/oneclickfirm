import { useEffect, useState } from 'react';
import axios from './../axios'

export default function EditClient() {
    const [clientData, setClientData] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [newClientName, setNewClientName] = useState('');
    const [newClientEmail, setNewClientEmail] = useState('');
    const [newClientNotes, setNewClientNotes] = useState(selectedClient?.client_notes);


    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
      }

    const fetchData = async () => {
        try {
          const response = await axios.get('/clients');
          setClientData(response.data);
        } catch (error) {
          console.error('Error fetching client data', error);
        }
      };
      
      useEffect(() => {
        // Fetch client data when the component mounts
        fetchData();
      }, [selectedClient]);

    
    const handleClientClick = (client) => {
        setSelectedClient(client);
    };

    const updateCaseStatus = () => {
        if (selectedClient) {
            let newStatus;
            if (selectedClient.case_status === 'OPEN') {
                newStatus = 'CLOSED';
            } else {
                newStatus = 'OPEN';
            }
            axios.patch(`/clients/${selectedClient.client_id}`, {
                case_status: newStatus
            })
            .then(() => {
                setSelectedClient({ ...selectedClient, case_status: newStatus }); 
            })
            .catch(error => {
                console.error('Error updating case status', error);
            });
        }
    };

    const updateClientName = () => {
        if (selectedClient && newClientName) {
            axios.patch(`/clients/${selectedClient.client_id}`, {
                client_name: newClientName
            })
            .then(() => {
                console.log('Updated client name', newClientName);
                setSelectedClient({ ...selectedClient, client_name: newClientName });
                setNewClientName('');
            })
            .catch(error => {
                console.error('Error updating client name', error);
            });
        }
    };

    const addClientNote = async () => {
        if (selectedClient && newClientNotes) {
          try {
            // Send a POST request to add client notes
            await axios.post('/client-notes', {
              client_id: selectedClient.client_id,
              client_notes: newClientNotes,
            });
      
            console.log('Client notes added successfully');
            
            // Clear the input field
            setNewClientNotes('');
      
            // Fetch client data after note addition
            fetchData();
            alert('Client note successfully');
          } catch (error) {
            console.error('Error adding client notes', error);
          }
        }
      };

    const updateClientEmail = () => {
        if (selectedClient && newClientEmail) {
            // Send a PATCH request to update the client name
            axios.patch(`/clients/${selectedClient.client_id}`, {
                client_email: newClientEmail
            })
            .then(() => {
                console.log('Updated client email', newClientEmail);
                setSelectedClient({ ...selectedClient, client_email: newClientEmail });
                // Clear the input field
                setNewClientEmail('');
            })
            .catch(error => {
                console.error('Error updating client email', error);
            });
        }
    };



    const downloadDocuments = () => {
      if (selectedClient) {
        const clientId = selectedClient.client_id;
    
        // Construct the URL for the download route
        const downloadURL = `/download-documents/${clientId}`;
    
        // Send a GET request to the backend route to download the documents
        axios.get(downloadURL, { responseType: 'blob' })
          .then(response => {
            // Create a blob from the response data
            const blob = new Blob([response.data], { type: 'application/zip' });
    
            // Create a URL for the blob
            const url = window.URL.createObjectURL(blob);
    
            // Create an invisible anchor element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'client_documents.zip';
            link.click();
    
            // Release the URL object
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Error downloading documents', error);
          });
      }
    };


    const handleClientDelete = () => {
        if (selectedClient) {
          const clientId = selectedClient.client_id;
      
          // Send a DELETE request to the backend route for client deletion
          axios.delete(`/clients/${clientId}`)
            .then(() => {
              // Client deleted successfully, you can perform any additional actions here
              console.log('Client deleted successfully');
              setSelectedClient(null);

              
            })
            .catch(error => {
              console.error('Error deleting client', error);
              // Handle the error, display a message, or take appropriate action
            });
        }
      };


    
    return (
        <div className="bg-gradient-to-tr p-2 from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center h-full">
            <div className="bg-gray-100 h-100 w-full flex p-3 gap-8 rounded-md flex flex-row h-full">
                <div className='client-sidebar flex flex-col border max-h-[800px] overflow-y-auto border-2 p-10'>
                    <div className=''>
                    <h1 className='bg-gray-400 title text-2xl font-medium'>All Clients</h1>
                    <p className='text-xs font-extralight'>Please select a client to update information</p>
                    <form className='mt-2'>
                        <input placeholder='Search Client'/>
                    </form>
                    </div>
                    
                    <div className='mt-3'>
                        <ul>
                            {clientData.map((client, index) => (
                                <li 
                                onClick={() => handleClientClick(client)}
                                className="w-full cursor-pointer bg-blue-400 hover:bg-gray-300 m-2 p-2 rounded-md" key={index}>{client.client_name}</li>))}
                        </ul>
                    </div>
                </div>
                
                
                <div className='client-content-area flex-1  border border-2 flex flex-row justify-center'>
                    {selectedClient && (
                        <div className='p-16' style={{width:'clamp(700px,70%,750px)'}}>
                            <div className='flex'>
                                <div className='flex flex-col'>
                                <div>
                                    <div className='flex gap-4 items-center'>
                                        <p className={`bg-green-500 p-2 ${selectedClient.case_status === 'OPEN' ? 'bg-green-500' : 'bg-red-500'}`}>{selectedClient.case_status}</p>
                                        <button onClick={updateCaseStatus} className='button rounded-md bg-gray-400 px-3 m-4 py-2 text-sm button active:scale-[.95] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                                        {selectedClient.case_status === 'OPEN' ? 'CLOSE' : 'OPEN'}
                                        </button>
                                    </div>
                                </div>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='title text-2xl font-medium p-2'>Client ID: {selectedClient.client_id}</h1>
                                        <div className=''>
                                            <button onClick={handleClientDelete} className='button rounded-md bg-red-500 px-3 m-4 py-2 text-sm'>Delete client</button>
                                       </div>
                                       <div>
                                            <button onClick={downloadDocuments} className='button rounded-md m-2 px-3 py-2 text-sm bg-blue-500 px-3'>Generate Documents</button>
                                        </div>
                                    </div>
                                   
                                    <p className='title text-2xl font-medium p-2'> Violations </p>
                                    <p className='title text-lg font-light p-4'>{selectedClient.complaint_number}</p>
                                    <p className='title text-lg p-2 mb-2'>{formatDate(selectedClient.incident_date)}</p>
                                </div>
                            </div>

                           
                           

                            <div className='flex gap-8 items-center'>
                                <h1 className='title bg-black text-sm text-white rounded-md p-2'>{selectedClient.client_name}</h1>
                                <input 
                                className='border border-2 border-gray-500 text-sm rounded-md p-2'
                                value={newClientName}
                                onChange={(e)=> setNewClientName(e.target.value)}
                                placeholder="Enter new client name"/>
                                <button onClick={updateClientName} className='button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm'>Update</button>
                            </div>

                            <div className='flex gap-8 items-center'>
                                <h1 className='title bg-black text-sm text-white rounded-md p-2'>{selectedClient.client_email}</h1>
                                <input 
                                className='border border-2 border-gray-500 text-sm rounded-md p-2'
                                value={newClientEmail}
                                onChange={(e)=> setNewClientEmail(e.target.value)}
                                placeholder="Enter new client email"/>
                                <button onClick={updateClientEmail} className='button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm'>Update</button>
                            </div>

                            <div className='flex flex-col bg-gray-400 rounded-md'>
                                <h1 className='title text-lg p-4'>Client Notes</h1>
                                <p className='p-4'>{selectedClient.client_notes}</p>
                                <textarea
                                value={newClientNotes}
                                onChange={(e)=> {setNewClientNotes(e.target.value)
                                }}
                                type='text'
                                rows='5'
                                className='bg-white text-black text-sm rounded-md p-2 m-4'
                                placeholder="Enter new client notes"/>
                                <div className='text-center'> 
                                    <button onClick={addClientNote} className='button rounded-md bg-blue-500 px-3 m-4 py-2 w-1/2 text-sm'>+ New Note</button>
                                </div> 
                            </div>

                        </div>)}       
                </div>
            </div>
        </div>
    );
}
