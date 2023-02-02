import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ulasan from "../assets/ulasan.svg";
import InputProfil from "../components/inputProfil";
import { AiFillStar } from "react-icons/ai";
import { ButtonLanding } from "../components/ButtonLanding";

function Rating() {
  return (
    <Layout>
      <Navbar />
      <div className="bg-white  w-full text-navy items-center">
        <h1 className="font-semibold pt-8 lg:text-start text-center text-2xl lg:text-3xl lg:pt-12 lg:pl-48 ">
          Penilaian & ulasan
        </h1>
        <div className="text-navy flex flex-col lg:flex-row  h-[31rem] lg:justify-evenly justify-between items-center">
          <div>
            <p className="font-semibold pt-8 lg:pt-0 text-xl">
              Ahmad Bambang
            </p>
            <p className="text-lg font-semibold pt-4">Ulasan</p>
            <br />
            <form>
              <div className="w-[20rem] h-20 flex rounded-xl justify-center border border-[#424242] ">
                <InputProfil
                  id="input-ulasan"
                  type={"text"}
                  placeholder="ulasan"
                  className=" h-auto pl-3 rounded-xl w-full"
                ></InputProfil>
              </div>
              <p className="text-lg font-semibold flex pt-4">
                Penilaian
                <span>
                  <AiFillStar className="w-6 h-6 text-[#F66B0E]" />
                </span>
              </p>
              <br />
              <div className="w-[20rem] h-20 flex rounded-xl justify-center border border-[#424242] ">
                <InputProfil
                  id="input-ulasan"
                  type={"number"}
                  max={"5"}
                  min={"1"}
                  placeholder="1 sampai 5 (angka)"
                  className=" h-auto px-3 rounded-xl w-full"
                ></InputProfil>
              </div>
              <div className="flex justify-center lg:justify-end pt-16">
                <ButtonLanding
                  label="Nilai"
                  className="w-40 h-8 items-end"
                />
              </div>
            </form>
          </div>
          <div className="bg-white pt-12 lg:pt-0 ">
            <img
              className="w-[30rem]"
              src={ulasan}
              alt="ulasan"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rating;
