import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeContext } from "../utils/context";
import Login from "../pages/auth/Login";
import { useMemo, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import Register from "../pages/auth/Register";
import StudentPage from "../pages/StudentEdit";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const background = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/editStudent",
    //   element: <StudentPage />,
    // },
  ]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
