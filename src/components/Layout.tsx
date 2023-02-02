import React, { ReactNode } from "react";
import LoginNavbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full bg-white flex flex-col">{children}</div>
    </div>
  );
}

function LayoutRegisLogin({ children }: LayoutProps) {
  return (
    <div
      className="w-full h-screen flex flex-col overflow-auto"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <LoginNavbar />
      <div
        className="w-full h-full bg-white flex flex-col"
        style={{ backgroundColor: "#EFEFEF" }}
      >
        {children}
      </div>
    </div>
  );
}

export { Layout, LayoutRegisLogin };
