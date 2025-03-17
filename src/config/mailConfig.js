const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // Asegura que se utilizará TLS
  auth: {
    user: "vloachain@vloachain.app",
    pass: "vloachain", // Reemplaza con la contraseña correcta de tu cuenta
   
  },
});

module.exports = transporter;
