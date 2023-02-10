import React, { useState, useEffect, ReactComponentElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";

import imgRegis from "../../assets/imgregis.webp";

import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { LoginNavbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";

import { usePasswordValidation } from "../../utils/hooks/PasswordValidation";

const Register = () => {
  const str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "1234567890";
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setDLoading] = useState<boolean>(false);

  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [generatePass, setGeneratePass] = useState<string>("");
  const [option, setOption] = useState();

  const [hasNumber, upperCase, lowerCase] = usePasswordValidation({
    password: password,
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        navigate("/login");
        // option === "1" ? navigate("/login") : navigate("/editTeacher");
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

  function generatePassword(length: number) {
    let result = " ";
    for (let i = 0; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length + 1);
      result += str.charAt(randomChar);
    }

    return setGeneratePass(result);
  }

  return (
    <>
      <Layout>
        <LoginNavbar />
        <div className="w-full lg:min-h-screen flex justify-center items-center mt-5 mb-10">
          <div className=" w-10/12 mt-5 lg:w-9/12 h-full lg:h-6/6 bg-white rounded-3xl border-2 lg:pb-10">
            <div className="flex flex-col lg:flex-row w-full h-full items -center">
              <div className="flex-1 flex-col flex justify-end lg:pl-8 pl-4 lg:pr-0 pr-4 lg:pb-24 pb-0">
                <img
                  src={imgRegis}
                  className="w-11/12 max-w-full mt-5 lg:mt-0 lg:ml-0 ml-4 mb-5"
                />
                <p className=" text-navy lg:text-[16px] text-[0px] font-semibold text-center">
                  Belajar lebih efektif dengan guru - guru yang professional dan
                  berpengalaman mengajar. Segera bergabung dan bangunlah karir
                  anda.
                </p>
              </div>
              <div className="lg:w-[35vw] w-11/12 items-center -mt-15 lg:mt-2 lg:px-8 lg:pl-10 pl-8 lg:pt-4 pt-0">
                <h1 className="text-center lg:text-4xl text-[30px] text-navy font-[1000] lg:mt-5 lg:mb-8 mb-1 tracking-wider">
                  Mari Memulai
                </h1>

                <form
                  className="form-control w-full"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <label className="label">
                    <span className="label-text text-[16px] w-10/12 lg:w-8/12 text-navy">
                      Nama Lengkap :
                    </span>
                  </label>

                  <CustomInput
                    id="input-nama-lengkap"
                    type="text"
                    placeholder="John Doe"
                    className="input w-11/12 lg:w-11/12 lg:mb-4 mb-1 bg-white"
                    style={{ border: "2px solid  rgb(17,43,60)" }}
                    onChange={(e) => setNama(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text text-[16px]  w-10/12 lg:w-8/12  text-navy">
                      Peran
                    </span>
                  </label>
                  <select
                    defaultValue={"DEFAULT"}
                    id="input-role"
                    className="select select-bordered w-11/12 lg:w-11/12  border-navy border-2 bg-white"
                    name="option"
                    onChange={handleChange}
                  >
                    <option value="DEFAULT" disabled>
                      Pilih Salah Satu
                    </option>
                    <option value="1">Student</option>
                    <option value="2">Teacher</option>
                  </select>

                  <label className="label lg:mt-4 mt-1">
                    <span className="label-text text-[16px] w-10/12 lg:w-8/12 text-navy">
                      Email :
                    </span>
                  </label>

                  <CustomInput
                    id="input-email"
                    type="text"
                    placeholder="@johndoe@gmail.com"
                    className="input w-11/12 lg:w-11/12  bg-white border-navy border-2"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="label lg:mt-4 mt-1">
                    <span className="label-text text-[16px] w-10/12 lg:w-11/12 text-navy">
                      Password :
                    </span>
                  </label>
                  {password.length >= 8 &&
                  hasNumber === true &&
                  upperCase === true &&
                  lowerCase === true ? (
                    <>
                      <CustomInput
                        id="input-password"
                        type="password"
                        placeholder="Silahkan Masukan Password"
                        className="input w-11/12 lg:w-11/12  bg-white border-3 border-navy"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-[14px] mt-1 text-green-600 border-green-700">
                        Password yang anda masukkan kuat*
                      </p>
                    </>
                  ) : (
                    <>
                      <CustomInput
                        id="input-password"
                        type="password"
                        placeholder="*********"
                        className="input w-11/12 lg:w-11/12  bg-white border-2 border-red-700"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="mt-1 text-red-600 lg:text-[16px] text-[13px]">
                        Password yang anda masukkan Lemah*
                      </p>
                    </>
                  )}
                  <CustomButton
                    id="generate-password"
                    label="Generate Secure Password"
                    className="py-2 px-4 lg:text-lg text-[14px] text-navy font-[600] lg:-ml-0 -ml-6"
                    onClick={() => generatePassword(12)}
                  />
                  {generatePass === "" ? (
                    <p></p>
                  ) : (
                    <div className="flex flex-col just">
                      <p className="flex-1 flex justify-center">
                        {generatePass}
                      </p>
                      <CustomButton
                        id="clear-generate"
                        label="clear"
                        className="py-2 px-4 flex-1 justify-center"
                        onClick={() => setGeneratePass("")}
                      />
                    </div>
                  )}

                  <CustomButton
                    id="btn-daftar"
                    label="Daftar"
                    className="w-11/12 lg:w-11/12 py-3 lg:ml-1 ml-0 rounded-lg mx-auto mt-4 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-semibold text-[18px] bg-component hover:bg-orange-600 font-poppins"
                    loading={loading || disabled}
                  />
                </form>

                <p className="text-center mt-2 lg:-ml-0 -ml-6 text-navy pb-10 lg:p-0">
                  Belum Memiliki Akun?
                  <Link to="/login">
                    <span className="font-bold underline text-navy ml-2 pb-20">
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
