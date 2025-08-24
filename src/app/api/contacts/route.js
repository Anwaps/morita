import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // ตั้งค่า transporter (ใช้ Gmail เป็นตัวอย่าง)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // email บริษัท
                pass: process.env.EMAIL_PASS, // app password
            },
        });

        //เนื้อหาอีเมล
        const mailOption = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `📩 ติดต่อเรื่อง: ${subject}`,
            text: `
                ชื่อผู้ติดต่อ: ${name}
                อีเมล: ${email}
                เบอร์โทรศัพท์: ${phone || "-"}
                -----------------------------------------------
                ข้อความ:
                ${message}
            `,
        };

        await transporter.sendMail(mailOption);

        return new Response(JSON.stringify({ success: true}), {
            status: 200,
        });
    } catch (error) {
        console.log("Error sending email", error);
        return new Response(JSON.stringify({ success: false, error}), {
            status: 500,
        });
    }
}