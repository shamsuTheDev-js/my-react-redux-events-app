import { Outlet } from "react-router-dom";
import Navigations from "./Navigations";
//import Home from "./pages/Home";

const Root = () => {
  return (
    <>
      <Navigations />
      <Outlet />
    </>
  );
};

export default Root;
