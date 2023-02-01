import InputProfil from "../components/inputProfil";
import ButtonProfil from "../components/buttonProfil";
import Layout from "../components/Layout";

import Profil2 from "../assets/profil2.webp";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const EditProfilStudent = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse">
      <div className="flex flex-col items-center lg:w-[50vw] w-[70vw] lg:mt-0 mt-5">
        <div>
          <p className="items-start">Nama Lengkap</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <HiUser className="w-7 h-6" />
            <InputProfil id="input-profil" placeholder="Diva Lesti Pujiana" />
          </div>
        </div>

        <div>
          <p className="items-start">Handphone</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <BsPhoneFill className="w-7 h-6" />
            <InputProfil id="input-profil" placeholder="089788970987" />
          </div>
        </div>

        <div>
          <p className="items-start">Email</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <MdOutlineAlternateEmail className="w-7 h-6" />
            <InputProfil
              id="input-profil"
              placeholder="divalestipujiana@gmail.com"
            />
          </div>
        </div>

        <div>
          <p className="items-start">Alamat</p>
          <div className="flex border border-[#424242] rounded-xl lg:w-96 w-72 items-center p-2 gap-2 mt-1 mb-4">
            <textarea
              className="textarea pl-1 pt-0 w-full h-32"
              placeholder="Ds. Kebun Bumi Bulat, Garum, Blitar, Jawa Timur"
            ></textarea>
          </div>
        </div>
        <div className="font-semibold text-[18px] mt-4">
          <ButtonProfil />
        </div>
      </div>

      <div className="flex flex-col items-center lg:w-[50vw] w-[70vw] lg:pt-16 pt-0 lg:mt-0 mt-2">
        <p className="text-[#112B3C] text-[34px] font-semibold">Ubah Profil</p>
        <div className=" w-32 h-32 lg:mt-5 mt-5 mb-5 border border-[#EFEFEF] rounded-full overflow-hidden">
          <img src={Profil2} alt="profil.jpg" />
        </div>
        <p className="text-[14px] text-[#C0B7B7]">
          *Uk.foto maks 400 x 400 pixels
        </p>
        <p className="flex text-[#F66B0E]">
          Unggah Foto
          <AiOutlineCloudUpload className="w-7 h-6" />
        </p>
      </div>
    </div>
  );
};

export default EditProfilStudent;
