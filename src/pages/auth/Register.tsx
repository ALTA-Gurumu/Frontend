import React, {
  useState,
  useEffect,
  ReactComponentElement,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";

import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { LoginNavbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";

import imgRegis from "../../assets/imgregis.webp";

const Register = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setDLoading] = useState<boolean>(false);

  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [option, setOption] = useState();

  function handleChange(event: any) {
    setOption(event.target.value);
  }

  useEffect(() => {
    if (nama && option && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nama, option, email, password]);

  // if (option === "1") {
  //   // console.log(option);

  // } else if (option === "2") {
  //   // console.log(option);
  // }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setDLoading(true);
    e.preventDefault();
    const body = {
      nama,
      email,
      password,
    };

    axios
      .post(
        option === "1"
          ? "https://devmyproject.site/siswa"
          : "https://devmyproject.site/guru",
        body
      )
      .then((res) => {
        const { messsage } = res.data;
        console.log(res.data.data);
        console.log(res.data.message);
        MySwal.fire({
          title: "Succes",
          text: messsage,
          showCancelButton: false,
        });

        option === "1"
          ? navigate("/login")
          : navigate("/editTeacher");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setDLoading(false));
  };

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

                <form
                  className="form-control w-full"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <label className="label mt-5">
                    <span
                      className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold"
                      style={{ color: "#424242" }}
                    >
                      Nama Lengkap :
                    </span>
                  </label>

                  <CustomInput
                    id="input-nama-lengkap"
                    type="text"
                    placeholder="John Doe"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                    onChange={(e) => setNama(e.target.value)}
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
                    defaultValue={"DEFAULT"}
                    id="input-role"
                    className="select select-bordered w-10/12 lg:w-8/12 mx-auto bg-white"
                    name="option"
                    onChange={handleChange}
                    style={{ border: "2px solid #424242" }}
                  >
                    <option value="DEFAULT" disabled>
                      Pilih Salah Satu
                    </option>
                    <option value="1">Student</option>
                    <option value="2">Teacher</option>
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
                    id="input-email"
                    type="text"
                    placeholder="@johndoe@gmail.com"
                    className="input w-10/12 lg:w-8/12 mx-auto bg-white"
                    style={{ border: "2px solid #424242" }}
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <CustomButton
                    id="btn-daftar"
                    label="Daftar"
                    className="w-10/12 lg:w-8/12 py-3 px-3 lg:ml-24 rounded-lg mx-auto mt-7 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-lg text-lg bg-component hover:bg-orange-600"
                    style={{
                      fontFamily: "Poppins",
                    }}
                    loading={loading || disabled}
                  />
                </form>

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
        <Footer />
      </Layout>
    </>
  );
};

export default Register;
