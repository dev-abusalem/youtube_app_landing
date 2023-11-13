"use client";
import React from "react";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const t = useTranslations("FooterText");
  return (
    <footer className="md:py-16 py-8 bg-black border-t shadow-inner shadow-white border-white mt-10">
      <Container>
        <div className="md:flex text-white justify-between align-top gap-10">
          <div className="md:w-1/4 mb-6 md:mb-1">
            <h2 className="text-lg">{t("aboutTitle")}</h2>
            <div className="mt-5">
              <h1 className="text-3xl">{t("appName")}</h1>
              <p>{t("appDescription")}</p>
            </div>
          </div>

          <div className="md:w-1/4 mb-6 md:mb-1">
            <h2 className="text-lg">{t("quickLinksTitle")}</h2>
            <ul className="mt-5">
              <li>
                <Link
                  className="hover:underline duration-100"
                  href="/privacy-policy"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline duration-100" href="#">
                  {t("termsAndConditions")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 mb-6 md:mb-1">
            <h2 className="text-lg">{t("downloadAppsTitle")}</h2>
            <ul className="mt-5">
              <li>
                <Link className="hover:underline duration-100" href="#">
                  {t("applestore")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline duration-100" href="#">
                  {t("gplaystore")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4 mb-6 md:mb-1">
            <h2 className="text-lg">{t("socialLinksTitle")}</h2>
            <div className="mt-5 flex gap-3">
              <Link href="#">
                <FaFacebookF className="p-2 border border-white hover:bg-white hover:text-black duration-100 text-4xl rounded-sm" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="p-2 border border-white hover:bg-white hover:text-black duration-100 text-4xl rounded-sm" />
              </Link>
              <Link href="#">
                <RiTwitterXFill className="p-2 border border-white hover:bg-white hover:text-black duration-100 text-4xl rounded-sm" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
