import React from "react";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { ButtonLanding } from "../components/ButtonLanding";
import image1 from "../assets/image1.svg";
import Selecting from "../assets/selecting.svg";
import Request from "../assets/request.svg";
import Calender from "../assets/calender.svg";
import { Footer } from "../components/Footer";

function LandingPage() {
  return (
    <Layout>
      <Navbar />
      {/* <div className="flex justify-evenly items-center h-[35rem] bg-white "> */}
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
            <ButtonLanding
              disabled={false}
              label="Pilih guru disini"
              className="w-40 h-10 lg:w-[12rem]"
            />
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
      <div className="h-[5rem]  pl-[13rem] pt-20">
        <h1 className="text-4xl font-medium">
          Belajar dengan
          <br />
          guru ulasan terbaik
        </h1>
      </div>
      <div className="flex h-[35rem] justify-evenly items-center">card</div>
      <div className="h-[8rem] lg:h-[0rem] bg-white lg:pl-[13rem] lg:pt-20 pt-8 pl-8 text-center lg:text-start">
        <h1 className="text-4xl font-medium">
          Dengan cara yang
          <br />
          mudah
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full  bg-white h-[35rem] lg:h-[30rem] justify-evenly lg:items-center ">
        <div className="pl-8 lg:pl-0">
          <h1 className="text-2xl font-medium">1. Pilih guru anda</h1>
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
        <img className="w-[30rem]" src={Selecting} alt="Pilih guru anda" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full h-[40rem] lg:h-[35rem] pt-20 lg:pt-0 justify-evenly items-center">
        <img className="w-[30rem]" src={Request} alt="Pilih guru anda" />
        <div>
          <h1 className="text-2xl font-medium">2. Ajukan Permintaan belajar</h1>
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
        <img className="w-[30rem]" src={Calender} alt="Pilih guru anda" />
      </div>
      <Footer />
    </Layout>
  );
}

export default LandingPage;
