import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
