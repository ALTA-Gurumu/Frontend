import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import EditProfilStudent from "./editProfilStudent";

import Profil from "../assets/profil.jpg";
import Profil2 from "../assets/profil2.webp";

import { FaRegEdit } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

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

export default ProfileStudent;
