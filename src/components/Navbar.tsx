import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reducer";
import Swal from "../utils/Swal";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const [cookie, , removeCookie] = useCookies(["token", "role", "verifikasi"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkVer = cookie.verifikasi;

  const handleLogout = async () => {
    removeCookie("token");
    removeCookie("role");
    removeCookie("verifikasi");

    dispatch(handleAuth(false));
    navigate("/login");
    MySwal.fire({
      title: "Log Out Account",
      text: "You have been Logged out",
      showCancelButton: false,
    });
  };

  return (
    <div className="navbar bg-card">
      <div className="flex-1">
        <Link
          id="link-landingpage-1"
          to={"/"}
          className="btn btn-ghost normal-case text-primary text-xl"
        >
          GuruMu
        </Link>
      </div>

      <div className="flex-none gap-2">
        {checkToken && checkRole === "guru" && checkVer === "true" ? (
          <label
            id="link-histori-sesi-guru"
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <Link to="/profile-teacher/:guru_id">
              <BsFillCalendarCheckFill className="text-primary w-7 h-7" />
            </Link>
          </label>
        ) : (
          ""
        )}

        {checkToken && checkRole === "siswa" ? (
          <label
            id="link-histori-sesi-murid"
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <Link to="/HalamanSesiMurid">
              <BsFillCalendarCheckFill className="text-primary w-7 h-7" />
            </Link>
          </label>
        ) : (
          ""
        )}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <FaRegUser className="text-primary w-7 h-7" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {checkToken ? (
              <li>
                <button
                  id="link-profil"
                  onClick={() =>
                    checkToken && checkRole === "guru"
                      ? navigate("/profile-teacher/:guru_id")
                      : navigate("/HalamanSesiMurid")
                  }
                >
                  Profil
                </button>
              </li>
            ) : (
              ""
            )}

            <li id="link-home-1" className="text-zinc-800">
              <Link to="/home">Home</Link>
            </li>

            <li>
              <button
                id="btn-auth"
                onClick={() =>
                  checkToken ? handleLogout() : navigate("/login")
                }
              >
                {checkToken ? "Keluar" : "Masuk"}
              </button>
            </li>

            {checkToken ? (
              ""
            ) : (
              <li id="link-daftar-1">
                <Link to="/register">Daftar</Link>
              </li>
            )}
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
          <div id="dropdown" className="dropdown">
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
                  id="link-daftar-2"
                  to="/register"
                  className="font-bold hover:bg-gray-50 mt-2 text-lg text-orange-600 sans"
                >
                  Daftar
                </Link>

                <Link
                  id="link-home-2"
                  to="/home"
                  className="btn border-none text-white font-semibold mt-2"
                  style={{
                    backgroundColor: "#F66B0E",
                    fontFamily: "Poppins",
                  }}
                >
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          <Link
            id="link-landingpage-2"
            to="/home"
            className="btn btn-ghost normal-case text-xl lg:text-3xl font-bold text-component font-poppins"
          >
            GuruMu
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            id="link-register-3"
            to="/register"
            className="hidden lg:flex btn btn-ghost normal-case text-xl font-bold mr-5  color text-navy font-poppins"
          >
            Daftar
          </Link>

          <Link
            id="link-home-3"
            to="/home"
            className="btn hidden lg:flex border-none text-white font-semibold"
            style={{
              backgroundColor: "#F66B0E",
              fontFamily: "Poppins",
            }}
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar, LoginNavbar };
