import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import { createBrowserRouter  } from "react-router-dom";
import { RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./src/Component/AboutUs";
import Contactus from "./src/Component/Contactus";
import RestuarantMenu from "./src/Component/RestuarantMenu";


const AppLayout=()=>{
    return(<div className="app">
        <Header/>
       <Outlet/>
        
    </div>);
};
const appRouter=createBrowserRouter(
    [
        {
            path: "/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<AboutUs/>
                },
                {
                    path:"/contact",
                    element:<Contactus/>
                },
                {
                    path:"/restuarants/:resId",
                    element:<RestuarantMenu/>
                }
            ],
            errorElement:<Error/>
        },
       
    ]
    )


const root=ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={appRouter}/>);