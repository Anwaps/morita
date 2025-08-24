"use client";
import { FaFireExtinguisher } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import Image from "next/image";



export default function Service() {
    {/* สินค้า */}
    const prodcuts = [
        {
        title: "ชุดดับเพลิงอัตโนมัติ เเบรนด์ Morita",
        desc: "จำหน่ายชุดดับเพลิงอัตโนมัติ เเบรนด์ Morita UG (Automatic Fire Extinguisher System)",
        image: "/Service-1.webp"
        },
        {
        title: "ชุดดับเพลิงอัตโนมัติ แบรนด์ Miyata",
        desc: "- จำหน่ายชุดดับเพลิงอัตโนมัติ แบรนด์ Miyata (Automatic Fire Extinguisher System)",
        image: "/Service-2.webp"
        },
        {
        title: "ระบบดับเพลิงอัตโนมัติ แบรนด์ Nichibou",
        desc: "จำหน่ายระบบดับเพลิงอัตโนมัติ แบรนด์ Nichibou (Japanese Erase Tube)",
        image: "/Service-4.webp"
        },
    ]
    {/* บริการ */}
    const services = [
        {
            title: "บริการติดตั้งชุดดับเพลิงอัตโนมัติ",
            desc: "บริการติดตั้งระบบดับเพลิงอัตโนมัติ มาตฐานสากล",
            image: "/Service-5.webp"
        },
        {
            title: "บริการซ่อมบำรุงชุดดับเพลิงอัตโนมัติ",
            desc: "บริการซ่อมบำรุงชุดดับเพลิงอัตโนมัติ โดย ทีมช่างคุณภาพ",
            image: "/p-8.webp"
        },
    ]
    {/* รูปตัวอบ่างสินค้า */}
    const sampleImage = [
        "/p-1.webp",
        "/p-2.webp",
        "/p-3.webp",
        "/p-4.webp",
        "/p-5.webp",
        "/p-6.webp",
        "/p-7.webp",
        "/p-8.webp",
        "/p-9.webp",
        "/p-10.webp",
        "/p-11.webp",
        "/Service-1.webp",
        "/Service-2.webp",
        "/Service-3.webp",
        "/Service-4.webp",
        "/Service-5.webp"
    ]
    return (
        <section className="py-20 bg-gradient-to-b from-red-600 to-red-800 text-white">
            {/* หัวข้อ */}
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">สินค้าเเละบริการ</h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    เรามีบริการครบวงจรด้านระบบดับเพลิง ตั้งแต่การติดตั้ง ตรวจสอบ บำรุงรักษา 
                    หรือ รับซื้อ/ขาย เพื่อให้คุณมั่นใจได้ในทุกสถานการณ์
                </p>
            </div>
            {/* ส่วนบนสินค้า */}
            <div className="max-w-7xl mx-auto mb-16 px-6">
                <h2 className="text-2xl font-bold mb-6 text-center">สินค้าที่เราจำหน่าย</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {prodcuts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white text-red-700 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={250}
                                height={100}
                                className="object-contain mb-4"
                                loading="lazy"
                            />
                            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                            <p className="text-base text-gray-700 text-center mb-4">{product.desc}</p>
                            <a href="#contact">
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
                                    ติดต่อสอบถาม
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* ส่วนล่าง บริการ */}
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6 text-center">บริการของเรา</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white text-red-700 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={160}
                                height={160}
                                className="object-contain mb-4"
                                loading="lazy"
                            />
                            <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-700 text-center mb-4">{service.desc}</p>
                            <a href="#contact">
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
                                    ติดต่อดูรายละเอียด
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide ตัวอบ่างสินค้าเเละอะไหล่ */}
            <div className="max-w-7xl mx-auto mt-16 px-6">
                <h2 className="text-2xl font-bold mb-6 text-center">ตัวอย่างสินค้าเเละอะไหล่</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true}}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2},
                        1024: { slidesPerView: 3}
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {sampleImage.map((img, idx) => (
                        <SwiperSlide key={idx} className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
                            <img src={img} alt={`Sample ${idx}`} className="w-full h-48 object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <h2 className="text-2xl font-bold mb-4">สนใจบริการของเรา?</h2>
                <p className="text-white/90 mb-6">ติดต่อเราเพื่อขอคำปรึกษาเเละรายะละเอียด</p>
                <a
                    href="#contact"
                    className="px-6 py-3 bg-white text-red-700 font-semibold rounded-lg shadow hover:bg-gray-200"
                >
                    ติดต่อเรา
                </a>
            </div>
        </section>
    )
}