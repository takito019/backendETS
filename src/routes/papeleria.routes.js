import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getPapelerias,
  createPapeleria,
  getPapeleria,
  deletePapeleria,
  editPapeleria,
} from "../controllers/papeleria.controller.js";

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {papeleriaSchema} from '../schemas/papeleria.schemas.js';

const router = Router();

//Obtener todos los productos
router.get('/papeleria', authRequired, getPapelerias);

//Agregar un producto
router.post('/papeleria', authRequired, validateSchema(papeleriaSchema),createPapeleria);

//Obtener un producto por id
router.get('/papeleria/:id', authRequired, getPapeleria);

//Eliminar un producto
router.delete('/papeleria/:id', authRequired, deletePapeleria);

//Actualizar un producto
router.put('/papeleria/:id', authRequired, editPapeleria);

export default router;
