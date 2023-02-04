import Layout from "../../components/Layout";
import imgLogin from "../../assets/login-img.webp";

import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../../components/Navbar";

const Login = () => {
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
                  Lengkapi Formulir Dibawah dan Dapatkan Akses
                  Masuk Akun Anda
                </p>
                <div className="form-control w-full ">
                  <label className="label mt-5">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Email :
                    </span>
                  </label>

                  <CustomInput
                    id="input-email"
                    type="text"
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
                    placeholder="*********"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                  />
                  <CustomButton
                    id="btn-masuk"
                    label="Masuk"
                    className="w-10/12 lg:w-8/12 py-3 px-3  rounded-lg mx-auto mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
                    style={{
                      fontFamily: "Poppins",
                    }}
                  />
                  <p className="text-center mt-5 text-slate-700 font-medium pb-10 lg:p-0">
                    Belum Memiliki Akun{" "}
                    <Link to="/register">
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
