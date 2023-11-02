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
            <div className="font-oswald flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                <div className="flex-1 px-2 sm:px-0">
                    <button onClick={() => {
                        navigate('/home');
                    }}>Go Back</button>

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
        </div>
    );
}