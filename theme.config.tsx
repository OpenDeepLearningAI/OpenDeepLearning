import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo/logo2.png" width={65} />
      <span style={{ marginLeft: ".8em" }}>
        <img src="/logo/nameLogo.png" width={120} />
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
        <link rel="icon" href="/static/img/favicon.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/AIPortalGun/AI-Portal-Gun",
  },
  chat: {
    link: "https://discord.gg/tQU9xfcEyE",
  },
  docsRepositoryBase: "https://github.com/AIPortalGun/AI-Portal-Gun/tree/main/",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/AIPortalGun/AI-Portal-Gun/issues/new",
    content: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/icons/github.png" width={18} />
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/icons/edit_icon.png" width={18} />
          <span> Edit this Page </span>
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
        titleTemplate: "AI Portal Gun",
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | AI Portal Gun",
      };
    }
  },
  primaryHue: 85,
  primarySaturation: 80,
  toc: {
    backToTop: true,
    title: "Table of contents",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
