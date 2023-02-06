import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";

import imgLogin from "../../assets/login-img.webp";

import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { LoginNavbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";

import { handleAuth } from "../../utils/redux/reducer/reducer";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies(["token", "role"]);

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
        const { data, message } = res.data;
        const { role } = res.data.data;
        // console.log(message);
        console.log(res.data.data);
        // console.log(cookies.role);

        setCookies("token", data.token, { path: "/" });
        setCookies("role", role, { path: "/" });

        dispatch(handleAuth(true));

        MySwal.fire({
          title: "Succes Login",
          text: message,
          showCancelButton: false,
        });
        navigate("/home");
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

        <div className="w-full lg:min-h-screen flex justify-center items-center">
          <div className=" w-10/12 mt-5 lg:-mt-10 lg:w-8/12 h-full lg:h-6/6 lg:pb-16 bg-white rounded-3xl border-2">
            <div className="flex flex-col lg:flex-row w-full h-full justify-center">
              <div className="flex-1 flex items-center  ">
                <img
                  src={imgLogin}
                  className="mx-auto w-10/12 max-w-full mt-10 lg:mt-0"
                />
              </div>
              <div className="flex-1 items-center -mt-15 lg:mt-10 ">
                <h1 className="text-center text-4xl text-black font-extrabold lg:mt-10 tracking-wider">
                  Masuk
                </h1>
                <p className="text-center text-base text-black font-semibold w-8/12 mx-auto mt-7 tracking-normal">
                  Lengkapi Formulir Dibawah dan Dapatkan Akses Masuk Akun Anda
                </p>
                <div className="form-control w-full ">
                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                      Email :
                    </span>
                  </label>
                  <form onSubmit={handleSubmit}>
                    <CustomInput
                      id="input-email"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="@johndoe@gmail.com"
                      className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                      style={{ border: "2px solid #424242" }}
                    />
                    <label className="label mt-5">
                      <span
                        className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                        style={{ color: "#424242" }}
                      >
                        Password :
                      </span>
                    </label>

                    <CustomInput
                      id="input-password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      placeholder="*********"
                      className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                      style={{ border: "2px solid #424242" }}
                    />
                    <CustomButton
                      id="btn-masuk"
                      label="Masuk"
                      className="w-10/12 lg:w-8/12 py-3 px-3  rounded-lg mx-auto mt-7 text-white font-lg text-lg disabled:bg-slate-500 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600"
                      style={{
                        fontFamily: "Poppins",
                      }}
                      loading={loading || disabled}
                    />
                  </form>
                  <p className="text-center mt-5 text-slate-700 font-medium pb-10 lg:p-0">
                    Belum Memiliki Akun{" "}
                    <Link id="link-register" to="/register">
                      <span className="font-bold underline text-slate-700 ml-2">
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
