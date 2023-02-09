export interface DataTypesGuru {
  ID: number;
  Nama: string;
  Email: string;
  Telepon: number;
  LinkedIn: string;
  Gelar: string;
  TentangSaya: string;
  Pengalaman: string;
  LokasiAsal: string;
  Offline: string;
  Online: string;
  Tarif: number;
  Pelajaran: string;
  Pendidikan: string;
  Avatar: any;
  Ijazah: any;
  Latitude: number;
  Longitude: number;
  Password: string;
  Deskripsi: string;
  Alamat: string;
  Role: string;
}

export interface CompleteTeacher {
  Nama?: string;
  Email?: string;
  Telepon?: number;
  LinkedIn?: string;
  Gelar?: string;
  TentangSaya?: string;
  Pengalaman?: string;
  LokasiAsal?: string;
  MetodeBljr?: string;
  Tarif?: number;
  Pelajaran?: string;
  Pendidikan?: string;
  Avatar?: any;
  avatar?: any;
  Jadwal?: any;
  Ijazah?: any;
  Latitude?: number;
  Longitude?: number;
  Jadwal?: JadwaType[];
  data?: RiwayatType[];
  // dataUlasan?: UlasanType[];
  onChangeOption?: () => void;
}

export interface UlasanType {
  data: Ulasan[];
  ulasan_id: number;
  nama_siswa: string;
  penilaian: string;
  ulasan: string;
}
export interface ProfilType {
  nama?: string;
  email?: string;
  alamat?: string;
  telepon?: string;
  avatar?: any;
}

type Ulasan = {
  ulasan_id?: number;
  nama_siswa?: string;
  penilaian?: string;
  ulasan?: string;
};

type JadwaType = {
  ID?: number;
  Tanggal?: string;
  Jam?: string;
  Status?: string;
};

type RiwayatType = {
  reservasi_id?: number;
  nama_murid?: string;
  jam?: string;
  tanggal?: string;
  tautan_gmet?: string;
  status?: string;
  ulasan_id?: number;
  nama_siswa?: string;
  penilaian?: string;
  ulasan?: string;
};

export interface getGuruBeranda {
  nama?: string;
  alamat?: string;
  judul?: string;
  pelajaran?: string;
  avatar?: any;
  tarif?: number;
  penilaian?: number;
}
