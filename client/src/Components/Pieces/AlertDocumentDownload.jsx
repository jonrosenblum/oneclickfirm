import { useEffect, useState } from "react";

export default function AlertDocumentDownload({ onClose }) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setShowAlert(false);
      onClose(false);
    }, 4000);

    return () => clearTimeout(alertTimeout);
  }, []);

  return showAlert ? (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 border border-green-500 text-green-700 p-4 rounded-md shadow-lg"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">FILES DOWNLOADED SUCCESSFULLY</p>
          <p className="text-sm">
            Please check your downloads folder to open the zip file
          </p>
        </div>
      </div>
    </div>
  ) : null;
}
