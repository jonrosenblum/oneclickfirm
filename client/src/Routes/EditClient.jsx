import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditClient() {
    const [clientData, setClientData] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:5001/api/clients')
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
            axios.patch(`http://localhost:5001/api/clients/${selectedClient.client_id}`, {
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
    
    return (
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex p-3 gap-8 rounded-md">
                <div className='flex flex-col border border-2'>
                    <h1 className='title text-2xl font-medium'>All Clients</h1>
                    <p className='text-xs font-extralight'>Please select a client to update information</p>
                    <form className='mt-2'>
                        <input placeholder='Search Client'/>
                    </form>
                    <div className='mt-3'>
                        <ul>
                            {clientData.map((client, index) => (
                                <li 
                                onClick={() => handleClientClick(client)}
                                className="cursor-pointer hover:bg-gray-300 m-2 p-2" key={index}>{client.client_name}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='flex-1 flex-col border border-2'>
                    <h1 className='title text-2xl font-medium'>Client Information</h1>
                    {selectedClient && (
                        <div className='p-6'>
                            <div>
                            <p>{selectedClient.case_status}</p>
                            <button onClick={updateCaseStatus} className='button rounded-md bg-blue-500 p-4'> Change Status</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

{/* <h1>Edit Client</h1>
<form>
    <label htmlFor="clientID">Client ID:</label>
    <input
        type="number"
        id="clientID"
        value={clientID}
        onChange={(e) => setClientID(e.target.value)}
        required
    />
    <br />
    <label htmlFor="newCaseStatus">New Case Status:</label>
    <input
        type="text"
        id="newCaseStatus"
        value={newCaseStatus}
        onChange={(e) => setNewCaseStatus(e.target.value)}
        required
    />
    <br />
    <button type="button" onClick={updateCaseStatus}>
        Update Case Status
    </button>
</form>
<p>{message}</p> */}