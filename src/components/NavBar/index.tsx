"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import ThemeSwap from "../ThemeBtn";

export default function NavBar() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar bg-base-200 px-10 justify-around fixed z-50">
        <div className="navbar-start">

          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              alt="kampung inggris lc logo"
              src="/logo-white.webp"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="navbar-end ">
          <ThemeSwap handleOnClick={changeTheme} />
        </div>
      </div>
    </>
  );
}
