import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getHerramientas,
  createHerramienta,
  getHerramienta,
  deleteHerramienta,
  editHerramienta,
} from "../controllers/herramientas.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {herramientasSchema} from '../schemas/herramientas.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/herramienta', authRequired, getHerramientas);

//Agregar un producto
router.post('/herramienta', authRequired, validateSchema(herramientasSchema),createHerramienta);

//Obtener un producto por id
router.get('/herramienta/:id', authRequired, getHerramienta);

//Eliminar un producto
router.delete('/herramienta/:id', authRequired, deleteHerramienta);

//Actualizar un producto
router.put('/herramienta/:id', authRequired, editHerramienta);

export default router;