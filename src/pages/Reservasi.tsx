import React, { useState } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tabs, Tab, Classes } from "@blueprintjs/core";

import { CustomInput } from "../components/CustomInput";
import CustomBotton from "../components/CustomButton";
import Profil2 from "../assets/profil2.webp";

import { FaRegEdit } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

function Reservasi() {
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className="flex flex-col  lg:flex-row text-navy justify-center items-center bg-white w-full  lg:h-[50rem] lg:items-start gap-10 lg:gap-24 ">
      <div className="lg:w-[20rem]">
        <div className="flex flex-col w-full items-center rounded-2xl pb-4 bg-white text-[#424242] shadow-xl">
          <img
            src={Profil2}
            alt="profil.webp"
            className="lg:w-32 w-28 lg:h-32 h-28 rounded-full lg:mt-10 mt-5 mb-2"
          />
          <p className="lg:text-[36px] text-[28px] font-semibold  ">John Doe</p>
          <div className="flex gap-1 mb-4">
            <MdStars className="w-5 h-5 text-component" />
            <p className="text-[14px]">{`${5} (6 ulasan)`} </p>
          </div>
          <p className="font-semibold lg:text-[16px] text-[14px] pr-8 mb-5">
            Tarif Belajar/Jam <span className="ml-2">Rp.{5000}</span>
          </p>
          <p className="text-zinc-800">Mata Pelajaran dan Tingkatan</p>
          <div className="flex text-[#637381] gap-8 text-[14px] mt-2">
            <p className="py-1 px-2 bg-[#b3b3b3] rounded-lg">Matematika</p>
            <p className="py-1 px-2 bg-[#b3b3b3]  rounded-lg">Sekolah Dasar</p>
          </div>
        </div>
        <br />
        <div className="flex gap-1">
          <RiMessage2Fill className="w-5 h-5 text-navy" />
          <p className="font-semibold">John Doe merespon pesan dengan cepat</p>
        </div>
      </div>
      <div className="lg:w-[25rem]">
        <h1 className="font-semibold text-2xl">Reservasi</h1>
        <h2 className="text-lg">Mari belajar dengan john doe</h2>
        <br />
        <p>
          perkenalkan diri anda, dan ceritakan apa yang ingin
          <br />
          anda pelajari
        </p>
        <p className="text-xs pt-2">Opsional</p>
        <form>
          <div className="flex  border w-full h-[6rem] border-[#424242] rounded-md ">
            <div className=" pt-2 pl-2">
              <FaRegEdit className="text-slate-400 w-4 h-4" />
            </div>
            <textarea
              id="input-perkenalan-diri"
              maxLength={300}
              className="w-full rounded-lg h-full  pt-2 pl-2"
              placeholder="Tulis pesan anda disini"
            ></textarea>
          </div>
          <h2 className="text-lg pt-3 font-bold">Format Khusus</h2>
          <Tabs
            className=" w-11/12 mx-auto"
            defaultSelectedTabId="2"
            renderActiveTabPanelOnly={true}
          >
            <Tab
              id="tab-1"
              title="Tatap muka"
              className="  text-center font-semibold text-base text-slate-500 mt-2 lg:pl-8 lg:pr-8"
              panel={
                <div className="mt-5 bg-white shadow-xl h-40 rounded-lg">
                  maps
                </div>
              }
            />
            <Tab
              id="tab-2"
              title="Online"
              className="  text-center font-semibold text-base text-slate-500 mt-2 lg:pl-8 lg:pr-8"
            />
          </Tabs>
          <br />
          <h2 className="text-lg font-bold pb-3">Tanggal kursus pertama</h2>
          <div className="flex flex-row gap-6">
            <select
              id="input-tanggal"
              value={selectedDate}
              onChange={handleDateChange}
              className="border border-[#424242] rounded-md"
            >
              <option value="">Pilih Hari & Tanggal</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select
              id="input-jam"
              value={selectedHour}
              onChange={handleHourChange}
              className="border border-[#424242] rounded-md"
            >
              <option value="">Pilih Jam</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <br />
          <h2 className="text-lg font-bold">Infomasi kontak</h2>
          <p>
            kontak yang anda berikan hanya akan dibagikan ke
            <br />
            guru terkait
          </p>
          <br />
          <p className="font-semibold">Alamat</p>
          <div className="border w-full h-12 border-[#424242] rounded-lg flex">
            <MdLocationOn className="text-[#424242] self-center w-7 h-7" />
            <CustomInput
              id="input-alamat"
              type={"text"}
              placeholder="Sukabumi, Jawa Barat"
              className="w-full h-full rounded-lg pl-3"
            />
          </div>
          <br />
          <p className="font-semibold">No.Hp</p>
          <div className="border w-full h-12 border-[#424242] rounded-lg flex">
            <MdPhoneIphone className="text-[#424242] self-center w-7 h-7" />
            <CustomInput
              id="input-no-hp"
              type={"number"}
              placeholder="08122334345"
              min={"0"}
              className="w-full h-full rounded-lg pl-3"
            />
          </div>
          <br />
          <CustomBotton
            id="btn-pembayaran"
            label="Lanjut pembayaran"
            className="bg-black text-white w-full h-10 text-base rounded-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Reservasi;
