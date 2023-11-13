import React from "react";
import Container from "../layouts/Container";
import { useTranslations } from "next-intl";
import FeatureCard from "./Features/FeatureCard";
import oneimage from "../../../public/images/eye.png";
import twoimage from "../../../public/images/expenses.png";
import threeimage from "../../../public/images/query.png";
import fourimage from "../../../public/images/admin-panel.png";
const Features = () => {
  const t = useTranslations("Features");
  return (
    <section id={t("sectionId")} className="py-8 md:py-12 bg-blue-50">
      <Container>
        <div className="text-center pb-8">
          <h2 className="text-center font-semibold text-3xl md:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="pt-2">{t("sectionDescription")}</p>
        </div>
        <div className="md:grid grid-cols-4 gap-5 text-center">
          <FeatureCard
            title={t("featureOneTitle")}
            desc={t("featureOneDesc")}
            src={oneimage}
          />
          <FeatureCard
            title={t("featureTwoTitle")}
            desc={t("featureTwoDesc")}
            src={twoimage}
          />
          <FeatureCard
            title={t("featureThreeTitle")}
            desc={t("featureThreeDesc")}
            src={threeimage}
          />
          <FeatureCard
            title={t("featureFourTitle")}
            desc={t("featureFourDesc")}
            src={fourimage}
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
