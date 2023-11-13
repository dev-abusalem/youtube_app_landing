import React from "react";
import Container from "../layouts/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mdc from "../../../public/images/02.png";
const MarketingDesc = () => {
  const t = useTranslations("AboutUs");
  return (
    <section id={t("sectionId")} className="py-8 md:py-12 __marketing_desc">
      <Container>
        <div className="md:grid grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:block md:justify-start">
            <Image
              alt="mdc img"
              src={mdc}
              className="rounded md:mt-0 mt-5 shadow-md w-auto max-h-[550px]"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="font-bold text-3xl pb-2">{t("sectionTitle")}</h2>
            <p>
              <strong>{t("aboutContentStrong")}</strong> {t("aboutContent")}{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingDesc;
