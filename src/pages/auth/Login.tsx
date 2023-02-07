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
  const [cookies, setCookies] = useCookies(["token", "role", "verifikasi"]);
  const checkRole = cookies.role;
  const checkVer = cookies.verifikasi;

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
        const { role, verifikasi } = res.data.data;

        // console.log(res.data.token);
        console.log(cookies);

        setCookies("token", res.data.token, { path: "/" });
        setCookies("role", role, { path: "/" });
        setCookies("verifikasi", verifikasi, { path: "/" });

        dispatch(handleAuth(true));

        MySwal.fire({
          title: "Succes Login",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setDLoading(false));
  };

  const skipHandle = async () => {
    navigate("/home");
    MySwal.fire({
      title: "Data Perlu Update",
      text: "segera lengkapi data anda ibu/bapa guru",
      showCancelButton: false,
    });
  };

  return (
    <>
      <Layout>
        <LoginNavbar />
        <>
          {checkRole === "guru" ? "guru" : "siswa"}
          <br />
          {checkVer === "false" ? (
            <div className="modal modal-open">
              <div className="modal-box lg:w-9/12 w-10/12 max-w-full shadow-xl p-4">
                <div className="w-full flex lg:flex-row flex-col relative">
                  <IoMdCloseCircleOutline
                    onClick={() => skipHandle()}
                    className="absolute top-0 right-0 text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7"
                  />
                  <div className="lg:w-6/12 w-full flex flex-col items-center justify-center">
                    <h1 className="text-navy text-center text-xl lg:text-3xl font-bold mb-5">
                      Selesaikan Profil Anda
                    </h1>
                    <img
                      src={imgLogin}
                      className=" w-4/12 max-w-full mt-10 lg:mt-0"
                    />
                    <p className="text-center text-gray-500 font-semibold mt-2">
                      * Uk. photo 400 x 400 pixels
                    </p>
                    <CustomInput
                      id="input-avatar"
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      className="file-input h-10 w-full max-w-xs flex justify-center bg-white lg:mt-4"
                    />

                    <CustomInput
                      id="input-linkedin"
                      type="text"
                      placeholder="LInkedin Profile"
                      className="input w-10/12 lg:w-8/12 mx-auto bg-white mt-7"
                      style={{ border: "2px solid #424242" }}
                    />

                    <label className="label">
                      <span className="label-text text-xl text-slate-600 mt-5 mb-2 font-semibold">
                        Upload Ijazah
                      </span>
                    </label>

                    <CustomInput
                      id="input-ijazah"
                      type="file"
                      className="file-input h-10 file-input-bordered w-full max-w-xs bg-white"
                    />
                  </div>

                  <div className="lg:w-7/12 w-full items-center lg:pl-16 pl-0 lg:mx-0 mx-2">
                    <div className="form-control w-full ">
                      <label className="label mt-5">
                        <span
                          className="label-text text-lg w-10/12 lg:w-8/12 font-semibold"
                          style={{ color: "#424242" }}
                        >
                          Alamat :
                        </span>
                      </label>

                      <CustomInput
                        id="input-alamat"
                        type="text"
                        placeholder="Contoh : Sukabumi"
                        className="input w-10/12 lg:w-9/12 bg-white"
                        style={{ border: "2px solid #424242" }}
                      />

                      <label className="label mt-2">
                        <span
                          className="label-text text-lg w-10/12 lg:w-9/12 font-semibold"
                          style={{ color: "#424242" }}
                        >
                          Handphone :
                        </span>
                      </label>

                      <CustomInput
                        id="input-no-hp"
                        type="number"
                        placeholder="0891234556"
                        className="input w-10/12 lg:w-9/12 bg-white"
                        style={{ border: "2px solid #424242" }}
                      />

                      <label className="label">
                        <span
                          className="label-text text-lg w-10/12 lg:w-9/12 font-semibold mt-2"
                          style={{ color: "#424242" }}
                        >
                          Jenjang Pendidikan :
                        </span>
                      </label>
                      <select
                        defaultValue={"DEFAULT"}
                        id="input-jenjang-pengajaran"
                        className="select select-bordered w-10/12 lg:w-9/12  bg-white"
                        style={{ border: "2px solid #424242" }}
                        name="option"
                        // onChange={handleChange}
                      >
                        <option value="DEFAULT" disabled>
                          Pilih Salah Satu
                        </option>
                        <option value="1">Sekolah Dasar</option>
                        <option value="2">Sekolah Menengah Pertama</option>
                        <option value="3">Sekolah Menengah Atas</option>
                      </select>
                      <div className="form-control">
                        <label className="label">
                          <span
                            className="label-text text-lg  w-10/12 lg:w-8/12 font-semibold"
                            style={{ color: "#424242" }}
                          >
                            Biografi Saya :
                          </span>
                        </label>
                        <textarea
                          id="input-bio"
                          className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 bg-white"
                          placeholder="Ceritakan biografi singkat anda"
                          style={{ border: "2px solid #424242" }}
                        ></textarea>
                      </div>

                      <CustomButton
                        id="btn-daftar"
                        label="Update Data"
                        className="w-10/12 lg:w-6/12 py-3 px-3 rounded-lg mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
                        style={{
                          fontFamily: "Poppins",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "true/undefine"
          )}
        </>
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
