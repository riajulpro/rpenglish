"use client";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold text-2xl">{t("welcome")}</h1>
    </div>
  );
};

export default Home;
