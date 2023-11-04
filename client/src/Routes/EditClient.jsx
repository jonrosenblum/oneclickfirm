import { useState } from 'react';
import axios from 'axios';

export default function EditClient() {
    const [clientID, setClientID] = useState('');
    const [newCaseStatus, setNewCaseStatus] = useState('');
    const [message, setMessage] = useState('');

    const updateCaseStatus = () => {
        // Send a PATCH request to update the case status in the backend
        const data = {
            case_status: newCaseStatus,
            clientID: clientID,
        };
        console.log(data);

        axios
            .patch(`http://localhost:5001/update-case-status/${clientID}`, data)
            .then((response) => {
                console.log(response);
                setMessage('Case status updated successfully.');
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('An error occurred while updating the case status.');
            });
    };

    return (
        <div>
            <h1>Edit Client</h1>
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
            <p>{message}</p>
        </div>
    );
}
