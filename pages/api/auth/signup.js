import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';
import nodemailer from 'nodemailer';

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

export default async function handler(req, res) {
  await dbConnect();

  const { username, email, password, confirmPassword } = req.body;

  console.log("Received signup request:", req.body);

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    user = new User({ username, email, password, otp, otpExpires });
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Verify your email',
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Verify your OTP</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style="
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #ffffff;
            font-size: 14px;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              padding: 45px 30px 60px;
              background: #ffffff;
              background-image: url(https://i.ibb.co/dj7cT9z/seamless-gold-rhombus-grid-pattern-black-background-53876-97589.jpg);
              background-repeat: no-repeat;
              background-size: 800px 452px;
              background-position: top center;
              font-size: 14px;
              color: #434343;
            "
          >
            <header>
              <table style="width: 100%;">
                <tbody>
                  <tr style="height: 0;">
                    <td>
                      <img
                        alt=""
                        src="https://i.ibb.co/6158LJc/casus-white.png"
                        height="30px"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </header>
      
            <main>
              <div
                style="
                  margin: 0;
                  margin-top: 70px;
                  padding: 92px 30px 115px;
                  background: #ffffff;
                  border-radius: 30px;
                  text-align: center;
                "
              >
                <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                  <h1
                    style="
                      margin: 0;
                      font-size: 24px;
                      font-weight: 500;
                      color: #1f1f1f;
                    "
                  >
                    Your OTP
                  </h1>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-size: 16px;
                      font-weight: 500;
                    "
                  >
                    Hello,
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-weight: 500;
                      letter-spacing: 0.56px;
                    "
                  >
                    Thank you for choosing Ai DealsBajaar. Use the following OTP
                    to complete the procedure to change your email address. OTP is
                    valid for
                    <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                    Do not share this code with others, including Ai DealsBajaar
                    employees.
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 60px;
                      font-size: 40px;
                      font-weight: 600;
                      letter-spacing: 25px;
                      color: #808080;
                    "
                  >
                    ${otp}
                  </p>
                </div>
              </div>
      
              <p
                style="
                  max-width: 400px;
                  margin: 0 auto;
                  margin-top: 90px;
                  text-align: center;
                  font-weight: 500;
                  color: #8c8c8c;
                "
              >
                Need help? Ask at
                <a
                  href="mailto:aidealsbajaar@gmail.com"
                  style="color: #808080; text-decoration: none;"
                  >aidealsbajaar@gmail.com</a
                >
                or visit our
                <a
                  href=""
                  target="_blank"
                  style="color: #808080; text-decoration: none;"
                  >Help Center</a
                >
              </p>
            </main>
      
            <footer
              style="
                width: 100%;
                max-width: 490px;
                margin: 20px auto 0;
                text-align: center;
                border-top: 1px solid #e6ebf1;
              "
            >
              <p
                style="
                  margin: 0;
                  margin-top: 40px;
                  font-size: 16px;
                  font-weight: 600;
                  color: #434343;
                "
              >
              Ai DealsBajaar              </p>
              <p style="margin: 0; margin-top: 8px; color: #434343;">
                Address 540, City, State.
              </p>
              <p style="margin: 0; margin-top: 16px; color: #434343;">
                Copyright © 2025 Ai DealsBajaar. All rights reserved.
              </p>
            </footer>
          </div>
        </body>
      </html>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent' });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: error.message });
  }
}



// pages/api/auth/signup.js

// import dbConnect from '../../../lib/dbConnect';
// import User from '../../../lib/models/User';
// import nodemailer from 'nodemailer';

// const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// export default async function handler(req, res) {
//   await dbConnect();

//   const { username, email, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.status(400).json({ message: 'Passwords do not match' });
//   }

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const otp = generateOtp();
//     const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

//     user = new User({ username, email, password, otp, otpExpires });
//     await user.save();

//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: email,
//       subject: 'Verify your email',
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//           <title>Verify your OTP</title>
//           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
//         </head>
//         <body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
//           <div style="max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #ffffff;">
//             <header>
//               <table style="width: 100%;">
//                 <tbody>
//                   <tr style="height: 0;">
//                     <td>
//                       <img alt="" src="https://i.ibb.co/cwfy96W/synthseer.png" height="30px" />
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </header>
//             <main>
//               <div style="margin: 0; margin-top: 70px; padding: 92px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center;">
//                 <div style="width: 100%; max-width: 489px; margin: 0 auto;">
//                   <h1 style="margin: 0; font-size: 24px; font-weight: 500; color: #1f1f1f;">Your OTP</h1>
//                   <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500;">Hello,</p>
//                   <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px;">
//                     Thank you for choosing Casus. Use the following OTP to complete the procedure to change your email address. OTP is valid for
//                     <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>. Do not share this code with others, including Casus employees.
//                   </p>
//                   <p style="margin: 0; margin-top: 60px; font-size: 40px; font-weight: 600; letter-spacing: 25px; color: #9034ca;">
//                     ${otp}
//                   </p>
//                 </div>
//               </div>
//               <p style="max-width: 400px; margin: 0 auto; margin-top: 90px; text-align: center; font-weight: 500; color: #8c8c8c;">
//                 Need help? Ask at <a href="mailto:casus@gmail.com" style="color: #9034ca; text-decoration: none;">casus@gmail.com</a> or visit our
//                 <a href="" target="_blank" style="color: #9034ca; text-decoration: none;">Help Center</a>
//               </p>
//             </main>
//             <footer style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #e6ebf1;">
//               <p style="margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #434343;">CASUS</p>
//               <p style="margin: 0; margin-top: 8px; color: #434343;">Address 540, City, State.</p>
//               <p style="margin: 0; margin-top: 16px; color: #434343;">Copyright © 2025 Casus. All rights reserved.</p>
//             </footer>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'OTP sent' });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: error.message });
//   }
// }
