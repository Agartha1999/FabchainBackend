require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const _ = require("lodash");
const { connectDB } = require("./config/db");


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());



// Conectar a la base de datos
connectDB();

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando! 🚀");
});

// Rutas
routes(app);

// Puerto de conexión
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
