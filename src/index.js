import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriaRoutes from "./routers/categorias.routes.js";


const app = express();

dotenv.config();

const PORT = process.env.PORT;

conectarDB();

app.use("/categoria", categoriaRoutes);

app.listen(PORT, () => {
  console.log(`Ultra Mega Super servidor corriendo en el puerto ${PORT}`);
});
