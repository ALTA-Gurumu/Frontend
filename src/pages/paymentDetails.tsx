import React, { FC } from "react";
import payment from "../assets/money-transfer 1.svg";
import bni from "../assets/2560px-BNI_logo 4.svg";
import bri from "../assets/Logo-BRI 4.svg";
import bca from "../assets/Logo-Bank-BCA-1 4.svg";
import permata from "../assets/permata bank 4.svg";
import qris from "../assets/qris logo 2.svg";
import CustomButton from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";

interface ModalProps {
  id: string;
  label: string;
  name: string;
}

export const ModalPayment: FC<ModalProps> = ({ id, name }) => {
  return (
    <>
      <div className="collapse-content flex flex-col">
        <div>
          <div className="w-full rounded-2xl bg-slate-50 p-2">
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="">
              <img src={bca} className="w-1/12" />
            </label>
            <CustomInput
              type="checkbox"
              id="my-modal-3"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-xl font-bold">{name} Payment</h3>
                <hr className="mt-2" />

                <div>
                  <form>
                    <label className="label mt-5">
                      <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                        {name} Virtual Account Number
                      </span>
                    </label>

                    <CustomInput
                      id="input-va"
                      type="number"
                      placeholder="2227362736278"
                      className="input w-full bg-white"
                      style={{ border: "2px solid #424242" }}
                    />
                  </form>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      {name} Mobile
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />

                    <div className="collapse-title text-xl font-semibold mt-5">
                      My{name}
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      Klik{name}
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      Klik{name} Bisnis
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      ATM {name}
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                    <CustomButton
                      id="btn-pembayaran"
                      className="bg-slate-700 w-7/12 p-2 text-white rounded-xl mt-5 hover:bg-slate-800"
                      label="Selesaikan Transaksi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-slate-50 p-2 mt-5">
            <img src={bri} className="w-1/12 mt-5" />
          </div>
          <div className="w-full rounded-2xl bg-slate-50 p-2 mt-5">
            <img src={bni} className="w-1/12 mt-5" />
          </div>
          <div className="w-full rounded-2xl bg-slate-50 p-2 mt-5">
            <img src={permata} className="w-1/12 mt-5 mb-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default function PaymentDetails() {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="h-[74rem] w-11/12 mx-auto border-2 mt-10">
          <div className="flex flex-col">
            <h2 className="flex flex-row items-center border-2 w-[20rem] rounded-xl m-10 p-4 shadow-lg ml-20">
              <img src={payment} className=" w-3/12 mx-auto" />
              <p className="text-2xl font-bold text-center mx-auto">
                Order Details
              </p>
            </h2>
            <p className="font-semibold text-xl underline mt-2 ml-20">
              Nama Guru
            </p>
            <p className="font-semibold text-md ml-20 mt-2">Ahmad Bambang</p>
            <p className="font-semibold text-xl underline mt-2 ml-20">
              Format Kursus
            </p>
            <p className="font-semibold text-md ml-20 mt-2">Online</p>
            <p className="font-semibold text-xl underline mt-2 ml-20">
              Kursus yang diambil
            </p>
            <p className="font-semibold text-md ml-20 mt-2">Matematika</p>
            <p className="font-semibold text-xl underline mt-2 ml-20">Tarif</p>
            <p className="font-semibold text-md ml-20 mt-2">
              Rp. 500.000 / Jam
            </p>
            <p className="font-semibold text-xl underline mt-2 ml-20">
              Informasi Kontak Murid
            </p>
            <p className="font-semibold text-md ml-20 mt-2">
              Sukabumi, Jawa Barat
            </p>
            <p className="font-semibold text-md ml-20 mt-2">0822XXXXXXX</p>
            <h2 className="font-bold underline text-2xl mt-5 ml-20">
              Metode Pembayaran
            </h2>
            <img src={bca} className="w-1/12 ml-16" />
            {/* <CustomInput
              id="input-selesaikantransaksi"
              className="input w-10/12 ml-20 lg:w-7/12 bg-white border-2 border-label"
              placeholder="898 - 989- 999 -6666"
            /> */}
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn w-3/12 mt-5 ml-20">
              Selesaikan Transaksi
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-xl font-bold">BCA Payment</h3>
                <hr className="mt-2" />

                <div>
                  <form>
                    <label className="label mt-5">
                      <span className="label-text text-xl mx-auto w-10/12 lg:w-8/12 font-semibold text-label">
                        BCA Virtual Account Number
                      </span>
                    </label>

                    <CustomInput
                      id="input-va"
                      type="number"
                      placeholder="2227362736278"
                      className="input w-full bg-white border-label border-2"
                    />
                  </form>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      BCA Mobile
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />

                    <div className="collapse-title text-xl font-semibold mt-5">
                      MyBCA
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      KlikBCA
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      KlikBCA Bisnis
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse">
                    <CustomInput id="checkbox-pembayaran" type="checkbox" />
                    <div className="collapse-title text-xl font-semibold mt-5">
                      ATM BCA
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                    <CustomButton
                      id="btn-pembayaran"
                      className="bg-slate-700 w-7/12 p-2 text-white rounded-xl mt-5 hover:bg-slate-800"
                      label="Bayar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
