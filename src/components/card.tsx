import { FC } from "react";
import "../styles/app.css";

import { AiFillStar } from "react-icons/ai";
import CustomButton from "./CustomButton";

interface CardProps {
  id?: string;
  nama?: string;
  image?: any;
  alamat?: string;
  rating?: number;
  deskripsi?: string;
  tarif?: number;
}

const Card: FC<CardProps> = ({
  id,
  nama,
  image,
  alamat,
  rating,
  deskripsi,
  tarif,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure
        className="relative w-full h-80 bg-cover bg-no-repeat"
        style={{ backgroundImage: `URL(${image})` }}
      >
        <div className="textShadow absolute bottom-0 left-0 pl-4 pb-2 drop-shadow-2xl">
          <p className="text-[36px] text-[#EFEFEF] font-semibold drop-shadow-lg">
            {nama}
          </p>
          <p className="text-[20px] text-[#EFEFEF] font-semibold">{alamat}</p>
        </div>
        {/* <img src={image} alt="Card.png" /> */}
      </figure>
      <div className="card-body">
        <div className="flex gap-1 ">
          <AiFillStar className="w-6 h-6 text-[#F66B0E]" />
          <p className="text-[#696969] text-[14px] pt-[5px]">{`${rating} (26 Ulasan) `}</p>
        </div>
        <p className="line-clamp-3 text-justify text-zinc-900 ">{deskripsi}</p>
        <div className="text-end mt-4">
          <CustomButton
            id="btn-tarifperjam"
            className="h-10 px-2 rounded-2xl bg-[#205375] text-white shadow-lg hover:bg-[#2f6991]"
            label="Tarif Belajar : Rp 50000/jam"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
