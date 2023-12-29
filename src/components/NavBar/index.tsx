"use client";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import ThemeSwap from "../ThemeBtn";

export default function NavBar() {
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("base-100");
        setTextColor("#000000");
      }
      else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div className={`navbar bg-${color} px-10 justify-around shadow-sm fixed z-50 ease-in duration-300`}>
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

        <div className="navbar-end">
          <ThemeSwap handleOnClick={changeTheme} />
        </div>
      </div>
    </>
  );
}
