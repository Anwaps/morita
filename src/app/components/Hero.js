"use client";
import Image from "next/image";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation } from "swiper/modules";

const Hero = memo(() => {
  const slides = [
      { type: "video", src: "/fire-video2.mp4", alt: "Video Demo Fire Extinguisher2" },
      { type: "video", src: "/fire-video1.mp4", alt: "Video Demo Fire Extinguisher1" },
      { type: "image", src: "/P-1.webp", alt: "Automatic Fire Extinguisher 1" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-red-800 to-red-500 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-15 mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Swiper ด้านซ้าย */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation
              modules={[Navigation]}
              className="w-full max-h-96 rounded-lg shadow-lg"
               onSlideChange={(swiper) => {
                swiper.slides.forEach((slide, idx) => {
                const video = slide.querySelector("video");
                if (video) {
                    if (idx === swiper.activeIndex) video.play();
                    else video.pause();
                }
                });
            }}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  {slide.type === "image" ? (
                    <div className="w-full h-96 relative rounded-lg shadow-lg overflow-hidden">
                        <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={idx === 0} // โหลดทันทีสำหรับ slide แรก
                        />
                    </div>
                    ) : (
                    <video
                        src={slide.src}
                        controls
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                        preload="none"
                        muted
                        playsInline
                        autoPlay
                        loop
                    />
                    )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* จัดปุ่ม navigation ให้อยู่ใกล้ slider */}
            <style jsx global>{`
              .swiper-button-next,
              .swiper-button-prev {
                color: red;
                top: 50%;
                width: 2.5rem;
                height: 2.5rem;
              }
              .swiper-pagination-bullet {
                background: white;
                opacity: 0.8;
              }
              .swiper-pagination-bullet-active {
                background: red;
              }
            `}</style>
          </div>

          {/* ข้อความด้านขวา */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              ระบบดับเพลิงอัตโนมัติ<br />
              <span className="block sm:inline">
                ปลอดภัยสูงสุด สำหรับบ้านและอาคาร
              </span>
              <br />
              โดยเเบรนด์
              <div className="bg-white inline-block px-2 py-0.5 rounded-md mx-auto ml-3">
                <Image
                  src="/morita-brand.webp"
                  alt="Morita Brand"
                  width={160}
                  height={40}
                />
              </div>
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              ป้องกันอัคคีภัยอย่างชาญฉลาด ด้วยเทคโนโลยีอัตโนมัติ
            </p>

            {/* ปุ่ม CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
                ติดต่อเรา
              </a>
              <a href="#about" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition cursor-pointer">
                เกี่ยวกับเรา
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
