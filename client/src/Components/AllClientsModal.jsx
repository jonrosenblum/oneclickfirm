export default function AllClientsModal() {
    return(
        <>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="modal-overlay absolute w-full h-full backdrop-blur-md" />
              <div className="modal-container bg-white w-3/4 md:w-3/5 mx-auto rounded shadow-lg z-50 p-4">
                <div className="modal-content py-4 text-left px-6 mb-5">
                  <section className="py-8">
                    <div className="container px-4 mx-auto">
                      <div className="pt-4 bg-white shadow rounded">
                        <div className="flex px-6 pb-4 border-b">
                          <h3 className="text-xl font-bold">All Clients</h3>
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <table className="table-auto w-full">
                            <thead>
                              <tr className="text-xs text-gray-500 text-left">
                                <th className="pb-3 font-medium">Client Name</th>
                                <th className="pb-3 font-medium">Violation Number</th>
                                <th className="pb-3 font-medium">Date of Violation</th>
                                <th className="pb-3 font-medium">Email Address</th>
                                <th className="pb-3 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="text-xs bg-gray-50">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr className="text-xs bg-gray-50">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr className="text-xs bg-gray-50">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr className="text-xs bg-gray-50">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr className="text-xs bg-gray-50 border-b border-gray-800 rounded-lg">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr className="text-xs bg-gray-50 border-b border-gray-800 rounded-lg">
                                <td className="py-5 px-6 font-medium">Jonathan Rosenblum</td>
                                <td className="font-medium">E12849348213</td>
                                <td className="py-5 px-6 font-medium">October 23rd, 2023</td>
                                <td className="font-medium">jon.m.rosenblum@gmail.com</td>
                                <td className="font-medium">Edit Client</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  
                </div>
                <div className="flex justify-between">
                  <button className="modal-action-button px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
                    Add Client
                  </button>
                  <button
                    
                    className="modal-action-button px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}