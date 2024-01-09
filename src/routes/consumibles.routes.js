import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getConsumibles,
  createConsumible,
  getConsumible,
  deleteConsumible,
  editConsumible,
} from "../controllers/consumibles.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {consumiblesSchema} from '../schemas/consumibles.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/consumible', authRequired, getConsumibles);

//Agregar un producto
router.post('/consumible', authRequired, validateSchema(consumiblesSchema),createConsumible);

//Obtener un producto por id
router.get('/consumible/:id', authRequired, getConsumible);

//Eliminar un producto
router.delete('/consumible/:id', authRequired, deleteConsumible);

//Actualizar un producto
router.put('/consumible/:id', authRequired, editConsumible);

export default router;