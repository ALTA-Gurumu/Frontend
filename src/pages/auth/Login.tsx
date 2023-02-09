import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import { IoMdCloseCircleOutline } from "react-icons/io";

import imgLogin from "../../assets/login-img.webp";

import { CustomInput, InputIcon } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { LoginNavbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";

import { handleAuth } from "../../utils/redux/reducer/reducer";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies([
    "token",
    "role",
    "verifikasi",
    "guru_id",
    "nama",
  ]);
  // const checkRole = cookies.role;
  // const checkVer = cookies.verifikasi;
  // const checkId = cookies.guru_id;

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setDLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setDLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post("https://devmyproject.site/login", body)
      .then((res) => {
        const { message } = res.data;
        const { role, verifikasi, nama, guru_id } = res.data.data;

        setCookies("token", res.data.token, { path: "/" });
        setCookies("role", role, { path: "/" });
        setCookies("nama", nama, { path: "/" });
        setCookies("guru_id", guru_id, { path: "/" });
        setCookies("verifikasi", verifikasi, { path: "/" });

        dispatch(handleAuth(true));

        MySwal.fire({
          title: "Succes Login",
          text: message,
          showCancelButton: false,
        });
        navigate(`/home`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setDLoading(false));
  };

  return (
    <>
      <Layout>
        <LoginNavbar />
        <div className="w-full lg:min-h-screen flex justify-center items-center my-5">
          <div className=" w-10/12 lg:mb-0 mb-5 mt-5 lg:-mt-10 lg:w-8/12 h-full lg:pb-10 lg:pt-5 bg-white rounded-3xl border-2">
            <div className="flex flex-col lg:flex-row w-full h-full justify-center">
              <div className="flex-1 flex items-end pl-5 lg:mb-16 mb-2">
                <img
                  src={imgLogin}
                  className="lg:w-full w-10/12 lg:mx-0 mx-auto mt-10 lg:mt-0"
                />
              </div>
              <div className="flex-1 items-center lg:mt-0 mt-0">
                <h1 className="text-center lg:text-[36px] text-[30px] text-navy font-[1000] tracking-wider">
                  Masuk
                </h1>
                <p className="text-center px-8 text-[16px] text-base text-navy mt-2 tracking-normal">
                  Lengkapi Formulir Dibawah dan Dapatkan Akses Masuk Akun Anda
                </p>
                <div className="form-control w-full px-10 lg:mt-5 mt-0">
                  <label className="label mt-5">
                    <span className="label-text lg:text-[18px] text-[16px] lg:w-8/12 text-navy">
                      Email :
                    </span>
                  </label>
                  <form onSubmit={handleSubmit}>
                    <InputIcon
                      id="input-email"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="@johndoe@gmail.com"
                      className="input w-full mx-auto bg-white"
                      style={{ border: "2px solid rgb(17,43,60)" }}
                    />
                    <label className="label lg:mt-5 mt-2">
                      <span className="label-text lg:text-[18px] text-[16px] lg:w-8/12 text-navy">
                        Password :
                      </span>
                    </label>

                    <InputIcon
                      id="input-password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      placeholder="*********"
                      className="input w-full mx-auto bg-white"
                      style={{ border: "2px solid rgb(17,43,60)" }}
                    />
                    <CustomButton
                      id="btn-masuk"
                      label="Masuk"
                      className="w-full py-3 px-3 rounded-lg lg:mt-12 mt-8 text-white font-semibold text-[18px] disabled:bg-slate-500 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600"
                      style={{
                        fontFamily: "Poppins",
                      }}
                      loading={loading || disabled}
                    />
                  </form>
                  <p className="text-center mt-5 text-navy font-medium pb-10 lg:p-0">
                    Belum Memiliki Akun ?
                    <Link id="link-register" to="/register">
                      <span className="font-bold underline text-navy ml-2">
                        Daftar Sekarang
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Login;
