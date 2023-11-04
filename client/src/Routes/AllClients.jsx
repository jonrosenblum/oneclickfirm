import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5';

export default function AllClients() {
    const [clientInfo, setClientInfo] = useState([]);
    const [dropdownStates, setDropdownStates] = useState({});
    const navigate = useNavigate();

    const toggleDropdown = (clientId) => {
        setDropdownStates({
            ...dropdownStates,
            [clientId]: !dropdownStates[clientId],
        });
    };

    const editClient = (clientId) => {
        // Implement the editClient functionality here for the specific clientId
    };

    const generateDocuments = (clientId) => {
        // Implement the generateDocuments functionality here for the specific clientId
    };

    const closeCase = (clientId) => {
        // Implement the closeCase functionality here for the specific clientId
    };

    useEffect(() => {
        // Fetch client information from your backend
        axios.get('http://localhost:5001/get-clients')
            .then((response) => {
                setClientInfo(response.data);
                // Initialize the dropdown states for each row to be initially closed
                const initialDropdownStates = {};
                response.data.forEach((client) => {
                    initialDropdownStates[client.id] = false;
                });
                setDropdownStates(initialDropdownStates);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {clientInfo.length === 0 ? (
                <div className="bg-gradient-to-tr font-oswald from-blue-800 to-green-400 w-full min-h-screen flex items-center justify-center">
                    <div className="overflow-y-auto max-h-[800px] text-white px-2 sm:px-0 text-center">
                        <h1 className="title font-extralight text-2xl">NO CLIENTS AVAILABLE</h1>
                        <button onClick={() => { navigate('/new-client') }} className="px-4 mt-4 text-black font-medium py-2 bg-gray-300 rounded-md hover:bg-blue-300 focus:outline-none
                            focus:shadow-outline-blue active:bg-blue-500">Add New Client</button>
                    </div>
                </div>

            ) : (
                <div className="bg-gradient-to-tr font-oswald from-blue-800 to-green-400 w-full p-4 min-h-screen flex">
                    <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-900 text-white">
                        <div className="rounded-t mb-0 px-4">
                            <div className="flex flex-wrap">
                                <div className="p-4 relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="title text-2xl font-bold">All Clients</h3>
                                </div>
                            </div>

                        </div>
                        <div className="block w-full overflow-x-auto">
                            <div>
                                <table className="table-auto items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">Client Name</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">Client ID</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">Case Status</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">Client Documents</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">County </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">State</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientInfo.map((client) => (
                                            <tr key={client.id} className="hover:bg-gray-800 transition duration-150 ease-in-out">
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                                                    <img src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg" className="h-12 w-12 bg-white rounded-full border" alt="Client Avatar" />
                                                    <span className="ml-3 font-bold">{client.client_name}</span>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">Client ID</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className={`fas fa-circle ${client.case_status === 'OPEN' ? 'text-green-500' : 'text-red-500'} mr-2`}>{client.case_status}</i>
                                                </td>
                                                <td>
                                                    <div className="flex">
                                                        <img src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow " />
                                                        <img src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                        <img src="https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{client.court_house_county.toUpperCase()}</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{client.court_house_state.toUpperCase()}</td>
                                                <td className="border-t-0 px-9 align-middle items-center border-l-0 border-r-0 text-s whitespace-nowrap">
                                                    <div className="relative group">
                                                        <span className="text-red-400 cursor-pointer" onClick={() => toggleDropdown(client.id)}>
                                                            <IoEllipsisVerticalCircleOutline />
                                                        </span>
                                                        <div className={`absolute text-center text-blue-500 mt-2 bg-gray-900 rounded-md py-1 text-xs ${dropdownStates[client.id] ? 'block' : 'hidden'}`}>
                                                            <ul>
                                                                <li className="hover:underline cursor-pointer" onClick={() => editClient(client.id)}>Edit Client</li>
                                                                <li className="hover:underline cursor-pointer" onClick={() => generateDocuments(client.id)}>Generate Documents</li>
                                                                <li className="hover:underline cursor-pointer" onClick={() => closeCase(client.id)}>Close Case</li>
                                                            </ul>
                                                        </div>
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
        </div>
    );
}
