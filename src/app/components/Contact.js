"use client";
import { useState } from "react";
import Script from "next/script";

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
        "@context": "https://sechema.org",
        "@type": "Organization",
        "name": "ห้างหุ้นส่วนจํากัด อุเอะฮาระเทรดดิ้ง",
        "url": "https://name.vercel.app",
        "logo": "https://name.vercel.app/morita-group.png",
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
                    <option value="ข้อเสนอเเนะ">ข้อเสนอเเน</option>
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
            </form>
        </section>
    )
}