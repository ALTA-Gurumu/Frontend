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
  Jadwal?: string;
  Ijazah?: any;
  Latitude?: number;
  Longitude?: number;
  onChangeOption?: () => void;
}

export interface ProfilType {
  nama?: string;
  email?: string;
  alamat?: string;
  telepon?: string;
  avatar?: any;
}

export interface getGuruBeranda {
  nama?: string;
  alamat?: string;
  judul?: string;
  pelajaran?: string;
  avatar?: any;
  tarif?: number;
  penilaian?: number;
}

export interface JadwaType {
  id?: number;
  guru_id?: number;
  tanggal?: string;
  jam?: string;
}
