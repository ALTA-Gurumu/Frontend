import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="modal">
        <h3>Modal</h3>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
};

<div className="modal ">
  <div className="modal-box lg:w-9/12 w-10/12 max-w-full shadow-xl p-4">
    <div className="w-full flex lg:flex-row flex-col relative">
      <IoMdCloseCircleOutline
        // onClick={() => navigate("/home")}
        className="absolute top-0 right-0 text-[#112B3C] lg:w-8 w-7 lg:h-8 h-7"
      />
      <div className="lg:w-6/12 w-full flex flex-col items-center justify-center">
        <h1 className="text-navy text-center text-xl lg:text-3xl font-bold mb-5">
          Selesaikan Profil Anda
        </h1>
        <img src={avatar2} className=" w-4/12 max-w-full mt-10 lg:mt-0" />
        <p className="text-center text-gray-500 font-semibold mt-2">
          * Uk. photo 400 x 400 pixels
        </p>
        <CustomInput
          id="input-avatar"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          className="file-input h-10 w-full max-w-xs flex justify-center bg-white lg:mt-4"
        />

        <CustomInput
          id="input-linkedin"
          type="text"
          placeholder="LInkedin Profile"
          className="input w-10/12 lg:w-8/12 mx-auto bg-white mt-7"
          style={{ border: "2px solid #424242" }}
        />

        <label className="label">
          <span className="label-text text-xl text-slate-600 mt-5 mb-2 font-semibold">
            Upload Ijazah
          </span>
        </label>

        <CustomInput
          id="input-ijazah"
          type="file"
          className="file-input h-10 file-input-bordered w-full max-w-xs bg-white"
        />
      </div>

      <div className="lg:w-7/12 w-full items-center lg:pl-16 pl-0 lg:mx-0 mx-2">
        <div className="form-control w-full ">
          <label className="label mt-5">
            <span
              className="label-text text-lg w-10/12 lg:w-8/12 font-semibold"
              style={{ color: "#424242" }}
            >
              Alamat :
            </span>
          </label>

          <CustomInput
            id="input-alamat"
            type="text"
            placeholder="Contoh : Sukabumi"
            className="input w-10/12 lg:w-9/12 bg-white"
            style={{ border: "2px solid #424242" }}
          />

          <label className="label mt-2">
            <span
              className="label-text text-lg w-10/12 lg:w-9/12 font-semibold"
              style={{ color: "#424242" }}
            >
              Handphone :
            </span>
          </label>

          <CustomInput
            id="input-no-hp"
            type="number"
            placeholder="0891234556"
            className="input w-10/12 lg:w-9/12 bg-white"
            style={{ border: "2px solid #424242" }}
          />

          <label className="label">
            <span
              className="label-text text-lg w-10/12 lg:w-9/12 font-semibold mt-2"
              style={{ color: "#424242" }}
            >
              Jenjang Pendidikan :
            </span>
          </label>
          <select
            defaultValue={"DEFAULT"}
            id="input-jenjang-pengajaran"
            className="select select-bordered w-10/12 lg:w-9/12  bg-white"
            style={{ border: "2px solid #424242" }}
            name="option"
            // onChange={handleChange}
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="1">Sekolah Dasar</option>
            <option value="2">Sekolah Menengah Pertama</option>
            <option value="3">Sekolah Menengah Atas</option>
          </select>
          <div className="form-control">
            <label className="label">
              <span
                className="label-text text-lg  w-10/12 lg:w-8/12 font-semibold"
                style={{ color: "#424242" }}
              >
                Biografi Saya :
              </span>
            </label>
            <textarea
              id="input-bio"
              className="textarea textarea-bordered h-32 w-10/12 lg:w-9/12 bg-white"
              placeholder="Ceritakan biografi singkat anda"
              style={{ border: "2px solid #424242" }}
            ></textarea>
          </div>

          <CustomButton
            id="btn-daftar"
            label="Update Data"
            className="w-10/12 lg:w-6/12 py-3 px-3 rounded-lg mt-7 text-white font-lg text-lg bg-orange-500 hover:bg-orange-600"
            style={{
              fontFamily: "Poppins",
            }}
          />
        </div>
      </div>
    </div>
  </div>
</div>;
