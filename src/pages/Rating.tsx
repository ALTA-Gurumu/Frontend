import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { AiFillStar } from "react-icons/ai";
import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";
import { useCookies } from "react-cookie";

import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import ulasan1 from "../assets/ulasan.svg";
import CustomButton from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { LoadingAnimation } from "../components/Loading";

function Rating() {
  const navigate = useNavigate();
  const { guru_id } = useParams();
  const MySwal = withReactContent(Swal);
  const [penilaian, setPenilaian] = useState<number>();
  const [ulasan, setUlasan] = useState<string>();
  const [disabled, setDisabled] = useState(true);
  const [loading, setDLoading] = useState<boolean>(false);

  useEffect(() => {
    if (penilaian && ulasan) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [penilaian, ulasan]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    setDLoading(true);
    event.preventDefault();

    const body = {
      penilaian,
      ulasan,
    };
    axios
      .post(`https://devmyproject.site/ulasan/${guru_id}`, body)
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          title: "Succes",
          text: message,
          showCancelButton: false,
        });
        navigate(`/home`);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setDLoading(false));
  };

  return (
    <Layout>
      <Navbar />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="bg-white  w-full text-navy items-center">
          <h1 className="font-semibold pt-8 lg:text-start text-center text-2xl lg:text-3xl lg:pt-12 lg:pl-48 ">
            Penilaian & ulasan
          </h1>
          <div className="text-navy flex flex-col lg:flex-row  h-[31rem] lg:justify-evenly justify-between items-center">
            <div>
              <p className="font-semibold pt-8 lg:pt-0 text-xl">
                Ahmad Bambang
              </p>
              <p className="text-lg font-semibold pt-4">
                Ulasan
              </p>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="w-[20rem] h-20 flex rounded-xl justify-center border border-[#424242] ">
                  <textarea
                    id="input-ulasan"
                    maxLength={300}
                    className="w-full h-full rounded-xl p-3"
                    placeholder="Ulasan..."
                    onChange={(e) => setUlasan(e.target.value)}
                  />
                </div>
                <p className="text-lg font-semibold flex pt-4">
                  Penilaian
                  <span>
                    <AiFillStar className="w-6 h-6 text-[#F66B0E]" />
                  </span>
                </p>
                <br />
                <div className="w-[20rem] h-20 flex rounded-xl justify-center border border-[#424242] ">
                  <CustomInput
                    id="input-penilaian"
                    type={"number"}
                    max={"5"}
                    min={"1"}
                    placeholder="1 sampai 5 (angka)"
                    className=" h-auto px-3 rounded-xl w-full"
                    onChange={(e) =>
                      setPenilaian(Number(e.target.value))
                    }
                  />
                </div>
                <div className="flex justify-center lg:justify-end pt-16">
                  <CustomButton
                    id="btn-nilai"
                    label="Nilai"
                    type="submit"
                    className="w-40 h-8 items-end bg-component rounded-lg text-white  disabled:bg-slate-500 disabled:cursor-not-allowed"
                    loading={loading || disabled}
                  />
                </div>
              </form>
            </div>
            <div className="bg-white pt-12 lg:pt-0 ">
              <img
                className="w-[30rem]"
                src={ulasan1}
                alt="ulasan"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Rating;
