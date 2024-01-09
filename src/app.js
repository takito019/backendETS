import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//Importamos las rutas para usuarios
import authRoutes from "./routes/auth.routes.js";
//Importamos las rutas para productos
import productRoutes from "./routes/products.routes.js";

import computoRoutes from './routes/computo.routes.js';
import perifericosRoutes from './routes/perifericos.routes.js';
import electronicosRoutes from './routes/electronicos.routes.js';
import consumibleRoute from './routes/consumibles.routes.js';
import materialesRoute from './routes/materiales.routes.js'
import herramientasRoute from './routes/herramientas.routes.js'
import escolarRoute from './routes/escolar.routes.js'
import oficinaRoute from './routes/oficina.routes.js'
import papeleriaRoute from './routes/papeleria.routes.js'

const app = express();

app.use(cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost',
      'http://localhost/productos',
      'https://apiets.onrender.com',
      'https://inventarioets.onrender.com'
    ],
    credentials: true,
  }));
  
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Indicamos que el servidor utilice el objeto authRoutes
app.use("/api/", authRoutes);
app.use("/api/", productRoutes);
app.use("/api/", computoRoutes);
app.use("/api/", perifericosRoutes);
app.use("/api/",electronicosRoutes);
app.use("/api/",consumibleRoute);
app.use("/api/",materialesRoute);
app.use("/api/",herramientasRoute);
app.use("/api/",escolarRoute);
app.use("/api/",oficinaRoute);
app.use("/api/",papeleriaRoute);

export default app;
