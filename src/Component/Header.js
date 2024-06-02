import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header=()=>{
    const[btnName,setbtnName]=useState("login");
    const onlineStatus=useOnlineStatus()
    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">AboutUs</Link></li>
                    <li className="px-4"><Link to="/contact">contactUs</Link></li>
                    <li className="px-4">cart</li>
                    <button className="login"
                    onClick={()=>{
                         btnName === "login"?
                         setbtnName("logout"):setbtnName("login")
                    }}>
                    {btnName}</button>
                </ul>
            </div>
          
        </div>
    );
};
export default Header;