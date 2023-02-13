import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { set, slice } from "lodash";

import {
  CustomInput,
  InputIcon,
} from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import Card from "../components/card";
import { LoadingAnimation } from "../components/Loading";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reducer";
import {
  CompleteTeacher,
  getGuruBeranda,
} from "../utils/DataTypes";

import Swal from "../utils/Swal";

import imgLogin from "../assets/login-img.webp";
import DeafultAvatar from "../assets/avatar2.webp";
import Profil2 from "../assets/profil2.webp";

interface hometype {
  guru_id: number;
  nama: string;
  alamat: string;
  penilaian: number;
  judul: string;
  pelajaran: string;
  avatar: string;
  tarif: number;
}

function Home() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies([
    "token",
    "role",
    "verifikasi",
    "guru_id",
  ]);
  const checkToken = cookies.token;
  const checkRole = cookies.role;
  const checkVer = cookies.verifikasi;
  const checkId = cookies.guru_id;
  const MySwal = withReactContent(Swal);

  const [homes, setHome] = useState<hometype[]>([]);
  const [searchSubject, setSearchSubject] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [page, setPage] = useState<number>(2);

  const [modal, setModal] = useState<string>("modal-open");

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingHome, setLoadingHome] = useState<boolean>(false);
  const [objSubmit, setObjSubmit] = useState<CompleteTeacher>(
    {}
  );

  const [avatar, setAvatar] = useState<any>("");
  const [ijazah, setIjazah] = useState<any>("");
  const [lokasiAsal, setLokasiAsal] = useState<string>("");
  const [pendidikan, setPendidikan] = useState<string>("");
  const [telefon, setTelefon] = useState<string>("");
  const [LinkedIn, setLinkedIn] = useState<string>("");
  const [tentangSaya, setTentangSaya] = useState<string>("");

  useEffect(() => {
    fetchHome(1);
  }, []);

  useEffect(() => {
    fetchSearchResult(searchSubject, searchLocation);
  }, [searchSubject, searchLocation]);

  function fetchHome(page: number) {
    setLoadingHome(true);
    axios
      .get(`https://devmyproject.site/guru/?page=${page}`)
      .then((res) => {
        setHome(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setLoadingHome(false));
  }
  function fetchSearchResult(subject: string, location: string) {
    axios
      .get(
        `https://devmyproject.site/guru?pelajaran=${subject}&lokasi=${location}`
      )
      .then((res) => {
        setHome(res.data.data);
      });
  }
  function nextPage() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const newPage = page + 1;
    fetch(
      `https://devmyproject.site/guru/?page=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        const results = res.data;
        const result = homes.slice();
        result.push(...results);
        setHome(result);
        setPage(newPage);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  const skipHandle = async () => {
    setModal("modal");
    MySwal.fire({
      title: "Data Perlu Update",
      text: "segera lengkapi data anda ibu/bapa guru",
      showCancelButton: false,
    });
  };

  const fetchData = useCallback(() => {
    setLoadingHome(true);
    axios
      .get(`https://devmyproject.site/guru/${checkId}`)
      .then((res) => {
        const {
          Ijazah,
          LokasiAsal,
          Pendidikan,
          Telepon,
          LinkedIn,
          TentangSaya,
        } = res.data.data;

        setAvatar(res.data.data.Avatar);
        setLokasiAsal(LokasiAsal);
        setLinkedIn(LinkedIn);
        setTelefon(Telepon);
        setIjazah(Ijazah);
        setPendidikan(Pendidikan);
        setTentangSaya(TentangSaya);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoadingHome(false));
  }, []);

  useEffect(() => {
    checkRole === "guru" && fetchData();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setLoadingHome(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    axios
      .put("https://devmyproject.site/guru", formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/json",
        },
      })
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Berhasil Update",
          text: message,
          showCancelButton: false,
        });
        setCookies("verifikasi", true, { path: "/" });
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Update Gagal",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData())
      .finally(() => setLoadingHome(false));
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof objSubmit
  ) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <Navbar />
      {loadingHome ? (
        <LoadingAnimation />
      ) : (
        <>
          {checkVer === "false" ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={`modal ${modal}`}>
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
                      <div
                        className="w-[120px] h-[120px] overflow-hidden rounded-full bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `URL(${DeafultAvatar})`,
                        }}
                      >
                        <img
                          src={avatar}
                          alt="porfil.jpeg"
                          className="w-full h-11/12"
                        />
                      </div>
                      <p className="text-center text-gray-500 font-semibold mt-2">
                        * Uk. photo 600 x 600 pixels
                      </p>
                      <CustomInput
                        id="input-avatar"
                        type="file"
                        className="file-input h-10 w-full max-w-xs flex justify-center bg-white lg:mt-4"
                        onChange={(e) => {
                          if (!e.currentTarget.files) {
                            return;
                          }
                          setAvatar(
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

                      <CustomInput
                        id="input-linkedin"
                        type="text"
                        className="input w-10/12 lg:w-8/12 mx-auto bg-white mt-7"
                        style={{ border: "2px solid #424242" }}
                        placeholder={LinkedIn}
                        defaultValue={LinkedIn}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "linkedin"
                          )
                        }
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
                        onChange={(e) => {
                          if (!e.currentTarget.files) {
                            return;
                          }
                          setIjazah(
                            URL.createObjectURL(
                              e.currentTarget.files[0]
                            )
                          );
                          handleChange(
                            e.currentTarget.files[0],
                            "ijazah"
                          );
                        }}
                      />
                    </div>

                    <div className="lg:w-7/12 w-full items-center lg:pl-16 pl-0 lg:mx-0 mx-2">
                      <div className="form-control w-full ">
                        <label className="label mt-5">
                          <span
                            className="label-text text-lg w-10/12 lg:w-8/12 font-semibold"
                            style={{ color: "#424242" }}
                          >
                            Lokasi Asal :
                          </span>
                        </label>

                        <CustomInput
                          id="input-alamat"
                          type="text"
                          className="input w-10/12 lg:w-9/12 bg-white"
                          style={{
                            border: "2px solid #424242",
                          }}
                          placeholder={"contoh : Blitar"}
                          defaultValue={lokasiAsal}
                          onChange={(e) =>
                            handleChange(
                              e.target.value,
                              "lokasi_asal"
                            )
                          }
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
                          className="input w-10/12 lg:w-9/12 bg-white"
                          style={{
                            border: "2px solid #424242",
                          }}
                          placeholder={"contoh : 0891234556"}
                          defaultValue={telefon}
                          onChange={(e) =>
                            handleChange(
                              e.target.value,
                              "telepon"
                            )
                          }
                        />

                        <div className="form-control">
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
                            style={{
                              border: "2px solid #424242",
                            }}
                            name="option"
                            onChange={(e) =>
                              handleChange(
                                e.target.value,
                                "pendidikan"
                              )
                            }
                          >
                            <option value="DEFAULT" disabled>
                              {pendidikan === ""
                                ? "Pilih Salah Satu"
                                : `${pendidikan}`}
                            </option>
                            <option value="Sekolah Dasar">
                              Sekolah Dasar
                            </option>
                            <option value="Sekolah Menengah Pertama">
                              Sekolah Menengah Pertama
                            </option>
                            <option value="Sekolah Menengah Atas">
                              Sekolah Menengah Atas
                            </option>
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
                              style={{
                                border: "2px solid #424242",
                              }}
                              placeholder="Ceritakan biografi singkat anda"
                              defaultValue={tentangSaya}
                              onChange={(e) =>
                                handleChange(
                                  e.target.value,
                                  "tentang_saya"
                                )
                              }
                            ></textarea>
                          </div>

                          <CustomButton
                            id="btn-daftar"
                            label="Update Data"
                            className=" w-10/12 lg:w-6/12 py-3 px-3 rounded-lg mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
                            style={{
                              fontFamily: "Poppins",
                            }}
                            loading={loading}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            ""
          )}

          <div className="flex flex-col items-center">
            <div className="flex gap-2 lg:w-[60vw] w-[90vw] bg-white text-[#112B3C] text-[20px] rounded-xl lg:px-6 px-2 py-2 mt-10  ">
              <div className="flex lg:w-5/12 w-7/12 lg:py-2 py-0 gap-2">
                <IoNewspaperOutline className="w-7 h-7" />

                <InputIcon
                  id="input-pencarianMapel"
                  type="search"
                  className="input input-ghost lg:text-[18px] text-[16px] h-8 pl-0 w-full max-w-full"
                  placeholder="Mata Pelajaran"
                  value={searchSubject}
                  onChange={(e) =>
                    setSearchSubject(e.target.value)
                  }
                />
              </div>

              <div className="flex w-5/12 lg:py-2 py-0 pl-5 border-l-[1px] border-[#112B3C] gap-2">
                <HiOutlineLocationMarker className="w-7 h-7" />
                <InputIcon
                  id="input-pencarianLokasi"
                  type="search"
                  className="input input-ghost lg:text-[18px] text-[16px] h-8 pl-0 w-full max-w-full"
                  placeholder="Lokasi"
                  value={searchLocation}
                  onChange={(e) =>
                    setSearchLocation(e.target.value)
                  }
                />
              </div>

              <BiSearchAlt className="lg:w-10 w-7 lg:h-10 h-7 lg:pt-2 pt-0 ml-auto" />
            </div>
          </div>

          <div className="flex flex-col items-center w-full lg:mt-20 mt-14 ">
            <div className="gap-4 grid lg:grid-cols-3 grid-cols-1 lg:w-[90vw] w-[80vw]">
              {homes.map((data, index) => (
                <Card
                  id="card-guru"
                  key={index}
                  nama={data.nama}
                  avatar={data.avatar}
                  alamat={data.alamat}
                  penilaian={data.penilaian}
                  judul={data.judul}
                  tarif={data.tarif}
                  guru_id={data.guru_id}
                />
              ))}
            </div>
          </div>
          {/* {isCompleted ? (
            <div className="mb-32"></div>
          ) : ( */}
          <div className="text-center mt-14 mb-20">
            <CustomButton
              id="btn-lihatLainnya"
              className="px-4 py-3 text-[20px] rounded-2xl bg-[#F66B0E] text-white hover:bg-navy shadow-xl"
              label="Lihat lebih banyak guru"
              loading={loading}
              onClick={() => nextPage()}
            />
          </div>
          {/* )} */}
        </>
      )}
    </Layout>
  );
}

export default Home;
