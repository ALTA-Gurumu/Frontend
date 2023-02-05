import Profil from "../assets/profil.jpg";
import Profil2 from "../assets/profil2.webp";

import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";

import avatarImg from "../assets/avatar2.webp";

import { FaRegEdit } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";
import { MdStars } from "react-icons/md";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import openMap from "../assets/google-maps.webp";

import { Tabs, Tab, Classes } from "@blueprintjs/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef } from "react";
import { useMemo, useState, useCallback } from "react";
import { InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { DataTypesGuru } from "../utils/DataTypes";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useParams } from "react-router";

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

          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box lg:w-9/12 w-10/12 max-w-full lg:pl-10 lg:p-5 p-7 shadow-xl">
              <label htmlFor="my-modal-5" className="absolute right-5 top-4">
                <IoMdCloseCircleOutline className="text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7" />
              </label>
              <EditProfilStudent />
            </div>
          </div>
          <div
            className=" w-32 h-32 lg:mt-12 mt-24 border border-[#EFEFEF] rounded-full overflow-hidden mt- bg-no-repeat bg-cover"
            style={{ backgroundImage: `URL(${Profil})` }}
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
                <span className=" pl-[6px] font-normal"> : 089566787765</span>
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
    <div className="flex lg:flex-row flex-col-reverse">
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

            <InputIcon id="input-handphone" placeholder="089788970987" />
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
        <p className="text-[#112B3C] text-[34px] font-semibold">Ubah Profil</p>
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

const center = {
  lat: 51.505,
  lng: -0.09,
};

const DraggableMarker = () => {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: any = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

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

const TabsContentForTeacherPage = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div>
          <Tabs
            defaultSelectedTabId="3"
            className={`${Classes.COMPACT} w-11/12 mx-auto min-h-screen mt-20 `}
            renderActiveTabPanelOnly={true}
          >
            <Tab
              id="1"
              title="Profil"
              className="pl-12 pr-12 pb-2 text-xl font-bold mx-auto "
              panel={
                <div className="w-full min-h-screen text-sm font-normal">
                  <ProfileTeacher />
                </div>
              }
            />
            <Tab
              id="2"
              className="pl-12 pr-12 pb-2 text-xl font-bold mx-auto"
              title="Edit Profile"
              panel={
                <div className="w-full min-h-screen text-sm font-normal">
                  <EditProfileTeacher />
                </div>
              }
            />
          </Tabs>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

const ProfileTeacher = () => {
  const { guru_id } = useParams();
  const [teacher, setTeacher] = useState<DataTypesGuru[]>([]);
  const [, setCookie] = useCookies(["token"]);
  const [cookie, removeCookie] = useCookies(["token"]);
  const CheckToken = cookie.token;

  // const fetchData = useCallback(() => {
  //   axios({
  //     method: "GET",
  //     url: `https://devmyproject.site/guru/${guru_id}`,
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySUQiOjl9.tts0-h8yVc0F32LZbSCqU5umPcvrQ6uR9L7M4YTcCig`,
  //     },
  //     params: {},
  //   })
  //     .then((response) => {
  //       const ApiResponse = response.data;
  //       setTeacher(ApiResponse.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <div className="flex flex-col p-8">
      <div className="flex lg:flex-row flex-col lg:items-start items-center w-full mt-10">
        <div className="flex flex-col items-center lg:w-4/12 w-11/12 lg:p-5 p-0 ">
          <div className="flex flex-col w-11/12 lg:h-[30rem] items-center rounded-3xl pb-4 bg-white text-[#424242] shadow-xl">
            {teacher.map((item, idx) => {
              return (
                <div key={idx}>
                  {item.Email}
                  <img
                    src={item.Avatar}
                    alt="profil.webp"
                    className="lg:w-32 w-28 lg:h-32 h-28 rounded-full lg:mt-10 mt-5 mb-2"
                  />
                  {item.Nama}
                </div>
              );
            })}

            <p className="lg:text-[36px] text-[28px] font-semibold mt-5 mb-5">
              {" "}
              John Doe
            </p>

            <div className="flex gap-1 mb-4">
              <MdStars className="w-5 h-5 text-[#F66B0E]" />
              <p className="text-[14px]">{`${5} (6 ulasan)`} </p>
            </div>
            <p className="font-semibold lg:text-[16px] text-[14px] pr-8 mb-5">
              Tarif Belajar/Jam <span className="lg:ml-10 ml-2">Rp.{5000}</span>
            </p>
            <CustomButton
              id="btn-cekjadwal"
              className="flex items-center justify-center gap-2 lg:w-60 w-52 bg-component hover:bg-navy border-none rounded-2xl p-2 lg:text-[20px] text-[16px] text-white font-semibold"
              icon={<RiMessage2Fill className="lg:w-6 w-5 lg:h-6 h-5" />}
              label={"Cek Jadwal"}
            />

            <p className="text-zinc-800 mt-6">Mata Pelajaran dan Tingkatan</p>
            <div className="flex text-[#637381] gap-8 text-[14px] mt-2">
              <p className="py-1 px-2 bg-[#b3b3b3] rounded-lg">Matematika</p>
              <p className="py-1 px-2 bg-[#b3b3b3]  rounded-lg">
                Sekolah Dasar
              </p>
            </div>
          </div>

          <p className="text-[24px] text-zinc-800 font-semibold mt-10">
            Tentang Kursus
          </p>
          <p className="px-5 py-3 text-lg  bg-white shadow-lg rounded-3xl mt-5">
            Sekolah Dasar
          </p>
        </div>

        <div className="lg:w-9/12 w-11/12 py-2 lg:pl-24 pl-0 lg:pr-20 pr-0 lg:mt-0 mt-10">
          <p className="text-zinc-900 lg:text-[36px] text-[28px] font-extrabold">
            Bachelor Degree of Mathematics
          </p>
          <p className="text-[14px] text-zinc-500 mt-5">
            CumLaude Grade (GPA: 3.87 out of 4) || Curriculum: IB, IGCSE, O
            Level, AS/A Level, AP, SAT, ACT and National Curriculum.
          </p>
          <p className="font-bold text-[28px] text-zinc-900 mt-10">
            Tentang John Doe
          </p>
          <ul className="lg:text-[16px] text-[15px]">
            <li className="flex gap-4 mt-8">
              <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />
              Bachelor's Degree with more than 10 years experienced teaching
              math from primary, secondary, until senior.
            </li>
            <li className="flex gap-4 mt-8">
              <BsCheckCircle className="lg:w-16 w-32 lg:h-16 h-32 text-blue-600 lg:pb-0 pb-24" />
              Experienced Teaching All Math Levels (AP Calculus, Pre-Algebra,
              Algebra 1, Algebra 2, Geometry, Trigonometry, SAT, ACT, etc) for
              any curriculums such as Advanced Placement, IB (HL and SL),
              Cambridge (IGCSE, O Level and A Level).
            </li>
            <div className="mt-5">
              <label htmlFor="my-modal-3" className="mt-10">
                Baca Selengkapnya ...
              </label>

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
              </div>
            </div>
          </ul>

          <p className=" mt-10 mb-5 text-[24px] font-semibold">Lokasi Kursus</p>
          <div className="flex flex-wrap gap-10">
            <div className="flex gap-2 py-2 px-5 rounded-2xl lg:-mb-0 -mb-5 bg-white shadow-lg">
              <FaMapMarkerAlt className="w-5 h-5" />
              <p>Sukabumi</p>
            </div>
            <div className="flex gap-2 py-2 px-5 rounded-2xl bg-white shadow-lg">
              <AiFillHome className="w-5 h-5" />
              <p>Offline / Tatap Muka</p>
            </div>
          </div>

          <p className="mt-5 flex w-64 gap-2 py-2 px-5 rounded-2xl bg-white shadow-lg">
            <FaLaptop className="w-5 h-5" />
            Online / Zoom Meeting
          </p>

          <p className="text-[24px] text-zinc-900 font-semibold mt-10 mb-5">
            Ulasan
          </p>

          <div className="bg-white rounded-xl py-4 px-10 text-[16px] mb-5 pb-10 pt-10">
            <div className="flex items-center gap-4">
              <img
                src={Profil2}
                alt="profil.webp"
                className="w-8 h-8 rounded-full"
              />
              <p className="font-semibold">Brandon</p>
              <div className="flex items-center gap-1 ml-auto">
                <MdStars className="text-component" />5
              </div>
            </div>
            <p className="mt-4 lg:text-[16px] text-[15px]">
              Sempurna! Thanks to him, my daughter test score improve a lot now.
              I recommend to all parents who wants to boost their child
              understanding and confidence in Math
            </p>
          </div>
          <div className="bg-white rounded-xl py-4 px-10 text-[16px]">
            <div className="flex items-center gap-4">
              <img
                src={Profil2}
                alt="profil.webp"
                className="w-8 h-8 rounded-full"
              />
              <p className="font-semibold">Brandon</p>
              <div className="flex items-center gap-1 ml-auto">
                <MdStars className="text-component" />5
              </div>
            </div>
            <p className="mt-4 lg:text-[16px] text-[15px]">
              Sempurna! Thanks to him, my daughter test score improve a lot now.
              I recommend to all parents who wants to boost their child
              understanding and confidence in Math
            </p>
          </div>
          <p className="mt-5">Lihat lebih banyak ......</p>
        </div>
      </div>
    </div>
  );
};

const EditProfileTeacher = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [checkbox, setCheckBox] = useState("online");

  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <div className="flex lg:flex-row flex-col w-full min-h-screen mt-10">
          <div className="flex-1 flex-col ">
            <h1 className="text-3xl font-bold text-center mt-5">
              Perbarui Profil Anda
            </h1>
            <img src={avatarImg} className="w-2/6 mx-auto mt-5" />
            <p className="text-center mt-5 text-md text-slate-400 ">
              * Uk. Foto maks 400 x 400 pixels
            </p>
            <CustomInput
              id="input-photo"
              type="file"
              className="file-input  w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-slate-100 mx-auto mt-5 border-none"
            />
            <label className="label mt-5">
              <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold mt-2 text-label">
                Tarif / Jam
              </span>
            </label>
            <CustomInput
              id="input-tarif"
              type="number"
              className="input flex justify-center w-10/12 lg:w-8/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="Rp. 500.000 "
            />
            <div className="flex flex-rows  w-10/12 lg:w-8/12 mx-auto border-2 mt-5">
              <div className="flex flex-col w-full">
                <label className="label">
                  <span className="label-text text-xl   font-semibold">
                    Spesialisasi Mapel
                  </span>
                </label>
                <select className="select select-bordered w-11/12  bg-white">
                  <option disabled selected>
                    Pilih Salah Satu
                  </option>
                  <option>Bahasa Inggris</option>
                  <option>Matematika</option>
                  <option>Bahasa Mandarin</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="label">
                  <span className="label-text text-xl w-full font-semibold text-label">
                    Jenjang Pendidikan
                  </span>
                </label>
                <select className="select select-bordered w-full bg-white">
                  <option disabled selected>
                    Pilih Salah Satu
                  </option>
                  <option>Sekolah Dasar</option>
                  <option>Sekolah Menengah Pertama</option>
                  <option>Sekolah Menengah Atas</option>
                </select>
              </div>
            </div>
            <label className="label">
              <span className="label-text text-xl  w-10/12 lg:w-8/12 mx-auto font-semibold mt-5 text-label">
                Upload Ijazah
              </span>
            </label>
            <CustomInput
              id="input-ijazah"
              type="file"
              className="file-input  w-10/12 lg:w-8/12  flex justify-center bg-slate-100 mx-auto mt-2 border-none"
            />
            <h1 className="text-center mt-10 text-xl font-semibold">
              Atur Waktu Mengajar
            </h1>
            <div className="flex flex-rows  w-10/12 lg:w-8/12 mx-auto mt-5">
              <DatePicker
                id="picker-calendar"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                className="px-3 py-2 w-11/12 text-lg font-normal"
              />
              <DatePicker
                id="picker-jam"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="px-3 py-2  text-lg font-normal"
              />
            </div>
            <h1 className="text-center mt-10 text-xl font-semibold">
              Atur Tempat Mengajar
            </h1>

            <div className="collapse">
              <CustomInput id="checkbox" type="checkbox" />
              <div className="collapse-title text-xl font-bold text-center flex flex-rows justify-center mt-2">
                <img src={openMap} className="w-2/12 justify-center" />
              </div>
              <div className="collapse-content">
                <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    id="input-map"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
                <div className="flex justify-center pr-10 mt-">
                  <CustomButton
                    id="input-tempat-mengajar"
                    label="Input Tempat Mengajar"
                    className="py-4 px-6 bg-slate-900 text-white text-lg rounded-xl mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <label className="label mt-5">
              <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold mt-2">
                Gelar
              </span>
            </label>
            <CustomInput
              id="input-gelar"
              type="text"
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="S1 Pendidikan Matematik "
            />
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold">
                  Tentang Saya
                </span>
              </label>
              <textarea
                id="input-tentang-saya"
                className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 mx-auto bg-white"
                placeholder="CumLaude Grade (GPA: 3.87 out of 4) ||  Curriculum: IB, IGCSE, O Level, AS/A Level, AP, SAT, ACT and National Curriculum."
              ></textarea>
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold">
                  Pengalaman
                </span>
              </label>
              <textarea
                id="input-pengalaman"
                className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 mx-auto bg-white"
                placeholder="- Bachelor's Degree with more than 10 years experienced teaching math from primary, secondary, until senior.
                
                "
              ></textarea>
            </div>
            <p></p>

            <div className="flex flex-rows  w-10/12 lg:w-9/12 mx-auto border-2 mt-5">
              <div className="flex flex-col w-full">
                <label className="label">
                  <span className="label-text text-xl  font-semibold">
                    Lokasi Asal
                  </span>
                </label>
                <select
                  id="select-lokasiasal"
                  className="select select-bordered w-11/12  bg-white"
                >
                  <option disabled selected>
                    Pilih Kota
                  </option>
                </select>
              </div>

              <div className="flex flex-rows w-full mt-14">
                <div className="form-control ">
                  <CustomInput
                    id="input-checkbox-online"
                    name="online"
                    type="checkbox"
                    checked={checkbox === "online"}
                    onChange={() => setCheckBox("online")}
                    className="checkbox"
                  />
                </div>
                <label className="ml-4">
                  <span className="font-bold text-xl">Online</span>
                </label>
                <div className="form-control ml-10">
                  <CustomInput
                    id="input-checkbox-offline"
                    name="online"
                    type="checkbox"
                    checked={checkbox === "offline"}
                    onChange={() => setCheckBox("offline")}
                    className="checkbox"
                  />
                </div>
                <label className="ml-4">
                  <span className="font-bold text-xl">Offline</span>
                </label>
              </div>
            </div>
            <label className="label mt-5">
              <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold mt-2">
                No.HP
              </span>
            </label>
            <CustomInput
              id="input-handphone"
              type="number"
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="0822XXXXX "
            />
            <label className="label mt-5">
              <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold mt-2">
                Email
              </span>
            </label>
            <CustomInput
              id="input-email"
              type="text"
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="@johndoe@gmail.com "
            />
            <label className="label mt-5">
              <span className="label-text text-xl mx-auto w-10/12 lg:w-9/12 font-semibold mt-2">
                Profil Linkedin
              </span>
            </label>
            <CustomInput
              id="input-linkedin"
              type="text"
              className="input flex justify-center  w-10/12  lg:w-9/12 mx-auto bg-white border-2 border-gray-300"
              placeholder="linkedin/johndoe "
            />
            <div className="flex justify-center mt-5">
              <CustomButton
                id="btn-update-teacher"
                label="Perbarui"
                className="text-white  w-10/12 lg:w-6/12  py-4 px-16 font-normal border-none text-xl bg-slate-900 rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfileStudent, TabsContentForTeacherPage, EditProfileTeacher };
