import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";
import CustomButton from "../components/CustomButton";
import { CompleteTeacher } from "../utils/DataTypes";
const MySwal = withReactContent(Swal);
import { MdStars } from "react-icons/md";
import openMap from "../assets/google-maps.webp";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Link } from "react-router-dom";

interface Reservasi {
  pesan?: string;
  metode_belajar?: string;
  alamat_siswa?: string;
  telepon_siswa?: string;
  metode_pembayaran?: string;
}

type useParamdsId = {
  guru_id: number;
};

export default function CheckBayar() {
  const [cookie, removeCookie] = useCookies(["token", "role", "guru_id"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.guru_id;

  const [loading, setLoading] = useState<boolean>(false);

  const { guru_id }: any = useParams();
  const [pesan, setPesan] = useState<string>("");
  const [metode_belajar, setMetode_Belajar] = useState<string>("");
  const [tanggal, setTanggal] = useState<string>("");
  const [jam, setJam] = useState<string>("");
  const [alamat_siswa, setAlamatSiswa] = useState<string>("");
  const [telepon_siswa, setTeleponSiswa] = useState<string>("");
  const [metode_pembayaran, setMetodePembayaran] = useState<string>("");
  const [data, setData] = useState([]);
  const [jadwal, setJadwal] = useState<CompleteTeacher>({});
  const [Avatar, setAvatar] = useState<string>("");
  const [Nama, setNama] = useState<string>("");
  const [Tarif, setTarif] = useState<string>("");
  const [Pelajaran, setPelajaran] = useState<string>("");
  const [bankTransfer, setBankTransfer] = useState<string>("");

  const handleChangeTanggal = (event: any) => {
    setTanggal(event.target.value);
  };

  const handleChangeJam = (event: any) => {
    setJam(event.target.value);
  };

  const handleChangeMetodeBelajar = (event: any) => {
    setMetode_Belajar(event.target.value);
  };

  const handleChangeBank = (event: any) => {
    setMetodePembayaran(event.target.value);
  };

  //   const [guru_id, setGuruId] = useState<number>(0);

  function fetchJadwal() {
    axios
      .get(`https://devmyproject.site/guru/${guru_id}`)
      .then((res) => {
        const { Avatar, Nama, Tarif, Pelajaran } = res.data.data;
        setAvatar(Avatar);
        setNama(Nama);
        setTarif(Tarif);
        setPelajaran(Pelajaran);
        setJadwal(res.data.data);
        console.log(jadwal);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchJadwal();
  }, []);

  const handleReservasi = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();

    const body = {
      guru_id: +guru_id,
      pesan,
      metode_belajar,
      tanggal,
      jam,
      alamat_siswa,
      telepon_siswa,
      metode_pembayaran,
    };

    console.log(body);

    axios
      .post("https://devmyproject.site/reservasi", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data, message } = res.data;
        localStorage.setItem("data", JSON.stringify(data));
        setData(JSON.parse(localStorage.getItem("data") || ""));
        console.log(body);
        MySwal.fire({
          title: "Berhasil Melakukan Transaksi",
          text: message,
          showCancelButton: false,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log(err.response.data);

        MySwal.fire({
          title: "Gagal Melakukan Transaksi",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative">
          <h3 className="text-xl text-center font-bold">Halaman Reservasi</h3>
          <hr className="mt-5 w-8/12 mx-auto border-2" />
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-full min-h-screen flex flex-row">
            <div className="flex-1 flex-col w-full min-h-scree">
              <div className="w-8/12 rounded-2xl bg-primary shadow-xl h-[30rem] mt-10 shad mx-auto">
                <img src={Avatar} className="w-6/12 mx-auto pt-7" />
                <p className="font-bold text-3xl text-center mt-7">{Nama}</p>
                <p className="flex flex-row justify-center mt-2">
                  <span>
                    <MdStars className="w-6 h-6 text-[#F66B0E] mr-2" />
                  </span>
                  <span className="text-lg font-semibold font-poppins">
                    (6 Ulasan)
                  </span>
                </p>
                <p className="flex justify-around mt-5">
                  <span className="text-lg font-semibold">
                    Tarif Belajar / Jam
                  </span>
                  <span className="text-lg font-semibold">{Tarif}</span>
                </p>
                <p className="text-lg font-bold text-center mt-5">
                  Spelisasi dan Mapel
                </p>
                <p className="mt-5 text-center ">
                  <span className="rounded-xl mr-3 py-3 px-2 bg-slate-300">
                    {Pelajaran}
                  </span>
                  <span className="rounded-xl mr-3 py-3 px-2 bg-slate-300 ">
                    Sekolah Dasar
                  </span>
                </p>
              </div>

              <h2 className="text-md text-center mt-5 font-bold">
                {Nama} merespon pesan dengan cepat
              </h2>
              <h1 className="font-semibold text-xl mt-10 font-poppins ml-10 text-center">
                Pilih Metode Pembayaran
              </h1>

              <div className="flex justify-center">
                <select
                  className="w-8/12 mt-5 border-2  font-poppins font-normal text-lg h-[3rem] p-2"
                  value={metode_pembayaran}
                  onChange={handleChangeBank}
                >
                  <option disabled value="pilih salah satu">
                    Pilih Salah Satu
                  </option>
                  <option value="transfer_va_bca">BCA</option>
                  <option value="transfer_va_bri">BRI</option>
                  <option value="transfer_va_bni">BNI</option>
                  <option value="transfer_va_permata">Permata</option>
                  <option value="qris">Metode Qris</option>
                </select>
              </div>
            </div>
            <div className="flex-1 flex-col w-full min-h-screen">
              <h1 className="font-bold text-3xl ml-5 mt-10">Reservasi</h1>
              <p className="font-semibold text-lg ml-5 mt-2 ">
                Let's thrive with John Doe
              </p>
              <p className="font-normal text-md w-10/12 ml-5">
                Perkenalkan diri anda dan ceritakan apa yang ingin anda pelajari
              </p>
              <div className="form-control mt-5 ">
                <label className="label">
                  <span className="label-text text-xl mx-auto w-10/12 lg:w-11/12 font-semibold">
                    Pesan Saya
                  </span>
                </label>
                <textarea
                  id="input-tentang-saya"
                  onChange={(e) => setPesan(e.target.value)}
                  className="textarea textarea-bordered h-32 w-10/12 lg:w-11/12 mx-auto bg-white"
                  placeholder="Pesan apa yang ingin disampaikan kepada guru...."
                ></textarea>
              </div>
              <h1 className="text-xl mx-auto w-10/12 lg:w-11/12 font-semibold mt-10">
                Format Kursus
              </h1>
              <div className="flex w-full mt-5 ml-5">
                <select
                  value={metode_belajar}
                  onChange={handleChangeMetodeBelajar}
                  className="w-11/12  mt-5 border-2  font-poppins font-normal text-lg h-[3rem] p-2"
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <h1 className="font-semibold text-lg m-5 mt-8">
                Tanggal dan Jam Kursus Pertama
              </h1>
              <div className="w-11/12 flex flex-row  mx-auto ">
                <select
                  className="flex-1 mr-5 border-2  font-poppins font-normal text-lg h-[3rem] p-2"
                  value={tanggal}
                  onChange={handleChangeTanggal}
                >
                  {jadwal.Jadwal?.map((data, index) => (
                    <option key={index} value={data.Tanggal}>
                      {data.Tanggal}
                    </option>
                  ))}
                </select>
                <select
                  className="flex-1 border-2  font-poppins font-normal text-lg h-[3rem] p-2"
                  value={jam}
                  onChange={handleChangeJam}
                >
                  {jadwal.Jadwal?.map((data, index) => (
                    <option key={index} value={data.Jam}>
                      {data.Jam}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-rows  w-10/12 lg:w-11/12 mx-auto mt-5"></div>

              {/* <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      id="input-map"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker />
                  </MapContainer> */}
              {/* <div className="flex justify-center pr-10 mt-">
                <CustomButton
                  id="input-tempat-mengajar"
                  label="Input Tempat Mengajar"
                  className="py-4 px-6 bg-slate-900 text-white text-lg rounded-xl mt-10"
                />
              </div> */}

              <h1 className="font-semibold text-2xl m-5">Informasi Kontak</h1>
              <p className="font-normal text-lg w-11/12 ml-5">
                Kontak yang anda berikan hanya akan dibagikan ke guru terkait
              </p>
              <label className="label mt-5">
                <span className="label-text text-xl mx-auto w-10/12 lg:w-11/12 font-semibold mt-2">
                  Alamat
                </span>
              </label>
              <CustomInput
                id="input-alamat_siswa"
                type="text"
                placeholder="alamat"
                onChange={(e) => setAlamatSiswa(e.target.value)}
                className="input flex justify-center  w-10/12  lg:w-11/12 mx-auto bg-white border-2 border-gray-300"
              />
              <label className="label mt-5">
                <span className="label-text text-xl mx-auto w-10/12 lg:w-11/12 font-semibold mt-2">
                  No. Hp
                </span>
              </label>
              <CustomInput
                id="input-telepon"
                type="text"
                placeholder="telepon"
                onChange={(e) => setTeleponSiswa(e.target.value)}
                className="input flex justify-center  w-10/12  lg:w-11/12 mx-auto bg-white border-2 border-gray-300"
              />
              <div className="flex justify-center pb-10">
                <Link to="/paymentDetails">
                  <CustomButton
                    id="btn-pembayaran"
                    className="px-4 py-2 bg-label text-white rounded-lg mt-8"
                    label="Lanjutkan Pembayaran"
                    onClick={(e: any) => handleReservasi(e)}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <form onSubmit={(e) => handleReservasi(e)}>
        089898989 jakarta
        <CustomInput
          id="input-pesan"
          type="text"
          placeholder="pesan"
          onChange={(e) => setPesan(e.target.value)}
        />
        
        
        <CustomInput
          id="input-alamat_siswa"
          type="text"
          placeholder="alamat"
          onChange={(e) => setAlamatSiswa(e.target.value)}
        />
        <CustomInput
          id="input-telepon"
          type="text"
          placeholder="telepon"
          onChange={(e) => setTeleponSiswa(e.target.value)}
        />
        <CustomInput
          id="input-pembayaran"
          type="text"
          placeholder="metode pembayaran"
          onChange={(e) => setMetodePembayaran(e.target.value)}
        />
        <CustomButton label="submit" />
      </form> */
}
