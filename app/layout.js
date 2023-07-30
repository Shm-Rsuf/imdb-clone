import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is an IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <Header />

        {children}
      </body>
    </html>
  );
}
