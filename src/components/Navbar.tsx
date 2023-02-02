import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar bg-card">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-primary text-xl">
          GuruMu
        </a>
      </div>
      <div className="flex-none gap-2">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar"
        >
          <IoNotificationsOutline className="text-primary w-7 h-7" />
        </label>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
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
              <a>Masuk</a>
            </li>
            <li>
              <a>Daftar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
