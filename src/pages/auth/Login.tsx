import Layout from "../../components/Layout";
import imgLogin from "../../assets/login-img.webp";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../../components/Navbar";
import { useState } from "react";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const onChangeEmail = (e: any) => {
    setEmailInput((prevState) => e.target.value);
    if (e.target.value.trim().length < 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onChangePassword = (e: any) => {
    setPasswordInput((prevState) => e.target.value);
    if (e.target.value.trim().length < 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
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

                  <CustomInput
                    id="input-email"
                    type="text"
                    onChange={onChangeEmail}
                    placeholder="@johndoe@gmail.com"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-label"
                  />
                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-labe">
                      Password :
                    </span>
                  </label>

                  <CustomInput
                    id="input-password"
                    type="password"
                    placeholder="*********"
                    onChange={onChangePassword}
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-label"
                  />
                  <CustomButton
                    id="btn-masuk"
                    label="Masuk"
                    className="w-10/12 lg:w-8/12 py-3 px-3  rounded-lg mx-auto mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600 font-poppins"
                  />
                  {}
                  {/* The button to open modal */}
                  {emailInput === "" || passwordInput === "" ? (
                    <label htmlFor="my-modal" className="btn-disabled">
                      open modal
                    </label>
                  ) : (
                    <label htmlFor="my-modal" className="btn">
                      open modal
                    </label>
                  )}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle "
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Congratulations random Internet user!
                      </h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
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
