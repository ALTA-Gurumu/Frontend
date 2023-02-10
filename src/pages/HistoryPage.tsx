import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { Tabs, Tab, Classes } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import { CompleteTeacher } from "../utils/DataTypes";

import CustomButton from "../components/CustomButton";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";

function HalamanSesiGuru() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookies, ,] = useCookies(["token", "guru_id"]);
  const checkToken = cookies.token;
  const checkID = cookies.guru_id;

  const [status, setStatus] = useState<string>("Belum Selesai");
  const [disable, setDisable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [jadwal, setJadwal] = useState<CompleteTeacher>({});
  const [riwayat, setRiwayat] = useState<CompleteTeacher>({});

  useEffect(() => {
    fetchJadwal();
  }, []);

  function fetchJadwal() {
    setLoading(true);
    axios
      .get(`https://devmyproject.site/guru/${checkID}`)
      .then((res) => {
        setJadwal(res.data.data);
      })
      .catch((err) => {
        // alert(err.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRiwayat();
  }, []);

  function fetchRiwayat() {
    setLoading(true);
    axios
      .get(`https://devmyproject.site/sesiku/${checkID}`)
      .then((res) => {
        setRiwayat(res.data);
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log(err.response.data.message);
        MySwal.fire({
          title: "Riwayat Anda",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Navbar />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="bg-white w-9/12 rounded-2xl lg:h-[34rem] mt-32 mb-32 mx-auto shadow-xl">
            <h1>
              <div className="h-full">
                <Tabs
                  className=" w-11/12 mx-auto"
                  defaultSelectedTabId="tab-1"
                  renderActiveTabPanelOnly={true}
                >
                  <Tab
                    id="tab-1"
                    title="Riwayat"
                    className="text-center font-semibold text-lg text-slate-500 mt-2 lg:pl-8 lg:pr-8"
                    panel={
                      <div className="overflow-x-auto mt-10">
                        <table className="table w-full mx-auto">
                          <thead>
                            <tr>
                              <th className="text-[18px] text-zinc-700">
                                NO
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Nama Murid
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Jam
                              </th>
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
                          <tbody className="text-[16px] font-normal">
                            <>
                              {/* {console.log(riwayat)} */}
                              {riwayat.data?.map((data) => (
                                <tr key={data.reservasi_id}>
                                  <th>{data.reservasi_id}</th>
                                  <td>{data.nama_murid}</td>
                                  <td>{data.jam}</td>
                                  <td>{data.tanggal}</td>
                                  <td>{data.tautan_gmet}</td>
                                  <td>{data.status}</td>
                                </tr>
                              ))}
                            </>
                          </tbody>
                        </table>
                      </div>
                    }
                  />
                  <Tab
                    id="tab-2"
                    title="Sedang Berlangsung"
                    className=" text-center font-semibold text-lg text-slate-500 mt-2 pl-0 lg:pl-8 lg:pr-8 "
                    panel={
                      <div className="overflow-x-auto mt-10">
                        <table className="table w-full mx-auto">
                          <thead>
                            <tr>
                              <th className="text-[18px] text-zinc-700">
                                No
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Nama Murid
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Jam
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Hari & Tanggal
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Link Google Meet
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Status
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-[16px] font-normal">
                            <tr>
                              <th>1</th>
                              <td>Danu</td>
                              <td>12.00 (WIB)</td>
                              <td>Senin 20 Januari 2023</td>
                              <td>https://google meet/adka</td>
                              <td>Belum Selesai</td>
                              <td>
                                <CustomButton
                                  id="button-masukan-history"
                                  className="py-2 px-6 text-md font-normal rounded-xl hover:bg-orange-600 bg-orange-500 text-white"
                                  label="Submit"
                                  loading={disable}
                                />
                              </td>
                            </tr>

                            <tr className="hover">
                              <th>2</th>
                              <td>Budy</td>
                              <td>09.00 (WIB)</td>
                              <td>Senin 17 Januari 2023</td>
                              <td>-</td>
                              <td>Selesai</td>
                              <td>
                                <CustomButton
                                  id="button-masukan-history"
                                  className="py-2 px-6 text-md font-normal rounded-xl hover:bg-orange-600 bg-slate-500 text-slate-200"
                                  label="Submit"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    }
                  />

                  <Tab
                    id="tab-3"
                    title="Jadwal Mengajar"
                    className=" text-center font-semibold lg:text-lg text-slate-500 lg:mt-10 pl-0 lg:pl-8 lg:pr-8 "
                    panel={
                      <div className="overflow-x-auto mt-10">
                        <table className="table w-full mx-auto">
                          <thead>
                            <tr>
                              <th className="text-[18px] text-zinc-700">
                                No
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Hari & Tanggal
                              </th>
                              <th className="text-[18px] text-zinc-700">
                                Jam
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-[16px] font-normal">
                            <>
                              {jadwal.Jadwal?.map(
                                (data, index) => (
                                  <tr key={index}>
                                    <th>{data.ID}</th>
                                    <td>{data.Tanggal}</td>
                                    <td>{data.Jam}</td>
                                  </tr>
                                )
                              )}
                            </>
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
        </>
      )}
    </Layout>
  );
}

function HalamanSesiMurid() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="bg-white w-9/12 rounded-2xl lg:h-[34rem] mt-32 mb-32 mx-auto">
          <h1>
            <div className="h-full">
              <Tabs
                className=" w-11/12 mx-auto"
                defaultSelectedTabId="3"
                renderActiveTabPanelOnly={true}
              >
                <Tab
                  id="1"
                  title="Profil"
                  className="  text-center font-semibold text-lg text-slate-500 mt-2 lg:pl-8 lg:pr-8"
                  panel={
                    <>
                      <h1>Profil</h1>
                    </>
                  }
                />
                <Tab
                  id="2"
                  title="Riwayat"
                  className=" text-center font-semibold text-lg text-slate-500 mt-2 pl-0 lg:pl-8 lg:pr-8 "
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Nama Guru</th>
                            <th>Jam</th>
                            <th>Hari & Tanggal</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>

                            <td>Ulasan</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                />
                <Tab
                  id="3"
                  title="Sedang Berlangsung"
                  className=" text-center font-semibold lg:text-lg text-slate-500 lg:mt-10 pl-0 lg:pl-8 lg:pr-8 "
                  panel={
                    <div className="overflow-x-auto mt-10">
                      <table className="table w-full mx-auto">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Nama Guru</th>
                            <th>Jam</th>
                            <th>Hari & Tanggal</th>
                            <th>Link Google Meet</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Ahmad Bambang</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>https://google meet/adka</td>
                            <td>Ulasan</td>
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

export { HalamanSesiGuru, HalamanSesiMurid };
