import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

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
          {/* SEARCH BOX */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
