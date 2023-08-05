import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is an IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* HEADER */}
          <Header />
          {/* NAVBAR */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
