"use client";
import { useState } from "react";
import Script from "next/script";
import { Facebook } from 'lucide-react';
import { FaLine } from "react-icons/fa6";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("กำลังส่ข้อความ...");
        try{
            const res = await fetch("/api/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            if(!res.ok) throw new Error("Network Error");
            setStatus("✅ ส่งข้อความเรียบร้อยแล้ว");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (err){
            setStatus("❌ เกิดข้อผิดพลาด กรุณาลองใหม่");
        }
    }

    

    // Json-LD schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ห้างหุ้นส่วนจํากัด สยามอุเอะฮาระเทรดดิ้ง",
        "url": "https://siamuehara.co.th/",
        "logo": "https://siamuehara.co.th/group-brand-logo.webp",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66 081-911-6293",
            "contactType": "customer service",
            "areaServed": "TH",
            "availableLanguage": "Thai"
        }
    };
    return (
        <section className="py-20 bg-gradient-to-r from-red-700 to-red-700 text-white">
            {/* JSON-LD Schema สำหรับ SEO */}
            <script
                id="json-ld-contact"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
                strategy="afterInteractive"
            />
            <div className="max-w-3xl mx-auto text-center mb-12 px-4">
                <h1 className="text-5xl font-bold mb-4">ติดต่อเรา</h1>
                <p className="text-lg mb-6">
                    ส่งข้อความหาทีมงานของเรา คุณสามารถสอบถามข้อมูลสินค้า บริการ หรือแจ้งปัญหาได้ที่นี่
                </p>
            </div>
            {/* Form Contact */}
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-2xl p-8 text-black shadow-lg space-y-4">
                <label htmlFor="name" className="sr-only">ชื่อ - สกุล</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="ชื่อ - นามสกุล"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    autoComplete="name"
                    required
                />
                <label htmlFor="email" className="sr-only">อีเมล</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="อีเมล"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    autoComplete="email"
                    required
                />
                <label htmlFor="phone" className="sr-only">เบอร์โทรศัพท์</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="เบอร์โทรศัพท์ (ไม่บังคับ)"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    autoComplete="phone"
                />
                <label htmlFor="subject" className="sr-only">หัวข้อ</label>
                <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                >
                    <option value="">-- เลือกหัวข้อที่ต้องการติดต่อ --</option>
                    <option value="สอบถามสินค้าเเละบริการ">สอบถามสินค้าเเละบริการ</option>
                    <option value="ขอใบเสนอราคา">ขอใบเสนอราคา</option>
                    <option value="เเจ้งปัญหา">เเจ้งปัญหา</option>
                    <option value="สมัครงาน">สมัครงาน</option>
                    <option value="ข้อเสนอเเนะ">ข้อเสนอเเนะ</option>
                </select>
                <label htmlFor="message" className="sr-only">ข้อความรายละเอียด</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="ข้อความรายละเอียด"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg h-32"
                    required
                />
                <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-white hover:outline-2 hover:outline-red-600 hover:text-black font-semibold transition duration-200 cursor-pointer">
                    ส่งข้อความ
                </button>
                {status && <p className="text-center mt-2 text-sm">{status}</p>}
                <h2 className="text-lg font-bold text-center mt-2">หรือช่องทางอื่น</h2>
                {/* Other Social Media */}
                <div className="flex justify-center items-center gap-3 mt-4">
                    <a href="https://www.facebook.com/share/1Fm9rEEWyX/?mibextid=wwXIfr" target='_blank' rel="noopener noreferrer" 
                        className='w-10 h-10 flex items-center justify-center rounded-full text-black hover:text-white bg-white hover:bg-black transition'>
                        <Facebook className='w-7 h-7' />
                    </a>
                    <a href="https://line.me/R/ti/p/~titiratu" target='_blank' rel="noopener noreferrer" 
                        className='w-10 h-10 flex items-center justify-center rounded-full text-black hover:text-white bg-white hover:bg-black transition'>
                        <FaLine className='w-7 h-7' />
                    </a>
                </div>
                <p className="text-md text-gray-500 mt-2 text-center">
                ข้อมูลที่คุณกรอกจะถูกใช้เพื่อการติดต่อกลับเท่านั้น
                และจะไม่ถูกเผยแพร่ต่อบุคคลที่สาม
                ใช้เพื่อการตอบกลับคำถาม/ข้อเสนอแนะ
                จะเก็บรักษาข้อมูลไว้อย่างปลอดภัย
                </p>
            </form>

            {/* Google Maps */}
            <div className="max-w-3xl mx-auto mt-12 px-4">
                <h2 className="text-2xl font-bold mb-4 text-center">เเผนที่ตั้งสำนักงาน</h2>
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d483.4841934199448!2d100.59529691339449!3d14.202181665733685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDEyJzA4LjEiTiAxMDDCsDM1JzQzLjciRQ!5e0!3m2!1sth!2sth!4v1756215242246!5m2!1sth!2sth"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}