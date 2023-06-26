import React from "react";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/signup"> Signup</Link>
        </li>
      </ul>
    </div>
  );
};
export default nav;
