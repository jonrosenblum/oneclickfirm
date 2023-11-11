import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import { useAuthSelector } from "../services/useAuthSelector";

export default function Root() {
  const { isLoggedIn } = useAuthSelector();

  if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <TopNav/>
    <div className="flex flex-row flex-100 h-[100%]">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </>
  );
}
