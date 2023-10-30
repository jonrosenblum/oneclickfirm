import PlusSignSVG from "../assets/plus-sign-svgrepo-com.svg"
import LogoutSVG from "../assets/logout-svgrepo-com.svg"
import SettingsSVG from "../assets/settings-svgrepo-com.svg"

export default function Dashboard() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
  <div className="font-oswald bg-gradient-to-tr from-blue-800 to-green-400 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
    <div className="flex-1 px-2 sm:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">Dashboard</h3>
        <div className="inline-flex items-center space-x-2">
          <a className="bg-gray-200 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
          <img
            src={SettingsSVG} // Replace with the actual URL or path to your SVG file
            alt="plus sign to add clients" // Provide an appropriate alt text for accessibility
            className="h-6 w-6"/>
          </a>
          <a className="bg-gray-200 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
          <img
            src={LogoutSVG} // Replace with the actual URL or path to your SVG file
            alt="plus sign to add clients" // Provide an appropriate alt text for accessibility
            className="h-6 w-6"/>
          </a>
        </div>
      </div>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <a className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
          <img
            src={PlusSignSVG} // Replace with the actual URL or path to your SVG file
            alt="plus sign to add clients" // Provide an appropriate alt text for accessibility
            className="h-7 w-10"/>
          </a>
          <a className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="#">NEW CLIENT</a>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://logoipsum.com/logoipsum.png" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center"> ALL CLIENTS</h4>
          <p className="text-white/50">VIEW ALL 55 CLIENTS </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src="https://logoipsum.com/logoipsum.png" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">DOCUMENTS</h4>
          <p className="text-white/50">GENERATE CLIENT DOCS</p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src="https://logoipsum.com/logoipsum.png" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">EDIT CLIENT</h4>
          <p className="text-white/50">UPDATE CLIENT INFO</p>
        </div>
        <div></div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src="https://logoipsum.com/logoipsum.png" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">OPEN CASES</h4>
          <p className="text-white/50">VIEW PENDING CASES</p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img className="w-20 h-20 object-cover object-center rounded-full" src="https://logoipsum.com/logoipsum.png" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">ARCHIVED CASES</h4>
          <p className="text-white/50"> VIEW CLOSED CASES</p>
        </div>

      </div>
    </div>
  </div>
</div>

    );
}

    