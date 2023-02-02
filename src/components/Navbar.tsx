import React from "react";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <>
      <div
        className="navbar w-10/12 mx-auto mt-2 lg:mt-7"
        style={{ backgroundColor: "#EFEFEF" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <Link
                  to="/register"
                  className="font-bold hover:bg-gray-50 mt-2 text-lg text-orange-600"
                  style={{ fontFamily: "Poppins" }}
                >
                  Daftar
                </Link>
                <a
                  className="btn border-none text-white font-semibold mt-2"
                  style={{ backgroundColor: "#F66B0E", fontFamily: "Poppins" }}
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl lg:text-3xl font-bold"
            style={{ color: "#F66B0E", fontFamily: "Poppins" }}
          >
            GuruMu
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            to="/register"
            className="hidden lg:flex btn btn-ghost normal-case text-xl font-bold mr-5"
            style={{ fontFamily: "Poppins", color: "#112B3C" }}
          >
            Daftar
          </Link>
          <a
            className="btn hidden lg:flex border-none text-white font-semibold"
            style={{ backgroundColor: "#F66B0E", fontFamily: "Poppins" }}
          >
            Get started
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;
