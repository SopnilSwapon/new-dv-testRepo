import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Homepage/Navbar";

const Root = () => {
    return (
        <div className="font-noto max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;