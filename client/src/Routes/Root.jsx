import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";

export default function Root() {
  return (
    <div className="flex flex-row flex-100">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
