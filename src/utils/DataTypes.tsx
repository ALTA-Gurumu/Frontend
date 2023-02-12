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
  nama?: string;
  email?: string;
  telepon?: number;
  linkedin?: string;
  gelar?: string;
  tentang_saya?: string;
  pengalaman?: string;
  lokasi_asal?: string;
  metode_belajar?: string;
  tarif?: number;
  pelajaran?: string;
  pendidikan?: string;
  avatar?: any;
  ijazah?: any;
  jadwal?: string;
  latitude?: number;
  longitude?: number;
  Jadwal?: JadwalType[];
  data?: RiwayatType[];
  // dataUlasan?: UlasanType[];
  onChangeOption?: () => void;
}

export interface Sesiku {
  data?: SesikuType[];
}

export interface EditTeacher {
  nama?: string;
  email?: string;
  telepon?: number;
  linkedIn?: string;
  gelar?: string;
  tentang_saya?: string;
  pengalaman?: string;
  lokasi_asal?: string;
  metode_belajar?: string;
  tarif?: number;
  pelajaran?: string;
  pendidikan?: string;
  avatar?: any;
  ijazah?: any;
  latitude?: string;
  longitude?: string;
  jadwal?: JadwaType[];
  data?: RiwayatType[];
  // dataUlasan?: UlasanType[];
  onChangeOption?: () => void;
}

export interface JadwaType {
  id?: number;
  guru_id?: number;
  tanggal?: string;
  jam?: string;
}

type JadwalType = {
  ID?: number;
  Tanggal?: string;
  Jam?: string;
  Status?: string;
};

export interface Reservasi {
  pesan?: string;
  metode_belajar?: string;
  tanggal?: string;
  jam?: string;
  alamat_siswa?: string;
  telepon_siswa?: string;
  metode_pembayaran?: string;
}
type SesikuType = {
  reservasi_id?: number;
  guru_id?: number;
  role?: string;
  nama_siswa?: string;
  tanggal?: string;
  jam?: string;
  tautan_gmet?: string;
  status?: string;
};

export interface UlasanType {
  data: Ulasan[];
  id: number;
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
  online?: string;
  pesan?: string;
  metode_belajar?: string;
  tanggal?: string;
  jam?: string;
  alamat_siswa?: string;
  telepon_siswa?: string;
  metode_pembayaran?: string;
}

type Ulasan = {
  ulasan_id?: number;
  nama_siswa?: string;
  penilaian?: string;
  ulasan?: string;
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
