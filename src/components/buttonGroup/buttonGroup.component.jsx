import React from "react";
import { Link } from "react-router-dom";

const ButtonGroup = () => {
  return (
    <div className="my-5">
      <Link to="/home" className="bg-gray-400 text-black rounded-md px-5 py-3 mx-2">
        Home
      </Link>

      <Link to="/create" className="bg-gray-400 text-black rounded-md px-5 py-3 mx-2">
        Create Record
      </Link>

      <Link
        to="/"
        onClick={() => localStorage.setItem("isAuthenticated", "false")}
        className="bg-gray-400 text-black rounded-md px-5 py-3 mx-2"
      >
        Logout
      </Link>
    </div>
  );
};

export default ButtonGroup;
