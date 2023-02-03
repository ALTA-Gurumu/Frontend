import React from "react";
import InputProfil from "../components/inputProfil";
import { FaRegEdit } from "react-icons/fa";

function Reservasi() {
  return (
    <div className="flex flex-row text-navy justify-evenly">
      <div>card</div>
      <div>
        <h1 className="font-semibold text-2xl">Reservasi</h1>
        <h2 className="text-lg">Mari belajar dengan john doe</h2>
        <br />
        <p>
          perkenalkan diri anda, dan ceritakan apa yang ingin
          anda pelajari
        </p>
        <p className="text-xs">Opsional</p>
        <form>
          <div className="flex  border w-[15rem] h-20 border-[#424242] rounded-md ">
            <div className=" pt-3 pl-1">
              <FaRegEdit className="text-slate-400" />
            </div>
            <textarea
              maxLength={300}
              className="w-[25rem] h-full  pt-2 pl-2"
              placeholder="Tulis pesan anda disini"
            ></textarea>
          </div>
          <h2 className="text-lg font-bold">Format Khusus</h2>
          {/* select online/offline */}
          <h2 className="text-lg font-bold">
            Tanggal kursus pertama
          </h2>
          {/* input select */}
          <h2 className="text-lg font-bold">Infomasi kontak</h2>
          <p>
            kontak yang anda berikan hanya akan dibagikan ke guru
            terkait
          </p>
          <p>Alamat</p>
          <div className="border w-[15rem] h-12 border-[#424242] rounded-lg ">
            <InputProfil
              id="input-reservasi"
              type={"text"}
              placeholder="Sukabumi, Jawa Barat"
              className="w-full h-full rounded-lg pl-3"
            />
          </div>
          <p>No.Hp</p>
          <div className="border w-[15rem] h-12 border-[#424242] rounded-lg ">
            <InputProfil
              id="input-reservasi"
              type={"number"}
              placeholder="08122334345"
              min={"0"}
              className="w-full h-full rounded-lg pl-3"
            />
          </div>
          {/* button */}
        </form>
      </div>
    </div>
  );
}

export default Reservasi;
