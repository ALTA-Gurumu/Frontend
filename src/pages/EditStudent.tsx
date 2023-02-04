import Layout from "../components/Layout";
import avatarEdit from "../assets/avataredit.svg";

import { CustomInput } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../components/Navbar";

const EditStudent = () => {
  return (
    <>
      {/* nama lengkap, peran, email, password*/}
      <Layout>
        <LoginNavbar />
        <div className="w-full lg:min-h-screen flex justify-center items-center mb-20 mt-5">
          <div className=" w-10/12 mt-5 lg:mt-10 lg:w-8/12 h-full lg:h-6/6 bg-white rounded-3xl border-2 lg:pb-20">
            <div className="flex flex-col items-center lg:flex-row-reverse w-full h-full justify-center">
              <div className="flex-1 flex-col  ">
                <h1 className="text-black text-center text-2xl lg:text-4xl font-bold mb-5">
                  Update Profile
                </h1>
                <img
                  src={avatarEdit}
                  className="mx-auto w-6/12 max-w-full mt-10 lg:mt-0"
                />
                <p className="text-center text-gray-500 font-semibold">
                  * Uk. photo 400 x 400 pixels
                </p>
                <input
                  type="file"
                  className="file-input w-full max-w-xs flex justify-center bg-white lg:ml-36 lg:mt-5"
                />
              </div>
              <div className="flex-1 items-center -mt-15 lg:mt-10 ">
                <div className="form-control w-full ">
                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                      Nama Lengkap :
                    </span>
                  </label>

                  <CustomInput
                    id="input-namalengkap"
                    type="text"
                    placeholder="@johndoe@gmail.com"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-label"
                  />

                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                      Handphone :
                    </span>
                  </label>

                  <CustomInput
                    id="input-handphone"
                    type="text"
                    placeholder="082XXXX"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-label"
                  />

                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                      Email :
                    </span>
                  </label>

                  <CustomInput
                    id="email"
                    type="text"
                    placeholder="@johndoe@gmail.com"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-label"
                  />
                  <label className="label mt-5">
                    <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                      Password :
                    </span>
                  </label>

                  <input
                    type="password"
                    placeholder="*********"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white border-label border-2"
                  />

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                        Your bio
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32 w-10/12 lg:w-8/12 mx-auto bg-white"
                      placeholder="Bio border-2 border-label"
                    ></textarea>
                  </div>
                  <Link id="link-editstudent" to="/editStudent">
                    <CustomButton
                      id="button-masuk"
                      label="Update"
                      className="w-10/12 lg:w-8/12 py-3 px-3 lg:ml-24 rounded-lg mx-auto mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600 font-poppins"
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
};

export default EditStudent;
