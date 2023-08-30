import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


const InstDashboardTemplate = ({children}) => {
    return(
        <div>
           <div className="row m-0 ">
              <div className="col-12 p-0 m-0">
                  <Header />
              </div>
              <div className="col-2 p-0 m-0">
                   <Sidebar />
              </div>
              <div className="col-10 p-0 m-0">
                   {children}
              </div>
           </div>
        </div>
    )
}
export default InstDashboardTemplate;