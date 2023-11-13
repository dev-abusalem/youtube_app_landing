import React from "react";
import Container from "../layouts/Container";
import CustomButton from "../utils/CustomButton";
import Image from "next/image";
import mobileImg from "../../../public/images/01.webp";
import { useTranslations } from "next-intl";
const HomeHero = () => {
  const t = useTranslations("HeroText");
  return (
    <section className="__hero-bg min-h-[100vh] md:-mt-[80px] w-ful">
      <Container>
        <div className="md:flex justify-between items-center gap-16 md:min-h-[100vh] min-h-[60vh] text-white md:text-black">
          <div className="md:w-1/2 pt-20 md:pt-0">
            <div className="bg-slate-200 rounded-full inline-block mb-5">
              <div className="flex text-[14px]">
                <p className="text-black bg-sky-600 rounded-full font-semibold py-1 w-[80px] text-center">
                  {t("newTag")}
                </p>
                <p className="text-black py-1 px-2 rounded-full w-[160px] text-center">
                  {t("bestapp")}
                </p>
              </div>
            </div>
            {/* main text of hero section start */}
            <div>
              <h1 className="mb-5 text-4xl md:text-6xl font-semibold">
                {t("appTitle")}
                <br></br>
                <span className="md:text-sky-600 text-black font-bold">
                  {t("welcomeMessage")}
                </span>
              </h1>
              <p className="mb-4">{t("heroDescription")}</p>
              <div className="mt-6">
                <CustomButton title={t("readMoreButton")} href="#" />
              </div>
            </div>
            {/* main text of hero section End */}
          </div>
          <div className="md:w-1/2 flex md:justify-end justify-center mt-8 md:mt-24">
            <Image
              src={mobileImg}
              alt="mobileImage"
              className="max-h-[550px] w-auto shadow-md mt-5 md:mt-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
