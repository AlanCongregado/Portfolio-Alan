import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
title: "Alan Congregado | Coach de CrossFit & Entrenamiento Funcional · Valencia",
  description:
    "Coach de CrossFit con 1 año de experiencia en boxes reales. Especializado en corrección técnica y clases grupales. Disponible en Valencia desde abril/mayo 2026.",
  keywords:
    "Coach CrossFit Valencia, Head Coach, Entrenamiento Funcional, CrossFit, Operations Manager",
  authors: [{ name: "Alan Congregado" }],
  metadataBase: new URL("https://alancongregado.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://alancongregado.vercel.app/",
    title: "Alan Congregado | Coach de CrossFit · Valencia",
    description:
      "Coach de CrossFit especializado en corrección técnica y clases grupales. Disponible en Valencia desde abril/mayo 2026.",
    images: [{ url: "/foto-alan.jpg" }],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Congregado | Coach de CrossFit · Valencia",
    description:
      "Coach de CrossFit especializado en corrección técnica y clases grupales. Disponible en Valencia desde abril/mayo 2026.",
    images: ["/foto-alan.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alan Congregado",
              jobTitle: "Coach de CrossFit & Entrenamiento Funcional",
              description:
                "Coach de CrossFit especializado en corrección técnica y clases grupales.",
              email: "alan.congregado@hotmail.com",
              telephone: "+34643382057",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valencia",
                addressCountry: "ES",
              },
              sameAs: [
                "https://www.linkedin.com/in/alan-congregado/",
                "https://www.instagram.com/alancongregado/",
              ],
            }),
          }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5D5GZHFV41"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5D5GZHFV41');
        `}
      </Script>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
