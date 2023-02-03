import { Footer } from "../components/Footer";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";
import { MdStars } from "react-icons/md";

import Profil2 from "../assets/profil2.webp";
import CustomButton from "../components/CustomButton";

const ProfileTeacher = () => {
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col p-8">
        <div className="flex w-full gap-4 bg-[#FAFAFA]">
          <p className="bg-[#EDF1FF] border-b-2 border-[#3056D3] px-8 py-3 items-center font-medium text-[18px] text-[#3056D3]">
            Profil
          </p>
          <p className="px-5 py-3 items-center font-medium text-[18px] text-[#7C828F]">
            Update Profil
          </p>
        </div>

        <div className="flex lg:flex-row flex-col lg:items-start items-center w-full mt-10">
          <div className="flex flex-col items-center lg:w-4/12 w-11/12 lg:p-5 p-0 ">
            <div className="flex flex-col w-full items-center rounded-2xl pb-4 bg-white text-[#424242] shadow-xl">
              <img
                src={Profil2}
                alt="profil.webp"
                className="lg:w-32 w-28 lg:h-32 h-28 rounded-full lg:mt-10 mt-5 mb-2"
              />

              <p className="lg:text-[36px] text-[28px] font-semibold  ">
                John Doe
              </p>

              <div className="flex gap-1 mb-4">
                <MdStars className="w-5 h-5 text-[#F66B0E]" />
                <p className="text-[14px]">{`${5} (6 ulasan)`} </p>
              </div>
              <p className="font-semibold lg:text-[16px] text-[14px] pr-8 mb-5">
                Tarif Belajar/Jam{" "}
                <span className="lg:ml-10 ml-2">Rp.{5000}</span>
              </p>
              <CustomButton
                className="flex items-center justify-center gap-2 lg:w-60 w-52 bg-component hover:bg-navy border-none rounded-2xl p-2 lg:text-[20px] text-[16px] text-white font-semibold"
                icon={<RiMessage2Fill className="lg:w-6 w-5 lg:h-6 h-5" />}
                label={"Cek Jadwal"}
              />

              <p className="text-zinc-800 mt-6">Mata Pelajaran dan Tingkatan</p>
              <div className="flex text-[#637381] gap-8 text-[14px] mt-2">
                <p className="py-1 px-2 bg-[#b3b3b3] rounded-lg">Matematika</p>
                <p className="py-1 px-2 bg-[#b3b3b3]  rounded-lg">
                  Sekolah Dasar
                </p>
              </div>
            </div>

            <p className="text-[24px] text-zinc-800 font-semibold mt-8">
              Tentang Kursus
            </p>
            <p className="px-4 py-2 bg-white shadow-lg rounded-3xl mt-5">
              Sekolah Dasar
            </p>
          </div>

          <div className="lg:w-9/12 w-11/12 py-2 lg:pl-24 pl-0 lg:pr-20 pr-0 lg:mt-0 mt-10">
            <p className="text-zinc-900 lg:text-[36px] text-[28px] font-extrabold">
              Bachelor Degree of Mathematics
            </p>
            <p className="text-[14px] text-zinc-500">
              CumLaude Grade (GPA: 3.87 out of 4) || Curriculum: IB, IGCSE, O
              Level, AS/A Level, AP, SAT, ACT and National Curriculum.
            </p>
            <p className="font-bold text-[28px] text-zinc-900 mt-10">
              Tentang John Doe
            </p>
            <ul className="lg:text-[16px] text-[15px]">
              <li className="flex gap-4 mt-8">
                <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />
                Bachelor's Degree with more than 10 years experienced teaching
                math from primary, secondary, until senior.
              </li>
              <li className="flex gap-4 mt-8 mb-5">
                <BsCheckCircle className="lg:w-16 w-32 lg:h-16 h-32 text-blue-600 lg:pb-0 pb-24" />
                Experienced Teaching All Math Levels (AP Calculus, Pre-Algebra,
                Algebra 1, Algebra 2, Geometry, Trigonometry, SAT, ACT, etc) for
                any curriculums such as Advanced Placement, IB (HL and SL),
                Cambridge (IGCSE, O Level and A Level).
              </li>
              <label id="modal-profil-guru" htmlFor="my-modal-5">
                Baca Selengkapnya ........
              </label>
            </ul>

            <input id="my-modal-5" type="checkbox" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box lg:w-8/12 w-10/12 max-w-full shadow-xl">
                <label
                  id="modal-profil-guru"
                  htmlFor="my-modal-5"
                  className="absolute right-4 top-2"
                >
                  <IoMdCloseCircleOutline className="text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7" />
                </label>

                <p className="font-bold text-center lg:text-[28px] text-[24px] text-zinc-900 pb-2 lg:mt-0 mt-5 -mx-2 border-b-2 border-zinc-500 ">
                  Tentang John Doe
                </p>
                <ul className="lg:text-[16px] text-[15px]">
                  <li className="flex gap-4 mt-8">
                    <BsCheckCircle className="lg:w-8 w-16 lg:h-8 h-16 text-blue-600 lg:pb-0 pb-7" />
                    Bachelor's Degree with more than 10 years experienced
                    teaching math from primary, secondary, until senior.
                  </li>
                  <li className="flex gap-4 mt-8 mb-5">
                    <BsCheckCircle className="lg:w-16 w-32 lg:h-16 h-32 text-blue-600 lg:pb-0 pb-24" />
                    Experienced Teaching All Math Levels (AP Calculus,
                    Pre-Algebra, Algebra 1, Algebra 2, Geometry, Trigonometry,
                    SAT, ACT, etc) for any curriculums such as Advanced
                    Placement, IB (HL and SL), Cambridge (IGCSE, O Level and A
                    Level).
                  </li>
                  <li className="flex gap-4 mt-8 mb-5">
                    <BsCheckCircle className="lg:w-56 w-32 lg:h-32 h-56 text-blue-600 lg:pb-0 pb-24" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus ex vitae aperiam eum hic saepe cupiditate officia
                    impedit atque eos veniam enim error optio aspernatur aliquam
                    voluptates consequuntur ipsam eaque reiciendis, sed
                    voluptatibus delectus? Blanditiis perspiciatis placeat autem
                    provident. Ex quasi sint doloribus a. Voluptas sapiente
                    mollitia doloremque corrupti voluptatibus animi, consectetur
                    qui totam alias veritatis numquam blanditiis magni ullam
                    eligendi fugiat accusamus distinctio iste iure earum! Non
                    illum, porro aspernatur quidem error iste aperiam tempore
                    aliquam eligendi, totam dolor veritatis sit nisi suscipit
                    cumque officia quia dicta est rem quam voluptates debitis
                    molestias. At magnam corrupti cumque mollitia magni.
                  </li>
                </ul>
              </div>
            </div>

            <p className=" mt-10 mb-5 text-[24px] font-semibold">
              Lokasi Kursus
            </p>
            <div className="flex flex-wrap gap-10">
              <div className="flex gap-2 py-2 px-5 rounded-2xl lg:-mb-0 -mb-5 bg-white shadow-lg">
                <FaMapMarkerAlt className="w-5 h-5" />
                <p>Sukabumi</p>
              </div>
              <div className="flex gap-2 py-2 px-5 rounded-2xl bg-white shadow-lg">
                <AiFillHome className="w-5 h-5" />
                <p>Offline / Tatap Muka</p>
              </div>
            </div>

            <p className="mt-5 flex w-64 gap-2 py-2 px-5 rounded-2xl bg-white shadow-lg">
              <FaLaptop className="w-5 h-5" />
              Online / Zoom Meeting
            </p>

            <p className="text-[24px] text-zinc-900 font-semibold mt-10 mb-5">
              Ulasan
            </p>

            <div className="bg-white rounded-xl py-4 px-10 text-[16px] mb-5">
              <div className="flex items-center gap-4">
                <img
                  src={Profil2}
                  alt="profil.webp"
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-semibold">Brandon</p>
                <div className="flex items-center gap-1 ml-auto">
                  <MdStars className="text-component" />5
                </div>
              </div>
              <p className="mt-4 lg:text-[16px] text-[15px]">
                Sempurna! Thanks to him, my daughter test score improve a lot
                now. I recommend to all parents who wants to boost their child
                understanding and confidence in Math
              </p>
            </div>
            <div className="bg-white rounded-xl py-4 px-10 text-[16px]">
              <div className="flex items-center gap-4">
                <img
                  src={Profil2}
                  alt="profil.webp"
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-semibold">Brandon</p>
                <div className="flex items-center gap-1 ml-auto">
                  <MdStars className="text-component" />5
                </div>
              </div>
              <p className="mt-4 lg:text-[16px] text-[15px]">
                Sempurna! Thanks to him, my daughter test score improve a lot
                now. I recommend to all parents who wants to boost their child
                understanding and confidence in Math
              </p>
            </div>
            <p className="mt-5">Lihat lebih banyak ......</p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ProfileTeacher;
