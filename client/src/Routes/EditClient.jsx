import { useEffect, useState } from 'react';
import axios from './../axios'

export default function EditClient() {
    const [clientData, setClientData] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [newClientName, setNewClientName] = useState('');



    useEffect(() => {
        axios.get('/clients')
        .then(response => {
            setClientData(response.data);
            })
        .catch(error => {
            console.error('Error fetching client data', error);
        });
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
    
            // Send a PATCH request to update the case status
            axios.patch(`/clients/${selectedClient.client_id}`, {
                case_status: newStatus
            })
            .then(() => {
                setSelectedClient({ ...selectedClient, case_status: newStatus });
                // Do nothing here because the useEffect will handle the data reload
            })
            .catch(error => {
                console.error('Error updating case status', error);
            });
        }
    };

    const updateClientName = () => {
        if (selectedClient && newClientName) {
            // Send a PATCH request to update the client name
            axios.patch(`/clients/${selectedClient.client_id}`, {
                client_name: newClientName
            })
            .then(() => {
                console.log('Updated client name', newClientName);
                setSelectedClient({ ...selectedClient, client_name: newClientName });
                // Clear the input field
                setNewClientName('');
            })
            .catch(error => {
                console.error('Error updating client name', error);
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
        <div className="bg-gradient-to-tr p-2 from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 h-100 w-full flex p-3 gap-8 rounded-md">
                <div className='flex flex-col border border-2 p-10'>
                    <h1 className='bg-gray-400 title text-2xl font-medium'>All Clients</h1>
                    <p className='text-xs font-extralight'>Please select a client to update information</p>
                    <form className='mt-2'>
                        <input placeholder='Search Client'/>
                    </form>
                    <div className='mt-3'>
                        <ul>
                            {clientData.map((client, index) => (
                                <li 
                                onClick={() => handleClientClick(client)}
                                className="w-full cursor-pointer bg-blue-400 hover:bg-gray-300 m-2 p-2 rounded-md" key={index}>{client.client_name}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='flex-1 flex-col border border-2'>
                    {selectedClient && (
                        <div className='m-2'>
                            <div className='flex justify-between items-center'>
                            <h1 className='title text-2xl font-medium m-2'>{selectedClient.client_name}</h1>
                            <button onClick={handleClientDelete} className='button rounded-md bg-red-500 px-3 m-4 py-2 text-sm'>Delete Client</button>

                            <input 
                            value={newClientName}
                            onChange={(e)=> setNewClientName(e.target.value)}
                            placeholder={selectedClient.client_name}/>
                            <button onClick={updateClientName} className='button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm'>Update Client Name</button>
                            </div>
                            <div className='flex justify-between items-center'>
                            <p> Case Status: {selectedClient.case_status}</p>
                            <button onClick={updateCaseStatus} className='button rounded-md bg-blue-500 px-3 m-4 py-2 text-sm'>Change Status</button>
                            </div>
                            <div>
                                <p>Download Documents:</p>
                                <button onClick={downloadDocuments} className='button rounded-md bg-blue-500 px-3'>Click Here</button>
                      
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}
