import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email || 'somesh.otpl@gmail.com',
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    console.log(mailOptions)
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' });
  }
}



// -----------------------------------------------------------------------------------------------------

// import { Resend } from 'resend';

// // Log the environment variables for debugging
// console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
// console.log('FROM_EMAIL:', process.env.FROM_EMAIL);

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ['someshsaini@gmail.com'], // Specify a valid recipient
//       subject: 'Hello world',
//       react: (
//         <>
//           <p>Email Body</p>
//         </>
//       ),
//     });

//     if (error) {
//       console.error('Error sending email:', error);
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     console.error('Exception caught:', error);
//     return Response.json({ error }, { status: 500 });
//   }
// }



// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const  fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: [''],
//       subject: 'Hello world',
//       react: 
//       <>
//         <p>Email Body</p>
//       </>,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
