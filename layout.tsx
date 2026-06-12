import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RY Barbershop | Richardson, TX",
  description:
    "Richardson's premier barbershop. Precision cuts, beard sculpting, hot towel shaves, and our signature Rey Service. Located at 1144 N Plano Rd, Richardson, TX 75081.",
  keywords: ["barbershop", "Richardson TX", "haircut", "beard", "hot towel shave", "RY Barbershop"],
  openGraph: {
    title: "RY Barbershop | Richardson, TX",
    description: "Precision. Style. Legacy. Richardson's Premier Barbershop Experience.",
    url: "https://rybarbershop.com",
    siteName: "RY Barbershop",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <LangProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  );
}
