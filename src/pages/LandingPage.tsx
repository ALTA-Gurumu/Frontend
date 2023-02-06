import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import CustomBotton from "../components/CustomButton";
import image1 from "../assets/image1.svg";
import selecting from "../assets/Selecting.webp";
import Request from "../assets/request.svg";
import Calender from "../assets/calender.svg";
import avatar2 from "../assets/avatar2.webp";

interface cardType {
  nama_guru: string;
  penilaian: number;
  ulasan: string;
}
function Card({ nama_guru, penilaian, ulasan }: cardType) {
  return (
    <div className="flex-col bg-white w-[15rem] h-[20rem] flex p-4 rounded-2xl ">
      <div className="leading-8 font-semibold text-lg pt-6 w-full h-[15rem] ">
        <p>{ulasan} </p>
      </div>
      <br />
      <p className="font-semibold">{nama_guru}</p>
      <div className="flex flex-row  items-center">
        <div className="flex">
          <AiFillStar className="text-component w-5 h-5" />
          <p className="font-semibold pl-1">{penilaian}</p>
        </div>
        <img
          src={avatar2}
          className="w-[3rem] ml-auto pr-2 "
          alt="avatar"
        />
      </div>
    </div>
  );
}

function LandingPage() {
  const [ulasans, setUlasan] = useState<cardType[]>([]);

  useEffect(() => {
    fetchUlasan();
  }, []);

  function fetchUlasan() {
    axios
      .get("https://devmyproject.site/ulasan")
      .then((res) => {
        setUlasan(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center min-h-screen bg-white items-center">
        <div className="flex-1 pl-5 lg:mt-0 ">
          <h1 className="flex justify-center text-4xl font-medium lg:text-[2.5rem]">
            Diajar
            <br />
            dengan guru
            <br />
            terbaik
          </h1>

          <br />
          <div className="flex justify-center mr-12 lg:mr-11">
            <Link to={"/home"}>
              <CustomBotton
                id="btn-landing-page"
                disabled={false}
                label="Pilih guru disini"
                className="w-40 h-10 bg-component text-white hover:bg-navy border-none rounded-full lg:w-[12rem]"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 h-full items-center pt-10 lg:p-0 ">
          <img
            className=" w-full lg:w-11/12 flex items-center"
            src={image1}
            alt="Ayo belajar"
            style={{ margin: "0 auto" }}
          />
        </div>
      </div>
      <div className="h-[8rem] lg:h-[5rem]  lg:pl-[13rem] pt-20 text-center lg:text-start">
        <h1 className="text-4xl font-medium">
          Belajar dengan
          <br />
          guru ulasan terbaik
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row pt-20 gap-[3rem] pb-12 lg:pb-0 lg:h-[35rem] justify-center lg:gap-28 items-center">
        {ulasans.map((data, index) => (
          <Card
            key={index}
            nama_guru={data.nama_guru}
            penilaian={data.penilaian}
            ulasan={data.ulasan}
          />
        ))}
      </div>

      <div className="h-[8rem] lg:h-[0rem] bg-white lg:pl-[13rem] lg:pt-20 pt-8 pl-2 text-center lg:text-start">
        <h1 className="text-4xl font-medium">
          Dengan cara yang
          <br />
          mudah
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full  bg-white h-[35rem] lg:h-[30rem] justify-evenly lg:items-center ">
        <div className="pl-8 lg:pl-0">
          <h1 className="text-2xl font-medium">
            1. Pilih guru anda
          </h1>
          <br />
          <p className="lg:text-xl">
            cek profile guru dan
            <br />
            pilih guru yang
            <br />
            anda inginkan sesuai kebutuhan
            <br />
            anda
          </p>
        </div>
        <img
          className="w-[30rem]"
          src={selecting}
          alt="Pilih guru anda"
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full h-[40rem] lg:h-[35rem] pt-20 lg:pt-0 justify-evenly items-center">
        <img
          className="w-[30rem]"
          src={Request}
          alt="Pilih guru anda"
        />
        <div>
          <h1 className="text-2xl font-medium">
            2. Ajukan Permintaan belajar
          </h1>
          <br />
          <p className="lg:text-xl">
            Para guru akan
            <br />
            memberikan tanggapan
            <br />
            terhadap permintaan
            <br />
            belajar Anda
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full bg-white h-[45rem] lg:h-[35rem] pt-8 lg:pt-0 justify-evenly items-center">
        <div>
          <h1 className="text-2xl font-medium">
            3. Atur jadwal belajar anda
            <br />
            sendiri
          </h1>
          <br />
          <p className="lg:text-xl">
            Atur pelaksanaan dan jadwal
            <br />
            kursus Anda sendiri dengan
            <br />
            guru yang Anda pilih
          </p>
        </div>
        <img
          className="w-[30rem]"
          src={Calender}
          alt="Pilih guru anda"
        />
      </div>
      <Footer />
    </Layout>
  );
}

export default LandingPage;
