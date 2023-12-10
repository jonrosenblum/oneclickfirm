
export const CustomModal = ({ children }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute w-full h-full backdrop-blur-md" />
        <div className="modal-container bg-gradient-to-tr from-blue-800 to-green-400 w-11/12 py-4 no-scrollbar max-h-[90%] overflow-y-auto md:max-w-[90%] mx-auto rounded-xl shadow-lg z-50 p-4">
{children}
        </div>
      </div>
    )
}