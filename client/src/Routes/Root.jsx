import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../Components/SideNav";
import { useAuthSelector } from "../services/useAuthSelector";

export default function Root() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthSelector();
  // if user is not logged

  console.log({ isLoggedIn });
  if (isLoggedIn === false) {
    navigate("/login");
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
