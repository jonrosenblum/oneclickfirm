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
        <div className="bg-gradient-to-tr font-oswald from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
            {clientInfo.length === 0 ? (
                // Render this element when clientInfo is empty
                <div className="overflow-y-auto max-h-[800px] text-white px-2 sm:px-0 text-center">
                    <h1 className="title font-extralight text-2xl">NO CLIENTS AVAILABLE</h1>
                    <button onClick={()=>{navigate('/new-client')}} className="px-4 mt-4 text-black font-medium py-2 bg-gray-300 rounded-md hover:bg-blue-300 focus:outline-none 
                    focus:shadow-outline-blue active:bg-blue-500">Add New Client</button>
                </div>
            ) : (
                // Render client information when clientInfo is not empty
                <section className="relative py-16">
                    <div className="w-full mb-12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h3>All Clients</h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="block w-full overflow x-auto">
                        <table className="table-auto items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Client Name</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Client ID</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Case Status</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Client Documents</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">County </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">State</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                                        {clientInfo.map((client) => (
                                            <tr key={client.id}>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                    <img src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg" className="h-12 w-12 bg-white rounded-full border" alt="Client Avatar" />
                                                    <span className="ml-3 font-bold">{client.client_name}</span>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Client ID</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className={`fas fa-circle ${client.case_status === 'OPEN' ? 'text-green-500' : 'text-red-500'} mr-2`}>{client.case_status}</i>
                                                </td>
                                                <td>
                                                    <div className="flex">
                                                            <img src="" alt="Document" className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                        
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{client.court_house_county}</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{client.court_house_state}</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                    <span>
                                                        <i className="fas fa-ellipsis-v text-blueGray-300 mr-2">Icon</i>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                        </table>
                    </div>
                        </div>
                    </div>
                   
                </section>
            )}
        </div>
    );
}

{/* <div className="text-white mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
</div> */}