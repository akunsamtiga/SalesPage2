import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Furnitur Berkualitas untuk Rumah Impian | FurniCraft",
  description:
    "Temukan koleksi furniture eksklusif dari FurniCraft yang akan mengubah rumah Anda menjadi ruang hidup yang indah, nyaman, dan fungsional.",
  keywords: "furniture modern, mebel kayu, sofa nyaman, set kamar tidur, furniture kantor, furnitur ruang tamu",
  author: "FurniCraft Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}