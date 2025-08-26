import "./globals.css";
import Navbar from "./components/Navbar";
import { Noto_Sans_Thai } from 'next/font/google'
import Footer from "./components/Footer";

export const metadata = {
  title: "ห้างหุ้นส่วนจำกัด อุเอะฮาระเทรดดิ้ง | อุปกรณ์ดับเพลิงเเละระบบดับเพลิงอัตโนมัติ",
  description: "เว็บไซต์อย่างเป็นทางการของ ห้างหุ้นส่วนจำกัด อุเอะฮาระเทรดดิ้ง จำหน่ายระบบดับเพลิงและอุปกรณ์ดับเพลิงอัตโนมัติ แบรนด์ Morita Miyata เเละ Statx ครบวงจร ทั้งติดตั้ง บำรุงรักษา และจำหน่ายอุปกรณ์คุณภาพมาตรฐานสากล",
  keywords: [
    "Morita",
    "Miyata",
    "Statx",
    "อุปกรณ์ดับเพลิงอัตโนมัติ",
    "ระบบดับเพลิงอัตโนมัติ",
    "ห้างหุ้นส่วนจำกัด อุเอะฮาระเทรดดิ้ง",
    "บริการติดตั้งชุดดับเพลิงอัตโนมัติ",
    "บริการซ่อมบำรุงชุดดับเพลิงอัตโนมัติ",
    "GMP",
    "มาตรฐานสากล",
  ],
  authors: [
    { name: "ห้างหุ้นส่วนจำกัด อุเอะฮาระเทรดดิ้ง"}
  ],
  openGraph: {
    title: "ห้างหุ้นส่วนจำกัด อุเอะฮาระเทรดดิ้ง | อุปกรณ์ดับเพลิงเเละระบบดับเพลิงอัตโนมัติ",
    description: "จำหน่ายระบบดับเพลิงและอุปกรณ์ดับเพลิงอัตโนมัติ แบรนด์ Morita Miyata เเละ Statx ครบวงจร ทั้งติดตั้ง บำรุงรักษา และจำหน่ายอุปกรณ์คุณภาพมาตรฐานสากล",
    url: "https://morita-miyata.vercel.app/", // ใส่โดเมนจริงเมื่อพร้อม
    siteName: "ระบบดับเพลิง Morita Uehara Trading",
    images: [
      {
        url: "/group-brand.png", // รูปโลโก้หรือภาพ Hero
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

const noto = Noto_Sans_Thai({
  weight: ['400', '500', '700'],
  subsets: ['thai'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={noto.className}>
      <body>
        
          {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Navbar Header */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen mt-2">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
