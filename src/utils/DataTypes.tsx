export interface DataTypesGuru {
  ID: number;
  Nama: string;
  Email: string;
  Password: string;
  Telepon: number;
  Deskripsi: string;
  Pelajaran: string;
  Alamat: string;
  Avatar: string;
  Ijazah: any;
  Role: string;
  Latitude: number;
  Longitude: number;
}

export interface ProfilType {
  nama?: string;
  email?: string;
  alamat?: string;
  telepon?: string;
  avatar?: any;
}
