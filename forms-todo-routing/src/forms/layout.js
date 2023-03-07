import React from "react";

import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
     <div className="navs">
      <nav>
    
          <Link id="link" to="/">MyForm</Link>
          <Link id="link" to="/textarea">Textarea</Link> 
          <Link id="link" to="/myselect">Myselect</Link>
          <Link id="link" to="/todolist">Todolistapp</Link>
        
      </nav>

    </div>
      <Outlet />
    </> )};
export default Layout;