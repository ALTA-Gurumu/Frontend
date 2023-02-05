import { Tabs, Tab, Classes } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { ProfilType } from "../utils/DataTypes";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import EditProfilStudent from "./editProfilStudent";

import { CustomInput, InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Layout from "../components/Layout";

import Profil2 from "../assets/profil2.webp";
import Profil from "../assets/profil.jpg";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Cookies from "react-cookie/cjs/Cookies";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

function HalamanSesiMurid() {
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const MySwal = withReactContent(Swal);

  const [loading, setLoading] = useState<boolean>(false);
  const [objSubmit, setObjSubmit] = useState<ProfilType>({});

  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [telepon, setTelepon] = useState<string>("");
  const [gambar, setGambar] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/CapstoneAltaBE14/GuruMu/1.0.0/siswa"
        // "https://virtserver.swaggerhub.com/back-end-14-alterra/sosmed/1.0.0/users"
      )
      .then((res) => {
        const { nama, email, alamat, telepon, photo } = res.data.data;

        setNama(nama);
        setEmail(email);
        setAlamat(alamat);
        setTelepon(telepon);
        setGambar(photo);
        // console.log(res.data.data);
        // console.log(gambar);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    axios
      .put("", formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data.data;
        MySwal.fire({
          title: "Edit Succesfull",
          text: message,
          showCancelButton: false,
        });
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Edit Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData());
  };

  const handleChange = (value: string | File, key: keyof typeof objSubmit) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <>
      <Layout>
        <Navbar />
        <div className="bg-white lg:w-9/12 w-11/12 lg rounded-2xl lg:h-[34rem] mt-20 lg:mb-20 mb-[465px] overflow-hidden mx-auto shadow-xl">
          <h1>
            <div className="h-full">
              <Tabs
                className=" w-11/12 mx-auto pt-4"
                defaultSelectedTabId="1"
                renderActiveTabPanelOnly={true}
              >
                <Tab
                  id="tab-profil"
                  title="Profil"
                  className="text-[18px] font-semibold text-slate-500 lg:px-6 px-1"
                  panel={
                    <div className="flex flex-col items-center p-5 relative">
                      <label
                        id="modal-profil-murid"
                        htmlFor="my-modal-5"
                        className="flex gap-1 absolute lg:top-10 top-10 lg:right-40 right-0"
                      >
                        <FaRegEdit className="lg:w-5 lg:h-5  text-[#424242]" />
                        <p className="text-[#8E8E8E] lg:text-[16px] text-[14px] font-normal ">
                          perbarui profile
                        </p>
                      </label>

                      <input
                        id="my-modal-5"
                        type="checkbox"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box lg:w-9/12 w-10/12 max-w-full lg:pl-10 lg:p-5 p-7 shadow-xl">
                          <label
                            id="label-profil-murid"
                            htmlFor="my-modal-5"
                            className="absolute right-5 top-4"
                          >
                            <IoMdCloseCircleOutline className="text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7" />
                          </label>

                          {/* <EditProfilStudent /> */}
                          <div>
                            <form
                              className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-0 px-5 py-2"
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className=" flex flex-col items-center lg:w-[30vw] w-[70vw] lg:mt-0 mt-5 text-[16px] text-[#112B3C] font-normal">
                                <div>
                                  <p className="items-start">Nama Lengkap</p>
                                  <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
                                    <HiUser className="w-7 h-6" />
                                    <InputIcon
                                      id="input-nama-lengkap"
                                      type="nama-lengkap"
                                      placeholder={nama}
                                      defaultValue={nama}
                                      onChange={(e) =>
                                        handleChange(e.target.value, "nama")
                                      }
                                    />
                                  </div>
                                </div>

                                <div>
                                  <p className="items-start">Handphone</p>
                                  <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
                                    <BsPhoneFill className="w-7 h-6" />
                                    <InputIcon
                                      id="input-telepon"
                                      type="handphone"
                                      placeholder={telepon}
                                      defaultValue={telepon}
                                      onChange={(e) =>
                                        handleChange(e.target.value, "telepon")
                                      }
                                    />
                                  </div>
                                </div>

                                <div>
                                  <p className="items-start">Email</p>
                                  <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
                                    <MdOutlineAlternateEmail className="w-7 h-6" />
                                    <InputIcon
                                      id="input-email"
                                      type="email"
                                      placeholder={email}
                                      defaultValue={email}
                                      onChange={(e) =>
                                        handleChange(e.target.value, "email")
                                      }
                                    />
                                  </div>
                                </div>

                                <div>
                                  <p className="items-start">Alamat</p>
                                  <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
                                    <textarea
                                      id="input-alamat"
                                      typeof="text"
                                      className="textarea pl-1 pt-0 w-full h-32"
                                      placeholder={alamat}
                                      defaultValue={alamat}
                                      onChange={(e) =>
                                        handleChange(e.target.value, "alamat")
                                      }
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="font-semibold text-[18px] mt-4">
                                  <CustomButton
                                    id="btn-perbarui"
                                    className="px-10 py-2 text-[16px] rounded-2xl bg-[#F66B0E] text-white hover:bg-navy shadow-xl"
                                    label="Perbarui"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col items-center lg:w-[30vw] w-[70vw] lg:pt-16 pt-0 lg:mt-0 mt-2">
                                <p className="text-[#112B3C] text-[34px] font-semibold">
                                  Ubah Profil
                                </p>
                                <div className=" w-32 h-32 lg:mt-5 mt-5 mb-5 border border-[#EFEFEF] rounded-full overflow-hidden">
                                  <img src={gambar} alt="profil.jpg" />
                                </div>
                                <p className="text-[14px] font-normal text-[#C0B7B7]">
                                  *Uk.foto maks 400 x 400 pixels
                                </p>

                                <CustomInput
                                  id="input-avatar"
                                  name="input-avatar"
                                  type="file"
                                  accept="image/png, image/jpg, image/jpeg"
                                  className="flex font-normal mt-2 text-[#112B3C] lg:text-[16px] text-[14px] text-center"
                                  onChange={(e) => {
                                    if (!e.currentTarget.files) {
                                      return;
                                    }
                                    setGambar(
                                      URL.createObjectURL(
                                        e.currentTarget.files[0]
                                      )
                                    );
                                    handleChange(
                                      e.currentTarget.files[0],
                                      "avatar"
                                    );
                                  }}
                                />
                                {/* Unggah Foto
                                        <AiOutlineCloudUpload className="w-7 h-6" /> */}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div
                        className=" w-32 h-32 lg:mt-10 mt-14 border border-[#EFEFEF] rounded-full overflow-hidden mt- bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `URL(${gambar})`,
                        }}
                      >
                        <img src={gambar} alt="profil.jpg" />
                      </div>

                      <p className="mt-2 lg:text-[36px] text-[24px] font-semibold text-[#112B3C]">
                        {nama}
                      </p>

                      <div className="text-[16px] text-zinc-800 flex lg:flex-row flex-col lg:w-[45vw] w-[80vw] p-2 mt-10">
                        <div className="lg:ml-10 ml-3 lg:w-8/12 w-11/12">
                          <p className="font-semibold">
                            Email
                            <span className=" pl-[16px] font-normal">
                              : {email}
                            </span>
                          </p>
                          <br />
                          <p className=" font-semibold">
                            Handphone
                            <span className=" pl-[6px] font-normal">
                              : {telepon}
                            </span>
                          </p>
                        </div>
                        <div className="lg:ml-0 ml-3 lg:mt-0 mt-5">
                          <p className="block font-semibold">Alamat :</p>
                          <p className="font-normal">{alamat}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
                <Tab
                  id="tab-2"
                  title="Riwayat"
                  className=" text-center font-semibold text-lg text-slate-500 mt-2 pl-0 lg:pl-8 lg:pr-8 lg:-ml-0 -ml-2"
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th className="text-[18px] text-zinc-700">No</th>
                            <th className="text-[18px] text-zinc-700">
                              Nama Guru
                            </th>
                            <th className="text-[18px] text-zinc-700">Jam</th>
                            <th className="text-[18px] text-zinc-700">
                              Hari & Tanggal
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Status
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[16px] font-normal">
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>Selesai</td>
                            <td className="flex items-center text-component text-[16px] gap-1">
                              <AiTwotoneStar className="w-5 h-5" />
                              Ulasan
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                />
                <Tab
                  id="tab-3"
                  title="Sedang Berlangsung"
                  className="text-center font-semibold lg:text-lg text-[18px] text-slate-500 lg:mt-5 pl-0 lg:pl-8 lg:pr-8 lg:-ml-4 -ml-2"
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th className="text-[18px] text-zinc-700">No</th>
                            <th className="text-[18px] text-zinc-700">
                              Nama Guru
                            </th>
                            <th className="text-[18px] text-zinc-700">Jam</th>
                            <th className="text-[18px] text-zinc-700">
                              Hari & Tanggal
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Link Google Meet
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[16px] font-normal">
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>https://google meet/adka</td>
                            <td>Selesai</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </h1>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default HalamanSesiMurid;
