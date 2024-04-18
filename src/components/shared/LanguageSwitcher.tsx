"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [isLangOn, setIsLangOn] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const switchLang = (language: string) => {
    i18n.changeLanguage(language);
  };

  const langEN = () => {
    switchLang("en");
    setIsLangOn(false);
  };
  const langBN = () => {
    switchLang("bn");
    setIsLangOn(false);
  };

  return (
    <>
      <div className="relative group/lang inline-block">
        <button
          className="px-3 py-1 flex items-center gap-1"
          onClick={() => setIsLangOn(!isLangOn)}
        >
          <CiGlobe className="dark:text-white text-2xl" />
          <MdKeyboardArrowDown
            className={
              isLangOn
                ? "rotate-180"
                : "group-hover/lang:rotate-180 duration-150 ease-in-out"
            }
          />
        </button>
        <div
          className={`absolute ${
            isLangOn
              ? "scale-y-100"
              : "scale-y-0 origin-top group-hover/lang:scale-y-100"
          } overflow-hidden flex flex-col w-full bg-gray-50 dark:bg-slate-900 duration-300 transition-all ease-in-out`}
        >
          <button
            onClick={langEN}
            className="py-1 px-3 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Image
              src="/icons/en.svg"
              alt="English"
              height={25}
              width={50}
              className="h-5"
            />
          </button>
          <button
            onClick={langBN}
            className="py-1 px-3 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Image
              src="/icons/bn.svg"
              alt="Bangla"
              height={25}
              width={50}
              className="h-5"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
