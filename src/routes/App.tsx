import React from "react";
import axios, { AxiosHeaders } from "axios";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

import ProfileTeacher from "../pages/ProfilTeacher";
import LandingPage from "../pages/LandingPage";
import Beranda from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProfileStudent from "../pages/ProfileStudent";
import Rating from "../pages/Rating";
import EditStudent from "../pages/EditStudent";
import HalamanSesiGuru from "../pages/HalamanSesiGuru";
import HalamanSesiMurid from "../pages/HalamanSesiMurid";
import PaymentDetails from "../pages/paymentDetails";
import Reservasi from "../pages/Reservasi";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

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
    {
      path: "/editStudent",
      element: <EditStudent />,
    },
    {
      path: "/HalamanSesiGuru",
      element: <HalamanSesiGuru />,
    },
    {
      path: "/HalamanSesiMurid",
      element: <HalamanSesiMurid />,
    },
    {
      path: "paymentDetails",
      element: <PaymentDetails />,
    },
    // {
    //   path: "/detail/:id_item",
    //   element: <DetailItems />,
    // },
    {
      path: "/reservasi",
      element: <Reservasi />,
    },
    // {
    //   path: "/checkout",
    //   element: checkToken ? <Checkout /> : <Login />,
    // },
    {
      path: "/profile-student",
      element: <ProfileStudent />,
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
