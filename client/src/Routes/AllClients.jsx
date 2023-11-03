import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllClients() {
    const [clientInfo, setClientInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch client information from your backend
        axios.get('http://localhost:5001/get-clients')
            .then((response) => setClientInfo(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="bg-gradient-to-tr from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
            {clientInfo.length === 0 ? (
                // Render this element when clientInfo is empty
                <div className="overflow-y-auto max-h-[800px] text-white px-2 sm:px-0 text-center">
                    <h1 className="title text-2xl">NO CLIENTS AVAILABLE</h1>
                    <button onClick={()=>{navigate('/new-client')}} className="px-4 mt-4 text-black font-medium py-2 bg-gray-300 rounded-md hover:bg-blue-300 focus:outline-none 
                    focus:shadow-outline-blue active:bg-blue-500">Add New Client</button>
                </div>
            ) : (
                // Render client information when clientInfo is not empty
                <div className="font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                    <div className="flex-1 overflow-y-auto max-h-[800px] px-2 sm:px-0">
                        <h1>All Clients</h1>
                        <div className="text-white mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {clientInfo.map((client) => (
                                <div
                                    key={client.client_name}
                                    className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col text-center space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <h2 className={client.case_status === 'OPEN' ? 'text-green-500' : 'text-red-500'}>{client.case_status}</h2>
                                    <h1>{client.client_name}</h1>
                                    <p>{client.incident_date}</p>
                                    <p>County: {client.court_house_county}</p>
                                    <p>State: {client.court_house_state}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
