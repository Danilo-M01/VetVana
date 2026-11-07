import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vet Vana",
  description:
    "Veterinarska ambulanta Vet Vana (Novi Beograd, Dr Ivana Ribara 115A). Dr Ana Vukićević (spec. hirurgije) i dr Ivana Nikić (spec. za egzote). Precizna medicina. Topla briga. Pozovite 063 852 2855.",
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
  keywords: [
    "veterinar novi beograd",
    "vet vana",
    "ana vet novi beograd",
    "dr ivana ribara veterinar",
    "veterinar za ptice",
    "veterinar za egzoticne zivotinje beograd",
    "hirurgija pasa i macaka beograd",
    "dr Ana Vukićević",
    "dr Ivana Nikić",
    "veterinarska ambulanta beograd",
  ],
  authors: [{ name: "Vet Vana" }],
  openGraph: {
    title: "Vet Vana | Veterinarska ambulanta Novi Beograd",
    description:
      "Dr Ana Vukićević (spec. hirurgije) & Dr Ivana Nikić (spec. za egzote). Precizna medicina. Topla briga. Dr Ivana Ribara 115A.",
    url: "https://vetvana.rs",
    siteName: "Vet Vana",
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${manrope.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-ivory text-charcoal antialiased selection:bg-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
