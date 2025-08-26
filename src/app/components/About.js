import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function About() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-white to-white text-white px-6">
            {/* Company Title */}
            <h1 className="text-5xl font-bold mb-6 text-black">เกี่ยวกับเรา</h1>
            <h2 className="text-3xl font-bold mb-6 text-black">ห้างหุ้นส่วนจํากัด <span className="block sm:inline bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">สยามอุเอะฮาระเทรดดิ้ง</span></h2>
            <div className="max-w-2xl mb-6">
                <Card className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-red-700">
                            ประวัติบริษัท
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            เริ่มก่อตั้งเมื่อวันที่ 1 พฤษภาคม 2549 เป็นระยะเวลากว่า 17 ปี โดยมีวัตถุประสงค์นำเข้าสินค้า
                            จากผู้ผลิต/โรงงาน จากประเทศญี่ปุ่นให้กับบริษัท/ทีมงานช่างที่ต้องการใช้งานจากผู้ผลิต/โรงงาน
                            ประเทศญี่ปุ่น ประมาณกลางปี ค.ศ. 2021 ได้เริ่มนำเข้าชุดดับเพลิงอัตโนมัติ แบรนด์{" "}
                            <span className="font-semibold">Morita UG</span> (Automatic Fire Extinguisher System)
                            ให้กับบริษัททำขาย ติดตั้งและบำรุงรักษาชุดดับเพลิงอัตโนมัติ ให้กับกลุ่มบริษัทยุตสาหกรรมญี่ปุ่นในประเทศไทย
                            และปัจจุบันหุ้นส่วนจำกัด สยามอูเอะฮาระเทรดดิ้ง (Siam Uehara Trading Partnership Ltd.)
                            ได้รับแต่งตั้งจากบริษัท{" "}
                            <span className="font-semibold">Morita Miyata Corporation</span>
                            ประเทศญี่ปุ่นให้เป็น Authorized Distributors ประจำประเทศไทย
                        </p>
                    </CardContent>
                </Card>
            </div>
            <p className="text-lg max-w-3xl mb-12 text-black">
                บริษัทของเรามุ่งมั่นที่จะพัฒนาโซลูชันด้านความปลอดภัยและระบบดับเพลิง
                เพื่อตอบโจทย์บ้าน อาคาร และโรงงาน ด้วยมาตรฐานสากลและความเชื่อมั่นจากลูกค้าหลายองค์กร
            </p>


            <a href="#service" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-white hover:text-black hover:outline-red-600 hover:outline-2 outline transition">
                สินค้าเเละบริการของเรา
            </a>
        </section>
    )
}