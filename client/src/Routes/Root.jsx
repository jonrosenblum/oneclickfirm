import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import { useAuthSelector } from "../services/useAuthSelector";

export default function Root() {
  const { isLoggedIn } = useAuthSelector();

  if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-row flex-100">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
