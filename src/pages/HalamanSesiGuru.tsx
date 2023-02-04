import { useState, useEffect } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tabs, Tab, Classes } from "@blueprintjs/core";

import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import CustomButton from "../components/CustomButton";
import { Footer } from "../components/Footer";

function HalamanSesiGuru() {
  const [status, setStatus] = useState<string>("Belum Selesai");
  const [disable, setDisable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status === "Selesai") {
      setDisable(true);
    } else {
      setDisable(true);
    }
  }, [status]);
  console.log(status);

  return (
    <>
      <Layout>
        <Navbar />
        <div className="bg-white w-9/12 rounded-2xl lg:h-[34rem] mt-32 mb-32 mx-auto shadow-xl">
          <h1>
            <div className="h-full">
              <Tabs
                className=" w-11/12 mx-auto"
                defaultSelectedTabId="tab-3"
                renderActiveTabPanelOnly={true}
              >
                <Tab
                  id="tab-1"
                  title="Riwayat"
                  className="  text-center font-semibold text-lg text-slate-500 mt-2 lg:pl-8 lg:pr-8"
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
                          <tr>
                            <th>1</th>
                            <td>Danu</td>
                            <td>12.00 (WIB)</td>
                            <td>Senin 20 Januari 2023</td>
                            <td>https://google meet/adka</td>
                            <td>Selesai</td>
                          </tr>

                          <tr className="hover">
                            <th>2</th>
                            <td>Budy</td>
                            <td>09.00 (WIB)</td>
                            <td>Senin 17 Januari 2023</td>
                            <td>-</td>
                            <td>Selesai</td>
                          </tr>
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
                                id="btn-action-history"
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
                                id="btn-action-history"
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
                          <tr>
                            <th>1</th>
                            <td>Senin, 20 Januari 2023</td>
                            <td>09.00 AM (WIB)</td>
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

export default HalamanSesiGuru;
