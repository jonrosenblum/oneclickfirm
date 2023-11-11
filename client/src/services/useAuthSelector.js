import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "./auth.slice";

export const useAuthSelector = () => {
  const dispath = useDispatch();
  const auth = useSelector(
    (/** @type {import("./store").RootState} */ state) => state.auth
  );
  const isLoggedIn = auth.token?.split(".")?.length === 3;

  const doLogin = (user, token, refreshToken) => {
    dispath(onLogin({ user, token, refreshToken }));
  };

  const doLogout = () => {
    dispath(onLogout());
  };
  return { ...auth, isLoggedIn, doLogin, doLogout };
};
