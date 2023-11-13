"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import eng from "../../../public/images/eng.webp";
import ar from "../../../public/images/ar.webp";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";

const Header = ({ className }) => {
  const t = useTranslations("Header");
  const menu = useTranslations("Menu");

  const [showHideMenu, setShowHideMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    window.location.replace(`/${lang}`, true);
  };

  return (
    <header
      className={
        className
          ? `${className} min-h-[60px] md:leading-[60px] z-10 relative`
          : ` min-h-[60px] md:leading-[60px] z-10 relative`
      }
    >
      <Container>
        <div className="md:flex justify-between items-center gap-5 w-full">
          <div className="flex justify-between items-center py-3 md:py-0">
            <Link className="text-2xl font-bold text-sky-600 logo" href="/">
              {t("logo")}
            </Link>
            {showHideMenu ? (
              <IoMdClose
                className="text-xl cursor-pointer md:hidden"
                onClick={() => setShowHideMenu(!showHideMenu)}
              />
            ) : (
              <FaBars
                className="text-xl cursor-pointer md:hidden"
                onClick={() => setShowHideMenu(!showHideMenu)}
              />
            )}
          </div>
          <nav className={showHideMenu ? "md:block py-3" : "hidden md:block"}>
            <ul className="md:flex gap-2 py-4 md:py-0">
              <li>
                <Link
                  href="#"
                  className="px-0 md:px-2 md:py-0 py-2 md:text-white md:hover:text-slate-100 duration-100 leading-[1rem] md:leading-none"
                >
                  {menu("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="px-0 md:px-2 md:py-0 py-2 md:text-white md:hover:text-slate-100 duration-100 leading-[1rem] md:leading-none"
                >
                  {menu("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="px-0 md:px-2 md:py-0 py-2 md:text-white md:hover:text-slate-100 duration-100 leading-[1rem] md:leading-none"
                >
                  {menu("features")}
                </Link>
              </li>
              <li>
                <Link
                  href="#screenshots"
                  className="px-0 md:px-2 md:py-0 py-2 md:text-white md:hover:text-slate-100 duration-100 leading-[1rem] md:leading-none"
                >
                  {menu("screenshots")}
                </Link>
              </li>

              <li className="md:ml-2  md:mt-0 mt-6">
                <Link
                  href="#footer"
                  className="py-[10px] md:mx-3 px-5 shadow-md rounded-xl md:bg-white bg-sky-600 text-black hover:text-white hover:bg-sky-600 font-semibold"
                >
                  {t("downbtn")}
                </Link>
              </li>

              {/* language switcher */}
              <div className="flex md:justify-end items-center gap-2 mt-5 md:mt-0">
                <Image
                  alt="eng"
                  src={eng}
                  width={40}
                  className=" cursor-pointer"
                  onClick={() => handleLanguageChange("en")}
                />
                <Image
                  alt="ar"
                  src={ar}
                  width={40}
                  className=" cursor-pointer"
                  onClick={() => handleLanguageChange("ar")}
                />
              </div>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
