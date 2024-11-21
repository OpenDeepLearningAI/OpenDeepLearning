import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import Link from "next/link";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo/logo.png" width={30} />
      <span className="text-[19px] font-semibold ml-1">
        <span> OpenMLGuide </span>
      </span>
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    // { locale: "zh", text: "中文" },
    // { locale: "ru", text: "Русский" },
    // { locale: "jp", text: "日本語" },
    // { locale: "tr", text: "Türkçe" },
    // { locale: "kr", text: "한국어" },
    // { locale: "pt", text: "Português" },
    // { locale: "es", text: "Español" },
  ],
  head: function UseHead() {
    const { title } = useConfig();
    return (
      <>
        <link rel="icon" href="/logo/favicon.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/severus27/OpenML-Guide",
    icon: <FaGithub className="h-[25.5px] w-[25.5px] hover:text-[#76b900]" />,
  },
  chat: {
    link: "https://discord.gg/QgZHExcssR",
    icon: <FaDiscord className="h-[25.5px] w-[25.5px] hover:text-[#76b900]" />,
  },
  navbar: {
    extraContent: (
      <Link href="https://twitter.com/Open_DL_AI" target="_blank">
        <FaXTwitter className="h-6 w-6 ml-2 hover:text-[#76b900]" />
      </Link>
    ),
  },
  docsRepositoryBase: "https://github.com/severus27/OpenML-Guide/tree/main/",
  feedback: {
    useLink: () => "https://github.com/severus27/OpenML-Guide/issues/new",
    content: (
      <>
        <span className="flex gap-2.5">
          <FaGithub className="w-[18px] h-[18px]" />
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: (
      <>
        <span className="flex gap-2.5">
          <MdEdit className="w-[18px] h-[18px]" />
          <span> Edit this page </span>
        </span>
      </>
    ),
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    toggleButton: true,
  },
  // gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: "Open DeepLearning",
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | OpenDeepLearning",
      };
    }
  },
  primaryHue: 85,
  primarySaturation: 80,
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  banner: {
    key: "OpenML Guide",
    text: (
      <a href="https://github.com/severus27/OpenML-Guide" target="_blank" className="text-semibold">
        Go give a ⭐ to OpenDeepLearning on GitHub!
      </a>
    ),
  },
  footer: {
    text: (
      <div className="flex w-full items-center justify-between text-sm">
        <div className="ml-1 text-sm">
          <span> OpenDeepLearning © 2023-{new Date().getFullYear()} </span>
        </div>
        <div className="flex gap-5 text-xl">
          <a href="https://www.youtube.com/@Open_DeepLearning" target="_blank">
            <FaYoutube className="hover:text-[#76b900]" />
          </a>
          <a href="mailto:openmlguide@gmail.com" target="_blank">
            <TbMailFilled className="hover:text-[#76b900]" />
          </a>
          <a href="https://github.com/open-deeplearning" target="_blank">
            <FaGithub className="hover:text-[#76b900]" />
          </a>
          <a href="https://discord.com/invite/QgZHExcssR" target="_blank">
            <FaDiscord className="hover:text-[#76b900]" />
          </a>
          <a href="https://twitter.com/Open_DL_AI" target="_blank">
            <FaXTwitter className="hover:text-[#76b900]" />
          </a>
        </div>
      </div>
    ),
  },
};

export default config;
