import { useNavigate } from "react-router";
import { FC } from "react";
import "../styles/app.css";

import { AiFillStar } from "react-icons/ai";
import CustomButton from "./CustomButton";
import { useCookies } from "react-cookie";

interface CardProps {

  id: string;
  guru_id?: number;
  nama?: string;
  alamat?: string;
  judul?: string;
  pelajaran?: string;
  avatar?: any;
  tarif?: number;
  penilaian?: number;
}

const Card: FC<CardProps> = ({
  id,
  guru_id,
  nama,
  judul,
  alamat,
  pelajaran,
  avatar,
  tarif,
  penilaian,
}) => {
  const [cookies, , removeCookie] = useCookies([
    "token",
    "role",
    "verifikasi",
    "guru_id",
  ]);

  const checkToken = cookies.token;
  const checkRole = cookies.role;
  const checkVer = cookies.verifikasi;

  const navigate = useNavigate();

  function onCLickReservasi() {
    navigate(`/profile-teacher`);
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure
        id="link-reservasi"
        className="relative w-full h-80 bg-cover bg-no-repeat"
        style={{ backgroundImage: `URL(${avatar})` }}
        onClick={() => onCLickReservasi()}
      >
        <div className="textShadow absolute bottom-0 left-0 pl-4 pb-2 drop-shadow-2xl">
          <p className="text-[36px] text-[#EFEFEF] font-semibold drop-shadow-lg">
            {nama}
          </p>
          <p className="text-[20px] text-[#EFEFEF] font-semibold">
            {alamat}
          </p>
        </div>
        {/* <img src={image} alt="Card.png" /> */}
      </figure>
      <div className="card-body">
        <div className="flex gap-1 ">
          <AiFillStar className="w-6 h-6 text-[#F66B0E]" />
          <p className="text-[#696969] text-[14px] pt-[5px]">{`${penilaian} (26 Ulasan) `}</p>
        </div>

        <p className="line-clamp-3 text-justify text-zinc-900 ">
          {judul}
        </p>
        <div className="text-end mt-4">
          <CustomButton
            id="btn-tarifperjam"
            className="h-10 px-2 rounded-2xl bg-[#205375] text-white shadow-lg hover:bg-[#2f6991]"
            label={`Tarif Belajar : Rp ${tarif}/jam`}
            onClick={() => onCLickReservasi()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
