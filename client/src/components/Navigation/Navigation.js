import React from "react";

export default function Navigation() {
     return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">                
          <div className=" navbar" id="navbarNav">
               <ul className="navbar-nav">
               <li className="nav-item pr-5">
               <h3>
                    React Library
               </h3>
               </li>
               <li className={window.location.pathname ==="/" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="/">
                    Search
                    </a>
               </li>
               <li className={window.location.pathname ==="/saved" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="saved">
                    Saved
                    </a>
               </li>
               
               </ul>
          </div>
          </nav>
     );
}
