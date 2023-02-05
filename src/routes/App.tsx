import React from "react";
import axios, { AxiosHeaders } from "axios";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

import { TabsContentForTeacherPage } from "../pages/ProfilePage";
import { ProfileStudent } from "../pages/ProfilePage";

import HalamanSesiMurid from "../pages/HalamanSesiMurid";

import { HalamanSesiGuru } from "../pages/HistoryPage";

// import HalamanSesiGuru from "../pages/HalamanSesiGuru";

import PaymentDetails from "../pages/paymentDetails";
import ProfileTeacher from "../pages/ProfilTeacher";
import EditStudent from "../pages/EditStudent";
import EditTeacher from "../pages/EditTeacher";
import LandingPage from "../pages/LandingPage";
import Beranda from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Rating from "../pages/Rating";
import Reservasi from "../pages/Reservasi";

function App() {
  const [cookie, , removeCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;

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
        checkToken && checkRole === "siswa" ? (
          <HalamanSesiMurid />
        ) : (
          <Navigate to="/login" />
        ),
    },
    {
      path: "paymentDetails",
      element: <PaymentDetails />,
    },
    {
      path: "/editTeacher",
      element: <EditTeacher />,
    },
    {
      path: "/reservasi",
      element: <Reservasi />,
    },
    {
      path: "/profileStudent",
      element: <ProfileStudent />,
    },
    {
      path: "/profile-teacher/:guru_id",

      element: <TabsContentForTeacherPage />,
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
