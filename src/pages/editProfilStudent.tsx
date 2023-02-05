import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import { ProfilType } from "../utils/DataTypes";
import Swal from "../utils/Swal";

import { CustomInput, InputIcon } from "../components/CustomInput";


import Profil2 from "../assets/profil2.webp";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import CustomButton from "../components/CustomButton";

import { CustomInput } from "../components/CustomInput";

const EditProfilStudent = () => {
  const MySwal = withReactContent(Swal);
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [objSubmit, setObjSubmit] = useState<ProfilType>({});
  const [loading, setLoading] = useState<boolean>(false);

  const [nama, setNama] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [gambar, setGambar] = useState<string>("");

  function fetchData() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/CapstoneAltaBE14/GuruMu/1.0.0/siswa"
      )
      .then((res) => {
        const { nama, email, alamat, telepon, avatar } = res.data.data;

        setNama(nama);
        setEmail(email);
        setAlamat(alamat);
        setTelephone(telepon);
        setGambar(avatar);
        console.log(res.data);
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
    <div className="flex lg:flex-row flex-col-reverse">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col items-center lg:w-[50vw] w-[70vw] lg:mt-0 mt-5 text-[16px] text-[#112B3C] font-normal">
          <div>
            <p className="items-start">Nama Lengkap</p>
            <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
              <HiUser className="w-7 h-6" />
              <InputIcon
                id="input-nama-lengkap"
                type="nama-lengkap"
                placeholder={nama}
                defaultValue={nama}
                onChange={(e) => handleChange(e.target.value, "nama")}
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
                placeholder={telephone}
                defaultValue={telephone}
                onChange={(e) => handleChange(e.target.value, "telepon")}
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
                onChange={(e) => handleChange(e.target.value, "email")}
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
                onChange={(e) => handleChange(e.target.value, "alamat")}
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
              setGambar(URL.createObjectURL(e.currentTarget.files[0]));
              handleChange(e.currentTarget.files[0], "avatar");
            }}
          />
          {/* Unggah Foto
       
        <AiOutlineCloudUpload className="w-7 h-6" /> */}
        </div>
      </form>
    </div>
  );
};

export default EditProfilStudent;
