import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import Layout from "../components/Layout";
import avatar2 from "../assets/avatar2.webp";
import { Footer } from "../components/Footer";
import { LoginNavbar } from "../components/Navbar";

export default function EditTeacher() {
  return (
    <>
      {/* nama lengkap, peran, email, password*/}
      <Layout>
        <LoginNavbar />
        <div className="w-full lg:min-h-screen flex justify-center items-center mt-5 mb-10">
          <div className=" w-10/12 mt-5 lg:mt-10 lg:w-8/12 h-full lg:h-6/6 bg-white rounded-3xl border-2 lg:pb-16">
            <div className="flex flex-col items-center lg:flex-row-reverse w-full h-full justify-center">
              <div className="flex-1 flex-col  ">
                <h1 className="text-black text-center text-xl lg:text-2xl font-bold mb-5">
                  Complete Your Profile
                </h1>
                <img
                  src={avatar2}
                  className="mx-auto w-5/12 max-w-full mt-10 lg:mt-0"
                />
                <p className="text-center text-gray-500 font-semibold">
                  * Uk. photo 400 x 400 pixels
                </p>
                <input
                  type="file"
                  className="file-input w-full max-w-xs flex justify-center bg-white lg:ml-36 lg:mt-5"
                />

                <CustomInput
                  id="fullname"
                  type="text"
                  placeholder="LInkedin Profile"
                  className="input w-10/12 lg:w-8/12 mx-auto bg-white mt-7 lg:ml-28"
                  style={{ border: "2px solid #424242" }}
                />

                <label className="label">
                  <span className="label-text text-xl text-slate-600 mt-5 lg:ml-32 font-semibold">
                    Upload Ijazah
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs bg-white lg:ml-32"
                />
              </div>
              <div className="flex-1 items-center -mt-15 lg:mt-10 ">
                <div className="form-control w-full ">
                  <label className="label mt-5">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Alamat :
                    </span>
                  </label>

                  <CustomInput
                    id="fullname"
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
                      Handphone :
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
                      Jenjang Pendidikan
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                  >
                    <option disabled selected>
                      Pilih Salah Satu
                    </option>
                    <option>Sekolah Dasar</option>
                    <option>Sekolah Menengah Pertama</option>
                    <option>Sekolah Menengah Atas</option>
                  </select>
                  <div className="form-control">
                    <label className="label">
                      <span
                        className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                        style={{ color: "#424242" }}
                      >
                        Your bio
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32 w-10/12 lg:w-8/12 mx-auto bg-white"
                      placeholder="Bio"
                      style={{ border: "2px solid #424242" }}
                    ></textarea>
                  </div>
                  <Link to="/editStudent">
                    <CustomButton
                      id="button-masuk"
                      label="Update"
                      className="w-10/12 lg:w-8/12 py-3 px-3 lg:ml-24 rounded-lg mx-auto mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
