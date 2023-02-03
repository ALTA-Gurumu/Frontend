import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tabs, Tab, Classes } from "@blueprintjs/core";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import CustomButton from "../components/CustomButton";
import { Footer } from "../components/Footer";

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

export default HalamanSesiMurid;
