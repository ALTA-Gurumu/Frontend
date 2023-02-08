import React from "react";
import axios, { AxiosHeaders } from "axios";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";
import { ProfileTeacher } from "../pages/ProfilePage";
import { TabsContentForTeacherPage } from "../pages/ProfilePage";
import { ProfileStudent } from "../pages/ProfilePage";

import HalamanSesiMurid from "../pages/HalamanSesiMurid";
import { HalamanSesiGuru } from "../pages/HistoryPage";
import PaymentDetails from "../pages/paymentDetails";

import EditStudent from "../pages/EditStudent";
import EditTeacher from "../pages/EditTeacher";
import LandingPage from "../pages/LandingPage";
import Beranda from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Rating from "../pages/Rating";
import Reservasi from "../pages/Reservasi";
import Home from "../pages/Home";

function App() {
  const [cookie, , removeCookie] = useCookies(["token", "role", "verifikasi"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkVerifikasi = cookie.verifikasi;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Beranda />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/ulasan/:guru_id",
      element: <Rating />,
    },

    // {
    //   path: "/editStudent",
    //   element: <EditStudent />,
    // },
    // {
    //   path: "/HalamanSesiGuru",
    //   element: <HalamanSesiGuru />,
    // },
    {
      path: "/HalamanSesiMurid",
      element:
        checkToken && checkRole === "siswa" ? <HalamanSesiMurid /> : <Login />,
    },
    {
      path: "/paymentDetails",
      element:
        checkToken && checkRole === "siswa" ? <PaymentDetails /> : <Login />,
    },
    {
      path: "/editTeacher",
      element:
        checkToken && checkRole === "guru" && checkVerifikasi === "false" ? (
          <EditTeacher />
        ) : (
          <Home />
        ),
    },
    {
      path: "/reservasi",
      element: checkToken ? <Reservasi /> : <Login />,
    },
    {
      path: "/profileStudent",
      element: checkToken ? <ProfileStudent /> : <Login />,
    },
    {
      path: "/profile-teacher",
      element: <ProfileTeacher />,
    },
    // {
    //   path: "/transactions-selling",
    //   element: checkToken ? <TranscSell /> : <Login />,
    // },
    // {
    //   path: "/profile-edit/:id_user",
    //   element: checkToken ? <EditProfile /> : <Login />,
    // },
    // {
    //   path: "/new-item",
    //   element: checkToken ? <AddProduct /> : <Login />,
    // },
    // {
    //   path: "/edit-item/:product_id",
    //   element: checkToken ? <EditProduct /> : <Login />,
    // },
    // {
    //   path: "/buying/:id_order",
    //   element: checkToken ? <DetailTransc /> : <Login />,
    // },
    // {
    //   path: "/selling/:id_order",
    //   element: checkToken ? <DetailTranscSell /> : <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
