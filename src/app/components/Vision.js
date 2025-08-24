"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vision() {
  const visionCard = [
    {
      image: "/japan.webp",
      title: "ผลิตภัณฑ์มาตรฐาน",
      desc: "นำเข้าผลิตภัณฑ์มาตรฐานจากผู้ผลิต โรงงาน จากประเทศญี่ปุ่น ด้วยหลักธรรมาภิบาล",
    },
    {
      image: "/delivery.webp",
      title: "จัดส่งสินค้าให้ลูกค้าตรงเวลา",
      desc: "จัดส่งสินค้าตรงเวลา เร็ว ปลอดภัยถึงมือลูกค้าภายในวันที่กำหนด",
    },
    {
      image: "/good-price.webp",
      title: "ราคายุติธรรม",
      desc: "ราคายุติธรรมและคำนึงถึงประโยชน์ของคู่ค้าเป็นสำคัญ",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-red-800 text-white">
      {/* Hero Section */}
      <div className="text-center p-4 mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          วิสัยทัศน์ของบริษัท
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          นำเข้าผลิตภัณฑ์มาตรฐานจากผู้ผลิต โรงงาน จากประเทศญี่ปุ่น ด้วยหลักธรรมาภิบาล
          จัดส่งสินค้าให้ลูกค้าตรงเวลา ในราคายุติธรรมและคำนึงถึงประโยชน์ของคู่ค้าเป็นสำคัญ
        </p>
        <Link href="#contact">
          <button className="px-6 py-3 bg-white text-red-600 cursor-pointer transition duration-200 font-semibold rounded-lg shadow hover:bg-red-700 hover:text-white hover:outline-2 hover:outline-white">
            ติดต่อเรา
          </button>
        </Link>
      </div>

      {/* Vision Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visionCard.map((card, index) => (
          <div
            key={index}
            className="bg-white text-red-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500} // ปรับตามขนาดจริง
              height={300}
              className="w-full h-56 object-cover"
              priority={index === 0} // โหลดเร็วแค่ภาพแรก
              loading={index === 0 ? "eager" : "lazy"} // ที่เหลือ lazy
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
