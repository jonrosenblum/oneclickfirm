export default function Calendar() {
    return(
        <div className="min-h-screen">
            <div className="p-10">
                <h1 className="text-2xl font-bold mb-4">Calendar</h1>
                <hr className="border-t border-gray-300" />
            </div>
        <div className="flex justify-between bg-gray-200 rounded-md m-4 p-10">
            <div className="w-56 bg-white flex flex-col">
                <input
                type="text"
                className="border border-2 border-yellow-400 p-2 text-xs m-2 mb-4"
                placeholder="Search calendar"/>
                <div className="m-2">
                    <h1 className="text-sm font-bold">Actions</h1>
                    <hr className="border-t border-gray-300" />
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Add Calendar</h1>
                        <h1 className="text-sm font-bold">+</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Add Appointment</h1>
                        <h1 className="text-sm font-bold">+</h1>
                    </div>
                </div>
                <div className="m-2">
                    <h1 className="text-sm font-bold">My Calendars</h1>
                    <hr className="border-t border-gray-300" />
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Calendar 1</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Calendar 2</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Calendar 3</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Calendar 4</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                </div>
                <div className="m-2">
                    <h1 className="text-sm font-bold">Upcoming Appointments</h1>
                    <hr className="border-t border-gray-300" />
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Today</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Tomorrow</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">This Week</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Next Week</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">This Month</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                    <div className="flex justify-between items-center m-2">
                        <h1 className="text-sm font-bold">Next Month</h1>
                        <h1 className="text-sm font-bold">View</h1>
                    </div>
                </div>

            </div>
            <div className="bg-white w-full">Calendar will render here</div>
        </div>
        </div>
    );
}