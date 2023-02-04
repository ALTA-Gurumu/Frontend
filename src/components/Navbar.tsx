import { Link } from "react-router-dom";
import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-card">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-primary text-xl"
        >
          GuruMu
        </Link>
      </div>
      <div className="flex-none gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <Link id="link-historysesiguru" to="/HalamanSesiGuru">
            <IoNotificationsOutline className="text-primary w-7 h-7" />
          </Link>
        </label>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <Link id="link-historysesimurid" to="/HalamanSesiMurid">
            <IoNotificationsOutline className="text-primary w-7 h-7" />
          </Link>
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <FaRegUser className="text-primary w-7 h-7" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profil</a>
            </li>
            <li>
              <Link to="/login">Masuk</Link>
            </li>
            <li>
              <Link to="/register">Daftar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const LoginNavbar = () => {
  return (
    <>
      <div className="navbar w-10/12 mx-auto mt-2 lg:mt-7 primary">
        <div className="navbar-start">
          <div id-="dropdown" className="dropdown">
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
                  id="link-register"
                  to="/register"
                  className="font-bold hover:bg-gray-50 mt-2 text-lg text-orange-600 sans"
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
            className="btn btn-ghost normal-case text-xl lg:text-3xl font-bold text-component font-poppins"
          >
            GuruMu
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            to="/register"
            className="hidden lg:flex btn btn-ghost normal-case text-xl font-bold mr-5  color text-navy font-poppins"
          >
            Daftar
          </Link>

          <Link
            to="/"
            className="btn hidden lg:flex border-none text-white font-semibold"
            style={{ backgroundColor: "#F66B0E", fontFamily: "Poppins" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar, LoginNavbar };
