import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { FaXTwitter } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'


const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo/logo.png" width={30} />
      <span style={{ marginLeft: ".2em" , fontSize:"20px"}}>
        <span className="logoName">OpenML Guide </span> 
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
        <link rel="icon" href="/logo/logo.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/severus27/OpenML-Guide",
  },
  chat: {
    link: "https://discord.gg/QgZHExcssR",
  },
  navbar: {
    extraContent:
    <Link href="https://twitter.com/OpenMLGuide" target="_blank">
        <FaXTwitter className="twitter_icon"/>
    </Link>
  },
  docsRepositoryBase: "https://github.com/severus27/OpenML-Guide/tree/main/",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/severus27/OpenML-Guide/issues/new",
    content: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <FaGithub style={{ width:"18px", height: "18px"}}/>
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <MdEdit style={{ width:"18px", height: "18px"}}/>
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
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: "OpenML Guide",
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | OpenML Guide",
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
    key: 'OpenML Guide',
    text: (
      <a href="https://github.com/severus27/OpenML-Guide" target="_blank">
        Show some love to the OpenML Guide on GitHub—hit it up with a ⭐! 
      </a>
    )
  }
};

export default config;
