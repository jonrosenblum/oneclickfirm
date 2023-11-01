export default function ClientAddConfirmInformation() {
    return(
        <div className="bg-white rounded-md shadow-md flex justify-center items-center">
            <div className="p-4">
            <div className="text-center text-lg font-medium-text-gray-900">
                <h1 className="text-decoration-line: underline">Additional Client Information</h1>
            </div>
            <div className="mt-5">
                <div className="flex">
                    <form>
                        <div>

                            <div className="mb-3 font-medium">
                            <h1>Client Address Info</h1>
                            </div>
                            
                            <div className="text-sm mb-2">
                                <label>Address Line 1</label>
                                <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                                type="email" 
                                placeholder="123 Fire Court"/>
                            </div>
                            <div className="text-sm mb-2">
                                <label>Address Line 2</label>
                                <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                                type="email" 
                                placeholder="Apt 2"/>
                            </div>
                            <div className="flex justify-between gap-4">
                            <div className="text-sm mb-2">
                                <label>City</label>
                                <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                                type="text" 
                                placeholder="Garden City"/>
                            </div>
                            <div className="text-sm mb-2">
                                <label>State</label>
                                <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                                type="text" 
                                placeholder="NY"/>
                            </div>
                        </div>
                            
                        </div>
                        
                        <div className="mt-5">

                            <div className="mb-3 font-medium">
                                <h1>Client Address Info</h1>
                            </div>
                            
                        <div className="text-sm mb-2">
                            <label>Client Email:</label>
                            <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                            type="email" 
                            placeholder="johnsmith@gmail.com"/>
                        </div>
                        <div className="text-sm mb-2">
                            <label>Client Phone Number:</label>
                            <input className="w-full mt-2 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline:none focus:border-blue-500" 
                            type="phone" 
                            placeholder="(516)-994-7621"/>
                        </div>
                        </div>
                        <div className="text-center mt-4 flex justify-between">
                            <button className="button bg-red-400 px-4 py-2 text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                            Clear 
                        </button>
                        <button className="button bg-green-400 px-4 py-2 text-black font-bold rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-500">
                            Confirm 
                        </button>
                        </div>
                    </form>
                </div>
            <div>
                <button></button>
                <button></button>
            </div>

            </div>
            
           
        </div>
        </div>
    )
}