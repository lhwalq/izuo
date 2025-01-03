import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import {defaultLocale, getDictionary} from "@/lib/i18n";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "***",
  description: "***",
  openGraph: {
    title: '***',
    description: '***',
    url: 'https://***',
    type: 'website',
    images: {
      url: 'https://***/logo.jpg',
      alt: '***',
      width: 218,
      height: 81,
    },
  },
  twitter: {
    card: 'summary_large_image',
    images: {
      url: 'https://***/logo.jpg',
    },
    title: '***',
    description: '***',
    creator: '@geek_lynn',
    site: 'https://***',
  },
  alternates: {
    canonical: "https://***",
  },
  robots: "index"
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string | undefined };
}>) {

  let langName = lang ? lang : defaultLocale;
  const dict = await getDictionary(langName);

  if (metadata.openGraph) {
    metadata.openGraph.title = dict.seo.home_title
    metadata.openGraph.description = dict.seo.home_description
    metadata.openGraph.url = dict.seo.home_canonical
  }
  if (metadata.twitter) {
    metadata.twitter.title = dict.seo.home_title
    metadata.twitter.description = dict.seo.home_description
    metadata.twitter.site = dict.seo.home_canonical
  }

  return (
      <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
        {process.env.NODE_ENV === "development" ? (
            <>

            </>
        ) : (
            <>
              <GoogleAnalytics/>
            </>
        )}
      </html>
  );
}
