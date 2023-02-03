import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tabs, Tab, Classes } from "@blueprintjs/core";

import EditProfilStudent from "./editProfilStudent";

import CustomButton from "../components/CustomButton";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Layout from "../components/Layout";

import Profil2 from "../assets/profil2.webp";
import Profil from "../assets/profil.jpg";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function HalamanSesiMurid() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="bg-white lg:w-9/12 w-11/12 lg rounded-2xl lg:h-[34rem] mt-20 lg:mb-20 mb-[465px] overflow-hidden mx-auto shadow-xl">
          <h1>
            <div className="h-full">
              <Tabs
                className=" w-11/12 mx-auto pt-4"
                defaultSelectedTabId="3"
                renderActiveTabPanelOnly={true}
              >
                <Tab
                  id="tab-profil"
                  title="Profil"
                  className="text-[18px] font-semibold text-slate-500 lg:px-6 px-1"
                  panel={
                    <div className="flex flex-col items-center p-5 relative">
                      <label
                        id="modal-profil-murid"
                        htmlFor="my-modal-5"
                        className="flex gap-1 absolute lg:top-10 top-10 lg:right-40 right-0"
                      >
                        <FaRegEdit className="lg:w-5 lg:h-5  text-[#424242]" />
                        <p className="text-[#8E8E8E] lg:text-[16px] text-[14px] font-normal ">
                          perbarui profile
                        </p>
                      </label>

                      <input
                        id="my-modal-5"
                        type="checkbox"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box lg:w-9/12 w-10/12 max-w-full lg:pl-10 lg:p-5 p-7 shadow-xl">
                          <label
                            id="modal-profil-murid"
                            htmlFor="my-modal-5"
                            className="absolute right-5 top-4"
                          >
                            <IoMdCloseCircleOutline className="text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7" />
                          </label>
                          <EditProfilStudent />
                        </div>
                      </div>

                      <div
                        className=" w-32 h-32 lg:mt-10 mt-14 border border-[#EFEFEF] rounded-full overflow-hidden mt- bg-no-repeat bg-cover"
                        style={{ backgroundImage: `URL(${Profil})` }}
                      >
                        <img src={Profil2} alt="profil.jpg" />
                      </div>

                      <p className="mt-2 lg:text-[36px] text-[24px] font-semibold text-[#112B3C]">
                        Diva Lesti Pujiana
                      </p>

                      <div className="text-[16px] text-zinc-800 flex lg:flex-row flex-col lg:w-[45vw] w-[80vw] p-2 mt-10">
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
                  }
                />
                <Tab
                  id="2"
                  title="Riwayat"
                  className=" text-center font-semibold text-lg text-slate-500 mt-2 pl-0 lg:pl-8 lg:pr-8 lg:-ml-0 -ml-2"
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th className="text-[18px] text-zinc-700">No</th>
                            <th className="text-[18px] text-zinc-700">
                              Nama Guru
                            </th>
                            <th className="text-[18px] text-zinc-700">Jam</th>
                            <th className="text-[18px] text-zinc-700">
                              Hari & Tanggal
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Status
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[16px] font-normal">
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>Selesai</td>
                            <td className="flex items-center text-component text-[16px] gap-1">
                              <AiTwotoneStar className="w-5 h-5" />
                              Ulasan
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                />
                <Tab
                  id="3"
                  title="Sedang Berlangsung"
                  className="text-center font-semibold lg:text-lg text-[18px] text-slate-500 lg:mt-10 pl-0 lg:pl-8 lg:pr-8 lg:-ml-4 -ml-2"
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th className="text-[18px] text-zinc-700">No</th>
                            <th className="text-[18px] text-zinc-700">
                              Nama Guru
                            </th>
                            <th className="text-[18px] text-zinc-700">Jam</th>
                            <th className="text-[18px] text-zinc-700">
                              Hari & Tanggal
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Link Google Meet
                            </th>
                            <th className="text-[18px] text-zinc-700">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-[16px] font-normal">
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>https://google meet/adka</td>
                            <td>Selesai</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </h1>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default HalamanSesiMurid;
