import React from "react";

export default function DataTypes() {
  return <div>DataTypes</div>;
}

export interface ProfilType {
  nama?: string;
  email?: string;
  alamat?: string;
  telepon?: string;
  avatar?: any;
}
