import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular password
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.GMAIL_USER, // Where you want to receive emails
//       replyTo: email,
//       subject: 'New Contact Form Submission',
//       text: `Message from: ${email}\n\n${message}`,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>From:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email' });
//   }
// }

export async function POST(req) {  
    try {
        // const { email, message } = req.body;
        const {
            email, message
          } = await req.json();

        console.log(email, message)

        if (!email || !message) {
            return new Response(JSON.stringify({ error: "Email and message are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
          }
    
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular password
          },
        });
    
        const mailOptions = {
          from: email,
          to: process.env.GMAIL_USER, // Where you want to receive emails
          replyTo: email,
          subject: 'New Contact Form Submission',
          text: `Message from: ${email}\n\n${message}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        };
    
        await transporter.sendMail(mailOptions);
        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
      } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
      }
}