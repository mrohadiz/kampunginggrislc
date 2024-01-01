import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Kampung Inggris LC",
  description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
  verification: {
    google: "PCJgKqf7_1krHwDsc0pe7uor_J0dEHz-Xv1HEbBw_m0"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="flex flex-col justify-between h-screen">
              <NavBar />
              {children}
              <Footer />
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
