import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getElectronicos,
  createElectronico,
  getElectronico,
  deleteElectronico,
  editElectronico,
} from "../controllers/electronicos.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {electronicosSchema} from '../schemas/electronicos.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/electronicos', authRequired, getElectronicos);

//Agregar un producto
router.post('/electronicos', authRequired, validateSchema(electronicosSchema),createElectronico);

//Obtener un producto por id
router.get('/electronicos/:id', authRequired, getElectronico);

//Eliminar un producto
router.delete('/electronicos/:id', authRequired, deleteElectronico);

//Actualizar un producto
router.put('/electronicos/:id', authRequired, editElectronico);

export default router;
