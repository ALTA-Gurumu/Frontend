import Layout from "../../components/Layout";
import imgRegis from "../../assets/imgregis.webp";

import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../../components/Navbar";

const Register = () => {
  return (
    <>
      {/* nama lengkap, peran, email, password*/}
      <Layout>
        <LoginNavbar />
        <div className="w-full lg:min-h-screen flex justify-center items-center mt-5 mb-10">
          <div className=" w-10/12 mt-5 lg:w-8/12 h-full lg:h-6/6 bg-white rounded-3xl border-2 lg:pb-16 ">
            <div className="flex flex-col lg:flex-row w-full h-full justify-center">
              <div className="flex-1 flex items-center  ">
                <img
                  src={imgRegis}
                  className="mx-auto w-10/12 max-w-full mt-10 lg:mt-0"
                />
              </div>
              <div className="flex-1 items-center -mt-15 lg:mt-10 ">
                <h1 className="text-center text-4xl text-black font-extrabold lg:mt-10 tracking-wider">
                  Mari Memulai
                </h1>

                <div className="form-control w-full ">
                  <label className="label mt-5">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Nama Lengkap :
                    </span>
                  </label>

                  <CustomInput
                    id="fullname"
                    type="text"
                    placeholder="@johndoe@gmail.com"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                  />
                  <label className="label">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Peran
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                  >
                    <option disabled selected>
                      Pilih Salah Satu
                    </option>
                    <option>Student</option>
                    <option>Teacher</option>
                  </select>

                  <label className="label mt-5">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Email :
                    </span>
                  </label>

                  <CustomInput
                    id="email"
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

                  <input
                    type="password"
                    placeholder="*********"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                  />
                  <Link to="/editStudent">
                    <CustomButton
                      id="button-masuk"
                      label="Daftar"
                      className="w-10/12 lg:w-8/12 py-3 px-3 lg:ml-24 rounded-lg mx-auto mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    />
                  </Link>
                  <p className="text-center mt-5 text-slate-700 font-medium pb-10 lg:p-0">
                    Belum Memiliki Akun?{" "}
                    <Link to="/login">
                      <span className="font-bold underline text-slate-700 ml-2 pb-20">
                        Login
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

export default Register;
