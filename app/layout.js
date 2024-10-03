import { GoogleAnalytics } from "@next/third-parties/google";
import Translator from "@/components/Translator";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Telegram from "@/components/Telegram";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";
import settings from "@/settings.json";
import Script from "next/script";


export const metadata = {
  title: `${settings.seo.title} | ${settings.seo.tagline}`,
  description: `${settings.seo.description}`,
  keywords: `${settings.seo.keywords}`,
  canonical: '/',
  image: `${settings.icon}`,
  author: `${settings.seo.tagline}`,
  robots: "index, follow",
  twitter: {
    handle: `${settings.seo.twitter}`,
    site: `${settings.seo.twitter}`,
    cardType: "summary_large_image",
  },

  openGraph: {
    url: '/',
    title: `${settings.seo.title} | ${settings.seo.tagline}`,
    description: `${settings.seo.description}`,
    images: [
      {
        url: `${settings.icon}`,
        width: 800,
        height: 600,
        alt: `${settings.seo.title}`,
        type: "image/jpeg",
      },
    ],
    siteName: `${settings.seo.tagline}`,
  },
  script: [
    {
      type: "application/ld+json",
      json: {
        "@context": "https://schema.org",
        "@type": "Website",
        headline: `${settings.seo.title} | ${settings.seo.tagline}`,
        description: `${settings.seo.description}`,
        author: {
          "@type": "Person",
          name: `${settings.seo.tagline}`,
          url: '/',
        },
        mainEntityOfPage: {
          "@type": "Website",
          "@id": '/',
        },
        image: `${settings.icon}`,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
      },
    },
  ],
};

export default function RootLayout({ children }) {

  const customStyles = {
    "--color-primary": settings.colors.primary,
    "--background-color": settings.colors.background,
    "--menu-background-color": settings.colors.navBackground,
    "--menu-color": settings.colors.navColor,
    "--container-background-color": settings.colors.containerBackground,
    "--search-container-background-color": settings.colors.searchBackground,
    "--placeholder-color": settings.colors.inputPlaceholder,
    "--main-font": settings.fonts.main,
    "--heading-font": settings.fonts.heading,
  };

  const googleFontLinks = settings.fonts.googleFonts.map((fontUrl, index) => (
    <link key={index} href={fontUrl} rel="stylesheet" />
  ));

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {googleFontLinks}
        {settings.googleAdsenseId && settings.googleAdsenseId !== "" &&
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${settings.googleAdsenseId}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
          id="adsbygoogle"
        ></Script>}

        <style>
          {`
            :root {
              --color-primary: ${customStyles["--color-primary"]};
            --background-color: ${customStyles["--background-color"]};
            --menu-background-color: ${customStyles["--menu-background-color"]};
            --menu-color: ${customStyles["--menu-color"]};
            --container-background-color: ${customStyles["--container-background-color"]};
            --search-container-background-color: ${customStyles["--search-container-background-color"]};
            --placeholder-color: ${customStyles["--placeholder-color"]};
            --main-font: ${customStyles["--main-font"]};
            --heading-font: ${customStyles["--heading-font"]};
            }
          `}
        </style>
      
        <Translator />
      </head>
      <body>
        <div className="container">
          <Header />
          <div className="content">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </div>
        {settings.telegram.username && <Telegram />}
        {settings.googleAnalytics && <CookieConsentBanner />}
        {settings.googleAnalytics && <GoogleAnalytics gaId={settings.googleAnalytics} />}
      </body>

    </html>
  );
}
