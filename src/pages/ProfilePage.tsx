import useDeepCompareEffect from "use-deep-compare-effect";
import Profil2 from "../assets/profil2.webp";

import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { FC } from "react";

import avatarImg from "../assets/avatar2.webp";

import { FaRegEdit } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";
import { MdStars } from "react-icons/md";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import openMap from "../assets/google-maps.webp";


import { Tabs, Tab, Classes, RadioGroup, Radio } from "@blueprintjs/core";


import { useEffect, useRef } from "react";
import { useMemo, useState, useCallback } from "react";
import { InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { LoadingAnimation } from "../components/Loading";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import {
  CompleteTeacher,
  DataTypesGuru,
  EditTeacher,
  UlasanType,
} from "../utils/DataTypes";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import bni from "../assets/2560px-BNI_logo 4.svg";
import bri from "../assets/Logo-BRI 4.svg";
import bca from "../assets/Logo-Bank-BCA-1 4.svg";
import permata from "../assets/permata bank 4.svg";
import qris from "../assets/qris logo 2.svg";
import { Link } from "react-router-dom";
import { ProfilType } from "../utils/DataTypes";
import withReactContent from "sweetalert2-react-content";
import { JadwaType } from "../utils/DataTypes";

const MySwal = withReactContent(Swal);
import Swal from "../utils/Swal";
import CheckBayar from "./checkBayar";

function ProfileStudent() {
  return (
    <Layout>
      <Navbar />
      <div className="flex justify-center lg:py-11 py-14">
        <div className="lg:w-[75vw] w-[90vw] h-[75vh] flex flex-col items-center rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.4)] bg-white p-5 relative">
          <div className="flex w-full gap-4 bg-[#FAFAFA]">
            <p className="bg-[#EDF1FF] border-b-2 border-[#3056D3] lg:px-8 px-6 py-3 items-center font-medium text-[18px] text-[#3056D3]">
              Profil
            </p>
            <p className="lg:px-5 px-2 py-3 items-center font-medium text-[18px] text-[#7C828F]">
              Riwayat
            </p>
            <p className="lg:px-5 px-2 lg:py-3 py-1 items-center font-medium lg:text-[18px] text-[16px] text-[#7C828F]">
              Sedang Berlangsung
            </p>
          </div>

          {/* Put this part before </body> tag */}
          <label
            htmlFor="my-modal-5"
            className="flex gap-1 absolute lg:top-28 top-32 lg:right-52 right-5"
          >
            <FaRegEdit className="w-5 h-5 text-[#424242]" />
            <p className="text-[#8E8E8E] lg:text-[16px] text-[14px]">
              perbarui profile
            </p>
          </label>

          <input
            type="checkbox"
            id="my-modal-5"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box lg:w-9/12 w-10/12 max-w-full lg:pl-10 lg:p-5 p-7 shadow-xl">
              <label
                htmlFor="my-modal-5"
                className="absolute right-5 top-4"
              >
                <IoMdCloseCircleOutline className="text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7" />
              </label>
              <EditProfilStudent />
            </div>
          </div>
          <div
            className=" w-32 h-32 lg:mt-12 mt-24 border border-[#EFEFEF] rounded-full overflow-hidden mt- bg-no-repeat bg-cover"
            style={{ backgroundImage: `URL(${""})` }}
          >
            <img src={Profil2} alt="profil.jpg" />
          </div>

          <p className="mt-2 lg:text-[36px] text-[24px] font-semibold text-[#112B3C]">
            Diva Lesti Pujiana
          </p>

          <div className="text-[16px] flex lg:flex-row flex-col lg:w-[45vw] w-[80vw] p-2 mt-10">
            <div className="lg:ml-10 ml-3 lg:w-8/12 w-11/12">
              <p className="font-semibold">
                Email
                <span className=" pl-[16px] font-normal">
                  : devilestipuji@gmail.com
                </span>
              </p>
              <br />
              <p className=" font-semibold">
                Handphone
                <span className=" pl-[6px] font-normal">
                  {" "}
                  : 089566787765
                </span>
              </p>
            </div>
            <div className="lg:ml-0 ml-3 lg:mt-0 mt-5">
              <p className="block font-semibold">Alamat :</p>
              <p className="font-normal">
                Ds. Kebun Bumi Bulat, Garum, Blitar, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const EditProfilStudent = () => {
  return (
    <div className="flex lg:flex-row flex-col-revers">
      <div className="flex flex-col items-center lg:w-[50vw] w-[70vw] lg:mt-0 mt-5 text-[16px] text-[#112B3C] font-normal">
        <div>
          <p className="items-start">Nama Lengkap</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <HiUser className="w-7 h-6" />
            <InputIcon
              id="input-nama-lengkap"
              placeholder="Diva Lesti Pujiana"
            />
          </div>
        </div>

        <div>
          <p className="items-start">Handphone</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <BsPhoneFill className="w-7 h-6" />

            <InputIcon
              id="input-handphone"
              placeholder="089788970987"
            />
          </div>
        </div>

        <div>
          <p className="items-start">Email</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <MdOutlineAlternateEmail className="w-7 h-6" />

            <InputIcon
              id="input-email"
              placeholder="divalestipujiana@gmail.com"
            />
          </div>
        </div>

        <div>
          <p className="items-start">Alamat</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <textarea
              id="input-alamat"
              className="textarea pl-1 pt-0 w-full h-32"
              placeholder="Ds. Kebun Bumi Bulat, Garum, Blitar, Jawa Timur"
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

      <div className="flex flex-col items-center lg:w-[50vw] w-[70vw] lg:pt-16 pt-0 lg:mt-0 mt-2">
        <p className="text-[#112B3C] text-[34px] font-semibold">
          Ubah Profil
        </p>
        <div className=" w-32 h-32 lg:mt-5 mt-5 mb-5 border border-[#EFEFEF] rounded-full overflow-hidden">
          <img src={Profil2} alt="profil.jpg" />
        </div>
        <p className="text-[14px] font-normal text-[#C0B7B7]">
          *Uk.foto maks 400 x 400 pixels
        </p>
        <input
          id="input-avatar"
          name="input-avatar"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          className="flex font-normal mt-2 text-[#112B3C] lg:text-[16px] text-[14px] text-center"
        />
        {/* Unggah Foto
          <AiOutlineCloudUpload className="w-7 h-6" /> */}
      </div>
    </div>
  );
};

// const center = {
//   lat: 51.505,
//   lng: -0.09,
// };

const DraggableMarker = ({
  setMapCenter,
  setLocations,
}: {
  setMapCenter: (arg: { lat: number; lng: number }) => void;
  setLocations: (arg: Array<Location>) => void;
}) => {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: any = markerRef.current;
        if (marker != null) {
          const latLng = marker.getLatLng();
          setPosition(latLng);
          setMapCenter(latLng);
          // You can perform a search here to get the new location information based on the updated position
          setLocations([
            {
              lat: latLng.lat,
              lon: latLng.lng,
              display_name: `${latLng.lat}, ${latLng.lng}`,
            },
          ]);
        }
      },
    }),
    [setMapCenter, setLocations]
  );
  const toggleDraggable = useCallback(() => {
    setDraggable(!draggable);
  }, [draggable]);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
};

interface MapOptions {
  center: { lat: number; lng: number };
  scrollWheelZoom: boolean;
}

const options: MapOptions = {
  center: { lat: 37.7749, lng: -122.4194 },
  scrollWheelZoom: true,
};

const TabsContentForTeacherPage = () => {
  const [cookies, ,] = useCookies(["role"]);
  const [cookie, removeCookie] = useCookies([
    "token",
    "role",
    "guru_id",
  ]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.guru_id;
  const { guru_id } = useParams();

  return (
    <>
      <Layout>
        <Navbar />
        {checkId !== guru_id || checkRole === "siswa" ? (
          <div className="pb-20 ml-36">
            <div className="w-12/12 min-h-screen mt-20 lg:ml-20 ml-0 mx-auto">
              <div className="w-full min-h-screen text-sm font-normal">
                <ProfileTeacher />
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-20">
            <Tabs
              defaultSelectedTabId="profil"
              className={`${Classes.COMPACT} w-12/12 min-h-screen mt-20 lg:ml-20 ml-0 mx-auto `}
              renderActiveTabPanelOnly={true}
            >
              <Tab
                id="profil"
                title="Profil"
                className="pl-12 pr-12 pb-2 text-xl font-bold lg:ml-32 ml-10 lg:mx-0 mx-auto"
                panel={
                  <div className="w-full min-h-screen text-sm font-normal">
                    <ProfileTeacher />
                  </div>
                }
              />
              <Tab
                id="editProfil"
                className="pl-12 pr-12 pb-2 font-bold text-xl lg:ml-60 mx-auto"
                title="Edit Profile"
                panel={
                  <div className="w-full min-h-screen text-sm font-normal">
                    <EditProfileTeacher
                      center={options.center}
                      scrollWheelZoom={options.scrollWheelZoom}
                    />
                  </div>
                }
              />
            </Tabs>
          </div>
        )}
        <Footer />
      </Layout>
    </>
  );
};

interface TransactionDetails {
  order_id: string;
  gross_amount: number;
}

interface CustomerDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface ChargeRequest {
  transaction_details: TransactionDetails;
  customer_details: CustomerDetails;
}

const MIDTRANS_API_KEY = "SB-Mid-server-iTr-aTpYYMJkOzRoWLk1l-lg";

const ProfileTeacher = () => {

  const [cookie, removeCookie] = useCookies([
    "token",
    "role",
    "guru_id",
  ]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.guru_id;
  const [loading, setLoading] = useState<boolean>(false);

  const [checkbox, setCheckBox] = useState("online");

  const [ID, setID] = useState<string>("");
  const [Avatar, setAvatar] = useState<any>("");
  const [Email, SetEMAIL] = useState<string>("");
  const [Gelar, setGelar] = useState<string>("");
  const [Ijazah, setIjazah] = useState<any>("");
  const [Jadwal, setJadwal] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [LinkedIn, setLinkedIn] = useState<string>("");
  const [LokasiAsal, setLokasiAsal] = useState<string>("");
  const [Nama, setNAMA] = useState<string>("");
  const [Offline, setOffline] = useState<string>("");
  const [Online, setOnline] = useState<string>("");
  const [Pelajaran, setPelajaran] = useState<string>("");
  const [Pendidikan, setPendidikan] = useState<string>("");
  const [Pengalaman, setPengalaman] = useState<string>("");
  const [Tarif, setTarif] = useState<string>("");
  const [Telepon, setTELEPON] = useState<string>("");
  const [TentangSaya, setTentangSaya] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [alamat_siswa, setAlamat] = useState<string>("");
  const [telepon_siswa, setTelepon] = useState<string>("");

  const [metode_belajar, setMetodebelajar] = useState<string>("");
  const [jam, setJam] = useState<string>("");
  const [jadwal, setJADWAL] = useState<string>("");
  const [tanggal, setTanggal] = useState<string>("");

 

  const [metode_pembayaran, setMetodePembayaran] =
    useState<string>("");
  const [objSubmit, setObjSubmit] = useState<ProfilType>({});
  const [caraBelajar, setCaraBelajar] = useState<string>("");

  const navigate = useNavigate();

  const [ulasan, setUlasan] = useState<UlasanType[]>([]);
  const [tambah, setTambah] = useState<number>(2);
  const [finish, setFinish] = useState<boolean>(false);
  const [guruId, setGuruId] = useState<any>();

  const { guru_id } = useParams();

  const fetchData = useCallback(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://devmyproject.site/siswa`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {},
    })
      .then((res) => {
        const { nama, email, alamat, telepon } = res.data.data;

        setNama(nama);
        setEmail(email);
        setAlamat(alamat);
        setTelepon(telepon);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    checkRole !== "guru" && fetchData();
  }, []);

  const fetchDataGuru = useCallback(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://devmyproject.site/guru/${guru_id}`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {},
    })
      .then((response) => {
        const {
          ID,
          Avatar,
          Email,
          Gelar,
          Ijazah,
          Jadwal,
          latitude,
          longitude,
          LinkedIn,
          LokasiAsal,
          Nama,
          Offline,
          Online,
          Pelajaran,
          Pendidikan,
          Pengalaman,
          Tarif,
          Telepon,
          tentang_saya,
          tanggal,
          jam,

        } = response.data.data;

        setTanggal(response.data.Jadwal.tanggal);
        setJam(response.data.Jadwal.jam);
        setAvatar(Avatar);
        setEmail(Email);
        setGelar(Gelar);
        setIjazah(Ijazah);
        setJadwal(Jadwal);
        setLatitude(latitude);
        setLongitude(longitude);
        setLinkedIn(LinkedIn);
        setLokasiAsal(LokasiAsal);
        setNAMA(Nama);
        setOffline(Offline);
        setOnline(Online);
        setPelajaran(Pelajaran);
        setPendidikan(Pendidikan);
        setPengalaman(Pengalaman);
        setTarif(Tarif);
        setTELEPON(Telepon);
        setTentangSaya(TentangSaya);
        setCaraBelajar(MetodeBljr);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchDataGuru();
  }, [fetchDataGuru]);

  const handleReservasi = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();

    const body = {
      pesan,
      metode_belajar,
      tanggal,
      jam,
      alamat_siswa,
      telepon_siswa,
      metode_pembayaran,
    };

    axios
      .post("https://devmyproject.site/reservasi", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/json",
        },
      })
      .then((res) => {
        const { data, message } = res.data.data;
        MySwal.fire({
          title: "Succes",
          text: message,
          showCancelButton: false,
        });
        navigate("/paymentDetails");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof objSubmit
  ) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  useEffect(() => {
    fetchUlasan();
  }, []);

  useEffect(() => {
    setGuruId(
      new URL(window.location.href).searchParams.get("guru_id")
    );
  }, []);

  function fetchUlasan() {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://devmyproject.site/ulasan/${guru_id}`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {
        guru_id: guruId,
      },
    })
      .then((res) => {
        setUlasan(res.data.data);
      })
      .catch((err) => {
        // alert(err.toString());
      })
      .finally(() => setLoading(false));

    if (guruId) {
      fetchUlasan();
    } else {
      return "Data Ulasan Belum ada";
    }
  }

  const loadUlasan = () => {
    setTambah(tambah + 2);
    if (tambah >= ulasan.length) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  };

  // useEffect(() => {
  //   fetchPOVSiswa();
  // }, []);

  // function fetchPOVSiswa() {
  //   axios.get("https://devmyproject.site/guru/");
  // }

  function checkJadwal() {
    navigate(`/listmengajar/${checkId}`);
  }
  return (
 {loading ? (
        <LoadingAnimation />
      ) : (
      <div className="flex flex-col p-8">
      <div className="flex lg:flex-row flex-col lg:items-start items-center w-full mt-10">
        <div className="flex flex-col items-center lg:w-4/12 w-11/12 lg:p-5 p-0 ">
          <div className="flex flex-col w-11/12 lg:h-[30rem] items-center rounded-3xl pb-4 bg-white text-[#424242] shadow-xl">
            <div>
              {Email}
              <img
                src={Avatar}
                alt="profil.webp"
                className="lg:w-32 w-28 lg:h-32 h-28 rounded-full lg:mt-10 mt-5 mb-2"
              />
            </div>
            {}
            {checkId !== guru_id && checkRole === "guru" ? (
              <></>
            ) : (
              <>
                {checkToken && checkRole === "siswa" ? (
                  <>
                    {Jadwal === null ? (
                      <>Guru Belum ada jadwal</>
                    ) : (
                      <>
                        <label
                          htmlFor="my-modal-3"
                          className="flex items-center justify-center gap-2 lg:w-60 w-52 bg-component hover:bg-navy border-none rounded-2xl p-2 lg:text-[20px]      text-[16px] text-white font-semibold"
                        >
                          {
                            <RiMessage2Fill className="lg:w-6 w-5  lg:h-6 h-5" />
                          }
                          Reservasi
                        </label>
                        <CheckBayar />
                      </>
                    )}

                    <p className="lg:text-[36px] text-[28px] font-semibold mt-5 mb-5">
                      {" "}
                      {Nama}
                    </p>
                    <div className="flex gap-1 mb-4">
                      <MdStars className="w-5 h-5 text-[#F66B0E]" />
                      <p className="text-[14px]">{`${5} (6 ulasan)`} </p>
                    </div>
                    <p className="font-semibold lg:text-[16px] text-[14px] pr-8 mb-5">
                      Tarif Belajar/Jam{" "}
                      <span className="lg:ml-10 ml-2">Rp.{Tarif}</span>
                    </p>
                    <p className="text-zinc-800 mt-6">
                      Mata Pelajaran dan Tingkatan
                    </p>
                    <div className="flex text-[#637381] gap-8 text-[14px] mt-2">
                      <p className="py-1 px-2 bg-[#b3b3b3] rounded-lg">
                        {Pelajaran}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <CustomButton
                      id="btn-cek-jadwal"
                      className="flex items-center justify-center gap-2 lg:w-60 w-52 bg-component hover:bg-navy border-none rounded-2xl p-2 lg:text-[20px] text-[16px] text-white font-semibold"
                      icon={
                        <RiMessage2Fill className="lg:w-6 w-5 lg:h-6 h-5" />
                      }
                      label={"Cek Jadwal"}
                      onClick={() => checkJadwal()}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <p className="text-[24px] text-zinc-800 font-semibold mt-10">
            Tentang Kursus
          </p>

          <p className="px-5 py-3 text-lg  bg-white shadow-lg rounded-3xl mt-5">
            {Pendidikan}
          </p>
        </div>

        <div className="lg:w-9/12 w-11/12 py-2 lg:pl-24 pl-0 lg:pr-20 pr-0 lg:mt-0 mt-10">
          <p className="text-zinc-900 lg:text-[36px] text-[28px] font-extrabold">
            {Gelar}
          </p>
          <p className="text-[14px] text-zinc-500 mt-5">{TentangSaya}</p>
          <p className="font-bold text-[28px] text-zinc-900 mt-10">
            Tentang John Doe
          </p>
          <ul className="lg:text-[16px] text-[15px]">
            <li className="flex gap-4 mt-8">
              <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />

              {Pengalaman}
            </li>

            <div className="mt-5">
              {/* <label htmlFor="my-modal-3" className="mt-10">
                Baca Selengkapnya ...
              </label> */}

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h1 className="text-2xl font-bold text-center">
                    About John Doe
                  </h1>
                  <hr className="border-2 " />
                  <li className="flex gap-4 mt-8">
                    <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />
                    Bachelor's Degree with more than 10 years experienced
                    teaching math from primary, secondary, until senior.
                  </li>
                  <li className="flex gap-4 mt-8">
                    <BsCheckCircle className="lg:w-16 w-32 lg:h-16 h-32 text-blue-600 lg:pb-0 pb-24" />
                    Experienced Teaching All Math Levels (AP Calculus,
                    Pre-Algebra, Algebra 1, Algebra 2, Geometry, Trigonometry,
                    SAT, ACT, etc) for any curriculums such as Advanced
                    Placement, IB (HL and SL), Cambridge (IGCSE, O Level and A
                    Level).
                  </li>
                  <li className="flex gap-4 mt-8">
                    <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />
                    Bachelor's Degree with more than 10 years experienced
                    teaching math from primary, secondary, until senior.
                  </li>
                  <li className="flex gap-4 mt-8">
                    <BsCheckCircle className="lg:w-16 w-32 lg:h-16 h-32 text-blue-600 lg:pb-0 pb-24" />
                    Experienced Teaching All Math Levels (AP Calculus,
                    Pre-Algebra, Algebra 1, Algebra 2, Geometry, Trigonometry,
                    SAT, ACT, etc) for any curriculums such as Advanced
                    Placement, IB (HL and SL), Cambridge (IGCSE, O Level and A
                    Level).
                  </li>
                </div>
      )
              </div>
            </div>

            <p className="text-[24px] text-zinc-800 font-semibold mt-10">
              Tentang Kursus
            </p>
            <p className="px-5 py-3 text-lg  bg-white shadow-lg rounded-3xl mt-5">
              {Pendidikan}
            </p>
          </div>

          <div className="flex lg:flex-row flex-col lg:items-start items-center w-full py-4 ">
            <div className="lg:w-9/12 w-11/12 py-2 lg:pl-24 pl-0 lg:pr-20 pr-0 lg:mt-0 mt-10">
              <p className="text-zinc-900 lg:text-[36px] text-[28px] font-extrabold">
                {Gelar}
              </p>
              <p className="text-[14px] text-zinc-500 mt-5">
                {TentangSaya}
              </p>
              <p className="font-bold text-[28px] text-zinc-900 mt-10 capitalize">
                Tentang {Nama}
              </p>
              <ul className="lg:text-[16px] text-[15px]">
                <p className="flex gap-4 mt-8 line-clamp-3">
                  <label htmlFor="my-modal-3" className="mt-10">
                    {Pengalaman}
                  </label>
                </p>


          <p className="text-[24px] text-zinc-900 font-semibold mt-10 mb-5">
            Ulasan
          </p>
          <CheckBayar />
          <>
            {ulasan.slice(0, tambah).map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-xl py-4 px-10 text-[16px] mb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={Profil2}
                    alt="profil.webp"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h1 className="text-2xl font-bold text-center">
                        About {Nama}
                      </h1>
                      <hr className="border-2 " />
                      <p className="flex gap-4 mt-8">
                        {Pengalaman}
                      </p>
                    </div>
                  </div>
                </div>
              </ul>

              <p className=" mt-10 mb-5 text-[24px] font-semibold">
                Lokasi Kursus
              </p>
              <div className="flex flex-wrap gap-10">
                <div className="flex gap-2 py-2 px-5 rounded-2xl lg:-mb-0 bg-white shadow-lg">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <p>{LokasiAsal}</p>
                </div>
                <div className="flex gap-2 py-2 px-5 rounded-2xl bg-white shadow-lg">
                  <AiFillHome className="w-5 h-5" /> {"/"}{" "}
                  <FaLaptop className="w-5 h-5" />
                  <p>{caraBelajar}</p>
                </div>
              </div>

              <p className="text-[24px] text-zinc-900 font-semibold mt-10 mb-5">
                Ulasan
              </p>
              <>
                {ulasan.slice(0, tambah).map((data, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl py-4 px-10 text-[16px] mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={Profil2}
                        alt="profil.webp"
                        className="w-8 h-8 rounded-full"
                      />

                      <p className="font-semibold">
                        {data.nama_siswa}
                      </p>
                      <div className="flex items-center gap-1 ml-auto">
                        <MdStars className="text-component" />
                        {data.penilaian}
                      </div>
                    </div>
                    <p className="mt-4 lg:text-[16px] text-[15px]">
                      {data.ulasan}
                    </p>
                  </div>
                ))}
              </>
              {finish ? (
                ""
              ) : (
                <p onClick={loadUlasan} className="mt-5 mb-10">
                  Lihat lebih banyak ......
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const center = {
  lat: 51.505,
  lng: -0.09,
};

interface Location {
  lat: number;
  lon: number;
  display_name: string;
}

const EditProfileTeacher: React.FC<{
  center: { lat: number; lng: number };
  scrollWheelZoom: boolean;
}> = ({ scrollWheelZoom }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const [zoom, setZoom] = useState(13);
  const [locations, setLocations] = useState<Array<Location>>(
    []
  );
  const [cookie, removeCookie] = useCookies([
    "token",
    "role",
    "guru_id",
  ]);

  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.guru_id;
  const [loading, setLoading] = useState<boolean>(false);

  const [objSubmit, setObjSubmit] = useState<CompleteTeacher>(
    {}
  );

  const [EditTeacher, setEditTeacher] = useState<EditTeacher>(
    {}
  );

  const [tanggal, setTanggal] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [jam, setJam] = useState<string>("");

  const [Avatar, setAvatar] = useState<any>("");
  const [Email, setEmail] = useState<string>("");
  const [Nama, setNama] = useState<string>("");
  const [Gelar, setGelar] = useState<string>("");
  const [Ijazah, setIjazah] = useState<any>("");
  const [Jadwal, setJadwal] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [LinkedIn, setLinkedIn] = useState<string>("");
  const [LokasiAsal, setLokasiAsal] = useState<string>("");
  const [Pelajaran, setPelajaran] = useState<string>("");
  const [Pendidikan, setPendidikan] = useState<string>("");
  const [Pengalaman, setPengalaman] = useState<string>("");
  const [Tarif, setTarif] = useState<string>("");
  const [Telepon, setTELEPON] = useState<string>("");
  const [TentangSaya, setTentangSaya] = useState<string>("");
  const [MetodeBljr, setMetodeBljr] = useState<string>("");

  const handleSearchMap = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Submitting form...");

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`
    );
    const data = await response.json();

    if (data.length) {
      const [firstResult] = data;
      setMapCenter({
        lat: firstResult.lat,
        lng: firstResult.lon,
      });
      setLocations([firstResult]);
    }
  };

  useEffect(() => {
    if (locations.length) {
      const [location] = locations;
      const latLng = `${location.lat}, ${location.lon}`;

      setLatitude(`${location.lat}`);
      setLongitude(`${location.lon}`);

      console.log(`Updated location: ${latLng}`);
    }
  }, [locations]);

  const fetchDataGuru = useCallback(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://devmyproject.site/guru/${checkId}`,
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
      params: {},
    })
      .then((response) => {
        const {
          Avatar,
          Email,
          Nama,
          Gelar,
          Ijazah,
          Jadwal,
          latitude,
          longitude,
          LinkedIn,
          LokasiAsal,
          MetodeBljr,
          Pelajaran,
          Pendidikan,
          Pengalaman,
          Tarif,
          Telepon,
          TentangSaya,
        } = response.data.data;

        setAvatar(Avatar);
        setEmail(Email);
        setNama(Nama);
        setGelar(Gelar);
        setIjazah(Ijazah);
        setJadwal(Jadwal);
        setLatitude(latitude);
        setLongitude(longitude);
        setLinkedIn(LinkedIn);
        setLokasiAsal(LokasiAsal);
        setMetodeBljr(MetodeBljr);
        setPelajaran(Pelajaran);
        setPendidikan(Pendidikan);
        setPengalaman(Pengalaman);
        setTarif(Tarif);
        setTELEPON(Telepon);
        setTentangSaya(TentangSaya);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchDataGuru();
  }, []);

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof EditTeacher;
    for (key in EditTeacher) {
      formData.append(key, EditTeacher[key]);
    }

    console.log(formData);

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
          title: "Data Berhasil Diupdate",
          text: message,
          showCancelButton: false,
        });
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Data Gagal Diupdate",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchDataGuru());
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof EditTeacher
  ) => {
    let temp = { ...EditTeacher };
    temp[key] = value;
    setEditTeacher(temp);
  };

  const handlePostJadwal = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();

    const body = {
      tanggal,
      jam,
    };

    axios
      .post("https://devmyproject.site/jadwal", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data, message } = res.data;

        MySwal.fire({
          title: "Berhasil Menambah Jadwal",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Gagal Menambah Jadwal",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="w-full min-h-screen flex lg:flex-row flex-col gap-20 lg:-mx-60 -mx-0 mt-16">
          <div className="flex flex-col lg:w-[25vw] w-full">
            <h1 className="text-[32px] font-extrabold text-center">
              Perbarui Profil Anda
            </h1>

            <img src={Avatar} className="w-3/6 mx-auto mt-8" />

            <p className="text-center mt-2 text-[16px] text-slate-400 ">
              * Uk. Foto maks 600 x 600 pixels
            </p>
            <CustomInput
              id="input-photo"
              type="file"
              className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-5 border-none"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setAvatar(
                  URL.createObjectURL(e.currentTarget.files[0])
                );
                handleChange(e.currentTarget.files[0], "avatar");
              }}
            />
            <label className="label mt-5">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-full font-semibold mt-2 text-label">
                Tarif / Jam
              </span>
            </label>
            <CustomInput
              id="input-tarif"
              type="number"
              defaultValue={Tarif}
              onChange={(e) =>
                handleChange(e.target.value, "tarif")
              }
              className="input flex justify-center w-10/12 lg:w-full mx-auto bg-white  border-gray-300"
              placeholder="Rp. 500000 "
            />
            <div className="flex flex-col w-10/12 lg:w-full mt-5">
              <div className="flex flex-rows w-full gap-2">
                <label className="label w-6/12">
                  <span className="label-text text-[16px] mx-auto w-10/12 lg:w-11/12 font-semibold  text-label">
                    Spesialisasi Mapel
                  </span>
                </label>
                <label className="label w-11/12">
                  <span className="label-text text-[16px] w-10/12 lg:w-11/12 font-semibold  text-label">
                    Pendidikan
                  </span>
                </label>
              </div>

              <div className="flex flex-rows w-full gap-2">
                <CustomInput
                  id="input-tarif"
                  type="text"
                  onChange={(e) =>
                    handleChange(e.target.value, "pelajaran")
                  }
                  defaultValue={Pelajaran}
                  className="input flex justify-center p-2 w-10/12 lg:w-6/12 mx-auto bg-white border-2 border-gray-300"
                  placeholder="Matematika"
                />
                <CustomInput
                  id="input-pendidikan"
                  type="text"
                  onChange={(e) =>
                    handleChange(e.target.value, "pendidikan")
                  }
                  defaultValue={Pendidikan}
                  className=" input flex justify-center p-2 w-10/12 lg:w-11/12 mx-auto bg-white border-2 border-gray-300"
                  placeholder="Sekolah Menengah Atas"
                />
              </div>
            </div>
            <label className="label">
              <span className="label-text text-[18px] w-10/12 lg:w-full mx-auto font-semibold mt-5 text-label">
                Upload Ijazah
              </span>
            </label>
            <CustomInput
              id="input-ijazah"
              type="file"
              className="file-input  w-10/12 lg:w-full h-10 flex justify-center bg-white mx-auto mt-2 border-none"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setIjazah(
                  URL.createObjectURL(e.currentTarget.files[0])
                );
                handleChange(e.currentTarget.files[0], "ijazah");
              }}
            />

            <form onSubmit={(e) => handlePostJadwal(e)}>
              <h1 className="text-center lg:mt-20 mt-10 text-xl font-semibold">
                Atur Waktu Mengajar
              </h1>

              <div className="flex flex-row w-full  mt-4 gap-5">
                <CustomInput
                  id="date"
                  type="date"
                  className=" px-4 w-7/12 h-10 rounded-xl text-[14px]"
                  defaultValue={Jadwal}
                  onChange={(e) => setTanggal(e.target.value)}
                />

                <CustomInput
                  id="time"
                  type="time"
                  className=" w-4/12 h-10 px-4 rounded-xl text-[14px]"
                  defaultValue={jam}
                  onChange={(e) => setJam(e.target.value)}
                />
              </div>
            </form>
            <h1 className="text-center mt-10 text-xl font-semibold">
              Atur Tempat Mengajar
            </h1>
            <div className="flex flex-rows  w-10/12 lg:w-8/12 mx-auto mt-5"></div>
            <CustomInput
              id="input-Latitude"
              defaultValue={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <CustomInput
              id="input-Longitude"
              defaultValue={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
            <form onSubmit={handleSearchMap} className="mb-10">
              <CustomInput
                id="search-lokasi"
                type="text"
                placeholder="Search Your Location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <CustomButton
                id="btn-pencarian-lokasi"
                type="submit"
                className="text-black"
                label="search"
              />
            </form>

            <MapContainer
              center={mapCenter}
              zoom={zoom}
              scrollWheelZoom={scrollWheelZoom}
            >
              <TileLayer
                id="input-map"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <DraggableMarker
                setMapCenter={setMapCenter}
                setLocations={setLocations}
              />
            </MapContainer>

            <div className="flex justify-center pr-10 mt-">
              <CustomButton
                id="input-tempat-mengajar"
                label="Atur Jadwal Mengajar"
                className="py-4 px-6 bg-slate-900 text-white text-lg rounded-xl mt-10"
                onClick={(e: any) => handlePostJadwal(e)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-[38vw] w-full">
            <label className="label">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                Nama Lengkap
              </span>
            </label>
            <CustomInput
              id="input-nama"
              type="text"
              defaultValue={Nama}
              onChange={(e) =>
                handleChange(e.target.value, "nama")
              }
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="contoh : Lydia Kumala"
            />

            <label className="label mt-4">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                Gelar
              </span>
            </label>
            <CustomInput
              id="input-gelar"
              type="text"
              defaultValue={Gelar}
              onChange={(e) =>
                handleChange(e.target.value, "gelar")
              }
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="S1 Pendidikan Matematik "
            />
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                  Tentang Saya
                </span>
              </label>
              <textarea
                id="input-tentang-saya"
                defaultValue={TentangSaya}
                onChange={(e) =>
                  handleChange(e.target.value, "tentang_saya")
                }
                className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 mx-auto bg-white"
                placeholder="CumLaude Grade (GPA: 3.87 out of 4) ||  Curriculum: IB, IGCSE, O Level, AS/A Level, AP, SAT, ACT and National Curriculum."
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                  Pengalaman
                </span>
              </label>
              <textarea
                id="input-pengalaman"
                defaultValue={Pengalaman}
                onChange={(e) =>
                  handleChange(e.target.value, "pengalaman")
                }
                className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 mx-auto bg-white"
                placeholder=" Bachelor's Degree with more than 10 years experienced teaching math from primary, secondary, until senior.
                
                "
              ></textarea>
            </div>
            <p></p>

            <div className="flex flex-rows w-10/12 lg:w-9/12 mx-auto mt-5 lg:gap-5 gap-2">
              <div className="flex flex-col w-5/12">
                <label className="label">
                  <span className="label-text text-[16px] font-semibold">
                    Lokasi Asal
                  </span>
                </label>

                <CustomInput
                  id="input-lokasi"
                  type="text"
                  defaultValue={LokasiAsal}
                  onChange={(e) =>
                    handleChange(e.target.value, "lokasi_asal")
                  }
                  className="input px-2 lg:text-[16px] text-[14px] flex justify-center w-full bg-white border-2 border-gray-300"
                />
              </div>

              <div className="w-6/12">
                <label className="label">
                  <span className="label-text text-[16px] font-semibold  text-navy">
                    Metode Belajar
                  </span>
                </label>
                <select
                  defaultValue={"DEFAULT"}
                  id="input-role"
                  className="select select-bordered w-11/12 border-2 bg-white font-normal text-[16px]"
                  name="option"
                  onChange={(e) =>
                    handleChange(e.target.value, "metode_belajar")
                  }
                >
                  <option value="DEFAULT" disabled>
                    {MetodeBljr === "" ? "Belum Dipilih" : MetodeBljr}
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

              {/* <div className="flex flex-rows w-4/12 mt-auto">
                <div className="form-control flex flex-row items-end">
                  <CustomInput
                    id="input-checkbox-online"
                    name="online"
                    type="checkbox"
                    checked={metode_belajar === "online"}
                    onChange={(e) =>
                      handleChangeCheckbox("online")
                    }
                    className="checkbox lg:w-6 w-5 lg:h-6 h-5"
                  />

                  <label className="ml-1">
                    <span className="font-semibold text-[14px]">
                      Online
                    </span>
                  </label>
                </div>

                <div className="flex flex-rows w-3/12 mt-auto">
                  <div className="form-control flex flex-row items-end">
                    <CustomInput
                      id="input-checkbox-offline"
                      name="offline"
                      type="checkbox"
                      checked={metode_belajar === "offline"}
                      onChange={(e) =>
                        handleChangeCheckbox("offline")
                      }
                      className="checkbox lg:w-6 w-5 lg:h-6 h-5 lg:ml-4 ml-2"
                    />

                    <label className="ml-1">
                      <span className="font-bold lg:text-[18px] text-[14px]">
                        Offline
                      </span>
                    </label>
                  </div>
                </div>
              </div> */}
            </div>

            <label className="label mt-4">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold mt-2">
                No.HP
              </span>
            </label>

            <CustomInput
              id="input-handphone"
              type="number"
              defaultValue={Telepon}
              onChange={(e) => setTelepon(e.target.value)}
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="0822XXXXX "
            />
            <label className="label mt-4">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                Email
              </span>
            </label>
            <CustomInput
              id="input-email"
              type="text"
              defaultValue={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="@johndoe@gmail.com "
            />
            <label className="label mt-4">
              <span className="label-text text-[16px] mx-auto w-10/12 lg:w-9/12 font-semibold">
                Profil Linkedin
              </span>
            </label>
            <CustomInput
              id="input-linkedin"
              type="text"
              defaultValue={LinkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="linkedin/johndoe "
            />
            <div className="flex justify-center mt-16">
              <CustomButton
                id="btn-update-teacher"
                label="Perbarui"
                className="text-white  w-10/12 lg:w-6/12 py-3 px-16 font-normal border-none text-xl bg-slate-900 rounded-xl "
                onClick={(e: any) => handleUpdate(e)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export {
  ProfileStudent,
  TabsContentForTeacherPage,
  EditProfileTeacher,
  ProfileTeacher,
};
