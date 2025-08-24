"use client";
import React, { memo } from "react";
import Image from "next/image";
import { Facebook, Instagram } from 'lucide-react';
import { FaLine } from "react-icons/fa6";
import { siteConfig } from '../config/setConfig';

const Footer = memo(() => {
  return (
    <footer className="bg-red-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* โลโก้ + ข้อความสั้น */}
        <div>
          <div className='bg-white w-fit px-4 py-[1px] rounded-md sm:mx-0 mx-auto'>
            <Image
              src="/morita-brand.webp"
              alt="Morita Logo - ระบบดับเพลิงอัตโนมัติ"
              width={128}
              height={32}
              priority={true}
            />
          </div>
          <p className="text-sm leading-relaxed mt-2">
            ผู้นำด้านระบบดับเพลิงอัตโนมัติ<br />
            ปลอดภัย มั่นใจ ระบบคุณภาพ
          </p>
        </div>

        {/* ลิงก์ด่วน */}
        <div>
          <h3 className="font-bold text-lg mb-3">เมนู</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">เกี่ยวกับเรา</a></li>
            <li><a href="#service" className="hover:underline">สินค้าเเละบริการ</a></li>
            <li><a href="#vision" className="hover:underline">วัสัยทัศน์ของบริษัท</a></li>
            <li><a href="#contact" className="hover:underline">ติดต่อเรา</a></li>
          </ul>
        </div>

        {/* ติดต่อ */}
        <div>
          <h3 className="font-bold text-lg mb-3">ติดต่อ</h3>
          <p className="text-sm">1699/12 ถนนอุดมสรยุทธ์ ตำบลตลองจิก อำเภอบางปะอิน พระนครศรีอยุธยา 13160</p>
          <p className="text-sm mt-2 mb-1">โทร: 081-911-6293</p>
          <p className="text-sm">อีเมล: titirat_uehara@yahoo.co.jp</p>
          <div className="flex justify-center sm:justify-start gap-3 mt-4">
            <a href="#" target='_blank' rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full text-black hover:text-white bg-white hover:bg-black transition'>
              <Facebook className='w-7 h-7'/>
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full text-black hover:text-white bg-white hover:bg-black transition'>
              <Instagram className='w-7 h-7'/>
            </a>
            <a href="https://line.me/R/ti/p/~@wa2jkl" target='_blank' rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full text-black hover:text-white bg-white hover:bg-black transition'>
              <FaLine className='w-7 h-7'/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-white/20 mt-8 pt-4 text-center text-sm'>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
});

Footer.displayName = "Footer";

export default Footer;
