import React from "react";

import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import InputProfil from "../components/inputProfil";
import Card from "../components/card";

import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

import Profil from "../assets/profil.jpg";
import Profil2 from "../assets/profil2.webp";
import ButtonProfil from "../components/buttonProfil";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="flex gap-2 lg:w-[60vw] w-[90vw] bg-white text-[#112B3C] text-[20px] rounded-xl lg:px-6 px-2 py-2 mt-10  ">
          <div className="flex lg:w-5/12 w-7/12 lg:py-2 py-0 gap-2">
            <IoNewspaperOutline className="w-7 h-7" />
            <InputProfil
              className="input input-ghost lg:text-[18px] text-[16px] h-8 pl-0 w-full max-w-full"
              id="input-searchMapel"
              placeholder="Mata Pelajaran"
            />
          </div>

          <div className="flex w-5/12 lg:py-2 py-0 pl-5 border-l-[1px] border-[#112B3C] gap-2">
            <HiOutlineLocationMarker className="w-7 h-7" />
            <InputProfil
              className="input input-ghost lg:text-[18px] text-[16px] h-8 pl-0 w-full max-w-full"
              id="input-searchLokasi"
              placeholder="Lokasi"
            />
          </div>

          <BiSearchAlt className="lg:w-10 w-7 lg:h-10 h-7 lg:pt-2 pt-0 ml-auto" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full lg:mt-20 mt-14 ">
        <div className="gap-4 grid lg:grid-cols-3 grid-cols-1 lg:w-[90vw] w-[80vw]">
          <Card
            image={Profil2}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />
          <Card
            image={Profil}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />
          <Card
            image={Profil2}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />
          <Card
            image={Profil}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />
          <Card
            image={Profil2}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />{" "}
          <Card
            image={Profil}
            nama={"Iwan"}
            alamat={"Kab. Bululawang"}
            rating={5}
            deskripsi={
              " Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast .....Jurusan sisologi dengan nilai mega cumload, menjadi leader broadcast dan poadcast ..... "
            }
          />
        </div>
      </div>
      <div className="text-center mt-14 mb-20">
        <ButtonProfil
          className="px-4 py-3 text-[20px] rounded-2xl bg-[#F66B0E] text-white"
          label="Lihat lebih banyak guru"
        />
      </div>
    </Layout>
  );
}

export default Home;
