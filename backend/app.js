const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();  // Load environment variables

console.log("JWT_SECRET:", process.env.JWT_SECRET);  

app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: [
			"http://localhost:3000",
		],
		credentials: true,
	})
);


mongoose.connect("mongodb://localhost:27017/BloodBond", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
	console.log(e ? e : "Connected successfully to database");
});
let otpStore = {};

// Generate OTP function
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// Send OTP via email using Nodemailer
const sendOTPEmail = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
      pass: process.env.EMAIL_PASS || 'your-password'         // Replace with your email password
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: email,
    subject: 'OTP for BloodLink Verification',
    text: `Your OTP is: ${otp}`
  };

  await transporter.sendMail(mailOptions);
};

// Route for Signup or Login (Send OTP)
app.post('/auth/signup', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  // Store OTP (add expiry logic if needed)
  otpStore[email] = otp;

  // Send OTP via email
  try {
    await sendOTPEmail(email, otp);
    res.json({ message: 'OTP sent to your email. Please verify to complete sign-up.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP. Please try again.' });
  }
});

// OTP Verification Route
app.post('/auth/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  // Check if OTP matches
  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email]; // Remove OTP after successful verification
    res.json({ message: 'OTP verified successfully, login/sign-up complete.' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://localhost:${port}`)
);