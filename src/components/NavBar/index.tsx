"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import ThemeSwap from "../ThemeBtn";

export default function NavBar() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar bg-base-200 px-10 justify-around fixed z-50">
        <div className="navbar-start">

          <Link href="/" className="btn btn-ghost text-xl">
            Language Center
          </Link>
        </div>

        <div className="navbar-end ">
          <ThemeSwap handleOnClick={changeTheme} />
        </div>
      </div>
    </>
  );
}
